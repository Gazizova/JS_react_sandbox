var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(person) {
    var div = document.createElement('div');
    div.innerHTML = 'Hello, ' + person.firstName + ' ' + person.lastName;
    return div;
}
var user1 = { firstName: 'Jane', lastName: 'User', added: new Date() };
var user2 = { firstName: 'Jane2', lastName: 'User2', added: new Date() };
var user3 = { firstName: 'Bob', lastName: 'Star' };
document.body.appendChild(greeter(user1)).append(greeter(user2));
function userList() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // debugger;
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    var values;
    var row;
    var cell;
    args.forEach(function (i) {
        values = Object.keys(i).map(function (key) { return i[key]; });
        row = document.createElement('tr');
        values.forEach(function (y) {
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
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.planet = 'Earth';
        this.id = Person1._counter++;
        this.name = name;
    }
    Person1._counter = 0;
    return Person1;
}());
Person1.prototype.age = function () {
    return (this.isOld = Math.round(Math.random() * 100));
};
var mike = new Person1('mike');
mike.isOld = 55;
var stef = new Person1('stef');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(_a) {
        var id = _a.id, name = _a.name;
        var _this = _super.call(this, name) || this;
        _this._employeeId = id;
        return _this;
    }
    return Employee;
}(Person1));
var inna = new Employee({ name: 'inna', id: 3 });
inna.age();
console.log(stef.isOld, mike, inna);
