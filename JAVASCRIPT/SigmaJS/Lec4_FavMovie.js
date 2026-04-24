let favMovie = "avatar";

let guess = prompt("guess the favourite movie");
while (guess != favMovie && guess != "quit") {
    guess = prompt("Wrong movie name. Please try again");
}

if (guess == favMovie) {
    console.log("Hurray !!! you have guessed the correct answer");
}
if (guess == "quit") {
    console.log("OOPs! failed");
}