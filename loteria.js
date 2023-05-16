const lotteryForm = document.querySelector('#lottery-form');

function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const number = Math.floor(Math.random() * 49) + 1;
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    return numbers;
}
let lotteryNumbers = generateLottoNumbers();
function checkLottoNumbers() {
    const userNumbers = Array.from(lotteryForm.elements).filter(element => element.type === 'number').map(input => parseInt(input.value));
    const matches = userNumbers.filter(num => lotteryNumbers.includes(num));
    if (matches.length === 6) {
        alert(`Los números sorteados son: ${lotteryNumbers.join(', ')}, \n ¡Felicidades! Ganaste el premio mayor.`)
    } else if (matches.length > 0) {
        alert(`Los números sorteados son: ${lotteryNumbers.join(', ')}, \n Tienes ${matches.length} número(s) correcto(s): ${matches.join(', ')}`)
    } else {
        alert(`Los números sorteados son: ${lotteryNumbers.join(', ')}, \n Lo siento, ninguno de tus números fue seleccionado.`)
    }
    lotteryNumbers.length = 0;
    lotteryNumbers.push(...generateLottoNumbers());
    lotteryForm.reset();
}
lotteryForm.addEventListener('submit', e => {
    e.preventDefault();
    checkLottoNumbers();
});