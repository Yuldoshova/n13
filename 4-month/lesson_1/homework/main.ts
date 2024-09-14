// let country: string = "Uzbekistan"
// country = 78;

// let age;
// age = 17
// age = "salom"

// number type
let currentYear: number = 2024

// string type
let fullName: string = "John Due"

// boolean type
let isEvenYear: boolean = true;

// null type
let nullData: null = null

// undefined type
let undefinedData: undefined = undefined

// symbol type
let uniqueSymbol: symbol = Symbol('a')

// bigint type
let bigNum: bigint = 534253534656n

// any type
let anyTypeData: any = { name: "Tom" }
// anyTypeData.array.forEach(element => {
//     console.log(element)
// });

// unknown type
// let myUnknownType: unknown = { title: "aniqlanmagan tur" }
// if (typeof myUnknownType == "object") {
//     console.log(Object.values(myUnknownType))
// }

// let myData: unknown = true
// if (typeof myData == "number") {
//     console.log(myData)
// } else {
//     console.log(`${myData} type of boolean`)
// }

// array type 1-usul
let fruits: string[] = ['olma', 'anor', 'nok']

// array type 2-usul
let vegetables: Array<string> = ['melon', 'carrot', 'pie']

// kichik amaliyot
let typeObject: {
    id: number,
    name: string,
    age: number,
    hobbies: string[],
    address: {
        street: string,
        home: number
    }
}[] = [{
    id: 1,
    name: "Tom",
    age: 35,
    hobbies: ['suzish', 'yugurish', 'kitob o\'qish'],
    address: {
        street: 'Amir Temur',
        home: 24
    }
}, {
    id: 2,
    name: "Tom",
    age: 35,
    hobbies: ['suzish', 'yugurish', 'kitob o\'qish'],
    address: {
        street: 'Amir Temur',
        home: 24
    }
}]

// object type
let person: { name: string, age: number, hobbies: string[] } = {
    name: "John",
    age: 27,
    hobbies: ['suzish', 'yugurish']
}

// tuples type
let mixedArray: [
    number,
    string,
    Array<string>,
    { street: string, home: number }
] = [
        25,
        "Salomlar",
        ['suzish', 'yugurish'], {
            street: 'Amir Temur',
            home: 24
        }
    ]

// enum type
enum VehicleTypes {
    bicycle = "bicycle",
    car = "car",
    bus = "bus",
    truck = "truck",
    motorcycle = "motorcycle"
}

let bmwCar: VehicleTypes = VehicleTypes.car
console.log(bmwCar)

// type alies
type UserType = {
    id: number,
    name: string,
    age: number,
    hobbies: string[],
    address: {
        street: string,
        home: number
    }
}

let typeObj: Array<UserType> = [{
    id: 1,
    name: "Tom",
    age: 35,
    hobbies: ['suzish', 'yugurish', 'kitob o\'qish'],
    address: {
        street: 'Amir Temur',
        home: 24
    }
}, {
    id: 2,
    name: "Tom",
    age: 35,
    hobbies: ['suzish', 'yugurish', 'kitob o\'qish'],
    address: {
        street: 'Amir Temur',
        home: 24
    }
}]

// union type
type uniqueTypes = string | number | {
    id: number,
    name: string,
    age: number,
    hobbies: string[],
    address: {
        street: string,
        home: number
    }
}
let uniqueValue: uniqueTypes = 45
uniqueValue = "Salom"

// interface
interface UserType1 {
    id: number,
    name: string,
    age: number,
    hobbies: string[],
    address: {
        street: string,
        home: number
    }
}

// type alies vs interface
interface Book {
    title: string
}

interface Book {
    page: number
}

let newbook: Book = { title: "O\'kinma", page: 670 }

type BookType = {
    title: string
}
type BookType1 = BookType & {
    page: number
}

let newBook1: BookType1 = { title: 'Diqqat', page: 340 }

// type function

function getBook(book: { title: string, page: number }): string {
    return `${book.title} kitobi ${book.page} sahifaga ega.`
}
console.log(getBook({ title: "O\'kinma", page: 670 }))

// arrow function
let add = (a: number, b: number): number => {
    return a + b
}
console.log(add(10, 15))

//void type
let sub = (a: number, b: number): void => {
    console.log(a - b)
}
sub(20, 3)