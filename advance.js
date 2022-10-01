// Object => property, and method 
// object must have property and function
// const obj = {};
// console.log(obj);

// class

// class AgeVerification {
//     constructor (age){
//         this.age = age;
//     }

//     verify(){
//         return` ${this.age} is verified`;
//     }
// }
// class Person extends AgeVerification{
//     constructor(firstName, sk, dob){
//         this.firstName = firstName;
//         this.skill = sk;
//         this.dob = dob;
//     }

    // bio(){
    //     return `your name is ${this.firstName}`
    // }

    // skills(){
    //     return `he has following skills ${this.skill}`
    // }

//     skills(){
//         this.bio();
//         return `he has following skills ${this.skill}`
//     }
// }

// const gyanuBio = new Person("Gyanu", "html and css");
// console.log(gyanuBio.bio());
// console.log(gyanuBio.skills());

// const shyamBio = new Person("Shyam");
// console.log(shyamBio.bio());
// shyamBio.age = 88;
// console.log()
// This keyword
// constructor
// Encapsulation // hide but give access
// Abstration
// Inheritance

// class Pet{
//     constructor(name, owner, dob){
//         this.name = name;
//         this.owner = owner;
//         this.dob = dob;
//     }
// }
// polymorphism // from one blue print, you can create many






// Functional Programming

// seperation of concern
// side effects
// pure Function
// High order function
// Recursion

// const add = (a,b) => {
//     const result = a + b; side effect
//     // return a+b; pure function
//     return result;
// }

// console.log(add(4,5));


// High order function, is a fuction that takes another function as argument or returns a funtion or both.

// const add=  (a,b) => a+b;
// const sub=  (a,b) => a-b;
// const multi=  (a,b) => a*b;

// const calculator = (a, b, func) => {
//     return func(a,b);
// }

// const result = calculator(3, 4, multi);
// console.log(result);

// const obj = {
//     a: add,
//     s: sub,
//     m: multi
// }
// const calculator = (alphabet) => {
//     return obj[alphabet];
// }

// const ans = calculator(a);
// console.log(ans());


// Recursion

// let i= 0;
// const callMe = () => {
//     console.log("calling" + i);
//     i++;

//     if(i === 10) {
//         return;
//     }
//     callMe();
// }

// callMe();

let ttl = 0;
const arg = [23, 3,67, 24, 22, 5,46];
const sum = (numList) => {

    ttl += numList.pop();

    if(!numList.length){
        return ttl;
    }

    return sum(numList);

    // if(arg.length > 1){
    //     arg[0] += arg.pop();
    //     return sum(arg);
    // }


    // function summArr(arg) {
    //     if(arg.length>1){
    //         return arg.pop() + summArr(arg);
    //     }

    // }

}


const total = sum(arg);
console.log(total);
