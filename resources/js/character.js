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

let healthPlayer1Max = document.getElementById("healthPlayer1").max;
let healthPlayer2Max = document.getElementById("healthPlayer2").max;
let healthPlayer3Max = document.getElementById("healthPlayer3").max;
let healthPlayer1 = document.getElementById("healthPlayer1").value;
let healthPlayer2 = document.getElementById("healthPlayer2").value;
let healthPlayer3 = document.getElementById("healthPlayer3").value;

let manaPlayer1Max = document.getElementById("manaPlayer1").max;
let manaPlayer2Max = document.getElementById("manaPlayer2").max;
let manaPlayer3Max = document.getElementById("manaPlayer3").max;
let manaPlayer1 = document.getElementById("manaPlayer1").value;
let manaPlayer2 = document.getElementById("manaPlayer2").value;
let manaPlayer3 = document.getElementById("manaPlayer3").value;

let healthEnemy1Max = document.getElementById("healthEnemy1").max;
let healthEnemy2Max = document.getElementById("healthEnemy2").max;
let healthEnemy3Max = document.getElementById("healthEnemy3").max;
let healthEnemy1 = document.getElementById("healthEnemy1").value;
let healthEnemy2 = document.getElementById("healthEnemy2").value;
let healthEnemy3 = document.getElementById("healthEnemy3").value;

let skill1Img = document.getElementById("skillImg1");
let skill2Img = document.getElementById("skillImg2");
let skill3Img = document.getElementById("skillImg3");
let skill4Img = document.getElementById("skillImg4");
let skill5Img = document.getElementById("skillImg5");

let skillName1 = document.getElementById("skillName1");
let skillName2 = document.getElementById("skillName2");
let skillName3 = document.getElementById("skillName3");
let skillName4 = document.getElementById("skillName4");
let skillName5 = document.getElementById("skillName5");

let skilldiv1 = document.getElementById("skill1");
let skilldiv2 = document.getElementById("skill2");
let skilldiv3 = document.getElementById("skill3");
let skilldiv4 = document.getElementById("skill4");
let skilldiv5 = document.getElementById("skill5");

