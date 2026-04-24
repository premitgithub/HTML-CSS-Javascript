alert("be aware !!!");
let arr = ["a", "b", "c", "d", "e"];
arr.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((val) => {
  console.log(val * val);
});
let arr2 = [20, 66, 77, 55, 99, 78, , 90, 95, 98];
let evenArr = arr2.filter((val) => {
  return val > 90;
});
console.log(evenArr);
let newArr = arr1.map((val) => {
  return val * val;
});
console.log(newArr);
//take a no n as input from the user. Create an array of numbers from 1 to n
let n = prompt("Enter a number");
let nums = [];
for (let i = 0; i < n; i++) {
  nums[i] = i + 1;
}
console.log(nums);
//calculate the sum of nums
let sum = nums.reduce((res, curr) => {
  return res + curr;
});
console.log("Sum = ", sum);
//calculate the product
let prod = nums.reduce((res, curr) => {
  return res * curr;
});
console.log("Product = ", prod);

console.log(window);
console.dir(document);
let head = document.getElementById("heading");
console.dir(head);
let firstEl = document.querySelector(".para");
console.dir(firstEl);
let allEl = document.querySelectorAll("p");
console.dir(allEl);

//practice question on DOM
//1)
let heading = document.querySelector("h2");
console.dir(heading.innerText);
heading.innerText = heading.innerText + " from Prerana Mitra :)😘";
//2)
let divs = document.querySelectorAll(".box");
console.log(divs);
//to make some changes in the inner text of each box
let idx = 1;
for (div of divs) {
  div.innerText = `inner text changed for box ${idx}`;
  idx++;
}
// practice question 2 DOM(2)
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!!";
console.dir(newBtn);
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newBtn);
// if we use setAtttribute to include the properties of class to another it is not possible coz it overwrites it
// therefore to add the prev as well as new class properties .. we use classList
let para1 = document.querySelector(".paragraph");
para1.classList.add("newpara");

// event handling
let btn1 = document.querySelector("#btn1");
//event listener
handler3 = () => {
  console.log("Button was clicked - handler3");
};

btn1.addEventListener("click", () => {
  console.log("Button was clicked - handler1");
});
btn1.addEventListener("click", () => {
  console.log("Button was clicked - handler2");
});
btn1.addEventListener("click", handler3);
btn1.addEventListener("click", () => {
  console.log("Button was clicked - handler4");
});
//event
btn1.removeEventListener("click", handler3);
//practice question toggling to dark and light mode
let mode = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
mode.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    //document.querySelector("body").style.backgroundColor="black";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    //document.querySelector("body").style.backgroundColor="white";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});

let el = document.createElement("p");
el.innerText("Hey I'm Red");

document.querySelector('body').append(el);

