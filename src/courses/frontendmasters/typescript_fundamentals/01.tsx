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

let user1 = { firstName: 'Jane', lastName: 'User', added: new Date() };
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
  isOld;
  age;

  static _counter = 0;
  planet = 'Earth';

  constructor(name) {
    this.id = Person1._counter++;
    this.name = name;
  }
}

Person1.prototype.age = function() {
  return (this.isOld = Math.round(Math.random() * 100));
};

let mike = new Person1('mike');
mike.isOld = 55;

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

console.log(stef.isOld, mike, inna);
