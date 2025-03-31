import React, { useState } from "react";
import Scientific from "./Scientific";
import { safeEvaluate } from "../utils/safeEvaluate"; // Import safe evaluator

export default function MainCal() {
  const [input, setInput] = useState("");
  const [showSci, setShowSci] = useState(false);

  const handleClick = (value) => {
    if (value === "=") {
      setInput(safeEvaluate(input).toString());
    } else {
      setInput(input + value);
    }
  };

  const clearInput = () => setInput("");
  const deleteLast = () => setInput(input.slice(0, -1));
  const toggleSci = () => setShowSci(!showSci);

  return (
    <div className="calculator-container">
      <div className="basic-calculator">
        <input type="text" value={input} readOnly className="display" />
        <div className="buttons">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button key={char} onClick={() => handleClick(char)}>
              {char}
            </button>
          ))}
        </div>
        <div className="bottom-buttons">
          <button className="delete-btn" onClick={deleteLast}>DEL</button>
          <button className="clear-btn" onClick={clearInput}>CLEAR</button>
          <button className="sci-btn" onClick={toggleSci}>Sci</button>
        </div>
      </div>
      {showSci && <Scientific input={input} setInput={setInput} />}
    </div>
  );
}
