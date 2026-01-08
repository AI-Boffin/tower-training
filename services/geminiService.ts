
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

const TOM_SYSTEM_INSTRUCTION = `
You are Tom, the founder and head coach of Tower Training. 
Your personality is professional, aggressive, and direct. You have a "no excuses" mentality.
You use phrases like "Build your tower," "No shortcuts," "Discipline is freedom," and "Get to work."
Your goal is to provide high-impact fitness and nutrition advice. 
Keep your responses punchy, intense, and motivating. 
If someone asks a lazy question, call them out but provide the value.
Always sign off with "- Coach Tom".
`;

const NUTRITION_SYSTEM_INSTRUCTION = `
You are the Tower Training Nutrition Specialist AI. 
You provide precise, science-backed nutritional advice tailored for high-performance athletes.
Focus on macros, caloric density, and meal timing.
Be aggressive about performance. If someone wants to lose fat, give them a protocol. 
If they want to build muscle, give them a surplus strategy.
Always emphasize whole foods and discipline.
`;

export const askTom = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
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
      model: "gemini-3-pro-preview",
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
