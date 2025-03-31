export function safeEvaluate(expression) {
    if (!/^[0-9+\-*/(). ]+$/.test(expression)) return "Error";
    try {
      // Convert string expression into a real calculation
      return new Function("return " + expression)();
    } catch {
      return "Error";
    }
  }
  