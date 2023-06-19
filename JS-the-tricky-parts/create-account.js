// PROBLEM: Write a function called createAccount which creates a bank account given a PIN Number
//          and an initial deposit amount.  The return value sould be an object with four methods on it:
//          
//          - checkBalance: Given the correct PIN, return the current balance.
//                  (If the PIN is incorrect, return "Invalid PIN.")
//          - deposit: Given the correct PIN and a deposit amount, increment the account balance by 
//                  the amount. (If the pin is incorrect, return "Invalid PIN.")
//          - withdraw: Given the correct pin and a withdrawal ammount, decrement the account balance
//                  by the amount. (If the pin is incorrect, returh "Invalid PIN.")
//          - changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN.
//                  (If the old PIN is incorrect, return "Invalid PIN.")

// CONSTRAINTS: None given. 
   
// EXAMPLES GIVEN:

        // let account = createAccount("1234", 100);

        // account.checkBalance("oops");
        // // "Invalid PIN."

        // account.deposit("1234", 250);
        // // "Succesfully deposited $250. Current balance: $350."

        // account.withdraw("1234" 300);
        // // "Succesfully withdrew $300. Current balance: $50."

        // account.withdraw("1234" 10);
        // // "Withdrawal amount exceeds account balance. Transaction cancelled."

        // account.changePin("1234", "5678");
        // // "PIN successfully changed!"

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Create a function called createAccount that creates a bank acound number with 
//          a PIN number and deposit amount as arguments.  The function should have four methods associated with
//          it that include checkBalance, deposit, withdraw and changePin. 
        
//     b.  WHAT ARE THE INPUTS?
//          The inputs are initialDeposit and pinNum.
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          The outputs should be: 
//              - For checkBalance, `Your current balance is $${currentBalance}.`
//              - For deposit, `You successfully deposited $${depositAmt}.  Your current balance is $${currentBalance}.`
//              - For withdrawal, `You successfully withdrew ${withdrawalAmt}.  Your current balance is $${currentBalance}.`
//                                       OR
//                                "Withdrawal amount exceeds current balance."           
//              - For changePin, "PIN changed successfully."
//              - Any time the PIN entered doesn't match pin, "Invalid PIN."

//     d.  DO I HAVE ENOUGH INFORMATION?
//              Yes.
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//              initialDeposit, currentBalance, depositAmt, withdrawalAmt, pin
        
// 2.  EXPLORE CONCRETE EXAMPLES
//            See EXAMPLES GIVEN.

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false/throw an error? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//             - If either arguments are null or empty strings      
//             - If the withdrawalAmt exceeds the currentBalance
       
//     b. Create a step-by-step plan to solve the problem.
//          STEP 1: Create a function called createAccount(pin, initialDeposit)
//          STEP 2: Create currentBalance variable and set it to initialDeposit
//          STEP 3: Create checkBalance method by checking to make sure enteredPin === pin.  If not
//               return "Invalid PIN." If so, simply returning currentBalance
//          STEP 4: Create deposit method by checking to make sure enteredPin === pin.  If not
//               return "Invalid PIN." If so, continue taking in the argument depositAmt and, creating variable newBalance, and setting it 
//                  equal to the sum of currentBalance + depositAmt, then set current balance equal to newBalance
//                  and returning `You successfully deposited $${depositAmt}.  Your current balance is $${currentBalance}.`
//          STEP 5: Create withdraw method by by checking to make sure enteredPin === pin.  If not
//                  return "Invalid PIN." If so, continue creating withdrawalAmt variable, 
//                  checking to see if it is less than currentBalance, and if so, creating the variable newBalance and setting it 
//                  equal to currentBalance - withdrawalAmt, and then setting currentBalance equal to newBalance and returning 
//                  `You successfully withdrew ${withdrawalAmt}.  Your current balance is $${currentBalance}.`
//                  If the withdrawalAmt is more than currentBalance, return "Withdrawal amount exceeds current balance." 
//          STEP 6: Create changePin method by creating oldPin and newPin variables, checking to make sure 
//                  oldPin === pin, then setting newPin to equal pin and return "PIN changed successfully."

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?

function createAccount(pin, initialDeposit = 0) {
    let currentBalance = initialDeposit;
    
    return {
        checkBalance(enteredPin) {
            if (enteredPin !== pin) return "Invalid PIN.";
            return `Your current balance is $${currentBalance}.` 
        },
        deposit(enteredPin, depositAmt) {
            if (enteredPin !== pin) return "Invalid PIN.";
            let newBalance = currentBalance + depositAmt;
            currentBalance = newBalance;
            return `You successfully deposited $${depositAmt}. Your current balance is $${currentBalance}.`
        },
        withdraw(enteredPin, withdrawalAmt) {
            if (enteredPin !== pin) return "Invalid PIN.";
            if (withdrawalAmt > currentBalance) return "Withdrawal amount exceeds current balance." ;
            let newBalance = currentBalance - withdrawalAmt;
            currentBalance = newBalance;
            return `You successfully withdrew $${withdrawalAmt}. Your current balance is $${currentBalance}.`
        },
        changePin(enteredPin, newPin) {
            if (enteredPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN changed successfully."
        }
    };
}

module.exports = { createAccount };
