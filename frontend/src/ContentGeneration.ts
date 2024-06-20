import * as fs from "fs";

type Section = {
	title: string;
	content: Array<{ type: string; text: string }>;
};

type JsonData = {
	content: Section[];
};

const HEADER1_PREFIX = "# ";
const HEADER2_PREFIX = "## ";
const HEADER3_PREFIX = "### ";
const LIST_ITEM_PREFIX = "* ";
const UL_ITEM_PREFIX = "- ";

/**
 * Helper function to push the accumulated ul content to the section and reset the ul content
 * @param section - The section to which the ul content should be added
 * @param ulContent - The accumulated ul content
 */
function pushUlContent(section: Section, ulContent: string) {
	if (ulContent) {
		section.content.push({ type: "ul", text: ulContent });
	}
}

export function markdownToJson(markdownContent: string): string {
	const sections = markdownContent
		.split("---")
		.map((section) => section.trim())
		.filter(Boolean);
	const jsonData: JsonData = { content: [] };

	sections.forEach((sectionContent, index) => {
		const lines = sectionContent
			.split("\n")
			.map((line) => line.trim())
			.filter(Boolean);
		const section: Section = {
			title: `section ${index + 1}`,
			content: [],
		};

		let ulContent = ""; // To store concatenated '- ' lines
		let inUlSequence = false; // Flag to indicate if we are in a '- ' sequence

		lines.forEach((line) => {
			if (line.startsWith(HEADER1_PREFIX)) {
				pushUlContent(section, ulContent);
				ulContent = "";
				inUlSequence = false;
				section.content.push({ type: "h1", text: line.substring(HEADER1_PREFIX.length) });
			} else if (line.startsWith(HEADER2_PREFIX)) {
				pushUlContent(section, ulContent);
				ulContent = "";
				inUlSequence = false;
				section.content.push({ type: "h2", text: line.substring(HEADER2_PREFIX.length) });
			} else if (line.startsWith(HEADER3_PREFIX)) {
				pushUlContent(section, ulContent);
				ulContent = "";
				inUlSequence = false;
				section.content.push({ type: "h3", text: line.substring(HEADER3_PREFIX.length) });
			} else if (line.startsWith(LIST_ITEM_PREFIX)) {
				pushUlContent(section, ulContent);
				ulContent = "";
				inUlSequence = false;
				section.content.push({ type: "li", text: line.substring(LIST_ITEM_PREFIX.length) });
			} else if (line.startsWith(UL_ITEM_PREFIX)) {
				if (inUlSequence) {
					ulContent += `\n${UL_ITEM_PREFIX}${line.substring(UL_ITEM_PREFIX.length)}`;
				} else {
					ulContent = `${UL_ITEM_PREFIX}${line.substring(UL_ITEM_PREFIX.length)}`;
					inUlSequence = true;
				}
			} else {
				pushUlContent(section, ulContent);
				ulContent = "";
				inUlSequence = false;
				section.content.push({ type: "p", text: line });
			}
		});

		// Push any remaining ul sequence at the end of the section
		pushUlContent(section, ulContent);

		jsonData.content.push(section);
	});

	return JSON.stringify(jsonData, null, 4);
}
