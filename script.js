const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("Add-btn");
function addTask() {
  if (inputBox.value == "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //create a cross icon [x] in a span
    let span = document.createElement("span");
    // span.innerHTML = "\u00D7";
    span.classList.add("x-icon");
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
addBtn.onclick = addTask;
listContainer.addEventListener(
  "click",
  function (event) {
    //when you click on chicked button
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    }
    // delete the element when you click on the x-icon.
    else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);
//save changes although you click refresh button
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
