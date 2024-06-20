import React, { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
// @ts-ignore
import { interpolate } from "flubber";
import { useAnimation } from "../AnimationContext";
import "./PotatoShape.scss";

export type PotatoShape = {
	index: number;
	color: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	startPath: string;
	endPath: string;
};

type PotatoShapeProps = {
	potato: PotatoShape;
	duration: number;
	advancement: number;
	width: number;
	height: number;
};

const PotatoShape: React.FC<PotatoShapeProps> = ({ potato, duration, advancement, width, height }) => {
	const { cursorPosition } = useAnimation();
	const nodeRef = useRef<HTMLDivElement>(null);
	const [inProp, setInProp] = useState(false);
	const [opacity, setOpacity] = useState(0);
	const requestRef = useRef<number | null>(null);

	useEffect(() => {
		setInProp(true);
		const distance = Math.abs(advancement - potato.index);
		setOpacity(Math.max(1 - distance, 0) * 0.4);
	}, [advancement]);

	const remToPx = (rem: string | undefined) => {
		if (!rem) return 0;
		const fontSize = getComputedStyle(document.documentElement).fontSize;
		return parseFloat(rem) * parseFloat(fontSize);
	};

	const pxToRem = (px: number) => {
		const fontSize = getComputedStyle(document.documentElement).fontSize;
		return px / parseFloat(fontSize);
	};

	const calculateFleeingPosition = (potato: PotatoShape, cursorPosition: { x: number; y: number }) => {
		const topPx = remToPx(potato.top);
		const leftPx = remToPx(potato.left);
		const potatoCenter = {
			x: leftPx + width / 2,
			y: topPx + height / 2,
		};

		const directionVector = {
			x: potatoCenter.x - cursorPosition.x,
			y: potatoCenter.y - cursorPosition.y,
		};

		const length = Math.sqrt(directionVector.x ** 2 + directionVector.y ** 2);
		const normalizedVector = {
			x: directionVector.x / length,
			y: directionVector.y / length,
		};

		const fleeDistance = 20; // Reduced distance to flee
		return {
			top: `${pxToRem(topPx + normalizedVector.y * fleeDistance)}rem`,
			left: `${pxToRem(leftPx + normalizedVector.x * fleeDistance)}rem`,
			bottom: undefined,
			right: undefined,
		};
	};

	useEffect(() => {
		const node = nodeRef.current;

		if (!node) return;

		const parent = node.parentElement;
		if (!parent) return;

		const parentRect = parent.getBoundingClientRect();
		const parentWidth = parentRect.width;
		const parentHeight = parentRect.height;

		// Convert right/bottom to left/top if necessary
		if (potato.right !== undefined) {
			const rightPx = remToPx(potato.right);
			potato.left = pxToRem(parentWidth - rightPx - width) + "rem";
			potato.right = undefined;
		}
		if (potato.bottom !== undefined) {
			const bottomPx = remToPx(potato.bottom);
			potato.top = pxToRem(parentHeight - bottomPx - height) + "rem";
			potato.bottom = undefined;
		}

		const updatePosition = () => {
			const newPosition = calculateFleeingPosition(potato, cursorPosition);

			node.style.top = newPosition.top;
			node.style.left = newPosition.left;

			requestRef.current = requestAnimationFrame(updatePosition);
		};

		requestRef.current = requestAnimationFrame(updatePosition);

		return () => {
			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, [cursorPosition, potato, width, height]);

	if (opacity === 0) return <></>;
	// const interpolator = interpolate(potato.startPath, potato.endPath);

	return (
		<Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
			{(state: string) => (
				<div
					ref={nodeRef}
					className="potato-wrapper"
					style={{
						color: potato.color,
						top: potato.top,
						left: potato.left,
					}}
				>
					<svg viewBox="0 0 1500 900" width={width} height={height} className="potato-shape" style={{ opacity }}>
						<path d={potato.startPath} fillRule="evenodd" clipRule="evenodd" />
						{/* <path d={interpolator(state === "entered" ? 1 : 0)} fillRule="evenodd" clipRule="evenodd" /> */}
					</svg>
				</div>
			)}
		</Transition>
	);
};

export default PotatoShape;
