//!create the button : Using the normal DOM 
// // Step 1:
// const button = document.createElement("button")

// // Step 2:
// button.setAttribute("type","button")

// // Step 3:
// button.innerText ="Submit"

// // Step 4:
// document.body.append(button)

// // o/p:
// // Submit Button Created

// *************************************************************************************************************************

//!===>Example:addEventListener click method

//!===>Syntax:variablename.addEventListener(eventname, functionname)

// Scenario:
// Just understanding:
// <button type="button" onclick="foo()">click method Example</button>
// alert ======> "Happy Onam" 

// // Step 1: create element
const button = document.createElement("button")

// Step 2: setAttribute
button.setAttribute("type","button")

// Step 3: content
button.innerText ="click method Example"

// Step 4: addEventListener
button.addEventListener("click",foo);

// Step 5: function
function foo(){
    alert("Dear people of Kerala 🌴Happy Onam🌴")
}

// Step 6: append
document.body.append(button)

// // o/p:
// // click method Example என்ற Button ஐ click செய்யும்போது மட்டும் நமக்கு alert notification வரும். 
// // இதுவே இந்த program ன் உடைய output ஆகும்.

// *************************************************************************************************************************

//!===>Example:addEventListener mouseover method

//!===>Syntax:variablename.addEventListener(eventname, functionname)

// Scenario:
// Just understanding:
// <button type="button" mouseover="foo()">mouseover method Example</button>
// alert ======> "Happy Onam" 

// // Step 1: create element
// const button = document.createElement("button")

// // Step 2: setAttribute
// button.setAttribute("type","button")

// // Step 3: content
// button.innerText ="mouseover method Example"

// // Step 4: addEventListener
// button.addEventListener("mouseover",foo);

// // Step 5: function
// function foo(){
//     alert("Dear people of Kerala 🌴Happy Onam🌴")
// }

// // Step 6: append
// document.body.append(button)

// // o/p:
// // mouseover method Example என்ற Button க்கு அருகில் செல்லும்போது மட்டும் நமக்கு alert notification வரும். 
// // இதுவே இந்த program ன் உடைய output ஆகும்.

// *************************************************************************************************************************

//!===>ஒரு button ஐ click செய்தால் மற்றும் mouse point செய்தால் அதன் backgroundColor மாறுவது எப்படி?

// !===>using get method

//     Scenario:
//     Just understanding:
//     HTML Part
//     <button id="btn">mouseover Method Here Change To Background Color</button>

// ! ===>Method 1 using functions
// // Step 1: get element
// const btn = document.getElementById("btn")

// // Step 2: addEventListener
// btn.addEventListener("mouseover",foo1);

// // Step 3: function
// function foo1(){
//     document.body.style.backgroundColor="red"
// }

// // Step 4: addEventListener
// btn.addEventListener("mouseout",foo2)

// // Step 5: function
// function foo2(){
//     document.body.style.backgroundColor= ""
// }


// ! ===>Method 2 using arrow function
// // Step 1: get element
// const btn = document.getElementById("btn")

// // Step 2: addEventListener + using arrow function
// btn.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="red"
// });

// // Step 3: addEventListener + using arrow function
// btn.addEventListener("mouseout",()=>{
//     document.body.style.backgroundColor=""
// });


// //! ===>Method 3 using single line function
// // Step 1: get element
// const btn = document.getElementById("btn")

// // Step 2: addEventListener + using arrow function
// btn.addEventListener("mouseover",()=>document.body.style.backgroundColor="red")

// // Step 3: addEventListener + using arrow function
// btn.addEventListener("mouseout",()=>document.body.style.backgroundColor="")


// // o/p:Method 1 + Method 2 + Method 3
// // mouseover Method Here Change To Background Color என்ற Button க்கு அருகில் செல்லும்போது மட்டும் நமக்கு background color மாறுவதை காணலாம்.
// // இதுவே இந்த program ன் உடைய output ஆகும்.


// *************************************************************************************************************************

//! Session Task

//! Color a span/div element content when a user moves the mouse over the element.

//! Method 1: using getElement
// // Step 1:get element
// const div = document.getElementById("div1")

// // Step 2:addEventListener + using arrow function
// div.addEventListener("mouseover",()=>div.style.backgroundColor="blue")

// // Step 3:addEventListener + using arrow function
// div.addEventListener("mouseout",()=>div.style.backgroundColor="")


//! Method 2: using create element
// // Step 1:create element
// const div = document.createElement("div")

// // Step 2:content
// div.innerText="Session Task : Click here to change bgcolor"