let skillDiv = document.querySelector("#skills");
let useSkill = document.querySelector("#useSkill");
let skill1;
let skill2;
let skill3;
let skill4;
let skill5;
let selectSkill;
let skillArr;
let descr = document.getElementById("descr");

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
                document.getElementById("healthPlayer" + (i + 1)).max = charJoker.maxhp;
                break;
            case "mona":
                selectedTeam[i] = charMona;
                document.getElementById("playerName" + (i + 1)).innerText = "mona";
                document.getElementById("healthPlayer" + (i + 1)).max = charMona.maxhp;
                break;
            case "skull":
                selectedTeam[i] = charSkull;
                document.getElementById("playerName" + (i + 1)).innerText = "skull";
                document.getElementById("healthPlayer" + (i + 1)).max = charSkull.maxhp;
                break;
            case "panther":
                selectedTeam[i] = charPanther;
                document.getElementById("playerName" + (i + 1)).innerText = "panther";
                document.getElementById("healthPlayer" + (i + 1)).max = charPanther.maxhp;
                break;
            case "fox":
                selectedTeam[i] = charFox;
                document.getElementById("playerName" + (i + 1)).innerText = "fox";
                document.getElementById("healthPlayer" + (i + 1)).max = charFox.maxhp;
                break;
            case "queen":
                selectedTeam[i] = charQueen;
                document.getElementById("playerName" + (i + 1)).innerText = "queen";
                document.getElementById("healthPlayer" + (i + 1)).max = charQueen.maxhp;
                break;
            case "noir":
                selectedTeam[i] = charNoir;
                document.getElementById("playerName" + (i + 1)).innerText = "noir";
                document.getElementById("healthPlayer" + (i + 1)).max = charNoir.maxhp;
                break;
            case "crow":
                selectedTeam[i] = charCrow;
                document.getElementById("playerName" + (i + 1)).innerText = "crow";
                document.getElementById("healthPlayer" + (i + 1)).max = charCrow.maxhp;
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
                        skillDiv.classList.remove("skills-hidden");
                        skillDiv.classList.add("skills")
                        selectEnemy = holdEnemyInfo1;
                        healthEnemy1Max = holdEnemyInfo1.maxhp;
                        healthEnemy1 = holdEnemyInfo1.hp;
                        console.log(holdEnemyInfo1);
                        break;
                    case enemyBtnArr[1]:
                        enemyBtnArr[1].classList.add("selected");
                        enemyBtnArr[0].classList.remove("selected");
                        enemyBtnArr[2].classList.remove("selected");
                        selectEnemy = holdEnemyInfo2;
                        healthEnemy2Max = holdEnemyInfo2.maxhp;
                        healthEnemy2 = holdEnemyInfo2.hp;
                        console.log(holdEnemyInfo2);
                        break;
                    case enemyBtnArr[2]:
                        enemyBtnArr[2].classList.add("selected");
                        enemyBtnArr[0].classList.remove("selected");
                        enemyBtnArr[1].classList.remove("selected");
                        selectEnemy = holdEnemyInfo3;
                        healthEnemy3Max = holdEnemyInfo3.maxhp;
                        healthEnemy3 = holdEnemyInfo3.hp;
                        console.log(holdEnemyInfo3);
                        break;
                }
            })
            teamBtnArr[i].addEventListener("click", function () {
                descr.innerText += "";

                switch (teamBtnArr[i]) {
                    case teamBtnArr[0]:
                        teamBtnArr[0].classList.add("selected");
                        teamBtnArr[1].classList.remove("selected");
                        teamBtnArr[2].classList.remove("selected");
                        skillDiv.classList.add("skills");
                        skillDiv.classList.remove("skills-hidden");
                        useSkill.classList.add("useSkill");
                        useSkill.classList.remove("skills-hidden");
                        descr.innerText = "";
                        holdTeamInfo1 = selectedTeam[0];
                        selectTeam = holdTeamInfo1;
                        healthPlayer1Max = holdTeamInfo1.maxhp;
                        manaPlayer1Max = holdTeamInfo1.maxmana;
                        healthPlayer1 = holdTeamInfo1.hp;
                        manaPlayer1 = holdTeamInfo1.mana;
                        playerSkills = selectTeam.moves;
                        playerImg1.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[0].name + "Thief.png)";
                        playerImg2.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[1].name + ".png)";
                        playerImg3.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[2].name + ".png)";

                        //deselect skills from other characters                        
                        skillArr = [skilldiv1, skilldiv2, skilldiv3, skilldiv4, skilldiv5];
                        skillArr[0].classList.remove("selected");
                        skillArr[1].classList.remove("selected");
                        skillArr[2].classList.remove("selected");
                        skillArr[3].classList.remove("selected");

                        //skills
                        skill1 = holdTeamInfo1.moves[0];
                        skill2 = holdTeamInfo1.moves[1];
                        skill3 = holdTeamInfo1.moves[2];
                        skill4 = holdTeamInfo1.moves[3];
                        skill5 = holdTeamInfo1.moves[4];

                        //skill images
                        skill1Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[0].moves[0].element + ".png)";
                        skill2Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[0].moves[1].element + ".png)";
                        skill3Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[0].moves[2].element + ".png)";
                        skill4Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[0].moves[3].element + ".png)";
                        console.log(selectTeam);

                        //skillnames
                        skillName1.innerHTML = selectedTeam[0].moves[0].name;
                        skillName2.innerHTML = selectedTeam[0].moves[1].name;
                        skillName3.innerHTML = selectedTeam[0].moves[2].name;
                        skillName4.innerHTML = selectedTeam[0].moves[3].name;
                        selectSkills()
                        break;
                    case teamBtnArr[1]:
                        teamBtnArr[1].classList.add("selected");
                        teamBtnArr[0].classList.remove("selected");
                        teamBtnArr[2].classList.remove("selected");
                        skillDiv.classList.add("skills");
                        skillDiv.classList.remove("skills-hidden");
                        useSkill.classList.add("useSkill");
                        useSkill.classList.remove("skills-hidden");
                        descr.innerText = "";
                        holdTeamInfo2 = selectedTeam[1];
                        selectTeam = holdTeamInfo2;
                        healthPlayer2Max = holdTeamInfo2.maxhp;
                        manaPlayer2Max = holdTeamInfo2.maxmana;
                        healthPlayer2 = holdTeamInfo2.hp;
                        manaPlayer2 = holdTeamInfo2.mana;
                        playerSkills = selectTeam.moves;
                        playerImg1.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[0].name + ".png)";
                        playerImg2.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[1].name + "Thief.png)";
                        playerImg3.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[2].name + ".png)";
                        console.log(selectTeam);

                        //deselect skills from other characters                        
                        skillArr = [skilldiv1, skilldiv2, skilldiv3, skilldiv4, skilldiv5];
                        skillArr[0].classList.remove("selected");
                        skillArr[1].classList.remove("selected");
                        skillArr[2].classList.remove("selected");
                        skillArr[3].classList.remove("selected");

                        //skills
                        skill1 = holdTeamInfo2.moves[0];
                        skill2 = holdTeamInfo2.moves[1];
                        skill3 = holdTeamInfo2.moves[2];
                        skill4 = holdTeamInfo2.moves[3];

                        //skill images
                        skill1Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[1].moves[0].element + ".png)";
                        skill2Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[1].moves[1].element + ".png)";
                        skill3Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[1].moves[2].element + ".png)";
                        skill4Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[1].moves[3].element + ".png)";

                        //skillnames
                        skillName1.innerHTML = selectedTeam[1].moves[0].name;
                        skillName2.innerHTML = selectedTeam[1].moves[1].name;
                        skillName3.innerHTML = selectedTeam[1].moves[2].name;
                        skillName4.innerHTML = selectedTeam[1].moves[3].name;
                        selectSkills()
                        break;
                    case teamBtnArr[2]:
                        teamBtnArr[2].classList.add("selected");
                        teamBtnArr[0].classList.remove("selected");
                        teamBtnArr[1].classList.remove("selected");
                        skillDiv.classList.add("skills");
                        skillDiv.classList.remove("skills-hidden");
                        useSkill.classList.add("useSkill");
                        useSkill.classList.remove("skills-hidden");
                        descr.innerText = "";
                        holdTeamInfo3 = selectedTeam[2];
                        selectTeam = holdTeamInfo3;
                        healthPlayer3Max = holdTeamInfo3.maxhp;
                        manaPlayer3Max = holdTeamInfo3.maxmana;
                        healthPlayer3 = holdTeamInfo3.hp;
                        manaPlayer3 = holdTeamInfo3.mana;
                        playerSkills = selectTeam.moves;
                        playerImg1.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[0].name + ".png)";
                        playerImg2.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[1].name + ".png)";
                        playerImg3.style.backgroundImage = "url(./resources/img/characters/" + selectedTeam[2].name + "Thief.png)";
                        console.log(selectTeam);

                        //deselect skills from other characters
                        skillArr = [skilldiv1, skilldiv2, skilldiv3, skilldiv4, skilldiv5];
                        skillArr[0].classList.remove("selected");
                        skillArr[1].classList.remove("selected");
                        skillArr[2].classList.remove("selected");
                        skillArr[3].classList.remove("selected");

                        //skills
                        skill1 = holdTeamInfo3.moves[0];
                        skill2 = holdTeamInfo3.moves[1];
                        skill3 = holdTeamInfo3.moves[2];
                        skill4 = holdTeamInfo3.moves[3];

                        //skill images
                        skill1Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[2].moves[0].element + ".png)";
                        skill2Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[2].moves[1].element + ".png)";
                        skill3Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[2].moves[2].element + ".png)";
                        skill4Img.style.backgroundImage = "url(./resources/img/skills/" + selectedTeam[2].moves[3].element + ".png)";

                        //skillnames
                        skillName1.innerHTML = selectedTeam[2].moves[0].name;
                        skillName2.innerHTML = selectedTeam[2].moves[1].name;
                        skillName3.innerHTML = selectedTeam[2].moves[2].name;
                        skillName4.innerHTML = selectedTeam[2].moves[3].name;
                        selectSkills()
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

function selectSkills() {
    skillArr = [skilldiv1, skilldiv2, skilldiv3, skilldiv4];
    for (let i = 0; i < 4; i++) {
        skillArr[i].addEventListener("click", function () {
            switch (skillArr[i]) {
                case skillArr[0]:
                    console.log("skill 1 selected")
                    skillArr[0].classList.add("selected");
                    skillArr[1].classList.remove("selected");
                    skillArr[2].classList.remove("selected");
                    skillArr[3].classList.remove("selected");
                    skill1 = selectTeam.moves[0];
                    selectSkill = skill1;
                    descr.innerText = "";
                    descr.innerText += "Skill Type: " + selectSkill.type + "\n" + "Cost: " + selectSkill.manaCost + " SP" + "\n" + "Description: " + "\n " + selectSkill.description + "\n ";
                    break;
                case skillArr[1]:
                    skillArr[1].classList.add("selected");
                    skillArr[0].classList.remove("selected");
                    skillArr[2].classList.remove("selected");
                    skillArr[3].classList.remove("selected");
                    skill1 = selectTeam.moves[1];
                    selectSkill = skill2;
                    descr.innerText = "";
                    descr.innerText += "Skill Type: " + selectSkill.type + "\n" + "Cost: " + selectSkill.manaCost + " SP" + "\n" + "Description: " + "\n " + selectSkill.description + "\n ";
                    break;
                case skillArr[2]:
                    skillArr[2].classList.add("selected");
                    skillArr[1].classList.remove("selected");
                    skillArr[0].classList.remove("selected");
                    skillArr[3].classList.remove("selected");
                    skill1 = selectTeam.moves[2];
                    selectSkill = skill3;
                    descr.innerText = "";
                    descr.innerText += "Skill Type: " + selectSkill.type + "\n" + "Cost: " + selectSkill.manaCost + " SP" + "\n" + "Description: " + "\n " + selectSkill.description + "\n ";
                    break;
                case skillArr[3]:
                    skillArr[3].classList.add("selected");
                    skillArr[1].classList.remove("selected");
                    skillArr[2].classList.remove("selected");
                    skillArr[0].classList.remove("selected");
                    skill1 = selectTeam.moves[3];
                    selectSkill = skill4;
                    descr.innerText = "";
                    descr.innerText += "Skill Type: " + selectSkill.type + "\n" + "Cost: " + selectSkill.manaCost + " SP" + "\n" + "Description: " + "\n " + selectSkill.description + "\n ";
                    break;
            }
        })

    }
}