interface Person {
  firstName: string;
  lastName: string;
  added: Date;
}

function greeter(person: Person) {
  let div = document.createElement('div');
  div.innerHTML = 'Hello, ' + person.firstName + ' ' + person.lastName;
  return div;
}

let user1 = {
  firstName: 'Jane',
  lastName: 'User',
  added:
    new Date().getUTCDate() + '/' + new Date().getUTCMonth() + 1 + '/' + new Date().getUTCFullYear()
};
let user2: Person = { firstName: 'Jane2', lastName: 'User2', added: new Date() };
let user3 = { firstName: 'Bob', lastName: 'Star' };

document.body.appendChild(greeter(user1)).append(greeter(user2));

function userList(...args: any) {
  // debugger;
  let table = document.createElement('table');
  let tableBody = document.createElement('tbody');
  let values;
  let row;
  let cell;

  args.forEach(i => {
    values = Object.keys(i).map(key => i[key]);
    row = document.createElement('tr');
    values.forEach(y => {
      cell = document.createElement('td');
      cell.appendChild(document.createTextNode(y));
      row.appendChild(cell);
    });
    return tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  return document.body.appendChild(table);
}
userList(user1, user2, user3);

// Classes - Methods

// Public and Instance fields

class Person1 {
  id: number;
  name: string;
  isOld: number;
  age: Function;

  static _counter: number = 0;
  planet = 'Earth';

  constructor(name) {
    this.id = Person1._counter++;
    this.name = name;
  }
  returnAge(isOld) {
    isOld = this.isOld;
    return document.write(isOld);
  }
}

Person1.prototype.age = function() {
  return (this.isOld = Math.round(Math.random() * 100));
};

let mike = new Person1('mike');
mike.age();

let stef = new Person1('stef');

class Employee extends Person1 {
  _employeeId: number;

  constructor({ id, name }) {
    super(name);
    this._employeeId = id;
  }
}

let inna = new Employee({ name: 'inna', id: 3 });
inna.age();

console.log(stef, mike, inna);

class MyArray extends Array {
  // toString() {
  //   return '[PRIVATE]';
  // }
  // static get [Symbol.species]() {
  //   // doesn't work
  //   return Array;
  // }
}

let arr1 = new MyArray(1, 2, 3); // doesn't work

// Mixins and Classes
// Mixins are abstract classes or "templates for classes "

const Abstract = x =>
  class extends x {
    asJSON() {
      return JSON.stringify(this);
    }
  };

class Person3 extends Abstract(Object) {
  name: string;

  constructor(name) {
    super();
    this.name = name;
  }
}

let user3a = new Person3('Mike');
console.log(user3a.asJSON); // doesn't work

// Enums
enum ItemType {
  red,
  green,
  blue
}
/*
Example: 

delete ItemType.red// impossible for enum

const response = [{ type: 1 }, { type: 2}, { type: 3}]

<div color="blue">{}<div>
<div color="green">{}<div>

response.map(item => {
  switch (item.type) {
    case ItemType.red:
      return <div color="red">{}<div>
    case ItemType.green:
      return <div color="green">{}<div>
  }
})

/*
CommandInputType: 
{
  0: "NoModal"
1: "ConfirmWithOK"
2: "OptionalText"
3: "MandatoryText"
ConfirmWithOK: 1
MandatoryText: 3
NoModal: 0
OptionalText: 2
}
*/

//Arays

let arr2 = [];
arr2.push(1);
arr2.push('a');

let arr3: number[] = [];
arr3.push(1);
arr3.push('a'); // error

class ShoppingCart {
  items = []; // items: number[] =[]
  constructor() {
    this.items.push('a'); // works but shouldn't
  }
}
// Type Alias
type Color = [number, number, number];
let red: Color = [255, 0, 0];
