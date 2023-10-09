const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value == "") {
        alert("Please fill out the task!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value + '<i class="bx bx-edit" aria-hidden="true" onclick="editTask(this)"></i>';
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function editTask(editIcon) {
    const listItem = editIcon.parentElement;
    const taskText = listItem.firstChild;
    const updatedTask = prompt("Edit the task:", taskText.textContent);

    if (updatedTask !== null) {
        taskText.textContent = updatedTask;
        saveData();
    }
}