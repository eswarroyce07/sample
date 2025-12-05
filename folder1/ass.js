//1
let func =(a,b,c,d)=>
{
return [a,b,c,d];
}
console.log(func(10,20,30));

//2
function stringOnly(...args)
{
return args.filter(arg=>typeof arg==="string");
}
console.log(stringOnly("sid",22,"raj",true,"hello"));

//3
function squareNumbers(...nums)
{
return nums.map(n=>n*n);
}
console.log(squareNumbers(2,3,4));

//4
function getEvenNumbers(...nums)
{
return nums.filter(n=>n%2===0);
}
console.log(getEvenNumbers(1,2,3,4,5,6));

//5
function collectNames(...names)
{
return names.map(name=>name.toUpperCase());
}
console.log(collectNames("sid","raj"));

//6
function makeUser(name,age,city)
{
return [{name,age,city}];
}
console.log(makeUser("Sid",22,"Delhi"));

//7
function addTen(...args)
{
return args.filter(arg=>typeof arg==="number").map(num=>num+10);
}
console.log(addTen(5,"sid",20,true,100));

//8
function createFruitArray(...fruits)
{
if(fruits.length===0)
    {
return ["apple","banana"];
}
return fruits;
}
console.log(createFruitArray());
console.log(createFruitArray("mango","orange"));