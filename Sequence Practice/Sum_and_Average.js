//Reads 5 Random 2 Digit values ,then find their sum and the average

let a = Math.floor(Math.random()*100);
let b = Math.floor(Math.random()*100);
let c = Math.floor(Math.random()*100);
let d = Math.floor(Math.random()*100);
let e = Math.floor(Math.random()*100);

console.log("Value of a is :"+a);
console.log("Value of b is :"+b);
console.log("Value of c is :"+c);
console.log("Value of d is :"+d);
console.log("Value of e is :"+e);

let sum = a+b+c+d+e;
let average = sum/5;

console.log("The sum of a,b,c,d,e is : "+sum);
console.log("The average of all the values is : "+average);