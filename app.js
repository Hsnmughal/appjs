                                // ALERTS
// 1 
alert("Hello!");
// 2
alert("Error! Please Enter a Valid Password.");
// 3
alert("Welcome to JS Land...\n Happy Coding!");
// 4
alert("Welcome to JS Land...");
// 5
console.log("Hello... I can run JS through my web browser console");
document.write("<br>");
document.write("<br>");
                                // VARIABLES FOR STRINGS  
// 1
var username;
document.write("<br>");
document.write("<br>");
// 2
var myName = "Muhammad Hassan Rasheed";
document.write("<br>");
document.write("<br>");
// 3
var message;
message = "Hello World";
alert(message);
document.write("<br>");
document.write("<br>");
// 4
alert("Jhone Doe");
alert("15 years old");
alert("Certified Mobile Application Develpoment");
document.write("<br>");
document.write("<br>");
// 5
var food = "PIZZA";
alert(food + "\n" + food.slice(0,4) + "\n" + food.slice(0,3) + "\n" + food.slice(0,2) + "\n" + food.slice(0,1));
document.write("<br>");
document.write("<br>");
// 6
var  email = "example@example.com";
alert("My Email Address is" + " " + email);
document.write("<br>");
document.write("<br>");
// 7
var book = "A smarter way to learn JavaScript";
alert("I'm trying to learn from the book" + " " + book);
document.write("<br>");
document.write("<br>");
// 8
document.write("Yay! I can write HTML through JS <br>");
document.write("<br>");
document.write("<br>");
// 9
var symbol = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(symbol);
document.write(symbol + "<br>");
document.write("<br>");
document.write("<br>");
                                // VARIABLES FOR NUMBERS 
// 1
var age = "19";
alert("I'm " + age + "years Old");
document.write("<br>");
document.write("<br>");
// 2
document.write("<br>");
document.write("<br>");
// 3
var  birthYear = 2001;
document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is "+ typeof(birthYear) + "<br>");
document.write("<br>");
document.write("<br>");
// 4
var uname = prompt("Enter your name: ") ;
var product = prompt("Enter your Desired Product: ");
var quantity = prompt("No. of items: ");
document.write(uname + " ordered " + quantity + product + "(S) on www.xyzClothing.com. <br>");  
document.write("<br>");
document.write("<br>");
                                // VARIABLE NAMES: LEGAL & ILLEGAL
// 1
var work,contact,home;
document.write("<br>");
document.write("<br>");
// 2
var aboutUs,$work,_name,name1,_name34;
// var aboutus,1work,^name5,&n,!J;
document.write("<br>");
document.write("<br>");
// 3
document.write("Rules for naming JS variables <br>");
document.write("Variable names can only contain numbers, _ , and $. For example $my_1stVariable <br> Variables must begin with $, _ or a letter. For example $name, _name or name <br>Variable names are case sensitive <br>Variable names should not be JS keywords" + "<br>");
document.write("<br>");
document.write("<br>");
                                // MATH EXPRESSIONS 
