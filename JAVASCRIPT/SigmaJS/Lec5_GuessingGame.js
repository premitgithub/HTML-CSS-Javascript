const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter the number to guess");
while (true) {
    if (guess == "quit") {
        console.log("Game quitted");
        break;
    }
    if (guess == random) {
        console.log("Congrats! Correct Guess");
        break;
    }
    if (guess > random) {
        guess = prompt("hint : guess was too large. Try again!");
    }
    else {
        guess = prompt("hint: guess too small. Try again!");
    }
}