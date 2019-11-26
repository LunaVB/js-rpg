startBtn.addEventListener("click", function gameLoop() {
    createChar();
    generateLowLvlWave();
});

function enemyDeath() {
    if (holdEnemyInfo1.hp == undefined && holdEnemyInfo2.hp == undefined && holdEnemyInfo3.hp == undefined) {
        console.log("all enemies defeated. spawning next wave.");
        enemyName1.innerText = "";
        enemyName1.disabled = false;
        enemyName2.innerText = "";
        enemyName2.disabled = false;
        enemyName3.innerText = "";
        enemyName3.disabled = false;
        generateLowLvlWave()
    }
    if (holdEnemyInfo1.hp <= 0 || holdEnemyInfo2.hp <= 0 || holdEnemyInfo3.hp <= 0) {
        if (holdEnemyInfo1.hp <= 0) {
            enemyImg1.style.backgroundImage = "";
            enemyName1.disabled = true;
            enemy1 = "";
            holdEnemyInfo1 = "";
            console.log("enemy 1 deleted")
        }

        if (holdEnemyInfo2.hp <= 0) {
            enemyImg2.style.backgroundImage = "";
            enemyName2.disabled = true;
            enemy2 = "";
            holdEnemyInfo2 = "";
            console.log("enemy 2 deleted")
        }

        if (holdEnemyInfo3.hp <= 0) {
            enemyImg3.style.backgroundImage = "";
            enemyName3.disabled = true;
            enemy3 = "";
            holdEnemyInfo3 = "";
            console.log("enemy 3 deleted")
        }

    }

}
let teamMadeMove = 0;
let maxTeamMove = 3;
let roundNumber = 1;
playerOrderCh = playerOrder.children;
playerOrderArr = Array.prototype.slice.call(playerOrderCh);
//checks which player button is selected and disables it after a move has been made
function playerMoveMade() {
    let enemyOrderCh = enemyOrder.children;
    let enemyOrderArr = Array.prototype.slice.call(enemyOrderCh);
    for (let i = 0; i < 3; i++) {
        if (playerOrderArr[i].firstChild.data === selectTeam.name) {
            document.getElementById("playerName" + (i + 1)).disabled = true;
            enemyName1.classList.remove("selected");
            enemyName2.classList.remove("selected");
            enemyName3.classList.remove("selected");
        }
    }
    for (let i = 0; i < 3; i++) { //stores changed enemy HP into appropriate holdEnemyInfo
        if (enemyOrderArr[i].firstChild.data === selectEnemy.name) {
            switch (i) {
                case 0:
                    holdEnemyInfo1.hp = enemyHp;
                    document.getElementById("healthEnemy1").value = holdEnemyInfo1.hp;
                    console.log("enemyInfo 1 saved")
                    break;
                case 1:
                    holdEnemyInfo2.hp = enemyHp;
                    document.getElementById("healthEnemy2").value = holdEnemyInfo2.hp;
                    console.log("enemyInfo 2 saved")
                    break;
                case 2:
                    holdEnemyInfo3.hp = enemyHp;
                    document.getElementById("healthEnemy3").value = holdEnemyInfo3.hp;
                    console.log("enemyInfo 3 saved")
                    break;
            }
        }
        enemyDeath();
    }
    //NEW ROUND
    //when all teammates and enemies have made a move, round resets
    teamMadeMove += 1;
    if (teamMadeMove === 3) {
        // roundNumber += 1;
        console.log("round ended. resetting buttons");
        for (let i = 0; i < 3; i++) {
            playerOrderArr[i].disabled = false;
            playerName1.classList.remove("selected");
            playerName2.classList.remove("selected");
            playerName3.classList.remove("selected");
        }
    }
    if (teamMadeMove > 3) {
        teamMadeMove = 1;
    }
    enemyDeath();

}

function enemyMoveMade() {
    for (let i = 0; i < 3; i++) { //stores changed teammate HP into appropriate holdTeamInfo
        if (playerOrderArr[i].firstChild.data === selectTeam.name) {
            switch (i) {
                case 0:
                    holdTeamInfo1.hp = playerHp;
                    document.getElementById("healthPlayer1").value = holdTeamInfo1.hp;
                    console.log("playerInfo 1 saved")
                    break;
                case 1:
                    holdTeamInfo2.hp = playerHp;
                    document.getElementById("healthPlayer2").value = holdTeamInfo2.hp;
                    console.log("playerInfo 2 saved")
                    break;
                case 2:
                    holdTeamInfo3.hp = playerHp;
                    document.getElementById("healthPlayer3").value = holdTeamInfo3.hp;
                    console.log("playerInfo 3 saved")
                    break;
            }
        }
        enemyDeath();
    }
}