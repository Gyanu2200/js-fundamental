
// selecting by Id, Class, Query selector
// const elm = document.getElementById("first");
// const elm = document.getElementsByClassName("info1");
// const elm = document.querySelector("#first");
// const elm = document.querySelector(".info1"); // just return first one
// const elm = document.querySelectorAll(".info1"); // returns all node 
// const elm = document.querySelectorAll("a"); 
// console.log(elm);






// const elm = document.querySelector(".info1");
// const val = elm.innerText; // fetch only text
// const val = elm.innerHTML; // fetch with element tag
// console.log(val);


// const elm = document.getElementById("display");
// elm.innerText = "hey there its me Gyanu";
// elm.innerHTML = "<h2> Hey there this is Sherchan </h2>";
// console.log(elm);

// document.write("Anything of your choise"); // write anywhere in the document

// how to set attribute
// const elm = document.querySelector('a');
// elm.setAttribute('style', "color:green; font-weight:bold");

// how to read attribute
// const elm = document.querySelector('a');
// const val = elm.getAttribute("href");
// console.log(val);


// how to set attribute value or style from js
// const elm = document.querySelector('a');
// elm.style.color = 'red';
// elm.style.fontSize = '3rem';
// elm.style.textDecoration = 'none';
// elm.style.display = 'none'; // will hide the element 
// elm.style.display = 'block'; // will display the element


const elm = document.querySelector(".message");
elm.style.border = '1px solid red';
elm.style.padding = '1rem';


const changeText = () => {
    // alert('you have clicke');
    elm.innerText = "Text changed upon you click";
    
    elm.classList.toggle("success");
}


Element.addEventListener("click", changeText);