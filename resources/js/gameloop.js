startBtn.addEventListener("click", function gameLoop() {
    createChar();
    generateLowLvlWave();
});

function enemy() {
    enemyTarget();
    enemyTurn();
}

function damage() {
    calcDamage();
}




startBtn.addEventListener("click", function () {

    atkBtn.addEventListener("click", function () {
        if (selectTeam == undefined && selectEnemy == undefined) {
            console.log("please select team member and enemy")
        } else {
            physChosen = true;
            damage();
        }
    })
})