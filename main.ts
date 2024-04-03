import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
let userInput = await inquirer.prompt([{
    name: "userGuess",
    message: "Enter your Number: ",
    type: "String"
}]);
if (userInput.userGuess == randomNumber) {
    console.log("Congratulates! you won.")    
} else {
    console.log("You guessed wrong number.")    
}
