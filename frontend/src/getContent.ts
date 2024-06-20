import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { markdownToJson } from "../../app/ContentGeneration";

const getContent = async (req: NextApiRequest, res: NextApiResponse) => {
	const { locale } = req.query;

	if (locale !== "en" && locale !== "fr") {
		return res.status(400).json({ error: "Invalid locale" });
	}

  // Define the paths for the markdown and json files for both languages
  const markdownFilePathEN = path.resolve("./WebsiteContentEN.md");
  const jsonFilePathEN = path.resolve("./content_en.json");
  const markdownFilePathFR = path.resolve("./WebsiteContentFR.md");
  const jsonFilePathFR = path.resolve("./content_fr.json");

  // Check and generate English JSON file if it doesn't exist
  if (!fs.existsSync(jsonFilePathEN)) {
    const markdownContentEN = fs.readFileSync(markdownFilePathEN, "utf8");
    const jsonContentEN = markdownToJson(markdownContentEN);
    fs.writeFileSync(jsonFilePathEN, jsonContentEN, "utf8");
  }

  // Check and generate French JSON file if it doesn't exist
  if (!fs.existsSync(jsonFilePathFR)) {
    const markdownContentFR = fs.readFileSync(markdownFilePathFR, "utf8");
    const jsonContentFR = markdownToJson(markdownContentFR);
    fs.writeFileSync(jsonFilePathFR, jsonContentFR, "utf8");
  }

  // Load the appropriate JSON content
  const jsonDataFR = JSON.parse(fs.readFileSync(jsonFilePathFR, "utf8"));
  const jsonDataEN = JSON.parse(fs.readFileSync(jsonFilePathEN, "utf8"));
  res.status(200).json({ fr: jsonDataFR, en: jsonDataEN });
};

export default getContent;
