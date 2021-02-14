const tasklistUL = document.getElementById('tasklist-ul');
const inputNew = document.getElementById('new-list-item');
const listBody = document.getElementById('list-body')
const aToZ = document.getElementById('atoz');
const deleteAll = document.getElementById("deleteAll")
const dateContainer = document.getElementById("date-container")

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})



const addNewItemButton = document.getElementById("add-new-item")
let listItemArray = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const todayDate = new Date()
//listItemArray.push(`Today is ${months[todayDate.getMonth()]} ${todayDate.getDate()}th, ${days[todayDate.getDay()]}`)
listItemArray.push("Hey welcome to your tasklist 👋")
dateContainer.innerText = `Today is ${months[todayDate.getMonth()]} ${todayDate.getDate()}th, ${days[todayDate.getDay()]}`



const populateList = function () {
    listBody.innerHTML = ""
    for (elem of listItemArray) {

        const newListItemDiv = document.createElement('div');
        const newListItemLi = document.createElement('li');
        const trashButton = document.createElement('i')

        trashButton.setAttribute("id", "trash-button");

        //appending
        listBody.appendChild(newListItemDiv);
        newListItemDiv.appendChild(newListItemLi);
        newListItemDiv.appendChild(trashButton);


        //adding classes
        newListItemDiv.classList.add("list-item", "d-flex", "justify-content-between", "align-items-center", "my-2")
        newListItemLi.classList.add("fs-4")
        trashButton.classList.add("fas", "fa-trash", "fa-2x", "btn", "btn-outline")
        trashButton.addEventListener("click", deleteItemFromList)

        //setting value of new list item
        const textContent = document.createTextNode(elem);
        newListItemLi.appendChild(textContent);
    }
}

const addNewItemToList = function () {

    if (inputNew.value.trim() !== "") {
        listItemArray.push(inputNew.value.trim());
    }

    inputNew.value = ""
    populateList();
}

const deleteItemFromList = function (event) {
    for (let i = 0; i < listItemArray.length; i++) {
        if (event.target.previousElementSibling.childNodes[0].nodeValue === listItemArray[i]) {
            listItemArray.splice(i, 1)
        }
    }
    populateList();
}

const sortList = function (event) {
    if (event.target.classList.contains('fa-sort-alpha-down')) {
        console.log("oke");
        event.target.classList.replace("fa-sort-alpha-down", "fa-sort-alpha-down-alt")
        listItemArray.sort();
        listItemArray.reverse();
    } else if (event.target.classList.contains('fa-sort-alpha-down-alt')) {
        console.log("oke2")
        event.target.classList.replace("fa-sort-alpha-down-alt", "fa-sort-alpha-down")
        listItemArray.sort();
    }
    populateList();
}


window.onload = populateList()

inputNew.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addNewItemToList();
    }
})
addNewItemButton.addEventListener('click', addNewItemToList)
aToZ.addEventListener("click", sortList)
deleteAll.addEventListener("click", function () {
    listItemArray = [];
    populateList()
})