// 1 & 2
var equation = prompt("Enter The Equation below for Addition");
var firstNum = equation.slice(0, 1);
var lastNum = equation.slice(2);
for (var i = 0 ; i < equation.length ; i++) {
    if (equation[i] === "+") {
        var operation = (+firstNum) + (+lastNum);
        document.write("The sum of " + firstNum + " and " + lastNum + " is " + operation);
        break
    }
    else if (equation[i] === "-"){
        var operation = (+firstNum) - (+lastNum);
        document.write("The subtraction of " + firstNum + " and " + lastNum + " is " + operation);
        break
    }
    else if (equation[i] === "*"){
        var operation = (+firstNum) * (+lastNum);
        document.write("The product of " + firstNum + " and " + lastNum + " is " + operation);
        break
    }
    else if (equation[i] === "/"){
        var operation = (+firstNum) / (+lastNum);
        document.write("The division of " + firstNum + " and " + lastNum + " is " + operation);
        break
    };
    else if (equation[i] === "%"){
        var operation = (+firstNum) % (+lastNum);
        document.write("The modulus of " + firstNum + " and " + lastNum + " is " + operation);
        break;
    };
    else{
        alert("Please give an operator")
    };
};
document.write("<br>");
document.write("<br>");
// 3
var declared;
document.write("Value after variable declaration is: " + declared + "<br>");
declared = 8;
document.write("Initial value: " + declared + "<br>");
declared += 1;
document.write("Value after increment is: " + declared + "<br>");
declared += 7;
document.write("Value after addition is: " + declared + "<br>");
declared -= 1;
document.write("Value after decrement is: " + declared + "<br>");
declared %= 3;
document.write("The remainder is : " + declared + "<br>");
document.write("<br>");
document.write("<br>");
// 4
var ticket = 600;
var calculation = ticket * 5;
document.write("Total Cost of buying 5 movie tickets are " + calculation + "PKR" + "<br>");
document.write("<br>");
document.write("<br>");
// 5
var num = +prompt("Enter a number to generate it's table");
for (var i = 1 ; i <= 12 ; i++) {
    var table = num * i;
    document.write(num + " x " + i + " = " + table + "<br>"); 
};
document.write("<br>");
document.write("<br>");
// 6
var temperature = +prompt("Enter the Temperature for conversion");
var unit = prompt("Enter the conversion unit \n i.e F or C");
unit = unit.toUpperCase();
if (unit === "F") {
    var fahrenheit = ((temperature *9)/5) + 32;
    document.write(temperature + "°C is " + fahrenheit + "°F")
};
if (unit === "C") {
    var celsius = ((temperature - 32) * 5) / 9;
    document.write(temperature + "°F is " + celsius + "°C")
};
document.write("<br>");
document.write("<br>");
// 7
var _item = prompt("Quantity of Item 1?");
var _item2 = prompt("Quantity of Item 2?");
document.write("Price of Item 1 is 650" + "<br>");
document.write("Quantity of Item 1 is " + _item + "<br>");
document.write("Price of Item 2 is 100" + "<br>");
document.write("Quantity of Item 2 is " + _item2 + "<br>");
document.write("Shipping Charges: 100");
document.write("<br>");
document.write("<br>");
var _total = (_item * 650) + (_item2 * 100) + 100;
document.write("Total Cost of your Order is " +_total + "<br>");
document.write("<br>");
document.write("<br>");
// 8
var _obtainedMarks = prompt("Enter Obtained Marks");
var _totalMarks = prompt("Enter Total Marks");
document.write("Obtained Marks :" + _obtainedMarks + "<br>");
document.write("Total Marks:" + _totalMarks + "<br>");
var Percentage = (_obtainedMarks / _totalMarks) * 100;
document.write("Percentage:" + Percentage + "%" + "<br>");
document.write("<br>");
document.write("<br>");
// 9
var $conversion =  (10 * 104.80) + (25 * 28);
document.write("Total Currency in PKR is " + $conversion + "<br>");
document.write("<br>");
document.write("<br>");
// 10
var _number$ = 7;
var toCalculate = ((_number$ + 5) * 10) / 2;
document.write(toCalculate + "<br>");
document.write("<br>");
document.write("<br>");
// 11
var currentYear = 2020;
var birthYear = prompt("Enter your Birth year");
var age = currentYear - birthYear;
document.write("Your Age is " + age);
document.write("<br>");
document.write("<br>");
// 12
var radius = prompt("Enter Radius of Circle for Circumference & Area");
var Circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);
document.write("The Circumference is " + Circumference + "<br>"); 
document.write("The Area is " + area + "<br>");
document.write("<br>");
document.write("<br>");
// 13
var dairy = prompt("Snack");
var currentAge = prompt("Current AGE");
var esitimatedAge = prompt("Estimated AGE");
var required = prompt("Your Requirement per Day");
var totalRequirement = ((esitimatedAge - currentAge) * 365) * required;
document.write("“You will need " + totalRequirement + " " + dairy + " to last you until the ripe old age of " + esitimatedAge + "<br>");
document.write("<br>");
document.write("<br>");
                                    // MATH EXPRESSIONS 
// 1
var _value = prompt("Enter a Number");
document.write("Result:" + "<br>" + "The value of is :" + _value + "<br>");
document.write("<br>");
document.write("The value of ++a is: " + (++_value) + "<br>");
document.write("Now the value of a is: " + _value + "<br>");
document.write("<br>");
document.write("The value of a++ is: " + (_value++) + "<br>");
document.write("Now the value of a is: " + _value + "<br>");
document.write("<br>");
document.write("The value of --a is: " + (--_value) + "<br>");
document.write("Now the value of a is: " + _value + "<br>");
document.write("<br>");
document.write("The value of a-- is: " + (_value--) + "<br>");
document.write("Now the value of a is: " + _value + "<br>");
document.write("<br>");
document.write("<br>");
// 2
var a = 2, b = 1;
var $result_ = --a - --b + ++b + b--;
document.write($result_ + "<br>");
document.write("At first a is pre-decremented resulting 1 as an answer;" +"<br>" + "Then b is also pre-decremented resulting 0 as an answer" + "<br>");
document.write("Followed by the pre-decremation of b now its pre-incremented and is changed to 1 again" + "<br>" + "& at last b is post-incremented resulting 0 after the equation is solved.");
document.write("<br>");
document.write("<br>");
// 3
var greetings = prompt("Hello Sire! \nYour Name?");
alert("Welcome " + greetings + "!");
document.write("<br>");
document.write("<br>");
// 4
var num = +prompt("Enter a number to generate it's table");
if (num == "") {
    for (var i = 1 ; i <= 12 ; i++) {
        var table = 5 * i;
        document.write(5 + " x " + i + " = " + table + "<br>"); 
    }
}
else{
    for (var i = 1 ; i <= 12 ; i++) {
        var table = num * i;
        document.write(num + " x " + i + " = " + table + "<br>"); 
    };
}
document.write("<br>");
document.write("<br>");
// 5
var subject1 = prompt("Enter your First subject name");
var subMarks1 = +prompt("Enter your Marks");
var subject2 = prompt("Enter your Second subject name");
var subMarks2 = +prompt("Enter your Marks");
var subject3 = prompt("Enter your Third subject name");
var subMarks3 = +prompt("Enter your Marks");
document.write("<br>");
document.write("<br>");
                                    USER INPUT & CONDITIONAL STATEMENT 
