// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');

let attempts = 0;

guessBtn.addEventListener('click', checkGuess);

guessInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    checkGuess();
  }
});

function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
    guessInput.disabled = true;
    guessBtn.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Try a higher number.';
  } else {
    message.textContent = 'Try a lower number.';
  }
}
