class Animal {
    protected name: string

    constructor(name: string) {
        this.name = name
    }

    public makeSound(): void {
        console.log(`${this.name} ovoz chiqaradi.`)
    }
}

class Dog extends Animal {

    public color: string

    constructor(name: string, color: string) {
        super(name)
        this.name = name
        this.color = color
    }

    public override makeSound(): void {
        console.log(`${this.name} huradi. Uning rangi ${this.color}`)
    }
}

class Cat extends Animal {
    private age: number

    constructor(name: string, age: number) {
        super(name)
        this.name = name
        this.age = age
    }

    public override makeSound(): void {
        console.log(`${this.name} miyovlaydi. Uning yoshi ${this.age}`)
    }
}

class Horse extends Animal {
    private owner: string

    constructor(name: string, owner: string) {
        super(name)
        this.name = name
        this.owner = owner
    }

    public override makeSound(): void {
        console.log(`${this.name} miyovlaydi. Uning egasining ismi ${this.owner}`)
    }
}


const dog = new Dog('It', 'white')
const cat = new Cat('Mosh', 10)
const horse = new Horse("Tom", 'John Doe')
dog.makeSound()
cat.makeSound()
horse.makeSound()


abstract class Shape {
    protected name: string

    constructor(name: string) {
        this.name = name
    }

    public getArea(): void {
        console.log(`${this.name} shaklining perimetri barcha tomonlari yig'indisiga teng`)
    }
}

class Rectangle extends Shape {
    protected a: number
    protected b: number

    constructor(name: string, sideA: number, sideB: number) {
        super(name)
        this.name = name
        this.a = sideA
        this.b = sideB
    }

    public override getArea(): void {
        const perimetr = 2 * (this.a + this.b)
        console.log(`${this.name}ning perimetri ${perimetr} ga teng.`)
    }
}

const turtburchak = new Rectangle('To\'g\'ri to\'rtburchak', 12, 13)
turtburchak.getArea()