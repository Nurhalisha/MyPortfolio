import React from "react";
import { safeEvaluate } from "../utils/safeEvaluate";

export default function Scientific({ input, setInput }) {
  const handleSciClick = (func) => {
    let result;
    let value = safeEvaluate(input); // Ensure we evaluate properly

    if (isNaN(value)) {
      setInput("Error");
      return;
    }

    try {
      switch (func) {
        case "^":
        case "yx":
        case "xy":
          setInput(input + "^");
          return;
        case "ex":
          result = Math.exp(value);
          break;
        case "ln":
          result = Math.log(value);
          break;
        case "log":
          result = Math.log10(value);
          break;
        case "sin":
          result = Math.sin(value * (Math.PI / 180)); // Convert degrees to radians
          break;
        case "cos":
          result = Math.cos(value * (Math.PI / 180));
          break;
        case "tan":
          result = Math.tan(value * (Math.PI / 180));
          break;
        case "sin-1":
          result = Math.asin(value) * (180 / Math.PI);
          break;
        case "cos-1":
          result = Math.acos(value) * (180 / Math.PI);
          break;
        case "tan-1":
          result = Math.atan(value) * (180 / Math.PI);
          break;
        case "π":
          setInput(input + Math.PI);
          return;
        case "e":
          setInput(input + Math.E);
          return;
        case "1/x":
          result = value !== 0 ? 1 / value : "Error";
          break;
        case "%":
          result = value / 100;
          break;
        case "n!":
          result = factorial(value);
          break;
        default:
          result = "Error";
      }
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  // Factorial function
  const factorial = (n) => {
    if (n < 0) return "Error"; // Factorial of negative numbers is undefined
    return n === 0 ? 1 : n * factorial(n - 1);
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
