// Task-1 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var num = +prompt("Enter a positive integer:");

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");



// task 2
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number MATH METHODS | JAVASCRIPT
// Page 2 of 5
var num = +prompt("Enter a negative floating point number:");

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");




// task 3
// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var num = +prompt("Enter a number:");
document.write("The absolute value of " + num + " is " + Math.abs(num));



// task 4
// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.: MATH METHODS | JAVASCRIPT
// Page 3 of 5
var dice = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + dice);




// task 5
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
var toss = Math.floor(Math.random() * 2) + 1;

if (toss === 1) {
    document.write("Random coin value: Heads");
} else {
    document.write("Random coin value: Tails");
}



// task-6
// 6. Write a program that shows a random number between 1 
// and 100 in your browser. MATH METHODS | JAVASCRIPT
// Page 4 of 5
var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNum);