export function safeEvaluate(expression) {
    if (!/^[0-9+\-*/^(). ]+$/.test(expression) || expression.trim() === "") return 0; // Allow ^ operator
  
    try {
      return evaluateExpression(expression);
    } catch {
      return 0;
    }
  }
  
  function evaluateExpression(expression) {
    const operators = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 }; // Exponent has highest precedence
    const outputQueue = [];
    const operatorStack = [];
  
    const tokens = expression.match(/(\d+(\.\d+)?)|[+\-*/^()]/g);
    if (!tokens) return 0;
  
    for (let token of tokens) {
      if (!isNaN(token)) {
        outputQueue.push(parseFloat(token));
      } else if (token in operators) {
        while (
          operatorStack.length &&
          operators[token] < operators[operatorStack[operatorStack.length - 1]]
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
        operatorStack.pop();
      }
    }
  
    while (operatorStack.length) {
      outputQueue.push(operatorStack.pop());
    }
  
    return evaluatePostfix(outputQueue);
  }
  
  // Evaluates postfix expression
  function evaluatePostfix(postfix) {
    const stack = [];
    for (let token of postfix) {
      if (typeof token === "number") {
        stack.push(token);
      } else {
        const b = stack.pop();
        const a = stack.pop();
        if (b === 0 && token === "/") return "Error"; // Prevent division by zero
        if (token === "+") stack.push(a + b);
        if (token === "-") stack.push(a - b);
        if (token === "*") stack.push(a * b);
        if (token === "/") stack.push(a / b);
        if (token === "^") stack.push(Math.pow(a, b));
      }
    }
    return stack[0] ?? 0;
  }
  