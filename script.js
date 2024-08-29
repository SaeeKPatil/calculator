 
let selectedOperation = null;
 
document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.operation').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        selectedOperation = this.getAttribute('data-operation');
    });
});
 
document.getElementById('calculate').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers';
    } else if (selectedOperation === null) {
        result = 'Please select an operation';
    } else {
        switch (selectedOperation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                // Check for division by zero
                if (num2 === 0) {
                    result = 'Cannot divide by zero';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Invalid operation';
        }
    }

    document.getElementById('result').value = result;
});

 
document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
    selectedOperation = null;
    document.querySelectorAll('.operation').forEach(btn => btn.classList.remove('active'));
});
