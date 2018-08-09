
// always global variables if do not use instructions let or const
for(let i = 0; i<5; i ++){
    testvar = 0;
    console.log(testvar);
}
document.write(testvar + "<div>")

// local variables in functions, if DO use instructions let or const:

for(let i = 0; i<5; i ++){
    let testLocal = 0;
    console.log(testLocal);
}
//document.write(testLocal + "<div>") // ERROR

// Local and global var
let scope = "глобальная"; // Объявление глобальной переменной
function checkscope() {
let scope = "локальная"; // Объявление локальной переменной с тем же именем
document.write(scope + "<div>"); // Используется локальная переменная, а не глобальная
}
checkscope();