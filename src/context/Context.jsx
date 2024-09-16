import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await run(input);
      setResultData(result);
      setShowResult(true);
    } catch (error) {
      console.error("Error during fetchData:", error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    fetchData,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
