// var userInput=prompt();
// var allLower = userInput.toLowerCase();
// console.log(allower)

// var x = "HELLO WORLD";
// x = x.toLowerCase();
// console.log(x)

// var y = "Hello World";
// y = y.toUpperCase();
// console.log(y);

// var originalVariable = "Hello world";
// var lowerCaseVariable = originalVariable.toLowerCase();
// console.log(toLowerCase);

// var myArray = ["Hello", "World", "Example"];
// var arrayElement = myArray[2];
// var lowerCaseVariable = arrayElement.toLowerCase();
// console.log(lowerCaseVariable);

// var myString = "Hello World";
// var upperCaseString = myString.toUpperCase();

// alert(upperCaseString);

// var cityName = "kaRacHi";
// var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// console.log(capitalizedName);

////Chapter 22 - 25 (Strings)

// var sameWords = "captain";
// var slicedString = sameWords.slice(1, 3);

// console.log(slicedString);

// var sameWords = "captain";
// var characterCount = sameWords.length;
// console.log(characterCount);

// var animal = "elephant";
// var seg = animal.slice(1, 5);

// console.log(seg);

// var myString = "Hello World";
// var characterCount = myString.length;

// console.log(characterCount);

// var myString = "Example String";
// var characterCount = myString.length;
// var slicedString = myString.slice(1, -3);
// console.log(characterCount);
// console.log(slicedString);

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx)

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);

// var text = "Let it go, let it go!";
// var lastInstanceIndex = text.lastIndexOf("go");
// var indx = text.slice(lastInstanceIndex).indexOf("g") + lastInstanceIndex;
// console.log(indx);

// var myString = "Hello World";
// var indexNum = 6;

// if (indexNum >= 0 && indexNum < myString.length) {
//   console.log("okay")  
// }

// var myString = "abcde";
// var characterAtIndex2 = myString.charAt(2);

// console.log(characterAtIndex2);

// var str = "Hello World";
// var x = str.charAt(str.length - 1);
// console.log(x);

// var input = "example string";
// var cha = input.charAt(4);
// console.log(cha);

// var input = "example string";
// var cha = input[4];

// console.log(cha);

// var x = "apple banana avocado";
// var y = x.replaceAll("a", "z");
// console.log(y);

//Chapter 26 (Rounding Numbers)

// var number = 3.7;
// var roundedNumber = Math.round(number);
// console.log(roundedNumber);

// var origNum = 4.2;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);

// var originalNumber = 3.7;
// var roundedNumber = Math.round(originalNumber);
// console.log(roundedNumber);

//Chapter 27 (Random Numbers)

// var randomNumber = Math.random(); 
// var convertedNumber = Math.floor(randomNumber * 50) + 1;
// console.log(convertedNumber);

// var randomNumber = Math.random();
// console.log(randomNumber);


// function rollDice() {
//     var diceNumber = Math.floor(Math.random() * 6) + 1;
//     return diceNumber;
//   }
//   var diceResult = rollDice();
//   console.log("The dice rolled: " + diceResult);


// function tossCoin() {
//     var randomNumber = Math.random();
//     var tossResult = randomNumber < 0.5 ? "head" : "tail";
//     return tossResult;
//   }
//   var coinResult = tossCoin();
//   console.log("The coin landed on: " + coinResult);
  
  ////Chapter 28, 29 (Converting Strings)

//   var str = "42";
// var num = parseInt(str);
// console.log(num);

// function stringToInteger(str) {
//     var num = parseInt(str);
//     return num;
//   }
//   var str = "123";
//   var result = stringToInteger(str);
//   console.log(result); 

// var decimalStr = "3.14";
// var integerNum = parseInt(decimalStr);
// console.log(integerNum);

///Chapter 30 (Controlling the length of

// var num = 3.141592653589793;
// var newNum = num.toFixed(4);
// console.log(newNum);

// var num = 3.141592653589793;
// num = Number(num.toFixed(2));
// console.log(num);

// var num = 4.565754455;
// if (num.toFixed(2).toString().length > 4) {
//     console.log(num)
//   }
  
// var num = 3.14159265358979323846;
// var roundedNum = num.toFixed(2).toString();
// alert(roundedNum);

//Chapter 31 - 34 (Date & Time)

