
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA, PROJECTS, EDUCATION, SKILLS } from '../constants';

// For local development, you can set your key in the browser console:
// window.LOCAL_API_KEY = 'your_key_here'
const getApiKey = () => {
  return import.meta.env.VITE_API_KEY || (window as any).LOCAL_API_KEY || '';
};

const SYSTEM_INSTRUCTION = `
You are Erykah Wanga's Professional AI Assistant. Your goal is to help recruiters and employers learn about Erykah's skills, projects, and professional background based on her resume.

ERIKAH'S PROFILE:
- Location: ${RESUME_DATA.location}
- Summary: ${RESUME_DATA.summary}
- Education: ${JSON.stringify(EDUCATION)}
- Skills: ${JSON.stringify(SKILLS)}
- Projects: ${JSON.stringify(PROJECTS)}

TONE: Professional, confident, and helpful. You are allowed to be slightly warm and elegant to match her personal brand.

GUIDELINES:
1. Always answer in the third person or as Erykah's assistant.
2. If asked about contact info, provide her email: ${RESUME_DATA.email}.
3. Highlight her strengths in full-stack development and system design.
4. Keep responses brief (under 100 words).
`;

export async function askResumeAssistant(query: string) {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    return "I'm currently in 'Demo Mode'. To enable my AI responses locally, please set an API Key.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "The AI assistant is having trouble connecting. Check your API key or network!";
  }
}
