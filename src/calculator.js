class Calculator {
    // Addition
    add(a, b) {
        return a + b;
    }

    // Subtraction
    subtract(a, b) {
        return a - b;
    }

    // Multiplication
    multiply(a, b) {
        return a * b;
    }

    // Division with validation for division by zero
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    // Square root calculation
    squareRoot(a) {
        if (a < 0) {
            throw new Error("Cannot calculate the square root of a negative number.");
        }
        return Math.sqrt(a);
    }
}

module.exports = Calculator;

// Example usage
const calculator = new Calculator();

try {
    console.log("Addition: 5 + 3 =", calculator.add(5, 3));
    console.log("Subtraction: 5 - 3 =", calculator.subtract(5, 3));
    console.log("Multiplication: 5 * 3 =", calculator.multiply(5, 3));
    console.log("Division: 6 / 3 =", calculator.divide(6, 3));
    console.log("Square Root: √16 =", calculator.squareRoot(16));
    console.log("Division by Zero Test: 5 / 0 =", calculator.divide(5, 0)); // This will throw an error
} catch (error) {
    console.error("Error:", error.message);
}