class Calculator {
    constructor(number) {
        this.number = number
    }

    add(num) {
        this.number += num;
        return this
    }

    subtract(num) {
        this.number -= num;
        return this
    }

    multiply(num) {
        this.number *= num;
        return this
    }

    divide(num) {
        this.number /= num;
        return this
    }

    getResult() {
        return this
    }
}

const calc = new Calculator(10).add(5).divide(3).subtract(2).multiply(3).getResult()
console.log(calc)
console.log(`Result: ${calc.number}`)

