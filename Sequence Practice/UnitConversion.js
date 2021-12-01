//a. 1ft = 12 in then 42 in = ? ft
let feet =12; //12 inchs means 1 feet
let inch =42;

let inchToFeet = inch / feet;
console.log("Unit conversion of 42 inches is : "+inchToFeet);

//b. Rectangular Plot of 60 feet x 40 feet in meters
let length = 60;
let width =40;
let oneMeterInFeet =3.28084;

console.log("plot length " + length + " feet");
console.log("plot width " + width + " feet");

let areaInfeet  = length*width;
console.log("Total rectangular plot in feet is : " + areaInfeet);

let areaInMeter = (areaInfeet/oneMeterInFeet);
console.log("Total Rectangular plot area in meter is : "+ areaInMeter);

//c. Calculate area of 25 such plots in acres
let acrearea = 25 * areaInMeter;
console.log("Area of 25 plots in meters is : " + acrearea);

// 1 acre = 4046.86 sq meters
let area = (acrearea / 4046.86);
console.log("Area of 25 plots in acers is : " + area);