let todo = [];

let guess = prompt("Enter the choice you want to perform");

while (true) {
  if (guess == "quit") {
    console.log("Quitting from this app");
    break;
  }
  if (guess == "list") {
    console.log("------------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("------------------");
  } else if (guess == "add") {
    let task = prompt("Please enter the task you want");
    todo.push(task);
    console.log("task added");
  } else if (guess == "delete") {
    let idx = prompt("Enter the index of the task you want to delete");
    todo.splice(idx, 1);
    console.log("Task deleted");
  }
  guess = prompt("Enter the choice you want to perform");
}
