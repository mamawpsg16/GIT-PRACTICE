function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error('Parameter is not a number!');
  }
}

try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}


function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    let result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
} finally {
    console.log("Execution completed.");
}

class CustomError extends Error {
  constructor(message, code) {
      super(message);
      this.name = this.constructor.name;
      this.code = code;
  }
}

try {
  throw new CustomError("Custom error occurred", 400);
} catch (error) {
  throw error;
  // console.log(`Error: ${error.message}, Code: ${error.code}`);
}
