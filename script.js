const screen = document.getElementById('screen');

function appendNumber(number) {
    screen.value = screen.value === '0' ? number : screen.value + number;
}

function appendOperator(operator) {
    if (screen.value === '') return;
    if (isNaN(screen.value.slice(-1))) return;
    screen.value += operator;
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}

function clearScreen() {
    screen.value = '';
}

function calculateSquareRoot() {
    screen.value = Math.sqrt(screen.value);
}

function calculatepercent() {
    screen.value = screen.value / 100;
}

function calculateBracketsButton() {
    screen.value = '(' + screen.value + ')';
}

function calculatePowerButton() {
    screen.value = Math.pow(screen.value, 2);
}

function appendPi() {
    screen.value = Math.PI;
}