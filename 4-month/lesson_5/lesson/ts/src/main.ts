type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type First<T> = T extends any[] ? T[0] : never

type head1 = First<arr1>
type head2 = First<arr2>

namespace DemoNamespace {
    export const addNumbers = (...arr: number[]): number=>{
        const sum = arr.reduce((a: number, b: number): number => a + b)
        return sum;
    }

    export namespace InnerNamespace {
        export const sayHello = (name: string): void => {
            console.log(`${name} salomlar`)
        }
    }
}

const sayHello = (name: string): void => {
    console.log(`${name} salomlar`)
}

console.log(DemoNamespace.addNumbers(12, 14, 14, 52, 43, 54, 86))
sayHello("Tom")
DemoNamespace.InnerNamespace.sayHello('Something')


