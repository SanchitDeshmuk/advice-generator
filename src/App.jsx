import { useEffect, useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const URL = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const resp = await axios.get(URL);
      setAdvice(resp.data.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }, [URL]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container relative bg-center bg-[url('https://images.unsplash.com/photo-1673349642162-d2dbb26c7479?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="inner-container h-60 w-[60%] bg-gray-200 p-8 absolute rounded-3xl flex flex-col justify-center align-middle text-center gap-12">
        <h1 className="text-3xl font-semibold">{advice}</h1>
        <div>
          <button
            onClick={fetchData}
            className="border border-blue-600 text-blue-600 py-2 px-4 rounded-3xl cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            GIVE ME ADVICE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
