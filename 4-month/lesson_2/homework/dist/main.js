"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} ovoz chiqaradi.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} huradi.`);
    }
}
const dog = new Dog('It');
dog.makeSound();
class Shape {
    constructor(name) {
        this.name = name;
    }
    getArea() {
        console.log(`${this.name} shaklining perimetri barcha tomonlari yig'indisiga teng`);
    }
}
class Rectangle extends Shape {
    constructor(name, sideA, sideB) {
        super(name);
        this.name = name;
        this.a = sideA;
        this.b = sideB;
    }
    getArea() {
        const perimetr = 2 * (this.a + this.b);
        console.log(`${this.name}ning perimetri ${perimetr} ga teng.`);
    }
}
const turtburchak = new Rectangle('To\'g\'ri to\'rtburchak', 12, 13);
turtburchak.getArea();
