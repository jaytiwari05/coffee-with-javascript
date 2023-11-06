//Q.1] Write JavaScript code to compare a number and a string. For example, 
//compare 5 (number) and "5" (string) and explain the result. Is there a difference 
//between == and === when comparing these values?


console.log(5 == '5');  //true

console.log(5 === '5'); //false 



// Q.2] Explain the difference between primitive data types (e.g., numbers, strings,
//booleans) and non-primitive data types (objects) in JavaScript in terms of where they 
//are stored in memory. Provide an example of a primitive data type and a non-primitive data type, 
//and describe how they behave in memory.


//Primitive data types

// let number = 42; // a number
// let string = 'Hello'; // a string
// let boolean = true; // a boolean

//Non-primitive data type 

// let obj = { name: 'Jay', age: 19 }; // an object
// let arr = [1, 2, 3, 4]; // an array
// let func = function() { return 'Jay'; }; // a function



//Q.3] Write a code to print the typeof return value for all 
//primitive and non-primitive datatypes. Refer this for more info: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

let number = 42;
let string = 'Hello';
let boolean = true; 

let obj = { name: 'Jay', age: 19 };
let arr = [1, 2, 3, 4];
let func = function() { return 'Jay'; };

console.log(typeof number); //output :- number
console.log(typeof string);
console.log(typeof boolean);

console.log(typeof obj);
console.log(typeof arr);
console.log(typeof func);

