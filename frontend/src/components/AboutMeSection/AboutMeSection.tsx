import React from "react";
import styles from "./AboutMeSection.module.scss";
import Button from "../Button/Button";
import Markdown from "markdown-to-jsx";

// Define the props type
type AboutMeSectionProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
};

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ content }) => {
	let i = 0;
	return (
		<div className={styles.aboutMeSection}>
			<div className={styles.pictureOfMeSide}>
				<img className={styles.womanPhotograph1} src="./images/picture-of-me.png" alt="22-year-old non-binary male living in Paris, a French freelancer specializing in AI agent development and prompt engineering." />
				<div className={styles.name}>
					<div className={styles.yanRegojo}>Yan Regojo</div>
					<Button style="secondary">{content.content[i].text}</Button>
					<img className={styles.linkedin} src="./images/github.svg" alt="Github button" />
					<div className={styles.link}></div>
				</div>
			</div>
			<div className={styles.bentoLayout}>
				<div className={styles.bentoTitle}>
					<div className={styles.aboutMe}>{content.content[++i].text}</div>
					<div className={styles.myWork}>{content.content[++i].text}</div>
				</div>
				<div className={styles.bentoContainer}>
					<div className={styles.bentoDescription}>
						<div className={styles.description}>
							<div>{content.content[++i].text}</div>
							<div>{content.content[++i].text}</div>
							<div>{content.content[++i].text}</div>
							<div>{content.content[++i].text}</div>
						</div>
					</div>
					<div className={styles.bentoSideIcons}>
						<img className={styles.figma} src="./images/chatgpt.png" alt="chatgpt" />
						<img className={styles.midjourney} src="./images/langchain.png" alt="langchain" />
						<img className={styles.chatgpt} src="./images/tensorflow.png" alt="tensorflow" />
						<img className={styles.photoshop} src="./images/django.png" alt="django" />
						<img className={styles.photoshop} src="./images/react.png" alt="react" />
					</div>
					<img className={styles.bentoAsset} src="images/assets_upstanding.png" alt="asset of a woman standing proud" />
					<div className={styles.assetSideContainer}>
						<div className={styles.bentoMissionText}>
							<div className={styles.missionText}>
								<div>{content.content[++i].text}</div>
								<div>{content.content[++i].text}</div>
							</div>
						</div>
						<div className={styles.bentoModernText}>
							<div className={styles.modernText}>
								<Markdown>{content.content[++i].text}</Markdown>
								<Markdown>{content.content[++i].text}</Markdown>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.bentoContainerCenter}>
					<div className={styles.bentConnectText}>
						<div className={styles.connectText}>
							<div>{content.content[++i].text}</div>
							<div>{content.content[++i].text}</div>
						</div>
					</div>
					<div className={styles.actions}>
						<img className={styles.linkedin} src="./images/linkedin.png" alt="LinkedIn button" />
						<Button style="primary">{content.content[++i].text}</Button>
					</div>
				</div>
				<div className={styles.bentoLast}>
					<div className={styles.lastText}>
						<div>{content.content[++i].text}</div>
						<div>{content.content[++i].text}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMeSection;
