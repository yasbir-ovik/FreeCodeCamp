function calculateSum(num1, num2) {
  return num1 + num2;
}

// Sustract logic part
function calculateDifference(num1, num2) {
  return num1 - num2;
}

// Multiply logic part
function calculateProduct(num1, num2) {
  return num1 * num2;
}
//

// Divide logic part
function calculateQuotient(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
}

function calculateSquare(num) {
  return Math.pow(num, 2);
}

//calculate square root
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}
