import React from "react";
import { safeEvaluate } from "../utils/safeEvaluate";

export default function Scientific({ input, setInput }) {
  const handleSciClick = (func) => {
    let result;
    let evaluatedInput = safeEvaluate(input); // Ensure we get a number

    if (isNaN(evaluatedInput)) return setInput("Error"); // Prevent NaN issues

    try {
      switch (func) {
        case "^":
        case "yx":
        case "xy":
          setInput(input + "**");
          return;
        case "ex":
          result = Math.exp(evaluatedInput);
          break;
        case "ln":
          result = Math.log(evaluatedInput);
          break;
        case "log":
          result = Math.log10(evaluatedInput);
          break;
        case "sin":
          result = Math.sin(evaluatedInput * (Math.PI / 180));
          break;
        case "cos":
          result = Math.cos(evaluatedInput * (Math.PI / 180));
          break;
        case "tan":
          result = Math.tan(evaluatedInput * (Math.PI / 180));
          break;
        case "sin-1":
          result = Math.asin(evaluatedInput) * (180 / Math.PI);
          break;
        case "cos-1":
          result = Math.acos(evaluatedInput) * (180 / Math.PI);
          break;
        case "tan-1":
          result = Math.atan(evaluatedInput) * (180 / Math.PI);
          break;
        case "π":
          setInput(input + Math.PI);
          return;
        case "e":
          setInput(input + Math.E);
          return;
        case "1/x":
          result = 1 / evaluatedInput;
          break;
        case "%":
          result = evaluatedInput / 100;
          break;
        case "n!":
          const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
          result = factorial(evaluatedInput);
          break;
        default:
          result = "Error";
      }
      setInput(isNaN(result) ? "Error" : result.toString()); // Prevent NaN results
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="scientific-calculator">
      <div className="scientific-functions">
        {["^", "yx", "xy", "ex", "ln", "log", "sin", "cos", "tan", "sin-1", "cos-1", "tan-1", "π", "e", "1/x", "%", "n!"].map((func) => (
          <button key={func} onClick={() => handleSciClick(func)}>
            {func}
          </button>
        ))}
      </div>
    </div>
  );
}
