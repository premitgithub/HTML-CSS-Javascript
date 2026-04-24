// let x = function bet(a) {
//   console.log("Hello", a);
// };
// // console.log(x);
// function newFunc(bet) {
//   let a = 5;
//   console.log(bet, a);
// }
// let a = "Hello";
// let arr = [1, 2, 3, 4];
// arr.forEach((val, idx, arr) => {
//   console.log(val, idx, arr);
// });
// let s = "helleh";
// let d = s;

// let i = 0,
//   j = s.length;
// let temp;
// let c = [...s];
// while (i < j) {
//   temp = c[i];
//   c[i] = c[j];
//   c[j] = temp;
//   i++;
//   j--;
// }

// s = c.join("");

// if (s == d) {
//   console.log("great");
// } else {
//   console.log("Leave");
// }

class Car {
  constructor(brand, model,a,b) {
    this.brand = brand;
      this.model = model;
      this.a = a;
      this.b = b;
    }
    showDetails(a,b) {
    // method
      console.log(`This car is a ${this.brand} ${this.model}.`);
      return a + b;
  }
}
const car1 = new Car("Toyota", "Corolla"); // Creating an object instance
console.log(car1.showDetails(10, 20));

function OoE(request) {
    if (request == "odd") {
      let odd = function (n) {
        console.log(!(n % 2 == 0));
      };
      return odd;
    } else if (request == "even") {
      let even = function (n) {
        console.log((n % 2 == 0));
      };
      return even;
    } else {
        console.log("Get lost");
    }
}
