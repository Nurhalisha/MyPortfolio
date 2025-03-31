import React, { useState } from "react";
import MainCal from "./components/MainCal";
import Scientific from "./components/Scientific";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [showSci, setShowSci] = useState(false);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => setInput("");
  const deleteLast = () => setInput((prev) => prev.slice(0, -1));
  const toggleSci = () => setShowSci(!showSci);

  return (
    <div className="calculator-container">
      <MainCal
        input={input}
        handleClick={handleClick}
        clearInput={clearInput}
        deleteLast={deleteLast}
        toggleSci={toggleSci}
      />
      {showSci && <Scientific input={input} setInput={setInput} />}
    </div>
  );
}