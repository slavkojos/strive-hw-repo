const data = [
  { first_name: "Hugues", last_name: "Knibley" },
  { first_name: "Felicle", last_name: "Trafford" },
  { first_name: "Otho", last_name: "Crannach" },
  { first_name: "Jill", last_name: "Eassom" },
  { first_name: "Angeline", last_name: "Nanninini" },
  { first_name: "Carlie", last_name: "Delaprelle" },
  { first_name: "Madelyn", last_name: "Beardmore" },
  { first_name: "Patti", last_name: "Bardill" },
  { first_name: "Corey", last_name: "Lelievre" },
  { first_name: "Aviva", last_name: "Bashford" },
  { first_name: "Codie", last_name: "Murkin" },
  { first_name: "Corie", last_name: "Langdridge" },
  { first_name: "Emmalyn", last_name: "Callan" },
  { first_name: "Rosetta", last_name: "Foort" },
  { first_name: "Jo ann", last_name: "Darree" },
  { first_name: "Algernon", last_name: "Leftley" },
  { first_name: "Brooks", last_name: "Tynnan" },
  { first_name: "Anne-marie", last_name: "Thormann" },
  { first_name: "Nat", last_name: "Sagg" },
  { first_name: "Chan", last_name: "Cureton" },
  { first_name: "Brandie", last_name: "Amoore" },
  { first_name: "Patti", last_name: "Flicker" },
  { first_name: "Harley", last_name: "Ternent" },
  { first_name: "Melisande", last_name: "De Laspee" },
  { first_name: "Parnell", last_name: "Cardinale" },
  { first_name: "Dennet", last_name: "Trawin" },
  { first_name: "Chandra", last_name: "Mertel" },
  { first_name: "Mareah", last_name: "Ottosen" },
  { first_name: "Mandel", last_name: "Dowker" },
  { first_name: "Tiff", last_name: "Gonneau" },
  { first_name: "Sibelle", last_name: "McCartan" },
  { first_name: "Peyton", last_name: "Sansun" },
  { first_name: "Janine", last_name: "Petrasch" },
  { first_name: "Magdalene", last_name: "Olyunin" },
  { first_name: "Edin", last_name: "Orrom" },
  { first_name: "Clio", last_name: "Saye" },
  { first_name: "Cross", last_name: "Fairbourne" },
  { first_name: "Priscella", last_name: "Filshin" },
  { first_name: "Anthe", last_name: "Kington" },
  { first_name: "Coleman", last_name: "Cotterell" },
  { first_name: "Tildie", last_name: "Lesaunier" },
  { first_name: "Penelope", last_name: "Divill" },
  { first_name: "Stephanie", last_name: "Casterton" },
  { first_name: "Cross", last_name: "O'Corr" },
  { first_name: "Crysta", last_name: "Hugnet" },
  { first_name: "Levin", last_name: "Churchill" },
  { first_name: "Abbie", last_name: "Buie" },
  { first_name: "Meridith", last_name: "Winfred" },
  { first_name: "Wynnie", last_name: "Castello" },
  { first_name: "Ailbert", last_name: "Lestor" },
];

const namelist = [];

for (let i = 0; i < data.length; i++) {
  namelist[i] = data[i];
}
for (let i = 0; i < data.length; i++) {}
const nameListUl = document.getElementById("name-list-ul");
const generateTeamsButton = document.getElementById("generate-teams-button");
const numberOfTeamsInput = document.getElementById("numberofteams");
const counterDiv = document.getElementById("counter");
function populateNameList() {
  for (let i = 0; i < namelist.length; i++) {
    const nameLi = document.createElement("li");
    nameListUl.appendChild(nameLi);
    nameLi.innerText = namelist[i].first_name + " " + namelist[i].last_name;
    nameLi.classList.add("list-group-item");
  }
}

window.onload = populateNameList();
//window.onload = teamNumberInput();

function generateRandomNumber(number) {
  return Math.floor(Math.random() * (number - 1 + 1)) + 1;
}

function determineNumberOfTeams() {
  console.log("number of teams", Math.abs(parseInt(spanCounter.innerText)));
  return Math.abs(parseInt(spanCounter.innerText));
}

const tableContainer = document.getElementById("table-content");
const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const namelistLength = namelist.length;
function generateTables() {
  generateButton.removeEventListener("click", generateTables);
  counter.style.display = "none";

  for (let i = 0; i < determineNumberOfTeams(); i++) {
    console.log("new table");
    const column = document.createElement("div");
    const table = document.createElement("table");
    tableContainer.appendChild(column);
    tableContainer.classList.add("my-4");
    column.appendChild(table);
    table.classList.add("table", "table-dark", "table-striped", "table-hover");
    column.classList.add("border", "p-2", "col");
    const tableHead = document.createElement("thead");
    table.appendChild(tableHead);
    const tableHeadRow = document.createElement("tr");
    tableHead.appendChild(tableHeadRow);
    const th = document.createElement("th");
    tableHeadRow.appendChild(th);
    th.classList.add("bg-danger");
    th.setAttribute("scope", "col");
    th.innerText = `TEAM ${alphabet[i]}`;
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    const numberofTeamMembers = Math.floor(
      namelistLength / determineNumberOfTeams()
    );
    console.log("numberofteammembers", numberofTeamMembers);
    for (let j = 0; j < numberofTeamMembers; j++) {
      if (namelist.length > 0) {
        console.log(
          "namelist/determine",
          Math.floor(namelist.length / determineNumberOfTeams())
        );
        const bodyrow = document.createElement("tr");
        tbody.appendChild(bodyrow);
        const td = document.createElement("td");
        bodyrow.appendChild(td);
        td.classList.add("text-nowrap");
        const randomNumber = generateRandomNumber(namelist.length) - 1;
        console.log("namelist length", namelist.length);
        console.log("random number", randomNumber);
        td.innerText =
          namelist[randomNumber].first_name +
          " " +
          namelist[randomNumber].last_name;
        namelist.splice(randomNumber, 1);
      }
    }
  }
  if (namelist.length > 0) {
    const alertDiv = document.createElement("div");
    const teamsContainer = document.getElementById("teams-container");
    teamsContainer.appendChild(alertDiv);
    alertDiv.classList.add("alert", "alert-dark");
    alertDiv.setAttribute("role", "alert");
    let text = "";
    for (let i = 0; i < namelist.length; i++) {
      text += namelist[i].first_name + " " + namelist[i].last_name + ",";
    }
    alertDiv.innerText = `Leftover team members are: ${text}`;
  }

  //populateNameList();
}

const spanCounter = document.getElementById("span-counter");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
function handleCounter(event) {
  if (event.target.id === "subtract") {
    spanCounter.innerText = parseInt(spanCounter.innerText) - 1;
  } else if (event.target.id === "add") {
    spanCounter.innerText = parseInt(spanCounter.innerText) + 1;
  }
  if (parseInt(spanCounter.innerText) < 3) {
    subtractButton.style.visibility = "hidden";
  } else {
    subtractButton.style.visibility = "visible";
  }
  if (parseInt(spanCounter.innerText) >= namelistLength / 2) {
    addButton.style.visibility = "hidden";
  } else {
    addButton.style.visibility = "visible";
  }
}
const generateButton = document.getElementById("generate");

addButton.addEventListener("click", handleCounter);
subtractButton.addEventListener("click", handleCounter);
generateButton.addEventListener("click", generateTables);
