   // Assignments of DSA Problems

//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

//  Answer 1

function getPairsCount(arr, n, sum)
{
    let count = 0; // Initialize result
 
    // Consider all possible pairs and check their sums
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
    return count;
}
// Inputs 
let arr = [ 1,2,3,4,5,6];
let n = arr.length;
let sum = 6;
console.log("Count of pairs is " + getPairsCount(arr, n, sum));
 
//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

let originalArray = [1, 2, 3, 4, 5, 6]


function customReverse(originalArray) {

    let leftIndex = 0;
    let rightIndex = originalArray.length - 1;
  
    while (leftIndex < rightIndex) {
  
      // Swap the elements with temp variable
      let temp = originalArray[leftIndex];
      originalArray[leftIndex] = originalArray[rightIndex];
      originalArray[rightIndex] = temp;
  
      // Move indices to the middle
      leftIndex++;
      rightIndex--;
    }
}
customReverse(originalArray);
console.log(originalArray);

//Q3. Write a program to check if two strings are a rotation of each other?

//Ansswer 3
let str1 = "ABCD";
let str2 = "CDAB";

function areRotations(str1, str2)
    {
        // There lengths must be same and str2 must be
        // a substring of str1 concatenated with str1. 
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1);
    }

if (areRotations(str1, str2)) {
    console.log("Strings are rotation of each other");
} else {
    console.log("Strings are not rotation of each other ");
}


//Q4. Write a program to print the first non-repeated character from a string?

// Answer 4
let demoString = "akshay";

function noRepeat(demoString) {
    // Convert string to array 
    demoString = demoString.toUpperCase().split("");
    for (i = 0; i < demoString.length; i++){
        for (j = i + 1; j < demoString.length; j++){
            if (demoString[i] === demoString[j]) {
               // Deleting the repeated item in array at postion j  
               demoString.splice(j,1)
           } 
        }
    }
    // converting array into string without comma
    console.log(demoString.join(""));
}
noRepeat(demoString);


 //Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
              // javascript recursive function to 
// solve tower of hanoi puzzle 
function towerOfHanoi(n1, from_rod,  to_rod,  aux_rod)
{
        if (n1 == 0)
        {
            return;
        }
        towerOfHanoi(n1 - 1, from_rod, aux_rod, to_rod);
        console.log("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod);
        towerOfHanoi(n1 - 1, aux_rod, to_rod, from_rod);
    }
  
    // Driver code
    var n1 = 4; // Number of disks
    towerOfHanoi(n1, 'A', 'C', 'B'); // A, B and C are names of rods



//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

let postFixExp = "ABC/-AK/L-*";

//Printing the Post fix Expression
console.log("PostFix expression input ==> " + postFixExp);
// conversion from Sring to  Array
let postFixArray = postFixExp.split("");
// function to check if opertor is encountered
function checkOperator(input) {
    switch (input) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
    }
    return false;
}
// function to convert Postfix To PreFix
function postfixToPrefix(postFixArray) {
    // Declarimg preFix array 
    let prefixArray = [];
    // Looping through the postFix Array
    for (i = 0; i < postFixArray.length; i++){
        if (checkOperator(postFixArray[i]) === true) {
            // POP two operands 
            let operand1 = prefixArray[prefixArray.length - 1];
            prefixArray.pop();
            let operand2 = prefixArray[prefixArray.length - 1];
            prefixArray.pop();
            //concatinate operator and operand
            let temp = postFixArray[i] + operand2 + operand1;
            prefixArray.push(temp);
        } else {
            prefixArray.push(postFixArray[i]);
        }
    }
    // Converting Prefix Array To string
    let prefixExp = prefixArray.toString();
    // Display Result on the console 
    console.log("Prefix expression output ==> "+ prefixExp);
}

// Function call and passing postfixArray
postfixToPrefix(postFixArray);


// Q7. Write a program to convert prefix expression to infix expression
let pfe1 = "*+A/BC-/ADL";
console.log("Prefix Expression input ==> " + pfe1);
let pfarray = pfe1.split('').reverse();

// function to check if opertor is encountered
function checkOperator2(input1) {
    switch (input1) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
    }
    return false;
}

function pfToInfix(pfarray) {
    let infixArray=[]
    for (j = 0; j < pfarray.length; j++){
        if (checkOperator2(pfarray[j]) === true) {
            let op1 = infixArray[infixArray.length - 1];
            infixArray.pop();
            let op2 = infixArray[infixArray.length - 1];
            infixArray.pop();
            
            let temp2 = op1 + pfarray[j] + op2;
            infixArray.push(temp2)
        } else {
            infixArray.push(pfarray[j]);
        }
    }
    let infixExp = infixArray.toString();
    console.log("Infix Expression output ==> "+infixExp);
}

pfToInfix(pfarray);

// Write a program to check if all the brackets are closed in a given code snippet.
/*
1. take the code snippet as input 
2. Trace the code snippet 
 */
let codeSnippet = "sum(a,b){result = (a + b);return result}";
//let codeSnippet = "(){()}";

let codeSnippetArray = codeSnippet.split("");

function checkifbracket(input3) {
    switch (input3) {
        case '{':return true;
        case '}': return '{';
        case '(':return true;
        case ')': return '(';
        case '[':return true;
        case ']': return '[';
    }
    return false;
}

function allBracketClosed(codeSnippetArray) {
    let stackofbrackets = [];
    for (k = 0; k < codeSnippetArray.length; k++){
        let  Checkvalue = checkifbracket(codeSnippetArray[k]);
        if (Checkvalue === true) {
            stackofbrackets.push(codeSnippetArray[k]);
        } else if (Checkvalue === '{' || Checkvalue ==='(' || Checkvalue ==='[') {
            if (Checkvalue === stackofbrackets[stackofbrackets.length-1]) {
                stackofbrackets.pop();
            } else {
                stackofbrackets.push(checkifbracket(codeSnippetArray[k]));
            }
        }
    }
    if (stackofbrackets.length === 0) {
        console.log('All brackets are closed ');
    } else {
        console.log('Not closed incorrect code snippet');
    }
}
allBracketClosed(codeSnippetArray);

//Q9. Write a program to reverse a stack.?

// Answer 9

let stack = [];
let currentSize = stack.length;

function push(newItem){
    stack[currentSize] = newItem;
    currentSize += 1;
}

function pop() {
    lastremovedItem=stack[currentSize-1]
    currentSize -= 1;
    stack.length = currentSize;
    return lastremovedItem;
 }



function reverseStack(str) {
    for (let i = 0; i < str.length;i++){
        push(str[i]);
    }
    for (let i = 0; i < str.length;i++){
        str[i] = pop();
    }
}

let str = 'AKSHAY';
str = str.split("");// for converting to array
console.log("Before reversal",str)
reverseStack(str);
console.log("after reversal",str);


//Q10. Write a program to find the smallest number using a stack.

//JavaScript simple approach to print smallest
// and second smallest element.
 

let arr4 = [111, 13, 24, 9, 36, 1];
let n3 = arr.length;
// sorting the array using
// in-built sort function
arr4.sort();
 
// printing the desired element
console.log("smallest element is "+arr4[0]);
//console.log("second smallest element is "+arr4[1],"</br>");
  