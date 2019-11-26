const startBtn = document.getElementById("startBtn");
let selectedRace = document.getElementById("selectedRace");
let statField = document.getElementById("statField");
let playField = document.getElementById("playField");
let playerImg1 = document.getElementById("player1");
let playerImg2 = document.getElementById("player2");
let playerImg3 = document.getElementById("player3");
let playerName0;
let playerName1 = document.getElementById("playerName1");
let playerName2 = document.getElementById("playerName2");
let playerName3 = document.getElementById("playerName3");
let enemyName1 = document.getElementById("enemyName1");
let enemyName2 = document.getElementById("enemyName2");
let enemyName3 = document.getElementById("enemyName3");
let move;
let selectTeam;
let selectEnemy;
let holdTeamInfo1;
let holdTeamInfo2;
let holdTeamInfo3;
let holdEnemyInfo1;
let holdEnemyInfo2;
let holdEnemyInfo3;


let char = selectedRace.children;
let charArr = Array.prototype.slice.call(char);
let numSelected = 0;
let maxSelected = 3;
startBtn.disabled = true;
for (var i = 0; i < charArr.length; i++) {
    charArr[i].addEventListener("click", function () {
        if (this.classList.contains("selected")) {
            this.classList.remove("selected");
            numSelected--;
        } else if (numSelected < maxSelected) {
            this.classList.add("selected");
            numSelected++;
        }
        //cannot start game until 3 characters have been chosen
        if (numSelected === 3) {
            startBtn.disabled = false;
        } else {
            startBtn.disabled = true;
        }
    });
}
let selectedClassNodeList;
let selectedTeam;

function createChar() {
    selectedClassNodeList = document.querySelectorAll(".selected");
    selectedTeam = Array.prototype.slice.call(selectedClassNodeList);
    selectedRace.disabled = true;
    startBtn.disabled = true;
    statField.innerText += "You have selected: " + "\n"

    for (let i = 0; i < 3; i++) {
        statField.innerText += selectedTeam[i].value + "\n";
        switch (selectedTeam[i].value) { //grab value of character
            case "joker":
                selectedTeam[i] = charJoker;
                document.getElementById("playerName" + (i + 1)).innerText = "joker";
                break;
            case "mona":
                selectedTeam[i] = charMona;
                document.getElementById("playerName" + (i + 1)).innerText = "mona";
                break;
            case "skull":
                selectedTeam[i] = charSkull;
                document.getElementById("playerName" + (i + 1)).innerText = "skull";
                break;
            case "panther":
                selectedTeam[i] = charPanther;
                document.getElementById("playerName" + (i + 1)).innerText = "panther";
                break;
            case "fox":
                selectedTeam[i] = charFox;
                document.getElementById("playerName" + (i + 1)).innerText = "fox";
                break;
            case "queen":
                selectedTeam[i] = charQueen;
                document.getElementById("playerName" + (i + 1)).innerText = "queen";
                break;
            case "noir":
                selectedTeam[i] = charNoir;
                document.getElementById("playerName" + (i + 1)).innerText = "noir";
                break;
            case "crow":
                selectedTeam[i] = charCrow;
                document.getElementById("playerName" + (i + 1)).innerText = "crow";
                break;
            default:
                console.log("Something went wrong on character creation");
                break;
        }
    }
    let enemyBtnArr;
    let teamBtnArr;

    function selectCharacters() {
        enemyBtnArr = [enemyName1, enemyName2, enemyName3];
        teamBtnArr = [playerName1, playerName2, playerName3];
        for (let i = 0; i < 3; i++) {
            enemyBtnArr[i].addEventListener("click", function () {
                switch (enemyBtnArr[i]) {
                    case enemyBtnArr[0]:
                        enemyBtnArr[0].classList.add("selected");
                        enemyBtnArr[1].classList.remove("selected");
                        enemyBtnArr[2].classList.remove("selected");
                        selectEnemy = holdEnemyInfo1;
                        console.log(holdEnemyInfo1);
                        break;
                    case enemyBtnArr[1]:
                        enemyBtnArr[1].classList.add("selected");
                        enemyBtnArr[0].classList.remove("selected");
                        enemyBtnArr[2].classList.remove("selected");
                        selectEnemy = holdEnemyInfo2;
                        console.log(holdEnemyInfo2);
                        break;
                    case enemyBtnArr[2]:
                        enemyBtnArr[2].classList.add("selected");
                        enemyBtnArr[0].classList.remove("selected");
                        enemyBtnArr[1].classList.remove("selected");
                        selectEnemy = holdEnemyInfo3;
                        console.log(selectEnemy);
                        console.log(holdEnemyInfo3);
                        break;
                }
            })
            teamBtnArr[i].addEventListener("click", function () {
                switch (teamBtnArr[i]) {
                    case teamBtnArr[0]:
                        teamBtnArr[0].classList.add("selected");
                        teamBtnArr[1].classList.remove("selected");
                        teamBtnArr[2].classList.remove("selected");
                        holdTeamInfo1 = selectedTeam[0];
                        selectTeam = holdTeamInfo1;
                        console.log(selectTeam);
                        break;
                    case teamBtnArr[1]:
                        teamBtnArr[1].classList.add("selected");
                        teamBtnArr[0].classList.remove("selected");
                        teamBtnArr[2].classList.remove("selected");
                        holdTeamInfo2 = selectedTeam[1];
                        selectTeam = holdTeamInfo2;
                        console.log(selectTeam);
                        break;
                    case teamBtnArr[2]:
                        teamBtnArr[2].classList.add("selected");
                        teamBtnArr[0].classList.remove("selected");
                        teamBtnArr[1].classList.remove("selected");
                        holdTeamInfo3 = selectedTeam[2];
                        selectTeam = holdTeamInfo3;
                        console.log(selectTeam);
                        break;
                }
            });
        }
    }
    selectCharacters();
    //drawing the selected characters
    playerImg1.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[0].name + ".png)";
    playerImg2.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[1].name + ".png)";
    playerImg3.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[2].name + ".png)";
}