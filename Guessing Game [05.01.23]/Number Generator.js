// function to generate a random whole integer in between 1 and 100 - button onclick and function should share the same name//


let randomInt = Math.floor(Math.random() * 101);
let counter = 0;
let guessed_nums = []

let guessedCounter = 0
let correct_guess = []

let btnCounter = document.querySelector('inputBtn');
const attempts = document.getElementById('Message1');
const correctGuess = document.getElementById('Message2');



function Random(){
// alerts user if input is not within min/max
let user_input = document.getElementById("inputField").value;
if(user_input < 1 || user_input > 100){
    alert("Enter a number inbetween 1 and 100!");
} else{
    counter++;
    guessed_nums.push(counter);

    console.log(guessed_nums);
    gameCount = guessed_nums;
    Message1.textContent = 'No. of attempts: ' + gameCount;
    gameCount.shift();

    
 } if (user_input < randomInt) {
        let firstH3 = document.querySelector('h3');
        firstH3.textContent = 'Your number is too low! Try again.';
        
    } else if (user_input > randomInt) {
        let firstH3 = document.querySelector('h3');
        firstH3.textContent = 'Your number is too high! Try again.';
      
    } else if (user_input == randomInt) {
        let firstH3 = document.querySelector('h3');
        firstH3.textContent = 'Good guess! How many more can you guess right?';
        guessedCounter++
        correct_guess.push(guessedCounter)
        
        console.log(correct_guess);
        successCount = correct_guess;
        Message2.textContent = 'Correct guesses: ' + successCount;

    }
}
    

console.log(randomInt);


// colour code created Text node
//cre ate incement counter for each guess
// create increment counter for each correct guess