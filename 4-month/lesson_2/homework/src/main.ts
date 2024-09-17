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

    constructor(name: string) {
        super(name)
        this.name = name
    }

    public override makeSound(): void {
        console.log(`${this.name} huradi.`)
    }
}

const dog = new Dog('It')
dog.makeSound()



class Shape {
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