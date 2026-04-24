// let a = 23;

// a=a+1;
// console.log("Number = ", a);
// console.log(typeof(a));

// a = "Prerana";
// a = a + 1;
// console.log("Name = ", a);
// console.log(typeof(a));

// a = Boolean(a);
// console.log(typeof(a));
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

// changeColor("red", 1000)
//   .then((result) => {
//     console.log(result);
//     console.log("It is red");
//     return changeColor("green", 2000).then((result) => {
//       console.log(result);
//       console.log("It is green");
//       return changeColor("pink", 3000).then((result) => {
//         console.log(result);
//         console.log("It is pink");
//       });
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("Unsuccessful color change");
//   });

async function demo() {
  await changeColor("red", 1000);
  await changeColor("pink", 1000);
  await changeColor("orange", 1000);
  await changeColor("purple", 1000);
}

demo();

let url = "https://catfact.ninja/fact";
fetch(url)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

let url1 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let link = await getDogPics();
  let img = document.querySelector("#text");
  img.setAttribute("src", link);
});

async function getDogPics() {
  try {
    let res = await axios.get(url1);
    return res.data.message;
  } catch (e) {
    console.log("error: ", e);
    return "No image found";
  }
}
