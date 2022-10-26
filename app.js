const express = require("express");
const app = express();

let newTask = document.getElementById("newTask");
let addTask = document.getElementById("addTask");
let incomplete = document.getElementById("incomplete");
let done = document.getElementById("done");
let box = document.getElementById("box");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
  }
};


app.listen(3000, () => console.log("server up & running..."));
