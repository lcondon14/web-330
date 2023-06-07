/**
 * Title: condon-palindrome.js
 * Author: Laurel Condon
 * Date: 4 June 2023
 * Description: JavaScript page for palindrome app
 */

// Function that gets current date
function getTodaysDate() {
   return new Date().toLocaleDateString();
}
// Function that declares length of string
function getLength(str) {
    return str.length; 
}
// Declares the reverse of the string
function reverse(str) {
   return str.split("").reverse().join(""); 
}

// declares if function is a palindrome
function isPalindrome(str) { 
    if (reverse(str) === str) return true; 
    return false;
}

// Onclick for palindrome test
document.getElementById("btnCheckPhrase").onclick = function() {
    const txtPhrase = document.getElementById('txtPhrase').value;
    const assignResultsText = document.getElementById('assign-results-text'); 
    const assignResults = document.getElementById('assign-results'); 
    const len = getLength(txtPhrase);
    const today = getTodaysDate(); 
    const reversePhrase = reverse(txtPhrase);

    let results = "Date: " + today + `<br/>`+ "Original Phrase: " + txtPhrase + `<br/>`+ "Reversed Phrase: "
        + reversePhrase + `<br/>`+ "Phrase Length: " + len; 

    assignResultsText.innerHTML = results;
    // If else statement for palindrome results
    if (isPalindrome(txtPhrase)) 
        return (assignResults.innerHTML = `${txtPhrase} +  <b><u>is</u></b> + a palindrome!`);  
    else 
        return (assignResults.innerHTML = `${txtPhrase} +  <b><u>is not</u></b> + a palindrome!`); 
    }
