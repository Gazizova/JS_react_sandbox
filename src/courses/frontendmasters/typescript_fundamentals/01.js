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
var user1 = {
    firstName: 'Jane',
    lastName: 'User',
    added: new Date().getUTCDate() + '/' + new Date().getUTCMonth() + 1 + '/' + new Date().getUTCFullYear()
};
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
    Person1.prototype.returnAge = function (isOld) {
        isOld = this.isOld;
        return document.write(isOld);
    };
    Person1._counter = 0;
    return Person1;
}());
Person1.prototype.age = function () {
    return (this.isOld = Math.round(Math.random() * 100));
};
var mike = new Person1('mike');
mike.age();
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
console.log(stef, mike, inna);
var MyArray = /** @class */ (function (_super) {
    __extends(MyArray, _super);
    function MyArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyArray.prototype.toString = function () {
        return '[PRIVATE]';
    };
    Object.defineProperty(MyArray, Symbol.species, {
        get: function () {
            // doesn't work
            return Array;
        },
        enumerable: true,
        configurable: true
    });
    return MyArray;
}(Array));
var arr1 = new MyArray(1, 2, 3); // doesn't work
// Mixins and Classes
// Mixins are abstract classes or "templates for classes "
var Abstract = function (x) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.asJSON = function () {
            return JSON.stringify(this);
        };
        return class_1;
    }(x));
};
var Person3 = /** @class */ (function (_super) {
    __extends(Person3, _super);
    function Person3(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    return Person3;
}(Abstract(Object)));
var user3a = new Person3('Mike');
console.log(user3a.asJSON); // doesn't work
// Enums
var CommandInputType;
(function (CommandInputType) {
    CommandInputType[CommandInputType["NoModal"] = 0] = "NoModal";
    CommandInputType[CommandInputType["ConfirmWithOK"] = 1] = "ConfirmWithOK";
    CommandInputType[CommandInputType["OptionalText"] = 2] = "OptionalText";
    CommandInputType[CommandInputType["MandatoryText"] = 3] = "MandatoryText";
})(CommandInputType || (CommandInputType = {}));
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
var arr2 = [];
arr2.push(1);
arr2.push('a');
var arr3 = [];
arr3.push(1);
arr3.push('a'); // error
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
        this.items.push(5);
    }
    return ShoppingCart;
}());
