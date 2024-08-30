function addTodos() {
    let input = document.getElementById("todo");
    console.log(input.value);

    let list = document.getElementById("listItem");
    let listElement = document.createElement("li");
    let liText = document.createTextNode(input.value);
    listElement.appendChild(liText);


    let deletbtn = document.createElement("button");
    let buttonText = document.createTextNode("Delet");
    deletbtn.appendChild(buttonText);
    listElement.appendChild(deletbtn);
    deletbtn.setAttribute("onclick", "deletTodo(this)")



    let editbtn = document.createElement("button");
    let editbtnText = document.createTextNode("Edit");
    editbtn.appendChild(editbtnText);
    listElement.appendChild(editbtn);
    editbtn.setAttribute("onclick", "editTodo(this)");


    list.appendChild(listElement);
    console.log(listElement);
    input.value = ""
}


function deletAll() {
    let list = document.getElementById("listItem");
    list.remove();
}
function deletTodo(e){
    console.log(e.parentNode.remove());
}

function editTodo(e){
    let currLi =e.parentNode.firstChild.nodeValue;
    console.log(currLi);
    
    let inputField = prompt("Enter updated value",currLi);
    e.parentNode.firstChild.nodeValue =inputField
}




