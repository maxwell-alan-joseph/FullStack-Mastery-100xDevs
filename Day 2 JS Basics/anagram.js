/* function which takes 2 parameters and returns true/false - 
anagram function by rearranging the letters of one another such as spar formed from rasp */

function isAnagram(str1, str2){

    //removing all spaces from the string and converting them to lowercase to avoid mismatch
    let s1 = str1.replace(/\s/g, "").toLowerCase();
    let s2 = str2.replace(/\s/g, "").toLowerCase();

    //converting the strings to arrays and sorting 'em and again joining them into a string
    let sorted1 = s1.split("").sort().join("");
    let sorted2 = s2.split("").sort().join("");

    //comparing the splitted and sorted strings
    if (sorted1 === sorted2){
        return (console.log(str1 + " " + str2 + " is Anagram"))
    } else {
        return (console.log("Given string is not an Anagram"))
    }
}

isAnagram("cat", "act");

