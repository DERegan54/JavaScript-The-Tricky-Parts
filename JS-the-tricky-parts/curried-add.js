// PROBLEM: Write a function called curriedAdd.  If you give this function a number, it returns a 
//          new function to you.  If you give this function no arguments, it returns the total of 
//          all the numbers you've passed to it so far
    

// CONSTRAINTS: None given.
   
// EXAMPLES GIVEN:
        // let firstAdder = curriedAdd();
        // let secondAdder = curriedAdd();
        // let thirdAdder = curriedAdd();

        // firstAdder(); // 0
        // secondAdder(1)(2)(); // 3
        // thirdAdder(2)(8)(5)(1)(); // 16

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          This function, called curriedAdd, can be passed in a number or nothing.  If nothing is
//          passed in, then it returns a function.  If you do pass in a number, it will return the
//          sum of all of the numbers that have been passed in.
        
//     b.  WHAT ARE THE INPUTS?
//          The inputs are numbers.
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          either the function sumInputs(num) OR the sum of all of the numbers passed
//          in so far.  If no number has been passed in, then it will return 0;
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//          Yes
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//            num = the number passed in 
//            sum = the accumulation of all passed in nums
        
// 2.  EXPLORE CONCRETE EXAMPLES
//          See EXAMPLES GIVEN
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.

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

function curriedAdd(sum) {
    if (sum === undefined) return 0;
    return function sumInputs(num) {
        if (num === undefined) return sum;
        sum +=  num;
        return sumInputs;
    };
}

module.exports = { curriedAdd };
