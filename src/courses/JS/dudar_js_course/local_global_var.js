document.write("<br> <h3> Local and global var:</h3> <hr>")

var global = 12;
var i = 10;
function test() {
    global ++;
    var i = 5;

}
test()
document.write("Global = " + global + ", variable i = " + i)
