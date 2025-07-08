const calculatorDisplay = document.getElementById("calculator-display");
const calculatorButtons = document.querySelectorAll(".calculator-buttons");
const resetButton = document.getElementById("button-reset");
const equalsButton = document.getElementById("button-equals");

calculatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button === resetButton) {
      calculatorDisplay.value = "0";
    } else if (button === equalsButton) {
      try {
        // Substitui os símbolos por operadores válidos para eval
        let expression = calculatorDisplay.value
          .replace(/÷/g, "/")
          .replace(/×/g, "*")
          .replace(/%/g, "/100");
        calculatorDisplay.value = eval(expression);
      } catch {
        calculatorDisplay.value = "Erro";
      }
    } else {
      if (
        calculatorDisplay.value === "0" ||
        calculatorDisplay.value === "Erro"
      ) {
        calculatorDisplay.value = button.textContent;
      } else {
        calculatorDisplay.value += button.textContent;
      }
    }
  });
});
