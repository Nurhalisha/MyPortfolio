import React from "react";

export default function Scientific({ input, setInput }) {
  const handleSciClick = (func) => {
    let result;
    try {
      switch (func) {
        case "^":
        case "yx":
        case "xy":
          setInput(input + "**");
          return;
        case "ex":
          result = Math.exp(eval(input));
          break;
        case "ln":
          result = Math.log(eval(input));
          break;
        case "log":
          result = Math.log10(eval(input));
          break;
        case "sin":
          result = Math.sin(eval(input) * (Math.PI / 180));
          break;
        case "cos":
          result = Math.cos(eval(input) * (Math.PI / 180));
          break;
        case "tan":
          result = Math.tan(eval(input) * (Math.PI / 180));
          break;
        case "sin-1":
          result = Math.asin(eval(input)) * (180 / Math.PI);
          break;
        case "cos-1":
          result = Math.acos(eval(input)) * (180 / Math.PI);
          break;
        case "tan-1":
          result = Math.atan(eval(input)) * (180 / Math.PI);
          break;
        case "π":
          setInput(input + Math.PI);
          return;
        case "e":
          setInput(input + Math.E);
          return;
        case "1/x":
          result = 1 / eval(input);
          break;
        case "%":
          result = eval(input) / 100;
          break;
        case "n!":
          const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
          result = factorial(eval(input));
          break;
        default:
          result = "Error";
      }
      setInput(result.toString());
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