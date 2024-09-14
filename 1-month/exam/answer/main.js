//1-misol
// function ekub(a, b) {
//     while (b !== 0) {
//         let foo = b;
//         b = a % b;
//         a = foo;
//     }
//     return a;
// }
// console.log(ekub(18, 48))
// console.log(ekub(25, 15))

//2-misol
// function removeDublicatElements(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) newArr.push(arr[i])
//     }
//     return newArr;
// }
// const arr = [1, 3, 2, 5, 2, 3, 3, 3, 4, 1, 4, 5, 5]
// console.log(removeDublicatElements(arr))

//3-misol
// function doubleMax(arr) {
//     let max1 = arr[0];
//     let max2 = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= max1) {
//             max2 = max1;
//             max1 = arr[i]
//         }
//     }
//     return `${max2} va ${max1}`;
// }
// const arr1 = [1, 1, 2, 3, 6, 6, 8, 8]
// const arr2 = [1, 1, 2, 3, 6, 6, 7, 8]
// const arr=[43,21,76,0,43,2,5,7,76,-75]
// console.log(doubleMax(arr1))
// console.log(doubleMax(arr2))
// console.log(doubleMax(arr))

//4-misol
// function isPrime(num) {
//     if (num < 2) {
//         return `${num} tub son emas! Musbat son kiriting!`
//     }
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) count++;
//     }
//     if (count == 2) {
//         return `${num} is prime!`
//     } else {
//         return `${num} is not prime!`
//     }
// }
// console.log(isPrime(11))

//5-misol
function findFibonacci(n) {
    let newArr = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            newArr.push(0);
        } else if (i === 1) {
            newArr.push(1);
        } else if ((newArr[i - 1] + newArr[i - 2]) <= n) {
            newArr.push(newArr[i - 1] + newArr[i - 2]);
        }
    }
    return newArr;
}
console.log(findFibonacci(10))  //[0,1,1,2,3,5,8]   
console.log(findFibonacci(3))
console.log(findFibonacci(17))
