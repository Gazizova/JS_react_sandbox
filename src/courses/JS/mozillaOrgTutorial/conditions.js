const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor, font) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
  html.style.fontFamily = font;
}

select.onchange = function() {
  select.value === 'black'
    ? update('black', 'white', 'Impact,Charcoal,sans-serif')
    : update('white', 'black', 'Monospace');
};

const s = 'hello world'; // Значение строкового типа
const S = new String('Hello World'); // Объект String
// eval(s.toLowerCase());
for (let i = 0; i < 5; i++) {
  var testvar = 0;
  console.log(testvar);
}

document.write(testvar);
