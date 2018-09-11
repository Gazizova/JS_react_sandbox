function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    pi = 3.14;

    this.area = function() {
        return this.width*this.height
    }
}

let ar = new Rectangle(2, 5);
ar.try_count = function () {return this.w * this.h}
let b = ar.try_count();
console.log(b)

let br = new Rectangle(4, 3)
console.log(br.area())
//
class Circle1 extends Object{
    constructor(r) {
        super()
        this.r = r;
        this.pi = 4.222;
    }
    // this.r = r
    // pi = 3.14
    arrr() {
        return this.pi
    }
}

c = new Circle1(2)
d =  new Circle1(4)
c.pi = 8;
console.log(c.pi,  d.pi)


function Circle(radius) {
    this.r = radius;
    area = function( ) { return Circle.PI * this.r * this.r; }
}
Circle.PI = 3.14159;
console.log(Circle.PI)