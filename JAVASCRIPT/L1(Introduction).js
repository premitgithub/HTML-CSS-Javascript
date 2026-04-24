let h1 = document.querySelector("#text");
let p = document.querySelector("p");

h1.addEventListener("input", function () {
  console.log(h1.value);
  p.innerText = h1.value;
});

let el = document.createElement("p");
el.innerText = "Hey I'm Red";

let para = document.querySelector("body");
para.append(el);
el.classList.add("red");

let el1 = document.createElement("h3");
el1.innerText = "Hey I'm Blue";

let h = document.querySelector("body");
h.append(el1);
el1.classList.add("blue");

let d = document.createElement("div");
let h4 = document.createElement("h4");
let p2 = document.createElement("p");

h4.innerText = "I'm a div";

p2.innerText = "Me  TOO!";

d.append(h4);
d.append(p2);
d.classList.add("new");
document.querySelector("body").append(d);
