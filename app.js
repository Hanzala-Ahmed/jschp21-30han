// alert("Hello World");

// Chapter 21-25
// Q no 1
// var firstName = prompt("Enter your First Name");
// var lastsName = prompt("Enter your Last Name");
// document.write(firstName + " " + lastsName);

// Q no 2
// var favrtPhone = prompt("Enter your favorite phone name");
// document.write("My favorite phone is: " + favrtPhone);
// document.write("<br>Length of string: " + favrtPhone.length);

// Q no 3
// var string = "Pakistani";
// document.write("String: " + string);
// document.write("<br>Index of 'n': " + string.indexOf('n'));

// Q no 4
// var string = "Hello World";
// document.write("String: " + string);
// document.write("<br>Last index of 'l': " + string.lastIndexOf('l'));

// Q no 5
// var string = "Pakistani";
// document.write("String: " + string);
// document.write("<br>character at index 3: " + string.charAt(3));

// Q no 6
// var firstName = prompt("Enter your First Name");
// var lastsName = prompt("Enter your Last Name");
// document.write(firstName.concat(lastsName));

// Q no 7
// var city = "Hyderabad";
// document.write("City: " + city);
// document.write("<br>After replacement: " + city.replace("Hyder", "Islam"));

// Q no 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("<b>Message: </b>" + message);
// document.write("<br><b>Message after replacement: </b>" + message.replace(/and/g, "&"));

// Q no 9
// var num = "472";
// document.write("value: " + num + "<br>Type: " + typeof(num));
// var num = 472;
// document.write("<br>value: " + num + "<br>Type: " + typeof(num));

// Q no 10
// var userInput = prompt("Enter your full name in small letters");
// document.write("User Input: " + userInput);
// document.write("<br>Upper Case: " + userInput.toUpperCase());

// Q no 11
// var userInput = prompt("Enter your full name in small letters");
// document.write("User Input: " + userInput);
// document.write("<br>Titles Case: " + userInput[0].toUpperCase() + userInput.slice(1));

// Q no 12
// var num = "35.36";
// document.write("Number: " + num);
// document.write("<br>Result: " + num.replace(".", ""));

// Q no 13 //incomplete
// var userName = prompt("Whats your name?");
// // var code = String.fromCharCode(33);
// // alert(code);
// if (userName === String.fromCharCode(33) || userName === String.fromCharCode(44) || userName === String.fromCharCode(46) || userName === String.fromCharCode(64)) {
//     alert("Error! Please enter a valid user name")
// }
// else {
//     alert("Successfully Login")
// }

// Q no 14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b = prompt("Welcome to ABC Bakery. What do you want to order sir/Ma'am").toLowerCase();
// var c = false
// for (var i = 0; i < a.length; i++){
// if (b === a[i]){
//     c = true;
//     document.write("cookie is <b>available</b> at index " + a.indexOf(b) + " in our bakery.");
// }
// }
// if (c === false){
//     document.write("We are sorry. pastry is <b>not available</b> in our bakery");
// }

// Q no 15 //incomplete
// var password = prompt("Enter your password");
// var character = "!, @, #, $, %, ^, &, *, ~, `, -, _"
// var a = false;
// for(i = 0; i <= 10; i++){
//     if(password.charAt(0) != i && password.length <= 6 && password != character.charAt()){
//         alert("Password is valid");
//     } 
// }
// if(a === false) {
//     alert("Please enter a valid password");
// }

// Q no 16
// var uniName = "University of Karachi";
// var newUniName = uniName.split("");
// for(i = 0; i < uniName.length; i++){
//     document.write(newUniName[i] + "<br>");
// }

// Q no 17
// var input = "Pakistan";
// document.write("User Input: ".concat(input));
// var lastChar = input.charAt(input.length-1);
// document.write("<br>Last Character of Input: ".concat(lastChar));

// CHAPTERS 26-30
// Q no 1
// var num = 3.45214;
// document.write("Number: ".concat(num));
// var roundNum = Math.round(num);
// document.write("<br>Round off Value: ".concat(roundNum));
// var floorNum = Math.floor(num);
// document.write("<br>Floor Value: ".concat(floorNum));
// var ceilNum = Math.ceil(num);
// document.write("<br>Ceil Value: ".concat(ceilNum));

// Q no 2
// var num = -2.673;
// document.write("Number: ".concat(num));
// var roundNum = Math.round(num);
// document.write("<br>Round off Value: ".concat(roundNum));
// var floorNum = Math.floor(num);
// document.write("<br>Floor Value: ".concat(floorNum));
// var ceilNum = Math.ceil(num);
// document.write("<br>Ceil Value: ".concat(ceilNum));

// Q no 3
// var num = -4;
// document.write("The absolute value of " + num + " is " + Math.abs(num))

// Q no 4
// document.write("random dice value " + Math.floor( Math.random() * 6 + 1))

// Q no 5
// var coin = Math.floor( Math.random() * 2 + 1);
// document.write(coin);
// if(coin === 1){
//     document.write("<br>Random Coin Value: Heads")
// }
// else{
//     document.write("<br>Random Coin Value: Tails")
// }

// Q no 6
// var randomNum = Math.floor(Math.random() * 100 + 1);
// document.write("Random number between 1 and 100: ".concat(randomNum));

// Q no 7
var weight = prompt("Enter your Weight");
var newWeight = weight.toLowerCase();
if(newWeight.includes("killogram")){
    document.write("The weight of user is " + newWeight.split("killogram"));
}
else if(newWeight.includes("kg")){
    document.write("The weight of user is " + newWeight.split("kg"));
}
else if(newWeight.includes("killo")){
    document.write("The weight of user is " + newWeight.split("killo"));
}
else{
        document.write("Please enter a correct weight")
}
