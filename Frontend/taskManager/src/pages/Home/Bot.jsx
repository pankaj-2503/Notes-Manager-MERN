import React from "react";
import ChatBot from "react-chatbotify";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {API_KEY} from "../../utils/constants";



const Bot = () => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  async function run(prompt) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
    // if(prompt.length===1){
    //     return "Thanks!"
    // }
    const result = await model.generateContent(prompt);
    const response = await result.response; 
    console.log(response);
    const text = response.text();
    return text;
  }

  const flow = {
    start: {
      message: "Hello, I am sentient now, talk to me!",
      path: "model_loop",
    },
    model_loop: {
      message: async (params) => {
        return await run(params.userInput);
      },
      path: "model_loop"
    },
  }
return (
    <ChatBot flow={flow}/>
  );
};

export default Bot;