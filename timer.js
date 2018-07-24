var id = setInterval("myFunc()", 1000);

var counter = 0;

function myFunc() {
    counter++;
    alert("Секунд прошло - " + counter);
    if(counter == 1) clearInterval(id);
}

document.write("<br> <h3> Arrays:</h3> <hr>")
var counter_2 = 0;
function timer() {
    counter_2++;
    document.getElementById("count").innerText = counter_2;
    setTimeout("timer()", 1000);

}