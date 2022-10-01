
// single line comments

/* multiline 
   comments -
   sljfdkjfd*/



// console.log("hey my first code")
      //   alert("hey my js code")


//-----declaring variables -----
// var, let, const
// rules only alpha numeric and number in the end
// can have underscore not hyphen
// camel case is used 

// var myName = "Gyan";
// let address = "somewhere in nowhere 3";
// const dob = "20-03-2000"

// console.log(myName);
// myName = "Sam"
// var is old key and let is new key, for now, difference will discuss later

// console.log(address);
// address = "sydney australia"

// console.log(dob);
// dob = "04-03-2000"
// error since you can not override value or redefine lable but you can use the variable multiple times.

// console.log(myName);
// console.log(address);
// console.log(dob);

// ---- Arthemetic Operators
/* + Addition
   - Subtraction
   - Multiplication
   ** Exponentiation (ES2016)
   / Division
   % Modulus (Division Remainder)
   ++ Increment
   -- Decrement
*/

// const a = 4;
// const b = 7;
// const result = a + b;

// console.log(result);

// -----Comparisons---

// = single equals to assign the value
// == double equals to compares the value or data and gives boolean result
// === triple equals to check the data and data types and gives boolean result
// >, >=
// <, <=


// ----logical Operator

// &&
// ||
// Ternary => condition ? truecode : falsecode
// !



// ----- JS- Data Types

// Primitive data types
// String
// Number
// Boolean
// Undefined
// Null

// const dt = "73484739 jdhdfhdjod #$^%$^"; // string
// const dt = "389490"; // Number
// const dt = false; // Boolean // true or false
// const dt = undefined; // Undefined // not in the system
// const dt = null;

// let val = "prem"


// Referential data types

// JS-Math Objects
// const val = Math.PI;
// const val = Math.round(4.7);
// const val = Math.pow(8,2);
// const val = Math.sqrt(64);
// const val = Math.ceil(4,4);
// const val = Math.ceil(4.4);
// const val = Math.floor(4.7)
// const val = Math.min(0, 150, 30, 20, -8, -200);
// const val = Math.random(); 0 - 9.99

// console.log(val);

// truthey values = "string", 88, obj, array, function
// false values = '', 0, null, undefined, false


// JS- Conditional Statements

// if
// const age = 18;
// const g = 'm';
// if(age > 18 && g === 'f'){
//    console.log("let's go to party")
// } else {
//    console.log("go home kido!!")
// }
// if else
// Else if
// Switch

// Ternary => condition ? truecode : falsecode
// age <= 18 ? console.log("welcome to party") : console.log("go home kido");

// else if

// const pet = "cat";

// if(pet === "dog"){
//    console.log("woof");
// } else if(pet === "cat"){
//    console.log("meoww");
// }else if(pet === "cow"){
//    console.log("Moooww");
// }else{
//    console.log("jdkjd kfdj dfjdk");
// }

// switch
// debugger;
// const pet2 = "cat";
// switch(pet2){

//    case "dog":
//       console.log("woof");
//       break;

//    case "cow":
//       console.log("mowoo");
//       break;

//    case "cat":
//       console.log("meoww");
//       break;

//       default:
//          console.log("lkdjfkd jfdkfjdk jfldjfld");
// }

// JS-Error Handling

// try {
//    // code
//    throw new Error("User already exist");
//    console.log("running code in try block");
// } catch(error) {
//    console.log("running code in catch block");
//    // code
// } finally{
//    console.log("running code in finally block");
   
// }

// JS Scheduling 

// setTimeout
// clearTimeout

// setTimeout(()=>{
//    console.log("Subscribe and get 10% off");
// }, 3000);

// setInterval
// clearInterval

// let i = 0;
// setInterval(()=>{
//    i++;
//    console.log("run ...", i)
// },1000);

// 1234
// 1342
// 1432



//----- JS- ES6-----------

// let, const => already done the basic
// template literals
// arrow function
// destructuring => will come back after object is learned
// default + Rest + Spread => will come back after object is learned


// ---template literals----
// eg:

// const name = "Gyanu";
// const myAddress = "Sydney";

// const str = "Hi my name is: " + name + ". And I live in " + myAddress;
// console.log(str);
// const str1 = `Hi my name is: ${name}. 
// And I live in ${myAddress}`;
// console.log(str1);


// -----arrow function----
// create, call, invoke

// console.log("1...");

// function add(a,b){
//    console.log("2...");
//    return a + b
// }

// console.log("3...")

// const ans = add(3,4);
// console.log(ans);

// ---arrow funtion ---
// eg
// const add1 = (a,b) => {
//    return a*b;
// }

// console.log(add1(3,4));

// if one line code inside the arrow function block
// const add2 = (a,b) => a*b;

// console.log(add2(3,4));





// -------loops--------

// for loop

// eg:

