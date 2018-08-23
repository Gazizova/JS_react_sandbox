document.write("<br> <h3> Cycles:</h3>  <hr>")

for(i = 0; i < 10; i++){
    if(i%3 == 0 && i != 0) {
        document.write(i + "<br>")
        console.log(i)
    }
}
document.write("<hr>")
x = 0
while (x < 5){
    document.write(x + "<br>");
    x++;
}
document.write("<hr>")
y = 4
do {
    document.write(y + "<br>");
}
while (y > 4){
    document.write(y + "<br>");
    y++;
}
