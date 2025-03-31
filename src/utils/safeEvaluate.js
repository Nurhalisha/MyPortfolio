export function safeEvaluate(expression) {
    if (!/^[0-9+\-*/^(). ]+$/.test(expression) || expression.trim() === "") return 0; // Allow ^ operator
  
    try {
      const result = evaluateExpression(expression);
      return isNaN(result) || result === undefined ? 0 : result; // Ensure a valid number
    } catch {
      return 0;
    }
  }
  
  // Converts infix expressions to postfix and evaluates them
  function evaluateExpression(expression) {
    const operators = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 }; // Add exponentiation (^)
    const outputQueue = [];
    const operatorStack = [];
  
    const tokens = expression.match(/\d+(\.\d+)?|[+\-*/^()]/g);
    if (!tokens) return 0; // Return 0 instead of "Error"
  
    for (let token of tokens) {
      if (!isNaN(token)) {
        outputQueue.push(parseFloat(token));
      } else if (token in operators) {
        while (
          operatorStack.length &&
          operators[token] <= operators[operatorStack[operatorStack.length - 1]]
        ) {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.push(token);
      } else if (token === "(") {
        operatorStack.push(token);
      } else if (token === ")") {
        while (operatorStack.length && operatorStack[operatorStack.length - 1] !== "(") {
          outputQueue.push(operatorStack.pop());
        }
        if (!operatorStack.length || operatorStack.pop() !== "(") return 0; // Handle unmatched brackets
      }
    }
  
    while (operatorStack.length) {
      outputQueue.push(operatorStack.pop());
    }
  
    const evalStack = [];
    for (let token of outputQueue) {
      if (typeof token === "number") {
        evalStack.push(token);
      } else {
        const b = evalStack.pop();
        const a = evalStack.pop();
        if (b === 0 && token === "/") return 0; // Prevent division by zero
        if (a === undefined || b === undefined) return 0; // Prevent NaN cases
        if (token === "+") evalStack.push(a + b);
        if (token === "-") evalStack.push(a - b);
        if (token === "*") evalStack.push(a * b);
        if (token === "/") evalStack.push(a / b);
        if (token === "^") evalStack.push(Math.pow(a, b)); // Handle exponentiation correctly
      }
    }
  
    return evalStack[0] ?? 0; // Ensure return is always a number
  }
  