// for(let i=0; i<100; i++){
//    if(i % 2 == 0){
//       console.log(i);
//    }
// }


// -------while loop-------

// eg - while only take the condition
// let i = 0;
// while(i < 100){
//    if(i % 2 === 0){
//       console.log(i);
//    }
//    i++;
// }


//------ do while loop--------

// let i = 0;
// do{
//    if(i % 2 === 0){
//       console.log(i);
//    }
//    i++;
// }while (i < 100);

// need to learn continue and break;



// --------DATA MANIPULATION--------

// number
// => safe number = -2^53-1 to 2^53-1
// NaN => Not a number, isNaN()

// const a = "5.1ss3s";
// const num = +a;  =>converts string into number
// const num = Number(a);
// const num = parseInt(a);
// const num = parseFloat(a);

// console.log(num, typeof num);


// ---String

// const str = "Hi there, My name is Gyanu, I live in Sydney.";
// const val = str.length;
// const val = str.toUpperCase();
// const val = str.toLowerCase();
// const val = str.indexOf("i");
// const val = str.lastIndexOf("i");
// const val = str.replace("i","you");
// const val = str.replaceAll("i","you");
// const val = str.replaceAll("Gyanu","Sherchan");
// const val = str.replaceAll("Gyanu","Sherchan");
// const val = str.substring(5 , 13);
// const val = str.slice(5 , 13);
// const val = str.slice(5);
// const val = str.slice(-5); take from last
// const val = str.includes("Gyanu");
// const val = str.charAt(10);
// const val = str.charCodeAt(10);
// const val = str.charCodeAt(10);
// const val = str.split(",");
// const val = str.split(",").reverse();
// const val = str.split(",").reverse().toString();
// const val = str.search("name");

// console.log(val);

// ------Escape Character-------
// const str = "Hi there, My \"name\" is Gyanu, I live in Sydney.";
// console.log(str);




// -------------ARRAY []----------------

// const fruits = ["apple", "orange", "banana", "pineapple", "tomato"];
// const vegi = ["potato","cabbage"];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[1]);

// const removedItem = fruits.pop();  - remove last item from array
// fruits.push("watermelon"); - add last item from array  
// fruits.push("watermelon"); - add last item from array  
// const removedItemFromFront = fruits.shift("watermelon");
// const subFruits = fruits.splice(2,1); from positon 2- got 2 item after it and got new array
// fruits.splice(2,0,"kiwi") to add new item in middle of an array
// const val = fruits.indexOf("orange");  finding index of item
// const val = fruits.toString(); convert array into string
// fruits.reverse(); reverse the array
// fruits.sort(); not to use much to sort because it sorts as per ASCI value
// fruits.sort((a,b) => a-b); - Better way to sort the data just use for now and understand later

// const newBucket = [...vegi, ...fruits]  -joining arrays
// console.log(newBucket.join(" "));

// console.log(removedItem);
// console.log(newBucket);


// --------- loop and Array (array specific loop)---------
// generic- for, while, do while

// const bucket = ["apple", "orange", "banana", "pineapple", "tomato", "pears"]

// for(let i=0; i<bucket.length; i++){
//    console.log(bucket[i]);
// }

// let i= 0;
// while(i < bucket.length){
//    console.log(bucket[i]);
//    i++;
// }

// do {
//    console.log(bucket[i]);
//    i++;
// } while(i<bucket.length);


// ------for each--
// bucket.forEach((item,i) => {
//    console.log(item, i);
// })

// ------map Array----

// const newArr = bucket.map((item, i) => {
//    console.log(item, i)
//    return "SKU-" + item;
// });

// ------filter---
// const newArr = bucket.filter((item, i) => {
//    console.log(item, i)
//    return !item.includes("p");
// });


// --find--
// const newArr = newBucket.find((item, i) =>{
//    return item,includes("p")
// })
// if finds return the first item that it found, if not then undefined


// --some--
// const newArr = newBucket.some((item, i) =>{
//    return item,includes("p")
// }) 
// atleast one item satisfied the condition

// --every--
// const newArr = bucket.every((item, i) =>{
//    return item,includes("p")
// })

// --reduce--

// const bank = [3232, 3232, 3232, 223, 4, 434, 566];
// const totalMoney = bank.reduce((subTtl, value) => {
//    console.log(subTtl);
//    return subTtl + value;
// }, 0)
// console.log(totalMoney);


// -----Challange-----

// challenge:1
// 1. Create an array of 50 randoms numbers that range between 1 to 100 programmatically.

// 2. sort that array in descending order

// 3. get the total value of the array

// 4. create new array for odd and even number sets out of the original array

// 5. Remove the duplicate values from array

// const  = [];
// modify your code below


// console.log(num);










