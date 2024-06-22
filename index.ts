/*
Qno:1
write a function "checkEven or odd? that accepts a number and print whether it is even or odd?*/
// function checkEvenOdd (num:number){
//     if (num % 2 === 0){
//         console.log("Even");

//     }else{
//         console.log("odd");

//     }
// }
// checkEvenOdd(2);
// checkEvenOdd(3);
// checkEvenOdd(9);



/*write a function "checkEven or odd? that accepts a number and print whether it is even or odd?*/



// import chalk from "chalk";
// import * as readline from "readline-sync"
// function checkEvenOdd(num: number): string {
//     let check: string;
//     if (num % 2 == 0) {
//         check = chalk.green("It's even");
//     } else {
//         check = chalk.yellow("It's odd");
//     }
//     return check;
// }
// let number = readline.questionInt("enter any number to check whether it is even ir odd!   ")
// console.log(checkEvenOdd(number));



/*Qno;2
write a function "arrayoperations" that creates an array of number,
adds a number to the end of the array ,removes the first number,
removed the middle number and add a new  number.and print the modified array?
 hint push ,shift and splice*/

// let array: number[] = [1, 2, 3, 4, 5]
// function arrayOperations(num: number[]) {
//     num.push(6);//add last number:
//     num.splice(2, 1, 8)//removed middle number and add new number:
//     num.shift()//removed 1st number
//     return num;

// }
// console.log(arrayOperations(array));



/*QNO :3
: Write a function " multiplies" the element of array by 2 and returns the modified array*/

// let num : number[]= [1,2,3,4,5]

// function multiplies(num:number[]){
//   for (let a = 0 ; a < num.length; a++){
//     num[a] *= 2;
//    } return num
// }
// console.log(multiplies(num));


/*QNO:4
Write a function"findLargest" that accepts an array of numbers and returns the largest number.*/

// let array: number[] = [2, 6, 3, 1, 15]

// function findLaegest(num: number[]) {
//     let largest = num[0]

//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > largest) {
//             largest = num[i]
//         }
//     }
//     return largest

// }
// console.log(findLaegest(array));


/*QNO:5
Write a function "reverseString" that accepts a string and returns the reversed string*/

let array: string = "My name is Nida Tariq";
console.log(array);

let spliceArray = array.split(/\s+/);
console.log(spliceArray);


function reverseString(splice: string[]): string {

    let reverseString: string[] = []
    for (let i = splice.length - 1; i >= 0; i--) {
        reverseString.push(splice[i]);
    }
    return reverseString.join(" ")
}
console.log(reverseString(spliceArray));
