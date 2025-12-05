let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let msg = document.querySelector(".message");
let body = document.querySelector("body");

let randomNumber;
function rand() {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
}

rand();
let scr = 20;

checkBtn.addEventListener("click", () => {
    console.log(randomNumber);
    if(guess.value == randomNumber) {
        msg.textContent = "Correct!";
        body.style.backgroundColor = "green";
        number.textContent = randomNumber;
        if(scr > Number(highscore.textContent))
            highscore.textContent = scr;
    }
    if(guess.value < randomNumber) {
        msg.textContent = "Too Low";
        scr = scr - 1;
        score.textContent = scr;
    }
    if(guess.value > randomNumber) {
        msg.textContent = "Too High";
        scr = scr - 1;
        score.textContent = scr;
    }
    if(guess.value < 1 || guess.value > 20) {
        msg.textContent = "Invalid guess";
    }
});

againBtn.addEventListener("click", () => {
    scr = 20;
    msg.textContent = "Start guessing...";
    score.textContent = scr;
    number.textContent = "?";
    body.style.backgroundColor = "black";
    guess.value = 0;
    rand();
});