// 1
var city = prompt("Enter Your City name");
city = city.toLowerCase();
if (city === "karachi") {
    alert("Welcome to city of lights");
}
// 2
var gender = prompt("Enter your Gender");
gender = gender.toLowerCase();
if (gender === "male") {
    alert("Good Morning! Sir.");
}
else if (gender === "female") {
    alert("Good Morning! Ma’am.");
}
// 3
var signal = prompt("Enter a Signal Light color");
signal = signal.toLowerCase();
if (signal === "red") {
    alert("Must STOP!");
}
else if (signal === "yellow") {
    alert("Ready to Move.");
}
else if (signal === "green") {
    alert("Move Now.");
}
// 4
var fuel = prompt("Enter the remaining Fuel in your vehicle");
if (fuel <= 0.25) {
    alert("Please refill the fuel in your car.");
}
else if (fuel > 0.25) {
    alert("You're Good to GO!");
}
5
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
// 5
var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
}
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} 
if (true){
    alert("True");
}
// if (false){
//     alert("False");
// }
if("car" < "cat"){
    alert("car is smaller than cat");
}
// 6
var obtainedMarks1 = +prompt("Obtained Marks");
var totalMarks1 = +prompt("Total Marks");
var _Percentage = (obtainedMarks1 / totalMarks1) * 100;
document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("Total Marks : " + totalMarks1 + "<br>");
document.write("Marks Obtained : " + obtainedMarks1 + "<br>");
document.write("Percentage : " + _Percentage + "%" + "<br>");
if (_Percentage >= 80) {
    document.write("Grade : A-ONE" + "<br>");
    document.write("Remarks : Excellent");
}
if (_Percentage >= 70 && _Percentage < 80) {
    document.write("Grade : A" + "<br>");
    document.write("Remarks : Good");
}
if (_Percentage >= 60 && _Percentage <70) {
    document.write("Grade : B" + "<br>");
    document.write("Remarks : You Need To Improve.");
}
if (_Percentage < 60) {
    document.write("Grade : F" + "<br>");
    document.write("Remarks : Sorry!");
}
document.write("<br>");
document.write("<br>");
// 7
var secretNum = 6;
var userGuess = prompt("Enter a Number Ranging from 1-10")
if (userGuess == secretNum + 1) {
    alert("Close enough to the correct answer.");
}
else if(userGuess == secretNum){
    alert("“Bingo! Correct Answer.");
}
else {
    alert("Oops! Try Again.");
}
// 8
var check =  prompt("Enter a Number to Check whether it's Divisible by 3 or not");
if (check % 3 == 0) {
    alert("Yes it is.");
}
else {
    alert("No it's not.");
}
// 9
var typeNum = prompt("Enter a Number to Check whether it's Even or Odd");
if (typeNum % 2 == 0) {
        alert("EVEN");
}
else {
    alert("ODD");
}
// 10
var weather = prompt("Hey! What's the Temperature Outside?");
if (weather > 40) {
    alert("It is too hot outside.");
}
if (weather > 30 && weather < 40) {
    alert("The Weather today is Normal.");
}
if (weather > 20 && weather < 30) {
    alert("Today’s Weather is cold.");
}
if (weather > 10 && weather < 20) {
    alert("OMG! Today’s weather is so Cold.");
}
if (weather < 10) {
    alert("ERR! It's Feezing Outside.");
}
// 11
var digit1 = +prompt("Enter 1ST NO.");
var _operator = prompt("Enter Operator");
var digit2 = +prompt("Enter 2ND NO.");
if (_operator == "+") {
    alert(digit1 + digit2);
}
if (_operator == "-") {
    alert(digit1 - digit2);
}
if (_operator == "*") {
    alert(digit1 * digit2);
}
if (_operator == "/") {
    alert(digit1 / digit2);
}
if (_operator == "%") {
    alert(digit1 % digit2);
}
                            IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 

