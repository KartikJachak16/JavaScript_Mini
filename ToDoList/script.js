const inputBox = document.getElementById("addtask");
const listcontainer = document.getElementById("ItemContainer");

function addTask() {
    if (inputBox.value === '') {
        alert("Please Enter a task!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

listcontainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showData() {
    listcontainer.innerHTML= localStorage.getItem("data");
}

showData();