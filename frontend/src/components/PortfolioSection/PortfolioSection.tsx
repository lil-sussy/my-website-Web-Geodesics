import React, { useState } from "react";
import styles from "./PortfolioSection.module.scss";
import Button from "../Button/Button";

// Define the props type
type FeaturesSectionProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ content }) => {
	const [visible, setVisible] = useState(false);

	let i = 0;
	return (
		<div className={styles.featuresSection}>
			<div className={styles.titleContainer}>
				<div className={styles.mainTitle}>{content.content[i].text}</div>
				<div className={styles.subTitle}>{content.content[++i].text}</div>
			</div>
			<div className={styles.featureContainer}>
				<div className={styles.featureColumn}>
					<img className={styles.placeholderImage} src="./images/PortfolioSection/DRK.png" alt="Unofficial Healthy Gamer GG AI Search Engine screenshot on desktop and mobile, featuring user-friendly design, AI integration, data analysis, full stack developer, UX, UI, SEO expert, and web designer functionalities." />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>{content.content[++i].text}</div>
							<div className={styles.featureDescription}>{content.content[++i].text}</div>
						</div>
						<Button style="secondary">{content.content[++i].text}</Button>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<img className={styles.placeholderImage} src="./images/PortfolioSection/AIAgent.png" alt="AI agents and complex prompt engineering illustration with code snippets, AI integration, data analysis, full stack developer, UX, UI, SEO expert, and web designer techniques." />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>{content.content[++i].text}</div>
							<div className={styles.featureDescription}>{content.content[++i].text}</div>
						</div>
						<Button style="secondary">{content.content[++i].text}</Button>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<img className={styles.placeholderImage} src="./images/PortfolioSection/Demetrius.png" alt="Screenshot of Demetrius AI chatbot interface, showcasing large vector store, prompt engineering, AI integration, data analysis, full stack developer, UX, UI, SEO expert, and web designer capabilities." />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>{content.content[++i].text}</div>
							<div className={styles.featureDescription}>{content.content[++i].text}</div>
						</div>
						<Button style="secondary">{content.content[++i].text}</Button>
					</div>
				</div>
				{visible ? (
					<>
						<div className={styles.featureColumn}>
							<img className={styles.placeholderImage} src="./images/PortfolioSection/NeptuneProject.png" alt="Neptune Project user interface screenshot, emphasizing seamless and fluid frontend, AI integration, data analysis, full stack developer, UX, UI, SEO expert, and web designer experience for writers." />
							<div className={styles.content}>
								<div className={styles.sectionTitle}>
									<div className={styles.featureTitle}>{content.content[++i].text}</div>
									<div className={styles.featureDescription}>{content.content[++i].text}</div>
								</div>
								<Button style="secondary">{content.content[++i].text}</Button>
							</div>
						</div>
						<div className={styles.featureColumn}>
							<img className={styles.cuteSittingImage} src="./images/assets-sitting.png" alt="Corporate design asset featuring a professional woman in a black suit sitting confidently." />
							<div className={styles.placeholderImage} />
							<div className={styles.content}>
								<div className={styles.sectionTitle}>
									<div className={styles.featureTitle}>{content.content[++i].text}</div>
									<div className={styles.featureDescription}>{content.content[++i].text}</div>
								</div>
								<Button style="secondary">{content.content[++i].text}</Button>
							</div>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
			<div
				onClick={() => {
					setVisible(true);
				}}
				className={styles.actions}
			>
				<Button style="primary">{content.content[content.content.length - 1].text}</Button>
			</div>
		</div>
	);
};

export default FeaturesSection;
