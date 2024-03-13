/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 8, 2024
Created August 21, 2023

*/




// ~ Variables (a name that we give to some data)
// -> constants, variables, logging, annotations
/**
 * The name of our school. (This syntax is convention for dev comments for next line's function)
 */
const schoolName = "Flatiron School";
// schoolName = "string" //this is not okay
console.log(schoolName);
let firstName = "Sakib";
firstName = "Will";
console.log(firstName);
    // By default, work with const
    // When const doesn't work, use let





// ~ Types
// -> undefined, null*, boolean, number, string
let lastName; //this value is now undefined beacuase it hasn't been assigned 
console.log(typeof(lastName));
let numStudents = null;
// null is the abscence of value but its something you're intentionally assigning
const sunny = true;
const rainy = false;
console.log(typeof(sunny));
// boolean is just true/false
const numBooks= 5;
console.log(typeof(numBooks));
//number pretty self explanatory
const topic = "JavaScript";
console.log(typeof(topic));
// concatenation and interpolation is possible with strings
const sentence = `We have ${numBooks} books.`; //interpolation
console.log(sentence);
console.log(sentence + " Isn't that great?"); //concatenation





// ~ Objects
// -> definition, bracket/dot notation, stringify
    //"A thing usually related to something in the real world that has multiple properties, like a cube which has a length a width and a volume, its a thing that cannot be decribed with just one value"
const cube = {
    height: 2,
    width: 2,
    volume: 8,
    color: "blue",
    "full-name": "Bob"
};

//Dot notation
console.log(cube.volume);
cube.volume = 10;
console.log(cube.volume);

//Bracket notation
console.log(cube["full-name"]);

console.log(JSON.stringify(cube));






// ~ Arrays
// -> definition, access, modification

//Arrays are lists of just data, and doesn't give names/types to data points - like how objects do
const numbers = [ 5, 6, 7, 8 ];
// access 
console.log(numbers[3]); //You'll get 8 because the call-up number starts with 0 ("zero indexed")
console.log(numbers.length);
numbers[2] = 10;
console.log(numbers);





// ~ Conditionals
// if, if-else, if-else-if-else, ternary
const isItSunny = true;

if (isItSunny) {
    console.log("It's sunny today!");
} else if (isRainy) {
    console.log("It's rainy.");
} else {
    console.log("It isn't sunny today :(");
};

// ternary syntax

isItSunny ? console.log("It's sunny!") : console.log("It is not sunny.");

const greeting = isItSunny ? "It's sunny!" : "It is not sunny.";
console.log(greeting);

// Switch use case : if you have a single variable that can be a range of values




// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous function

// FUNCTION: a formula or set of instructions that we can use, ex: console.log


/**
 * Greets someone and states mood
 * @param {string} name The person to greet
 * @param {string} mood The mood I'm in
 * @returns A greeting in string form
 */

function sayHello(name) {
    console.log(`Hello ${name}!`)
};
sayHello("Will");

function addOne(number) {
    return number + 1;
};
//return gives you an actual value you can call back, wheras console.log just prints message

console.log("hello"); //parenthesis let you take in an "input", here: input = hello
const names = [ "Sakib", "Zach", "Tiff", "Sarah" ];
names.forEach(name => console.log(`Hello ${name}.`));


// ~ Scope
// -> global, local, closures, function hoisting
//"the rules of accessability -- where am I allowed to access a variable or function or anything like that"
firstName = "Bob";

// This closure includes localVariable and all global variables
// if you call a function before you declare it, it's called hoisting "invocation before declaratoin"
localScope();

function localScope() {
    const localVariable = "Hi, I'm local!";
    console.log(localVariable);
}
//localScope();
// console.log(localVariable); ="local variable is not defined"

function localScope2() {
    console.log(localVariable);
}
//something that is global scope can be used in a local scope


// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.

function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  };
console.log(sum([1, 2, 3, 4, 5]));

// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.

function double(numbers) {
    let doubledNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        doubledNumbers.push(numbers[i] * 2);
      }
      return doubledNumbers;
    }
    console.log(double([1, 2, 3, 4, 5]));

// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.

function  lowercase(words) {
    let lowercasedWords = [];
    for (let i = 0; i < words.length; i++) {
    lowercasedWords.push(words[i].toLowerCase());
    }
    return lowercasedWords;
    }
console.log(lowercase(["HELLO", "WILL"]));
