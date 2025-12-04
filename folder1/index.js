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