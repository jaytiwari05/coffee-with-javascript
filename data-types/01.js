// Primitive datatypes / call by value
// 7: number , string, boolean, bigint, underfiend, null, symbol
// on the basis of how oyu stire the detain memory and how u access it, based pn that


// IMP :-
// Object & Events

//----------------------------------------------------------------------------------------------------//

/*number 
const randomNum = 55;
let anyNumber = 22.5;

console.table(randomNum, typeof anyNumber);*/

// const randomNum = 55;
// let anyNumber = 22.5;

// console.table({randomNum, anyNumber: typeof anyNumber});

//----------------------------------------------------------------------------------------------------//

// //string
// let str = 'Jay';
// let str1 = 'Jay';

//----------------------------------------------------------------------------------------------------//

// //boolean
// let boo1=true;
// const boo12 = false;

// //bigint

//----------------------------------------------------------------------------------------------------//

// //undefine
// var name;
// console.log(typeof name);
// let name2 = undefined;
// console.log(typeof name2);

//----------------------------------------------------------------------------------------------------//

// //Null 
// var jay =null;
// console.log(typeof jay);

//----------------------------------------------------------------------------------------------------//

// //Symbol

// const sym1=Symbol("newSymbol");
// const sym2=Symbol("newSymbol");
// console.log(sym1==sym2);

//----------------------------------------------------------------------------------------------------//

//reference array, object, functions
// let arry = [1,2,3,4,"Jay",true];
// console.log(arry[4]);

//----------------------------------------------------------------------------------------------------//

//stack (premitive)

// let num1=55;
// let num2=num1;
// num2=33;
// console.log(num2);
// console.log(num1);

//----------------------------------------------------------------------------------------------------//

//non-primitive/reference
const details={
    name:"Jay",
    rollNo:65,
    class:3
}

// console.log(details.name);

const obj2=details;

// console.log(obj2);
// console.log(details);

obj2.name="sahil";
console.log(details);