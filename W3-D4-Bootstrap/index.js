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

const nameList = [];
const nameListUl = document.getElementById("name-list-ul");
const generateTeamsButton = document.getElementById("generate-teams-button");
const numberOfTeamsInput = document.getElementById("numberofteams");
function populateNameList() {
  for (let i = 0; i < data.length; i++) {
    const nameLi = document.createElement("li");
    nameListUl.appendChild(nameLi);
    nameLi.innerText = data[i].first_name + " " + data[i].last_name;
    nameLi.classList.add("list-group-item");
  }
}

window.onload = populateNameList();

function determineNumberOfTeams() {
  return numberOfTeamsInput.value;
}

function generateTeams() {}

generateTeamsButton.addEventListener("click", determineNumberOfTeams);
