require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function getGeminiResponse(userMessage) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: userMessage,
    });

    console.log(response);

    return response.text;
  } catch (error) {
    console.error("Gemini Error:");
    console.error(error);

    return "Sorry! AI is not available right now.";
  }
}

module.exports = {
  getGeminiResponse,
};
