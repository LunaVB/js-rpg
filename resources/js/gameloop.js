startBtn.addEventListener("click", function gameLoop() {
    createChar();
    generateLowLvlWave();
});

function enemyDeath() {
    if (holdEnemyInfo1.hp == undefined && holdEnemyInfo2.hp == undefined && holdEnemyInfo3.hp == undefined) {
        console.log("all enemies defeated. spawning next wave.");
        generateLowLvlWave()
    }
    if (holdEnemyInfo1.hp <= 0 || holdEnemyInfo2.hp <= 0 || holdEnemyInfo3.hp <= 0) {
        if (holdEnemyInfo1.hp <= 0) {
            enemyImg1.style.backgroundImage = "";
            enemyName1.disabled = true;
            holdEnemyInfo1 = "";
            enemy1 = "";
            console.log("enemy 1 deleted")
        } else {
            console.log("didn't delete enemy / disable button 1")
        }
        if (holdEnemyInfo2.hp <= 0) {
            enemyImg2.style.backgroundImage = "";
            enemyName2.disabled = true;
            holdEnemyInfo2 = "";
            enemy2 = "";
            console.log("enemy 2 deleted")
        } else {
            console.log("didn't delete enemy / disable button 2")
        }

        if (holdEnemyInfo3.hp <= 0) {
            enemyImg3.style.backgroundImage = "";
            enemyName3.disabled = true;
            holdEnemyInfo3 = "";
            enemy3 = "";
            console.log("enemy 3 deleted")
        } else {
            console.log("didn't delete enemy / disable button 3")
        }

    }

}
let teamMadeMove = 0;
let maxTeamMove = 3;
let roundNumber = 1;

//checks which player button is selected and disables it after a move has been made
function moveMade() {
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
                    console.log(holdEnemyInfo1);
                    console.log("enemyInfo1 saved")
                    break;
                case 1:
                    holdEnemyInfo2.hp = enemyHp;
                    console.log(holdEnemyInfo2);
                    console.log("enemyInfo2 saved")
                    break;
                case 2:
                    holdEnemyInfo3.hp = enemyHp;
                    console.log(holdEnemyInfo3);
                    console.log("enemyInfo3 saved")
                    break;
            }
        }
    }
    //NEW ROUND
    //when all teammates and enemies have made a move, round resets
    teamMadeMove += 1;
    if (teamMadeMove === 3) {
        roundNumber += 1;
        console.log("round ended. resetting buttons");
        statField.innerText += "*----- round " + roundNumber + "-----*" + "\n ";
        for (let i = 0; i < 3; i++) {
            playerOrderArr[i].disabled = false;
            playerName1.classList.remove("selected");
            playerName2.classList.remove("selected");
            playerName3.classList.remove("selected");
        }
        enemyDeath()
    }
    enemyDeath();
}