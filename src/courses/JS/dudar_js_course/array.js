document.write("<br> <h3> Arrays:</h3> <hr>")

var arr = new Array("str", 1, 1.22, false)

document.write(arr[0] + "<br/>" + arr[2])

document.write("<br>");
    for(var i = 0; i < arr.length; i++){
        document.write(arr[i] + " ");

    };
    document.write("<br>")

document.write("<p> arr_0_start  <p>")
var arr_0 = [];
    for(i = 0; i<10; i++){
        arr_0[i]=i*3;

        document.write(arr_0[i] + " ");
    }
document.write("<br>")
document.write(arr_0);
document.write("<br>")
var sum =0;
    for(i = 0; i<arr.length; i++){
        sum += arr[i]

    };
 document.write("Сумма равна " +sum);

document.write("<br> <h3>Multidimensional Arrays:</h3> <hr>")

var arr_1 = new Array();
var arr_2 = new Array();
var arr_3 = new Array();

    for(var i = 0; i <= 5; i++) arr_1[i] = i;
    for(var i = 0, a = 15; i <= 5; i++, a++) arr_2[i] = a;
    for(var i = 0, a = 25; i <= 5; i++, a++) arr_3[i] = a;

var superArr = [arr_1, arr_2, arr_3];

document.write(superArr[2]);
document.write("<br/>");
document.write(superArr[2][3]);
document.write("<br/>" + "cycle for: ");

for(x = 0; x < arr.length; x++){
    for( j = 0; j < superArr[x].length; j++) document.write(superArr[x][j]);
    document.write("<br/>") }

document.write("<br> <h3>Multidimensional Arrays:</h3> <hr>");
// var arr_4 = [2, 3, 56,12,23,590,2];
// text_t = "Length: " + arr.length;
//
// document.write(text_t);

