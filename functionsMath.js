
document.write("<br> <h3> Math:</h3> <hr>")

var a;
var text = "PI = " +  Math.PI;
var test_date = new Date();

document.write("<br> <h3> Date:</h3> <hr>");

// document.write(text);
text += "\nE = " +  Math.E;
text += "\nabd = " +  Math.abs(-7);
text += "\nRandom: " + Math.random();
text += "\nfloor: " + Math.floor(5);
text += "\nRandom from 0 to 10: " + Math.floor(Math.random()*11);





a = ("Month is: " + test_date.getFullMonthName());
// document.write("Month is: " + date.getFullMonthName())
alert(a);