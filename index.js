document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let operator = null;
    let firstOperand = null;

    function clearDisplay() {
        display.value = '';
        currentInput = '';
        operator = null;
        firstOperand = null;
    }

    function calculate() {
        if (firstOperand !== null && operator !== null && currentInput !== '') {
            const secondOperand = parseFloat(currentInput);
            switch (operator) {
                case '+':
                    currentInput = (firstOperand + secondOperand).toString();
                    break;
                case '-':
                    currentInput = (firstOperand - secondOperand).toString();
                    break;
                case '*':
                    currentInput = (firstOperand * secondOperand).toString();
                    break;
                case '/':
                    currentInput = (firstOperand / secondOperand).toString();
                    break;
                default:
                    return;
            }
            display.value = currentInput;
            operator = null;
            firstOperand = null;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = this.textContent;

            if (buttonValue === 'clear') {
                clearDisplay();
            } else if (buttonValue === '=') {
                calculate();
            } else if (['+', '-', '*', '/'].includes(buttonValue)) {
                if (currentInput !== '') {
                    firstOperand = parseFloat(currentInput);
                    operator = buttonValue;
                    currentInput = '';
                }
            } else if (buttonValue === '.') {
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                    display.value = currentInput;
                }
            } else {
                currentInput += buttonValue;
                display.value = currentInput;
            }
        });
    });
});
