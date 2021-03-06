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
let user2: Person = {
  firstName: 'Jane2',
  lastName: 'User2',
  added: new Date()
};
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

// Example 2:

enum Suit {
  Clubs = 7,
  Hearts = 5
}
enum CardNumber {
  Ace,
  Two,
  Three,
  Queen,
  King
}

type Card = [Suit, CardNumber];

const c: Card = [Suit.Clubs, CardNumber.King];

function readCard(card: Card) {
  // let [suit, number] = card;
  return `${CardNumber[card[1]]} of ${Suit[card[0]]}`;
}

console.log(readCard(c));

//---------Arrays------------

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
//---------Type Alias-------------------
type Color = [number, number, number];
let red: Color = [255, 0, 0];

//-------------Object Litarals, destructured assignment------------
let person4 = {
  name: {
    first: 'Mike',
    last: 'North'
  },
  languages: {
    backend: {
      elixir: {
        experience: '3 year'
      }
    }
  }
};

//-----------Rest and spresd properties--------------

let obj1 = { x1: 1, y1: 2, z1: 3 };
let { x1, ...others } = obj1;
console.log(others);

let values1 = { ...others, a1: 3, b1: 45 };
console.log(values1);

// ---- Generics --------
/* Generic allow to reuse code across many types, interfaces and functions */

function gimmiFive<T>(x: T) {
  return [x, x, x, x, x];
}
let egg: string[] = gimmiFive('egg');
let three: number[] = gimmiFive(3);
console.log(egg);
console.log(three);
// arrays generic:
let cards = Array<[Suit, CardNumber]>();
// promises generic:
let data2: Promise<Response> = fetch('https://github.com');

cards.push([Suit.Hearts, CardNumber.Queen]);
cards.push([5, 2], [3, 4]);

// constraints of generic type:
function addCart<T extends CardNumber>(arr: number[], p1: T): number[] {
  arr.push(p1);
  console.log(arr);
  return arr;
}

let arr4 = [23, 67, 890];
addCart(arr4, 7);

// can be used with interface
interface addCart2<T extends CardNumber> {
  addNewCart: number;
}
// ---- Access modifier keywords --------

/**
 * public- anyone
 * protected - self and subclasses
 * privat- self
 */

class Account {
  protected email: string;
  private password: string;
  public accountId: number;
}

class SharedAccount extends Account {
  setEmail(newEmail: string) {
    this.email = newEmail;
  }
}
