// let country: string = "Uzbekistan"
// country = 78;
// let age;
// age = 17
// age = "salom"
// number type
var currentYear = 2024;
// string type
var fullName = "John Due";
// boolean type
var isEvenYear = true;
// null type
var nullData = null;
// undefined type
var undefinedData = undefined;
// symbol type
var uniqueSymbol = Symbol('a');
// bigint type
var bigNum = 534253534656n;
// any type
var anyTypeData = { name: "Tom" };
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
var fruits = ['olma', 'anor', 'nok'];
// array type 2-usul
var vegetables = ['melon', 'carrot', 'pie'];
// kichik amaliyot
var typeObject = [{
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
    }];
// object type
var person = {
    name: "John",
    age: 27,
    hobbies: ['suzish', 'yugurish']
};
// tuples type
var mixedArray = [
    25,
    "Salomlar",
    ['suzish', 'yugurish'], {
        street: 'Amir Temur',
        home: 24
    }
];
// enum type
var VehicleTypes;
(function (VehicleTypes) {
    VehicleTypes["bicycle"] = "bicycle";
    VehicleTypes["car"] = "car";
    VehicleTypes["bus"] = "bus";
    VehicleTypes["truck"] = "truck";
    VehicleTypes["motorcycle"] = "motorcycle";
})(VehicleTypes || (VehicleTypes = {}));
var bmwCar = VehicleTypes.car;
console.log(bmwCar);
var typeObj = [{
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
    }];
var uniqueValue = 45;
uniqueValue = "Salom";
var newbook = { title: "O\'kinma", page: 670 };
var newBook1 = { title: 'Diqqat', page: 340 };
// type function
function getBook(book) {
    return "".concat(book.title, " kitobi ").concat(book.page, " sahifaga ega.");
}
console.log(getBook({ title: "O\'kinma", page: 670 }));
// arrow function
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 15));
//void type
var sub = function (a, b) {
    console.log(a - b);
};
sub(20, 3);
