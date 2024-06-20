import React from "react";
import styles from "./FeaturesSection.module.scss";
import Button from "../Button/Button";
import Markdown from "markdown-to-jsx";

// Define the props type
type FeaturesSectionProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ content }) => {
	let i = 0;
	return (
		<div className={styles.featuresSection}>
			<div className={styles.titleContainer}>
				<div className={styles.mainTitle}>{content.content[i].text}</div>
				<div className={styles.subTitle}>{content.content[++i].text}</div>
			</div>
			<div className={styles.featureContainer}>
				<div className={styles.featureColumn}>
					<img className={styles.cuteSittingImage} src="./images/assets-sitting.png" alt="Corporate design asset featuring a professional woman in a black suit sitting confidently." />
					<img className={styles.placeholderImage} src="./images/FeaturesSection/PromtpEngineering.png" alt="Illustration of a robot using ChatGPT, highlighting AI technology, prompt engineering, and advanced natural language processing. AI generated image" />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>{content.content[++i].text}</div>
							<div className={styles.featureDescription}>
								<Markdown>{content.content[++i].text}</Markdown>
								<Markdown>{content.content[++i].text}</Markdown>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<img className={styles.placeholderImage} src="./images/FeaturesSection/AIAgent.png" alt="Illustration of AI and human collaboration in a tech environment, showcasing AI integration, data analysis, and full stack development and AI agents developement. AI generated image" />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>
								<Markdown>{content.content[++i].text}</Markdown>
							</div>
							<div className={styles.featureDescription}>
								<Markdown>{content.content[++i].text}</Markdown>
								<Markdown>{content.content[++i].text}</Markdown>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<img className={styles.placeholderImage} src="./images/FeaturesSection/DataAnalysis.png" alt="Vector illustration of big data analysis process, demonstrating data science, machine learning, and data visualization techniques. AI generated image" />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>
								<Markdown>{content.content[++i].text}</Markdown>
							</div>
							<div className={styles.featureDescription}>
								<Markdown>{content.content[++i].text}</Markdown>
								<Markdown>{content.content[++i].text}</Markdown>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<img className={styles.cuteSittingImage} src="./images/assets-sitting.png" alt="Corporate design asset featuring a professional woman in a black suit sitting confidently." />
					<img className={styles.placeholderImage} src="./images/FeaturesSection/AIIntegration.png" alt="Illustration of an AI robotic hand holding a coin, symbolizing AI technology, machine learning, and futuristic innovation. AI generated" />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>
								<Markdown>{content.content[++i].text}</Markdown>
							</div>
							<div className={styles.featureDescription}>
								<Markdown>{content.content[++i].text}</Markdown>
								<Markdown>{content.content[++i].text}</Markdown>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.actions}>
				<Button style="primary">{content.content[++i].text}</Button>
				<Button style="secondary">{content.content[++i].text}</Button>
			</div>
		</div>
	);
};

export default FeaturesSection;
