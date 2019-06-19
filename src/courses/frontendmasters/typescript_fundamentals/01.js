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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
var user2 = {
    firstName: 'Jane2',
    lastName: 'User2',
    added: new Date()
};
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
var ItemType;
(function (ItemType) {
    ItemType[ItemType["red"] = 0] = "red";
    ItemType[ItemType["green"] = 1] = "green";
    ItemType[ItemType["blue"] = 2] = "blue";
})(ItemType || (ItemType = {}));
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
var Suit;
(function (Suit) {
    Suit[Suit["Clubs"] = 7] = "Clubs";
    Suit[Suit["Hearts"] = 5] = "Hearts";
})(Suit || (Suit = {}));
var CardNumber;
(function (CardNumber) {
    CardNumber[CardNumber["Ace"] = 0] = "Ace";
    CardNumber[CardNumber["Two"] = 1] = "Two";
    CardNumber[CardNumber["Three"] = 2] = "Three";
    CardNumber[CardNumber["Queen"] = 3] = "Queen";
    CardNumber[CardNumber["King"] = 4] = "King";
})(CardNumber || (CardNumber = {}));
var c = [Suit.Clubs, CardNumber.King];
function readCard(card) {
    // let [suit, number] = card;
    return CardNumber[card[1]] + " of " + Suit[card[0]];
}
console.log(readCard(c));
//---------Arrays------------
var arr2 = [];
arr2.push(1);
arr2.push('a');
var arr3 = [];
arr3.push(1);
arr3.push('a'); // error
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = []; // items: number[] =[]
        this.items.push('a'); // works but shouldn't
    }
    return ShoppingCart;
}());
var red = [255, 0, 0];
//-------------Object Litarals, destructured assignment------------
var person4 = {
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
var obj1 = { x1: 1, y1: 2, z1: 3 };
var x1 = obj1.x1, others = __rest(obj1, ["x1"]);
console.log(others);
var values1 = __assign({}, others, { a1: 3, b1: 45 });
console.log(values1);
// ---- Generics --------
function gimmiFive(x) {
    return [x, x, x, x, x];
}
var egg = gimmiFive('egg');
var three = gimmiFive(3);
console.log(egg);
console.log(three);
// arrays generic:
var cards = Array();
var data2 = fetch('https://github.com');
cards.push([Suit.Hearts, CardNumber.Queen]);
cards.push([5, 2], [3, 4]);
// constraints of generic type:
function addCart(arr, p1) {
    arr.push(p1);
    console.log(arr);
    return arr;
}
var arr4 = [23, 67, 890];
addCart(arr4, 7);
