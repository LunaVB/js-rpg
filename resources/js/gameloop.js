startBtn.addEventListener("click", function gameLoop() {
    createChar();
    generateLowLvlWave();
});

let physChosen;
let magChosen;
let guardChosen;
let guardBtn = document.getElementById("guardBtn");
let atkBtn = document.getElementById("atkBtn");
let skillBtn = document.getElementById("useSkill");


startBtn.addEventListener("click", function () {
    let playerSkillDivArr = [skilldiv1, skilldiv2, skilldiv3, skilldiv4, skilldiv5];
    console.log(playerSkillDivArr);
    for (var i = 0; i < playerSkillDivArr.length; i++) {
        playerSkillDivArr[i].addEventListener("click", function () {})
    }
    atkBtn.addEventListener("click", function () {
        if (selectTeam == undefined && selectEnemy == undefined) {
            console.log("please select team member and enemy")
        } else {
            physChosen = true;
            calcDamage();
        }
    })

    skillBtn.addEventListener("click", function () {})

})