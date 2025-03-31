export function safeEvaluate(expression) {
    if (!/^[0-9+\-*/(). ]+$/.test(expression)) return "Error";
  
    try {
      return evaluateExpression(expression);
    } catch {
      return "Error";
    }
  }
  
  // Converts infix expressions to postfix and evaluates them
  function evaluateExpression(expression) {
    const operators = { "+": 1, "-": 1, "*": 2, "/": 2 };
    const outputQueue = [];
    const operatorStack = [];
  
    const tokens = expression.match(/[+\-*/()]|\d+(\.\d+)?/g);
    if (!tokens) return "Error";
  
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
        operatorStack.pop();
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
        if (token === "+") evalStack.push(a + b);
        if (token === "-") evalStack.push(a - b);
        if (token === "*") evalStack.push(a * b);
        if (token === "/") evalStack.push(a / b);
      }
    }
  
    return evalStack[0];
  }
  