// var num = 3.1415926535;
// var roundedNum = num.toFixed(2).toString();
// alert(roundedNum);

// var dStr = new Date().toString();
// console.log(dStr)

// var d = new Date();
// var day = d.toLocaleDateString('en-US', { weekday: 'long' });
// console.log(day);

// var d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var index = d.getDay();
// var currentDay = d[index];
// alert(currentDay);

// var currentDate = new Date();
// var year = currentDate.getFullYear();
// var month = currentDate.getMonth() + 1; 
// var day = currentDate.getDate();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();
// var milliseconds = currentDate.getMilliseconds();
// var datePart = year + '-' + month + '-' + day;
// console.log(datePart)

// var later = new Date(2020, 11, 31);
// console.log(later)

// var myDate = new Date(1992, 1, 2);
// console.log(myDate)

// var referenceDate = new Date();  
// var beginning1980 = new Date(1980, 0, 1);
// var elapsedMilliseconds = referenceDate - beginning1980;
// alert(elapsedMilliseconds);

// var myDate = new Date(); 
// myDate.setFullYear(2023);
// console.log(myDate);

// function calculateAge(birthdate) {
//     var currentDate = new Date();
//     var birthDate = new Date(birthdate); 
//     var age = currentDate.getFullYear() - birthDate.getFullYear();
//     var monthDiff = currentDate.getMonth() - birthDate.getMonth(); 
//     console.log(monthDiff)
// }  
// calculateAge();

///Chapter 35 - 37 (Functions)

// function calculateAge(birthdate) {
//     var currentDate = new Date();
//     var birthDate = new Date(birthdate); 
//     var age = currentDate.getFullYear() - birthDate.getFullYear();
//     var monthDiff = currentDate.getMonth() - birthDate.getMonth(); 
//     if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age; 
//   }
//   var birthdate = "1990-05-15";
//   var age = calculateAge(birthdate); 
//   console.log(age);
  
// function concatenateStrings(string1, string2) {
//     var result = string1 + string2;
//     return result; 
//   }
//   var str1 = "Hello";
//   var str2 = "World";
//   var concatenated = concatenateStrings(str1, str2);
//   console.log(concatenated);
  
// function calculateAge(dateOfBirth) {
//     var currentDate = new Date(); 
//     var birthDate = new Date(dateOfBirth); 
//     var age = currentDate.getFullYear() - birthDate.getFullYear();
//     var monthDiff = currentDate.getMonth() - birthDate.getMonth(); 
// }  


// function checkWordPresence(word, array) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] === word) {
//         return true;
//       }
//     }
    
//     return false;
//   }
//   var wordsArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
//   var wordToFind = 'hassan';
  
//   var isPresent = checkWordPresence(wordToFind, wordsArray);
//   console.log(isPresent);
  

// function repeatLetter(letter, times) {
//     return letter.repeat(times);
//   }
//   var repeatedLetters = repeatLetter('a', 10);
//   console.log(repeatedLetters);

//   var myArray = ['a', 'b', 'c', 'd', 'e'];
//   var reversedArray = myArray.reverse(myArray);
//   console.log(reversedArray);

//Chapter 38 (Local vs. Global)

// function calculateSum(num1, num2) {
//     var result = num1 + num2; 
    
//     console.log("The sum is: " + result);
//   }
//   calculateSum(5, 7);


// var globalVariable = "Hello, world!"; 

// function accessGlobalVariable() {
//   console.log(globalVariable); e
// }
// accessGlobalVariable();

//Chapter 39, 40 (Switch Statements)

// var fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("Selected fruit is apple.");
//     break;
//   case "banana":
//     console.log("Selected fruit is banana.");
//     break;
//   case "orange":
//     console.log("Selected fruit is orange.");
//     break;
//   default:
//     console.log("Selected fruit is not recognized.");
//     break;
// }

// var cityName = prompt("Enter a city name:"); 
// cityName = cityName.toLocaleLowerCase()

// switch (cityName) {
//   case "london":
//     alert("You entered London!");
//     break;
//   case "paris":
//     alert("You entered Paris!");
//     break;
//   case "tokyo":
//     alert("You entered Tokyo!");
//     break;
//   default:
//     alert("City name not recognized.");
//     break;
// }
