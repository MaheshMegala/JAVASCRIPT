const display = document.getElementById('display');
let expression = '';

// document.querySelectorAll('.buttons button').forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent;

//         if (value === '=') {
//             try {
//                 expression = expression.replace('π', '3.141592653589793');
//                 expression = expression.replace('e', '2.718281828459045');
//                 expression = expression.replace('×', '*');
//                 expression = expression.replace('÷', '/');
//                 expression = expression.replace('sin', 'Math.sin');
//                 expression = expression.replace('cos', 'Math.cos');
//                 expression = expression.replace('tan', 'Math.tan');
//                 expression = expression.replace('log', 'Math.log10');
//                 expression = expression.replace('ln', 'Math.log');
//                 expression = expression.replace('x²', '**2');
//                 expression = expression.replace('x³', '**3');
//                 expression = expression.replace('x!', 'factorial');

//                 // Factorial function (supports integers only)
//                 const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);
                
//                 // Evaluate final expression
//                 display.textContent = eval(expression);
//             } catch (error) {
//                 display.textContent = 'Error';
//             }
//         } else {
//             expression += value;
//             display.textContent = expression;
//         }
//     });
// });
function clearDisplay() {
    document.getElementById('display').value = '';
}
