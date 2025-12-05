var a = 10;
let b = 20;
const c = 100;

console.log(a);
console.log(b);
console.log(c); 

function fun(){
    console.log("Named Function");
}

fun();

let funExp = function() {
    console.log("Expressed function");
}

funExp();

let arrowFun = ()=> {
    console.log("Arrow Function");
}

arrowFun();

(()=> {
    console.log("Callback and IIFE Function");
})();

const addtwonumbers = (parameter1,parameter2) => {
    console.log(parameter1,parameter2);

    let num1 =parameter1||10;
    let num2 =parameter2||20;
    let sum = num1 + num2;
    console.log(`the sum of two nummber is:${sum}`);
    //the sum of parameter1 value is value and parameter2 value is value 
};
const subtracttwonumbers = (parameter1,parameter2) => {
    console.log(parameter1,parameter2);

    let num1 =parameter1||10;
    let num2 =parameter2||20;
    let result = num1 - num2;
    console.log("the subtraction of two nummber is:",result);
};
const multitwonumbers = (parameter1,parameter2) => {
    console.log(parameter1,parameter2);

    let num1 =parameter1||10;
    let num2 =parameter2||20;
    let result = num1 *num2;
    console.log("the multipl of two nummber is:",result);
};
const dividetwonumbers = (parameter1,parameter2) => {
    console.log(parameter1,parameter2);

    let num1 =parameter1||10;
    let num2 =parameter2||20;
    let result = num1/num2;
    console.log("the divide of two nummber is:",result);
};
addtwonumbers(30,50);
subtracttwonumbers(80,40);
multitwonumbers(10,5);
dividetwonumbers(100,20);

// Q1: Create Array From Arguments
const createArray = (a, b, c) => [a, b, c];
console.log(createArray(1, 2, 3));

// Q2: Push Only Strings
const stringOnly = (...args) => args.filter(arg => typeof arg === 'string');

// Q3: Create Array of Squares
const squareNumbers = (...nums) => nums.map(n => n * n);
console.log(squareNumbers(2, 3, 4));

// Q4: Filter Even Numbers
const getEvenNumbers = (...nums) => nums.filter(n => n % 2 === 0);

// Q5: Create Array of Names
const collectNames = (...names) => names.map(name => name.toUpperCase());
console.log(collectNames("sid", "raj"));

// Q6: Convert Arguments Into Objects
const makeUser = (name, age, city) => [{ name, age, city }];

// Q7: Mix values, return only numbers
const addTen = (...args) => args.filter(arg => typeof arg === 'number').map(n => n + 10);

// Q8: Function with default values
const createFruitArray = (...args) => args.length ? args : ["apple", "banana"];