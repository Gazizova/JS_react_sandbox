document.write("<br> <h3>Arrays Functions:</h3> <hr>");
var arr = [2, 3, 56, 12, 23, 590, 2];
text_t = "Length: " + arr.length;
text = "\nArray contains from: " + arr.join(' ,');
sort = "\nArray sorting: " + (arr.sort()).join(' ,');

document.write(text_t);
document.write(text);
document.write(sort);

