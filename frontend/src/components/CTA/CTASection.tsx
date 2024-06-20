import React from "react";
import Button from "../Button/Button";
import styles from "./CTASection.module.scss";
import { Input } from "antd";
import { MailFilled } from "@ant-design/icons";

// Define the props type
type Cta7Props = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
};

const Cta7: React.FC<Cta7Props> = ({ content }) => {
	let i = 0;
	return (
		<div className={styles.ctaContainer}>
			<div className={styles.ctaSection}>
				<div className={styles.ctaContent}>
					<div className={styles.ctaRow}>
						<div className={styles.ctaHeading}>{content.content[i].text}</div>
						<div className={styles.ctaText}>{content.content[++i].text}</div>
					</div>
				</div>
				<div className={styles.ctaActions}>
					<Button style="primary">{content.content[++i].text}</Button>
					<Button style="secondary">{content.content[++i].text}</Button>
				</div>
			</div>
			<div className={styles.ctaSection}>
				<div className={styles.frameContainer}>
					<div className={styles.ctaContent}>
						<div className={styles.ctaRow}>
							<div className={styles.ctaHeading}>{content.content[++i].text}</div>
							<div className={styles.ctaText}>{content.content[++i].text}</div>
						</div>
					</div>
					<div className={styles.frameContainer}>
						<div className={styles.ctaActions}>
							<Input size="large" placeholder={content.content[++i].text} prefix={<MailFilled />} />
							<Button style="primary">{content.content[++i].text}</Button>
						</div>
						<div className={styles.ctaFooterText}>{content.content[++i].text}</div>
					</div>
				</div>
				<img className={styles.ctaImage} src="./images/assets_upstanding.png" alt="Bento Asset" />
			</div>
		</div>
	);
};

export default Cta7;
