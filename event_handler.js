document.write("<br> <h3> Event handler:</h3> <hr>")

function button_click(button) {
    var person ;
    person=prompt("Hi, what's your name?");
    alert("Hello, " + person + "!!! This button name is: " + button.name + " "+ button.value);

}
var counter_x = 0;
function counter(element) {
    counter_x++;
    element.innerHTML = "На этот текст было наведено " + counter_x + " раз";

}