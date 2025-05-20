function calculateFactorial() {
  const num = parseInt(document.getElementById('factorialInput').value);
  const method = document.getElementById('method').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(num) || num < 0) {
    resultDiv.textContent = "❌ Please enter a valid positive integer.";
    return;
  }

  let result;

  if (method === "iterative") {
    result = factorialIterative(num);
  } else {
    result = factorialRecursive(num);
  }

  resultDiv.innerHTML = `✅ <strong>${method}</strong> result: ${result}`;
}

function factorialIterative(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

