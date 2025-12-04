// File name: guessnumbertask.js
// Put this file in the same folder as index.html and styles.css

(function () {
  // cached DOM
  const messageEl = document.getElementById('message');
  const numberEl  = document.getElementById('number');
  const scoreEl   = document.getElementById('score');
  const highEl    = document.getElementById('highscore');
  const guessInp  = document.getElementById('guessInput');
  const checkBtn  = document.getElementById('check');
  const againBtn  = document.getElementById('again');

  // game state
  let secretNumber;
  let score;
  let highscore = 0;

  // helpers
  function randInt(min, max) {
    // inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function setMessage(msg) {
    messageEl.textContent = msg;
  }

  function updateScore(val) {
    score = val;
    scoreEl.textContent = score;
  }

  function revealNumber(n) {
    numberEl.textContent = n;
  }

  function resetGame() {
    secretNumber = randInt(1, 20);
    updateScore(20);
    setMessage('Start guessing...');
    revealNumber('?');
    guessInp.value = '';
    guessInp.removeAttribute('disabled');
    checkBtn.removeAttribute('disabled');
    // For debugging you can uncomment:
    // console.log('secret number:', secretNumber);
  }

  // main logic when user checks a guess
  function onCheck() {
    const raw = guessInp.value;
    if (!raw) {
      setMessage('Please enter a number!');
      return;
    }

    const guess = Number(raw);

    if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
      setMessage('Enter an integer between 1 and 20.');
      return;
    }

    // correct
    if (guess === secretNumber) {
      setMessage('🎉 Correct Number!');
      revealNumber(secretNumber);
      // update highscore
      if (score > highscore) {
        highscore = score;
        highEl.textContent = highscore;
      }
      // disable further guessing until "Again"
      guessInp.setAttribute('disabled', 'true');
      checkBtn.setAttribute('disabled', 'true');
      return;
    }

    // wrong guess
    if (score > 1) {
      setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      updateScore(score - 1);
    } else {
      setMessage('💥 You lost the game!');
      updateScore(0);
      revealNumber(secretNumber);
      guessInp.setAttribute('disabled', 'true');
      checkBtn.setAttribute('disabled', 'true');
    }
  }

  // wire events
  checkBtn.addEventListener('click', onCheck);

  // allow Enter key to submit
  guessInp.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      onCheck();
    }
  });

  againBtn.addEventListener('click', resetGame);

  // init
  resetGame();
})();