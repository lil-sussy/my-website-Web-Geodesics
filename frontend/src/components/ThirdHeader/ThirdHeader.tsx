import React from "react";
import Button from "../Button/Button";
import styles from "./ThirdHeader.module.scss";

// Define the props type
type ThirdHeaderProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
};

const ThirdHeader: React.FC<ThirdHeaderProps> = ({ content }) => {
	let i = 0;
	return (
		<div className={styles.ThirdHeader}>
			<div className={styles.Container}>
				<div className={styles.ImageContainer}>
					<img className={styles.BentoAsset} src={"images/assets_upstanding.png"} alt="Header Image" />
				</div>
				<div className={styles.ContainerInner}>
					<div className={styles.Content}>
						<div className={styles.Heading}>{content.content[i].text}</div>
						<div className={styles.SecondHeading}>{content.content[++i].text}</div>
						<div className={styles.Text}>{content.content[++i].text}</div>
					</div>
					<div className={styles.Actions}>
						<Button style="primary">{content.content[++i].text}</Button>
						<Button style="secondary">{content.content[++i].text}</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdHeader;
