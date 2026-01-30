// Develop a program with dynamic questions. It should ask the user to answer 3 questions:

// Input Values
let apresentation = prompt('Whats your name?');
let age = prompt('How old are you?');
let language = prompt('What programming language are you studying?');

// Processing Stage
let response = `"Hi ${apresentation}, you are ${age} years old and you are already learning ${language}!"`
alert(response); // Data Output

let likeLanguage = prompt(`Do you enjoy studying ${language}? Answer with the number 1 for YES or 2 for NO.`);

if (likeLanguage == 1) {
    alert(`That's great! Keep studying and you'll be very successful.`);
} else if (likeLanguage == 2) {
    alert(`Oh, that's a shame... Have you tried learning other languages?`);
} else {
    alert(`Invalid response. Please reload the page and try again.`);
}; 

// Solution to the Challenge: Add variables to store user values ​​along with string interpolation.
