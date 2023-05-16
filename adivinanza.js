const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');
const resultDiv = document.getElementById('result');

guessForm.addEventListener('submit', (event) => {
event.preventDefault();
const guess = parseInt(guessInput.value);
if (guess === randomNumber) {
    alert('¡Correcto! ¡Has adivinado el número!');
    resultDiv.innerHTML = '<div class="alert alert-success" role="alert">¡Correcto! ¡Has adivinado el número!</div>';
} else if (guess < randomNumber) {
    resultDiv.innerHTML = '<div class="alert alert-warning" role="alert">El número introducido es demasiado bajo. ¡Inténtalo de nuevo!</div>';
} else {
    resultDiv.innerHTML = '<div class="alert alert-warning" role="alert">El número introducido es demasiado alto. ¡Inténtalo de nuevo!</div>';
}
guessInput.value = '';
});