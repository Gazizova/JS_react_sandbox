// My

const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.onchange = function() {
    let choice = select.value;
    if(choice == "February"){
        createCalendar(28, choice);
    }else if(choice == "June"||choice == "April"||choice == "September"||choice == "November") {
        createCalendar(30, choice);
    } else
        createCalendar(31, choice);
    }

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

// correct solution:

select.onchange = function() {
 let choice = select.value;
 let days = 31;
 if(choice === 'February') {
 days = 28;
 } else if(choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
 days = 30;
 }

 createCalendar(days, choice);
}


///More color choices

var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;

  // ADD SWITCH STATEMENT
switch(choice){
case "white":
update('white', 'black');
break;
case "black":
update('black', 'white');
break;
case "purple":
update('purple', 'black');
break;
case "yellow":
update('yellow', 'black');
break;
case "psychedelic":
update('lime', 'purple');
break;
 }
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}