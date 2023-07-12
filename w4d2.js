
// I. VARIABLES & DATATYPES

// A. Q + A
/* 
1. How do we assign a value to a variable?
    use the assignment operator "="
2. How do we change the value of a variable?
    use the assignment operator "="
3. How do we assign an existing variable to a new variable?
    use the assignment operator "="
4. Remind me, what are declare, assign, and define?
    - declare is used to introduce a variable for the first time
    - assign is used to give an existing variable a value
define is used to give an initial value to a variable
5. What is pseudocoding and why should you do it?
    - Psuedocoding is writing code in natural language instead of in an actual programming language. You should do it to create a template for writing code in a specific language
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
*/


// B. STRINGS
/*
For all other questions that involve writing code, you can solve them via the following instructions.

1. Create a variable called firstVariable
2. Assign it the value of the string "Hello World"
3. Change the value of this variable to some number
4. Store the value of firstVariablein a new variable called secondVariable
5. Change the value of secondVariableto any string.
6. What is the value of firstVariable?
7. Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean
*/
console.log(`B. STRINGS`)
let firstVariable;
firstVariable = "Hello World";
firstVariable = 27;
let secondVariable = firstVariable;
secondVariable = "Goodbye Earth";
console.log(firstVariable); // 27
const yourName = 'Cynthia'
console.log(`Hello, my name is ${yourName}`);


