import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import axios from "axios";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function createImage(
  userPrompt: string,
  imageUrl: string,
  outputFilePath: string,
) {
  const r = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });
  console.log("middle");

  const base64Image = Buffer.from(r.data).toString("base64");
  console.log("base 64 created");

  const prompt = [
    {
      text: userPrompt,
    },
    {
      inlineData: {
        mimeType: "image/png",
        data: base64Image,
      },
    },
  ];
  console.log("5");
  let response;
  try {
    response = await ai.models.generateContent({
      model: "gemini-3.1-flash-image",
      contents: prompt,
    });
    console.log("created");
    console.log(response);
  } catch (error) {
    console.error(error);
  }

  const parts = response!.candidates?.[0]?.content?.parts!;
  for (const part of parts) {
    if (part.text) {
      console.log(part.text);
    } else if (part.inlineData) {
      const imageData = part.inlineData.data!;
      const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync(outputFilePath, buffer);
      console.log("image saved as gemini-native-image.png");
    }
  }
}
