
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getWorkshopAdvice = async (userBackground: string) => {
  if (!process.env.API_KEY) return null;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User background: "${userBackground}". Based on the AI workshop program (Session 1: Prompt & Context Engineering; Session 2 Labs: "Vibe Coding & App Development" or "Studying & Research with AI"), give a short, punchy 2-sentence recommendation for which lab they should choose.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            path: { type: Type.STRING, description: "Recommended lab title" },
            reason: { type: Type.STRING, description: "Personalized reason" }
          },
          required: ["path", "reason"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
