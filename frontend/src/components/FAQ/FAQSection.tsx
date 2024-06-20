import React from "react";
import { Collapse, Divider, Typography } from "antd";
import Button from "../Button/Button";
import { RightOutlined } from "@ant-design/icons";
import styles from "./FAQSection.module.scss";
import { CollapseProps } from "antd/lib/collapse";

import "./Accordion.scss";
const { Panel } = Collapse;

// Define the props type
type FaqSectionProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
};

const FaqSection: React.FC<FaqSectionProps> = ({ content }) => {
	let i = 0;

	const items: CollapseProps["items"] = [
	];

  const threshold = 3;
	for (let j = threshold; j < content.content.length -1; j += 2) {
    items.push({
			key: j.toString(),
			label: content.content[j].text,
			children: (
				<div className={styles.answer}>
					<div className={styles.answerdiv}>{content.content[j + 1].text}</div>
				</div>
			),
		});
  }

	return (
		<div className={styles.faqSection}>
			<div className={styles.container}>
				<div className={styles.sectionTitle}>
					<div className={styles.content}>
						<div className={styles.title}>{content.content[i].text}</div>
						<div className={styles.subtitle}>{content.content[++i].text}</div>
						<Button style="primary">{content.content[++i].text}</Button>
					</div>
				</div>
				<div className={styles.accordion}>
					<Collapse items={items} accordion defaultActiveKey={["1"]} expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0} />} className={styles.accordion} />
				</div>
			</div>
		</div>
	);
};

export default FaqSection;
