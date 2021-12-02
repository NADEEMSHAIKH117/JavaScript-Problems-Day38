//Write a program that takes day and month from the command line and prints true if
//day of month is between March 20 and June 20, false otherwise.

var day = window.prompt("Enter day: " );
var month = window.prompt("Enter Month: ");

if((day<=20 && month<=6) && (day>=20 && month>=3) && (day<=31))
{
    console.log("True");
}
else
{
    console.log("False");
}