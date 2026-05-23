function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value;

    if(task === "") {

        alert("Enter a task");

        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button onclick="this.parentElement.remove(); updateCount()">
            X
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";

    updateCount();
}

function updateCount(){

    let total =
        document.querySelectorAll("li").length;

    document.getElementById("count").innerText =
        total + " Tasks";
}