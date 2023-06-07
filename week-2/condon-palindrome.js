/**
 * Title: condon-palindrome.js
 * Author: Laurel Condon
 * Date: 4 June 2023
 * Description: JavaScript page for palindrome app
 */

// Function that gets current date
function getTodaysDate() {
    const date = new Date().toLocaleDateString('en-US');
    return date; // Returns the date
}
// Function that declares length of string
function getLength(str) {
    return str.length; 
}
// Declares the reverse of the string
function reverse(str) {
    let string = str.split(""); 
    string = string.reverse(); 
    string = string.join(""); 

    return string; 
}
// Function to reverse the string
    function reverse(str) {
    let string = str.split(""); 
    string = string.reverse(); 
    string = string.join("");

    return string; 
}
// declares if function is a palindrome
function isPalindrome(str) {
    let palindrome = false; 
    if (reverse(str) == str) {
        palindrome = true; 
    }
    return palindrome; 
}

// Onclick for palindrome test
document.getElementById("btnCheckPhrase").onclick = function() {
    let txtPhraseValue = document.getElementById('txtPhrase').value.toLowerCase();
    let assignResultsHeader = document.getElementById('assign-results-header'); 
    let assignResults = document.getElementById('assign-results'); 
    let len = getLength(txtPhraseValue); 
    let reversePhrase = reverse(txtPhraseValue);

    let header = "Date: " + today + `<br/>`+ "Original Phrase: " + txtPhraseValue + `<br/>`+ "Reversed Phrase: "
        + reversePhrase + `<br/>`+ "Phrase Length: " + len; 

    assignResultsHeader.innerHTML = header;
    // If else statement for palindrome results
    if (isPalindrome(txtPhraseValue)) {
        assignResults.innerHTML = txtPhraseValue + ` <b><u>is</u></b>` + " a palindrome!";  
    } else {
        assignResults.innerHTML = txtPhraseValue + ` <b><u>is not</u></b>` + " a palindrome!"; 
    }
}