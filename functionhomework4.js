//Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
var prompt = require("prompt-sync")();
var userInput = prompt('enter a letter and program will determine if letter is a vowel');

isCharacterAVowel(i) => { //should userInput be argument parameters()?
 if (userInput.length>1) {
     prompt('please only ONE letter')
     break
 }
 userInput.toLowerCase;
 if (userInput == ('a'|| 'e'|| 'i'||'o'||'u'))
 return true;

    

//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
maxOfTwoNumbers =(num1, num2) => {
    if( num1 > num2){
        return num1
    }else{
        return num2
    }
}
console.log(maxofTwoNumbers(50, 100))

//Define a function maxOfThree that takes three numbers as a arguments and returns the largest of them.
function maxOfThree (num1, num2, num3){
    return Math.max (num1, num2, num3);
}

console.log (maxOfThree(50,100,150));

// Define a function sumArray and a function multiplyArray that sums  and multiplies (repectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
sumArray = (num1, num2, num3, num4) = > (num1 + num2 + num3 + num4)
multiplyArray = (num1, num2, num3, num4) => {}

console.log(1,2,3,4)

// Define a function reverseString that computes the reversal of a string. 
// For example, reverseString("jagtester") should return the string "ratset gaj".
function reverseString(str) {
    if (str === "")
    return  "";
    else
    return
    reverseString(str.substr(1)) +
    str.isCharacterAVowel(0);
}

reverseString("jagtester");

//Write a function findLongestWord that takes an array of words and returns the length of the longest one.
let array = ["blue", "red", "green", "purple",]
function findlongestword(array) {
    for (let i = 1; i < array.length; i++) {
        var Longestword = array[0];
        if (Longestword.length < array[i].length) {

        }

    }
    return Longestword;
}

console.log(findLongestword(array));

//Write a function filterLongwords that takes an array of words and a number i 
// and returnsthe array of words that are longer than i characters long.
