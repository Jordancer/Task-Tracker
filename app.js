// //-------------------------------ADD TASK----------------------------------------------------//

// let taskInput = document.getElementById("newTask")
// //-------------------------------BUTTON----------------------------------------------------//

// let addButton = document.getElementById("button")

// //-------------------------------INCOMPLETE LIST----------------------------------------------------//

// let incompleteTasks = document.getElementById("incomplete")
// //-------------------------------DONE LIST----------------------------------------------------//

// let completeTasks = document.getElementById("done")
// //-------------------------------JSON----------------------------------------------------//
const fs = require("fs");
fs.readFile("./task.JSON", "utf8", (err, jsonString) => {
  if (err) {
    console.log(`File Read Failed:${err}`);
    return;
  }
  console.log("File Data:", jsonString);
});

// addButton.addEventListener("click",() =>{
//     data = {
//         "newTask":newTask.value,
//     }

// })
