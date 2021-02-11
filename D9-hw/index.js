const bingoBody = document.getElementById("bingo-body");

window.onload = () => {
    
    for (let i=0;i<75;i++)  {
        console.log("hey");
        const bingoField = document.createElement("h4");
        bingoBody.appendChild(bingoField);
        bingoField.classList.add("bingo-field","my-1", "mx-1")
        bingoField.innerText = (i+1)
    }
}