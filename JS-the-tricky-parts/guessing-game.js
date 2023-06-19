// PROBLEM: Write a function called guessingGame which returns a function that allows you to guess a
//          random whole number between 0 and 99.  Every time you create a new game, it should select a
//          new random number and keep it secret from the player. 

//          Once the game has started, you can guess the number.  The game should tell you whether your 
//          guess is too high, too low, or correct.  After a correct guess, then game ends.
    

// CONSTRAINTS: None given.
   
// EXAMPLES GIVEN:
//     let game = guessingGame();
//     game(50); // "50 is too low!"
//     game(90); // "90 is too high!"
//     game(70); // "You win! You found 70 in 3 guesses."
//     game(70); // "The game is over, you already won!"

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          The function guessingGame is a game that produces a random whole number between 0 and 99.
//          The user can't see the random number, but makes a guess as to what it is.  The function then 
//          tells the user whether their guess was too high, too low or correct.  The user guesses again
//          until they get the right answer.  The game ends when the correct answer is guessed.          
        
//     b.  WHAT ARE THE INPUTS?
//          The input is userGuess, which is an integer between 0 and 99.
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          The outputs are:
//              `${userGuess} is too low!` OR
//              `${userGuess} is too high!` OR
//              `You win!  You found ${targetNum} in ${numGuesses} guesses!` OR
//              "The game is over...you already won!"
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//          Yes
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//          targetNum for the randomly generated number between 0 and 99
//          userGuess for the user's guess
//          numGuesses for the number of times a user guesses until they guess the targetNum
        
// 2.  EXPLORE CONCRETE EXAMPLES 
//        See above EXAMPLES GIVEN
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//              If the user guesses a number outside of the bounds of 0-99
//              If the user tries to run the function without a guess

//     b. Create a step-by-step plan to solve the problem.
//      STEP 1: Define the guessingGame function. 
//      STEP 2: Generate a random whole number between 0-99 and call it targetNum
//      STEP 3: Return the function play(), which takes the targetNum and userGuess as arguements,
//          compares the two numbers, and then returns one of the three outputs.
//      STEP 4: Be sure that the game is over once the targetNum is equal to userGuess.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck.
//          I'm stuck on how to get the inner function to run and then call itself again if 
//          the game isn't won. 
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.
//          It turns out that I needed a boolean variable to store whether the game had been won or not.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?


function guessingGame() {
    const targetNum = Math.floor(Math.random() * 100);
    let hasWon = false;
    let numGuesses = 0;

    return function play(userGuess) {
        if (hasWon) return `You already won!  The game is over!`;
        numGuesses ++;
        if (userGuess === targetNum) {
            hasWon = true;
            const guessWord = numGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${targetNum} in ${numGuesses} ${guessWord}!`;
        }
        if (targetNum < userGuess) return `${userGuess} is too high!`
        if (targetNum > userGuess) return `${userGuess} is too low!`
    };
}


module.exports = { guessingGame };
