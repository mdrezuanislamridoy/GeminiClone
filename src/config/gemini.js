/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyCHywJxnGOBHlCcn_R2gcVmHRjiSAuKk_Y";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    console.log("Running with prompt:", prompt); // Debugging statement
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const userMessage = prompt;
    const result = await chatSession.sendMessage(userMessage);
    console.log("API result:", result); // Debugging statement

    return result.response.text();
  } catch (error) {
    console.error("Error during API call:", error);
    throw error; // Re-throw error to handle it in fetchData
  }
}

export default run;
