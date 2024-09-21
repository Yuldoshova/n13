"use strict";
var DemoNamespace;
(function (DemoNamespace) {
    DemoNamespace.addNumbers = (...arr) => {
        const sum = arr.reduce((a, b) => a + b);
        return sum;
    };
    let InnerNamespace;
    (function (InnerNamespace) {
        InnerNamespace.sayHello = (name) => {
            console.log(`${name} salomlar`);
        };
    })(InnerNamespace = DemoNamespace.InnerNamespace || (DemoNamespace.InnerNamespace = {}));
})(DemoNamespace || (DemoNamespace = {}));
const sayHello = (name) => {
    console.log(`${name} salomlar`);
};
console.log(DemoNamespace.addNumbers(12, 14, 14, 52, 43, 54, 86));
sayHello("Tom");
DemoNamespace.InnerNamespace.sayHello('Something');