/*

// -----ANS-----

const args = [];

for (let i=0;  i<50; i++) {

    args.push(Math.round(Math.random() * (2-1) + 1));
}
console.log(args);


// 2. sort that array in descending order

args.sort((a,b) => b-a);

console.log(args);


// 3. get the total value of the array

const totalVal = args.reduce((subTtl, value) => {
   // console.log(subTtl);
   return subTtl + value;
}, 0)

console.log(totalVal);



// 4. create new array for odd and even number sets out of the original array

const newArrOdd = args.filter((item, i) => {
   const odd = item % 2 == 1;
   // console.log(odd);
   return odd;
})

console.log(newArrOdd);


const newArrEven = args.filter((item, i) => {
   const even = item % 2 == 0;
   // console.log(even);
   return even;
})

console.log(newArrEven);



// 5. Remove the duplicate values from array

function removeDuplicates(args) {
   const unique = [];
   args.forEach(element => {
      if (!unique.includes(element)) {
          unique.push(element);
      }
  });
  return unique;
}

console.log(removeDuplicates(args));
*/





// -----SIR Explained from here

// 1. Create an array of 50 randoms numbers that range between 1 to 100 programmatically.

// const arr = [];

// for(let i=0; i<=50; i++){
//    const num = Math.floor(Math.random()*100) + 1;
//    arr.push(num);
// }

// console.log(arr);

// // 2. sort that array in descending order

// arr.sort((a,b) => b-a);
// console.log(arr);


// // 3. get the total value of the array
// const total = arr.reduce((subTtl, num)=>{
//    return subTtl + num
// }, 0);



// // 4.
// const oddNums = arr.filter((item)=> item % 2 === 0);

// const evenNums = arr.filter((item)=> item % 2 === 0);
// console.log(oddNums, evenNums);


// Question 5 ans see on google drive




// ------Second Challange------
// 1.create an array of 50 random unique numbers range between 1 to 100 programmatically

// const randomArr = [];
// const j = indexOf.randomArr;
// console.log(j);

// for (let i=0; i<=50; i++) {
//   const randomNumber=Math.floor(Math.random() * 100);
//       if (!randomArr.includes(randomNumber)) {
//         randomArr.push(randomNumber);
//     }
// }
// console.log(randomArr); 


// ---sir explained---

// const arg = [];
// let i = 0;
// while(arg.length < 50){
//    i++;
//    console.log(i);
//    const num = Math.floor(Math.random() * 100) + 1;
//    if(!arg.includes(num)){
//       arg.push(num);
//    }
// }

// console.log(arg + i);




//------JS- Data Manipulation--------

//--------Object------
// const person = {
//    name: "prem", 
//    lstName:"shera",
//    phone: "567456789",
//    addr: "sydney",
//    training: {
//       name: 'JRP',
//       duration: '7m',
//       topic: ["html", "css", "js"]
//    },
//    speak: () => {
//       return My name is + name;
//    }
// }

// person.country = "Australia" - adding new property
// person.addr = "Melbourne" - updating the value of addr property
// delete.person.addr = "Melbourne" - delete the addr property
// person.skills = ["html", "css", "js"] - we can add any kind of data, here we are adding array type data

// console.log(person.training)

// const val = person.addr;

// console.log(val);



// DESTRUCTURING


// const bio = (obj) => {
//    console.log(obj);

//    let {name, lstName, phone, addr}= obj;
//    return `${name} ${lstName} lives in ${addr}`;
// }



// const p2 = Object.assign({}, person);
// delete p2.training;
// console.log(person, p2, person == p2);

// const {training, ...p2} = person;  //rest operator
// const p2 = {...person};   // spread operator
// console.log(person, p2, person == p2);


// combining with spread operator

// const combo = {...person, ...training, test:'sfds'};
// console.log(combo);





// New topic: loop event

// console.log("1. prin..");

// setTimeout(() => {
//    console.log("2. prin..")
// })
// console.log("2. prin..");
// console.log("3. prin..");
// console.log("4. prin..");
// console.log("5. prin..");


// 1,3,4,5,2,6


// Date Obj

// const today = Date();
// const today = Date.now();
// const date = new Date("2022-10-01");
// const val = date.toDateString();
// const val = date.toLocaleDateString();
// const val = date.toISOString();
// const val = date.toTimeString();
// const val = date.getMonth();
// const val = date.getFullYear();
// const val = date.getDay();
// console.log(date);
// console.log(val);





// Destructuring revise

// const student= {
//    fn: "sam",
//    ln: "smith",
//    skills: ["coding","singing", "dancing"],
//    age: 22
// };


// copying
// const s2 = student;
// console.log(s2 === student);

// cloning
// const s2 = {...student};
// console.log(s2 === student);
// note: modifying any obj cause another one do not get updated as well


// deleting and cloning
// const {skills, ...s2} = student;
// console.log(s2 === student);
// note student obj is cloned to s2 but without skills property
// combining objects

// console.log(student, s2);