// let year = 1700

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log("Leap year")
// }
// else{
//     console.log("Not Leap Year")
// }

//# Fibonacci series

// let input = 6

// let a = 0
// let b = 1
// let fibo = []

// for (let i = a; i < input; i++){
//     fibo.push(a)
//     let c = a + b
//     a = b
//     b = c
// }
// console.log(fibo)

//# Factorial

// let st = 1
// let fact = 1
// let n = 5

// while(st <= n){
//     fact = fact * st
//     st += 1
// }
// console.log(`Factorial of ${n}! is ${fact}`)

// # Palindrome

// let str = "12321";
// let revStr = ""

// for (let i = str.length - 1; i>=0; i--){
//     revStr += str[i]
// }

// if(typeof Number(str) === Number(revStr)){
//     console.log(`${str} is a Palindrome Number`)
// }
// else{
//     console.log(`${str} is not a Palindrom`)
// }

// # Armstrong Number

// let num = "152"
// let sum = 0

// for (let i = 0; i < num.length; i++){
//     sum += num[i] ** num.length
// }

// if (Number(num) === sum){
//     console.log(`The number ${num} is an Armstrong Number`)
// }
// else{
//     console.log(`The Number ${num} is not an Armstrong Number`)
// }

// # Fibonacci Series

// let a = 0
// let b = 1
// let num = 5
// let fiboArr = []

// for (let i = a; i < num; i++){
//     fiboArr.push(a)
//     let c = a + b;
//     a = b
//     b = c
// }
// console.log(`The Fibonacci Series to the number ${num} is [${fiboArr}]`);

// # Checking whether a number is Even or Odd

// let num = 6;

// if(num % 2 === 0){
//     console.log(`The number ${num} is an Even Number`)
// }
// else{
//     console.log(`The number ${num} is an Odd Number`)
// }

// # Finding Even or Odd number to the given range

// let st = 30
// let end = 69
// let evenArr = []
// let oddArr = []

// for (let i = st; i <= end; i++){
//     if (i % 2 === 0 ){
//         evenArr.push(i)
//     }
//     else{
//         oddArr.push(i)
//     }
// }
// console.log(evenArr, "Even Number")
// console.log(oddArr, "Odd Number")

// # Counting vowels in Words

// let word = 'hello';
// let count = 0

// for (let i = 0; i < word.length; i++){
//     if(word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o"|| word[i] === "u"){
//         count = count + 1
//     }
// }
// console.log(count)

// # Take three numbers and find the largest using only if-else

// let a = 5;
// let b = 5
// let c = 2

// if (a === b && b === c){
//     console.log(`a = ${a}, b = ${b} & c = ${c}, all three numbers are equal`)
// }
// else if(a === b && a > c){
//     console.log(`a = ${a} & b = ${b}, a & b are equal and greatest`)
// }
// else if (b === c && b > a){
//     console.log(`b = ${b} & c = ${c}, b & c are equal and greatest`)
// }
// else if (a > b && a > c){
//     console.log(`a = ${a} is greatest`)
// }
// else if (b > a && b > c){
//     console.log(`b = ${b} is greatest`)
// }
// else{
//     console.log(`c = ${c} is greatest`)
// }

// # Strong Password Checker

// let a = '1254hkajf'
// let hasNumver = /\d/.test(a)

// if (a.length >= 8 && a !== 'password' && hasNumver){
//     console.log("Strong Password")
// }
// else{
//     console.log("Weak Password")
// }

// # Electricity Bill Calculated

// let units = 5;
// let bill = 0;

// if (units <= 100){
//     bill = units * 5
// }
// else if (units <= 200){
//     bill = (100 * 5) + (units - 100) * 8
// }
// else {
//     bill = (100 * 5) + (100 * 8) + (units - 200) * 10
// }



// # Frequency Count in Js

let arr = [
  "mango",
  "banana",
  "apple",
  "mango",
  "banana",
  "apple",
  "mango",
  "banana",
  "apple",
  "mango",
  "banana",
  "apple",
  "mango",
  "banana",
  "apple",
  "mango",
  "banana",
  "apple",
  "mango",
  "banana",
  "apple",
];

const ans = arr.reduce((acc, currVal) => {
  acc[currVal] = (acc[currVal] || 0) + 1;
  return acc
}, {});
console.log(ans);
