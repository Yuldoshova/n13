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
    constructor(name, color) {
        super(name);
        this.name = name;
        this.color = color;
    }
    makeSound() {
        console.log(`${this.name} huradi. Uning rangi ${this.color}`);
    }
}
class Cat extends Animal {
    constructor(name, age) {
        super(name);
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log(`${this.name} miyovlaydi. Uning yoshi ${this.age}`);
    }
}
class Horse extends Animal {
    constructor(name, owner) {
        super(name);
        this.name = name;
        this.owner = owner;
    }
    makeSound() {
        console.log(`${this.name} miyovlaydi. Uning egasining ismi ${this.owner}`);
    }
}
const dog = new Dog('It', 'white');
const cat = new Cat('Mosh', 10);
const horse = new Horse("Tom", 'John Doe');
dog.makeSound();
cat.makeSound();
horse.makeSound();
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
