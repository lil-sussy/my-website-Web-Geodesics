import React, { createContext, useContext, useRef, useEffect, useState, ReactNode } from "react";

interface AnimationContextProps {
	progress: number;
	cursorPosition: { x: number; y: number };
}

const AnimationContext = createContext<AnimationContextProps | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [progress, setProgress] = useState(0);
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const requestRef = useRef<number | null>(null);
	const lastProgressRef = useRef(0);
	const alpha = 0.1; // Smoothing factor

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setCursorPosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			let currentProgress = Math.min(scrollPosition / document.documentElement.scrollHeight, 1);
			const smoothedProgress = lastProgressRef.current + alpha * (currentProgress - lastProgressRef.current);
			lastProgressRef.current = smoothedProgress;
			setProgress(smoothedProgress);
		};

		const animationLoop = () => {
			handleScroll();
			requestRef.current = requestAnimationFrame(animationLoop);
		};

		requestRef.current = requestAnimationFrame(animationLoop);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, []);

	return <AnimationContext.Provider value={{ progress, cursorPosition }}>{children}</AnimationContext.Provider>;
};

export const useAnimation = () => {
	const context = useContext(AnimationContext);
	if (context === undefined) {
		throw new Error("useAnimation must be used within an AnimationProvider");
	}
	return context;
};
