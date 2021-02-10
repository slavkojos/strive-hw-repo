const tasklistUL = document.getElementById('tasklist-ul');
const inputNew = document.getElementById('new-list-item');
const listBody = document.getElementById('list-body')
const aToZ = document.getElementById('atoz');
const zToA =document.getElementById('ztoa')


const addNewItemButton = document.getElementById("add-new-item")
//console.log(addNewItemButton);
let listItemArray = [];



const populateList = function () {
    for (elem of listItemArray) {
    
    const newListItemDiv = document.createElement('div');
    const newListItemLi = document.createElement('li');
    const trashButton = document.createElement('i')
    console.log(inputNew.value)

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
    console.log(listBody);
    }
}

const addNewItemToList = function () {
    console.log(inputNew.value)
    listItemArray.push(inputNew.value);
    inputNew.value = ""
    listBody.innerHTML=""
    populateList();
}

const deleteItemFromList = function (event) {
    console.log("event",event);
    console.log(event.target.previousElementSibling.childNodes[0].nodeValue)
    //event.target.parentNode.parentNode.removeChild(event.target.parentNode)
    for (let i=0;i<listItemArray.length;i++) {
        if (event.target.previousElementSibling.childNodes[0].nodeValue === listItemArray[i]) {
            listItemArray.splice(i,1)
        }
    }
    listBody.innerHTML=""
    populateList();
}

const sortAtoZ = function () {
    listItemArray.sort();
    listBody.innerHTML=""
    populateList();
}

const sortZToA = function () {
    listItemArray.sort();
    listItemArray.reverse();
    listBody.innerHTML=""
    populateList();
}



addNewItemButton.addEventListener('click', addNewItemToList)
aToZ.addEventListener("click",sortAtoZ)
zToA.addEventListener("click",sortZToA)
