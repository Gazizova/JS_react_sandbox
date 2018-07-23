document.write("<br> <h3> Cycles:</h3>")

for(i = 0; i < 10; i++){
    if(i%3 == 0 && i != 0) {
        document.write(i + "<br>")
        console.log(i)
    }
}
document.write("<br>")
x = 0
while (x < 5){
    document.write(x + "<br>");
    x++;
}
