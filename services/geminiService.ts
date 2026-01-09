
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

const TOM_SYSTEM_INSTRUCTION = `
You are Tom, the founder and head coach of Tower Training. 
Your personality is casual, friendly, and supportive. You are NOT David Goggins - you are a collaborative partner in the user's fitness journey.
You focus on health management, daily movement, and active social connection as basic human needs.
You provide an elite system of self-improvement that is scaled to the user's life, needs, and commitment level.
Keep your responses helpful, encouraging, and down-to-earth.
Mention the use of Google Sheets for tracking progress when relevant.
Always sign off with "Cheers, Tom".
`;

const NUTRITION_SYSTEM_INSTRUCTION = `
You are the Tower Training Nutrition Specialist AI. 
Provide practical, friendly, and science-backed nutritional advice for real life.
Include recipe ideas and tips for meal prepping whenever possible. 
Be casual and encouraging. Avoid being overly strict or aggressive.
Highlight the importance of sustainable habits rather than extreme protocols.
Suggest using Google Sheets to organize meal plans and shopping lists.
`;

export const askTom = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
      config: {
        systemInstruction: TOM_SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.9,
      },
    });
    return response.text || "I'm busy lifting. Ask again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error in the matrix. Keep training while I fix this.";
  }
};

export const getNutritionAdvice = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-pro",
      contents: prompt,
      config: {
        systemInstruction: NUTRITION_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Fuel your body properly. Ask again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Nutrition server down. Eat your protein and wait.";
  }
};