// // Step 3:append
// document.body.append(div)

// // Step 4:addEventListener + using arrow function
// div.addEventListener("mouseover",()=>div.style.backgroundColor="yellow")

// // Step 5:addEventListener + using arrow function
// div.addEventListener("mouseout",()=>div.style.backgroundColor="")

// // o/p:Method 1 + Method 2 
// // Session Task : Click here to change bgcolor என்ற Button க்கு அருகில் செல்லும்போது மட்டும் நமக்கு background color மாறுவதை காணலாம்.
// // இதுவே இந்த program ன் உடைய output ஆகும்.

// *************************************************************************************************************************

//!prompt method

// // Step 1:create element
// const button = document.createElement("button")

// // Step 2:content
// button.innerText = "click here"

// // Step 3:append
// document.body.append(button)

// // Step 4:addEventListener
// button.addEventListener("click", foo)

// // Step 5:functions get the name
// // function foo() {
// //     var res = prompt("Enter Your Name")
// //     console.log(res);
// // }

// // Step 5:functions get the value
// function foo() {
//     var res = prompt("Enter the Value")
//     var multi = res * 2;
//     console.log(multi);
// }
// // o/p:Step 5:functions get the name & get the value
// // user ரிடம் input ஐ வாங்கி பயன்படுத்துவோம்.இதற்காக தான் prompt பயன்படுத்தப்படுகிறது.இதனை console ல் காணலாம்.
// // இதுவே இந்த program ன் உடைய output ஆகும்.

// *************************************************************************************************************************

//!Use prompt to read a value from user and display it in the span element.
// // Step 1:create element
// const button = document.createElement("button")

// // Step 2:content
// button.innerText = "click here"

// // Step 3:append
// document.body.append(button)

// // Step 4:addEventListener
// button.addEventListener("click", foo)

// // Step 5:functions get the value
// function foo() {
//     var res = prompt("Enter the Value")
//     return res;
//     // // var multi = res * 2;
//     // // return multi;
// }

// // // Step 6:applying querySelector method
// const span = document.querySelector("span")

// // // Step 7:span content
// span.innerText = foo();

// // // // Step 8:append
// document.body.append(span)

// // o/p:
// // user ரிடம் input ஐ வாங்கி பயன்படுத்துவோம்.இதற்காக தான் prompt பயன்படுத்தப்படுகிறது.
// // இதனை நம்முடைய screen ல் அதை காண முடியும்.
// // இதுவே இந்த program ன் உடைய output ஆகும்.

// *************************************************************************************************************************

//!Use prompt to read a letters from user and display it in the span element.
// // Step 1:create element
// const button = document.createElement("button")

// // Step 2:content
// button.innerText = "click here"

// // Step 3:append
// document.body.append(button)

// // Step 4:addEventListener
// button.addEventListener("click", foo)

// // Step 5:functions get the value
// function foo() {
//   var res = prompt("Enter the Name")
//   return res;
// }

// // // Step 6:applying querySelector method
// const span = document.querySelector("span")

// // // Step 7:span content
// span.innerText = foo();

// // o/p:
// // user ரிடம் input ஐ வாங்கி பயன்படுத்துவோம்.இதற்காக தான் prompt பயன்படுத்தப்படுகிறது.
// // இதனை நம்முடைய screen ல் அதை காண முடியும்.
// // இதுவே இந்த program ன் உடைய output ஆகும்.

// *************************************************************************************************************************

//! Use prompt to read a value from user and display it in the span element.

// const element = prompt("Enter your Name")
// const span = document.createElement("span")
// document.body.append(span)
// span.innerHTML= element

// // o/p:
// // user ரிடம் input ஐ வாங்கி பயன்படுத்துவோம்.இதற்காக தான் prompt பயன்படுத்தப்படுகிறது.
// // இதனை நம்முடைய screen ல் அதை காண முடியும்.
// // இதுவே இந்த program ன் உடைய output ஆகும்.

// *************************************************************************************************************************

//! Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph
// const element = document.querySelector("h1");
// element.addEventListener("click", (e) => {
// // console.log(e);  // PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …}
//   document.querySelector("span").innerText = `Coordinate X = ${e.pageX} and Y = ${e.pageY}`;
// });

// *************************************************************************************************************************

//! Write a Javascript code for character counts in the textarea
// const textarea = document.getElementById("inputarea")
// textarea.addEventListener("input",(event)=>{
//     document.querySelector("span").innerText = `Characters ${event.target.value.length}`
// })

// *************************************************************************************************************************