// C. BOOLEANS
/*
Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
*/
console.log(`\nC. BOOLEANS`)
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a !== b);
console.log(c !== d);
console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log((a < b) !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log((a === a) !== d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');


// D. THE FARM
/*
1. Declare a variable animal. Set it to be either "cow" or something else
2. Write code that will print out "mooooo" if the it is equal to cow
3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
4. Commit
*/
console.log(`\nD. THE FARM`)
let animal = 'dog';
if (animal === 'cow'){
    console.log('mooooo');
}
else{
    console.log(`Hey! You're not a cow.`);
}

// E. DRIVER'S ED
/*
1. Make a variable that holds a person's age; be semantic
2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
*/
console.log(`\nE. DRIVER'S ED`)
let age;
if (age >= 16){
    console.log('Here are the keys!');
}
else{
    console.log(`Sorry, you're too young.`);
}

// ========================================
console.log(`\n========================================`)
console.log(`II. LOOPS`)
// II. LOOPS

// A. THE BASICS
/*
1. Write a loop that will print out all the numbers from 0 to 10, inclusive
2. Write a loop that will print out all the numbers from 10 up to and including 400
3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
*/
console.log(`\nA. THE BASICS`)
for (let i = 0; i <= 10; i++){
    console.log(i);
}
for (let i = 10; i <= 400; i++){
    console.log(i);
}
for (let i = 12; i <= 4000; i += 3){
    console.log(i);
}

// B. GET EVEN
/*
1. Print out the numbers that are within the range of 1 - 100
2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/
console.log(`nB. GET EVEN`)
for (let i = 1; i < 100; i++){
    if (i % 2 == 0){
        console.log(`${i} is an even number`);
    }
    else{
        console.log(i);
    }
}

// C. GIVE ME FIVE
/*
1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
3. For numbers divisible by both three and five, be sure your code prints both messages
*/
console.log(`nC. GIVE ME FIVE`)
for (let i = 0; i <= 100; i++){
    //console.log(i)
    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log(`I found a ${i}. High five! I found a ${i}. Three is a crowd`);
    }
    else if (i % 5 == 0){
        console.log(`I found a ${i}. High five!`);
    }
    else if (i % 3 == 0){
        console.log(`I found a ${i}. Three is a crowd`)
    }
}

// D. SAVINGS ACCOUNT
/*
1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

Check your work! Your bank_account should have $55 in it.

2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

Check your work! Your bank_account should have $10,100 in it.
*/
console.log(`nD. SAVINGS ACCOUNT`)
let i = 1;
let bank_account = 0;
while (i <= 10){
    bank_account += i;
    i++;
}
console.log(bank_account);

let j = 1;
bank_account = 0;
while (j <= 100){
    bank_account += j;
    j++;
}
bank_account *= 2;
console.log(bank_account);

// ========================================
// III. ARRAYS AND CONTROL FLOW
// A. TALK ABOUT IT:
/*
**1. What are the things in an array called?
    items or elements
**2. Do Arrays guarantee those things will be in order?
    no
**3. What real-life thing could you model with an array?
    a list of students' names
*/

// B. EASY DOES IT
/*
1. Create an array that contains three quotes and store it in a variable called quotes

const quotes = [
    'He who knows something knows that he knows nothing.',
    'Spread love everywhere you go',
    'One small step for man, a giant leap for mankind'
    ]
*/

// C. ACCESSING ELEMENTS
/*
Given the following array const randomThings = [1, 10, "Hello", true]

1. How do you access the 1st element in the array?
2. Change the value of "Hello"to "World"
3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings.splice(2,1, "World");
console.log(randomThings)
*/

// D. CHANGE VALUES
/*
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

1. What would you write to access the 3rd element of the array?
2. Change the value of "Github" to "Octocat"
3. Add a new element, "Cloud City" to the array

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]);
ourClass.splice(4, 1, "Octocat");
// console.log(ourClass);
ourClass.push("Cloud City");
// console.log(ourClass);
*/

// E. MIX IT UP
/*
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
2. Remove the 5from the beginning of the array.
3. Add the string "Bob Marley"to the beginning of the array.
4. Remove the string of your choice from the end of the array.
5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

const myArray = [5, 10, 500, 20];
myArray.push("Aegon", "Cat");
// console.log(myArray);
myArray.shift();
// console.log(myArray);
myArray.unshift("Bob Marley");
// console.log(myArray);
myArray.pop();
// console.log(myArray);
myArray.reverse();
// console.log(myArray);
// the .reverse() method returns the value of the array in reverse order
*/

// F. BIGGIE SMALLS
/*
Create a variable that contains an integer.

Write an if ... elsestatement that:

1. console.log()s "little number" if the number is entered is less than 100
2. console.log()s big numberif the number is greater than or equal to 100.

let num = 27;
if (num < 100){
    console.log("little number");
}
else {
    console.log("big number");
}
*/

// G. MONKEY IN THE MIDDLE
/*
Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".

let num = 5;
if (num < 5) {
    console.log("little number");
}
else if (num > 10) {
    console.log('big number');
}
else {
    console.log('monkey');
}
*/

// H. WHAT'S IN YOUR CLOSET
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

/*
1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
5. In the same way, access one item from Thom's pants array.
Access one item from Thom's accessories array.
6. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset);
kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);
let shirt = thomsCloset[0][0];
let pants = thomsCloset[1][1];
console.log(`Thom is looking fierce in a ${shirt}, ${pants} and ${thomsCloset[2][1]}`);
thomsCloset[1][2] = "Footie Pajamas";
// console.log(thomsCloset);
*/

// ========================================
// IV. FUNCTIONS
/*
// B. printCool
function printCool(name){
    console.log(`${name} is cool`);
}
printCool('Cynthia');

// C. calculateCube
function calculateCube(num){
    console.log(num ** 3);
}
calculateCube(5);

// D. isVowel
function isVowel(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowel = str.toLowerCase();
    if (vowels.includes(vowel)){
        return true;
    }
    else {
        return false;
    }
}
console.log(isVowel('a'));
console.log(isVowel('e'));
console.log(isVowel('Z'));
console.log(isVowel('x'));
console.log(isVowel('U'));

// E. getTwoLengths
function getTwoLengths(str1, str2){
    return ([str1.length, str2.length]);
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths
function getMultipleLengths(arr){
    let new_arr = [];
    for (let i = 0; i < arr.length; i++){
        new_arr.push(arr[i].length);
    }
    return new_arr;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
function maxOfThree(num1, num2, num3){
    let numArr = [num1, num2, num3];
    numArr.sort();
    return numArr[numArr.length - 1];
}
console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(7, 7, 7));
console.log(maxOfThree(12, 12, 1));

// H. printLongestWord
function printLongestWord(arr){
    let longest_word = ''
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > longest_word.length){
            longest_word = arr[i];
        }
    }
    return longest_word;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
*/


// ========================================
// V. OBJECTS

// A. MAKE A USER OBJECT
/*
1. Create an object called user.
2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

B. UPDATE THE USER.
1. Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
2. Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

C. ADDING KEYS AND VALUES
You have decided to add your user's location to the data that you want to collect.
1. Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

D. SHOPAHOLIC
1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
4. Console.log just the "Merino jodhpurs" from the purchasedarray.

E. Object-within-object
1. Write a friend object into your userobject and give the friend a name, age, location, and purchased array (empty for now)
2. Console.log just the friend's name
3. Console.log just the friend's location
4. CHANGE the friend's age to 55
5. The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
6. The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchased array.
7. Console.log just "A latte" from the friend's purchasedarray.
*/

const user = {
    name: 'Cynthia',
    email: 'hello@world.org',
    age: '27',
    purchased: []
}

user.email = 'goodbye@earth.com';
user.age++;

user.location = 'Chicago';

user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhpurs');
console.log(user.purchased[2]);

user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: 'New York',
    purchased: []
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');
console.log(user.friend.purchased[1]);

// F. LOOPS
/*
1. Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
2. Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
*/

for (let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
}

// G. FUNCTIONS CAN OPERATE ON OBJECTS
/*
1. Write a single function updateUser that takes no parameters. When the function is run, it should:
2. it should increment the user's age by 1
3. make the user's name uppercase

The function does not need a returnstatement, it will merely modify the user object.
2. Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
*/

function updateUser(){
    const user = {
        name: '',
        age: 0
    }
    user.age++;
    user.name.toUpperCase();
}

function oldAndLoud(person){
    person.name.toUpperCase();
    person.age += 1;
}

const newUser = {
    name: 'Cynthia',
    age: 27
}
console.log(oldAndLoud(newUser));