1
document.write("<br>");
document.write("<br>");
// 2
var $firstNum  = prompt("Enter a Number.");
var $secondNum  = prompt("Enter 2ND Number.");
if ($firstNum > $secondNum) {
    alert("First Number is Greater than second");
}
else {
    alert("second Number is Greater than First");
}
// 3
var _digit = prompt("Enter An Integer");
if (_digit >= 1) {
    alert("+ve");
}
if (_digit < 0) {
    alert("-ve");
}
if (_digit == 0) {
    alert("zero");
}
// 4
var character = prompt("ENTER A CHARACTER");
character = character.toLowerCase();
if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    alert("It's a VOWEL");
}
else {
    alert("It's a CONSONANT.");
}
// 5
var correctPass = "hello123";
var pass = prompt("ENTER PASSWORD.");
pass = pass.toLowerCase();
if (correctPass === pass) {
    alert("Correct Password!");
} 
else {
    alert("Invalid Password.");
}
// 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
}
else {
    greeting = "Good evening";
    alert(greeting);
}
// 7
var time = prompt("HEY! What's the Time? \nIn 24HR Format.");
if (time >= 0000 && time < 1200) {
    alert("Good Morning!");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
}
else if (time >= 2100 && time < 2359) {
    alert("Good Night!");
}
                                ARRAYS 
// 1
var studentsList = [];
// 2
var _studentsList = [ , ];
// 3
var stringArray = ["hello" ,"hey"];
// 4
var numberArray = [1 , 2, 3];
// 5
var boolArray = [True ,False];
// 6
var mixedArray = [1 ,"hello" ,True];
// 7
var qualification = [" ", "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h1>Qualifications:</h1>")
for (var i = 1; i < qualification.length; i++) {
    document.write(i + ") " + qualification[i] + "<br>");
}
// 8
var ARRAY = [];
var ARRAY1 = [];
ARRAY[0] = prompt("1st Student");
ARRAY1[0] = +prompt("Marks");
ARRAY[1] = prompt("2nd Student");
ARRAY1[1] = +prompt("Marks");
ARRAY[2] = prompt("3rd Student");
ARRAY1[2] = +prompt("Marks");
document.write("Score of " + ARRAY[0] + " is " + ARRAY1[0] + ". Percentage = " + (((ARRAY1[0]) / 500) * 100) + "% <br>");
document.write("Score of " + ARRAY[1] + " is " + ARRAY1[1] + ". Percentage = " + (((ARRAY1[1]) / 500) * 100) + "% <br>");
document.write("Score of " + ARRAY[2] + " is " + ARRAY1[2] + ". Percentage = " + (((ARRAY1[2]) / 500) * 100) + "% <br>");
document.write("<br>");
document.write("<br>");
// 9
var ARRAY3 = [];
var color1 = prompt("Enter color which you want to add at the begining of an array:");
ARRAY3.unshift(color1);
// document.write(ARRAY3);
var color2 = prompt("Enter color which you want to add at the end of an array:");
ARRAY3.push(color2);
// document.write(ARRAY3);
var color3 = prompt("Enter the first color which you want to add at the begining of an array:");
var color4 = prompt("Enter the second color which you want to add at the begining of an array:");
ARRAY3.unshift(color4);
ARRAY3.unshift(color3);
// document.write(ARRAY3);
ARRAY3.pop();
// document.write(ARRAY3);
var color5 = prompt("Enter the color");
var index = prompt("Enter it's index");
ARRAY3.splice(index,0,color5);
// document.write(ARRAY3);
var _index = prompt("Enter a index at which you want to delete the colors");
var indexQuantity = prompt("How many you want to delete");
ARRAY3.splice(_index,indexQuantity)
document.write(ARRAY3);
document.write("<br>");
document.write("<br>");
// 10
var scoresOfStudents = [320, 230, 480, 120];
document.write(scoresOfStudents + "<br>");
scoresOfStudents = scoresOfStudents.sort();
document.write(scoresOfStudents+ "<br>");
document.write("<br>");
document.write("<br>");
// 11
var citiesList = ["Karachi", "Lahore", "Quetta", "Islamabad", "Peshawar"];
document.write(citiesList + "<br>")
var selectedCities;
selectedCities = citiesList.slice(0,2);
document.write("selectedCities:");
document.write(selectedCities);
document.write("<br>");
document.write("<br>");



