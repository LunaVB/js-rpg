startBtn.addEventListener("click", function gameLoop() {
    createChar();
    generateLowLvlWave();
});

let guardBtn = document.getElementById("guardBtn");
let atkBtn = document.getElementById("atkBtn");
let skillBtn = document.getElementById("useSkill");


startBtn.addEventListener("click", function () {
    atkBtn.addEventListener("click", function () {
        if (selectTeam == undefined && selectEnemy == undefined) {
            console.log("please select team member and enemy")
        } else {
            calcDamage();
        }
    })
    skillBtn.addEventListener("click", function () {
        if (selectTeam == undefined && selectEnemy == undefined) {
            console.log("please select team member and enemy")
        } else {
            calcSkill();
        }
    })
})