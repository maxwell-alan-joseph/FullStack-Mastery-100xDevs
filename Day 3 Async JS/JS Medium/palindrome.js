/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str){

    const s1 = str.toLowerCase();
    const s2 = s1.split('').reverse().join('');
    return s1 === s2;
}

let word = "MaDam";

    if (isPalindrome(word)){
        console.log("Given word " + word + " is a palindrome");
    }
    else {
        console.log("Given word " + word + " is not a palindrome")
    }



