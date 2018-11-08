document.write("<br> <h3> Date:</h3> <hr>")

var date = new Date();


text = ("Month is: " + date.getMonth());
text += ("\nDay is: " + date.getDate());
// document.write("Month is: " + date.getFullMonthName());
alert (text);