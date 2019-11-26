let doubleHit;
let enemyHp;
let baseDmg;
let physBuff;
let magBuff;
let enemyPhysRes;
let enemyMagRes;
let finalDmg;

/*---------------------------PLAYER MOVE CALCULATIONS---------------------------*/

function calcEvasion() { //chance of evading an attack
    let evasion = itemStats.evasion;
    let dodgeChance = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //RNG 1-100
    if (dodgeChance > 0 && dodgeChance <= evasion) {
        console.log("evasion rate from item: " + evasion + "\n" + "RNG num: " + dodgeChance + "\n" + "dodged!");
    } else {
        console.log("evasion rate from item: " + evasion + "\n" + "RNG num: " + dodgeChance + "\n" + "got hit");
    }
}

function playerDamageDealt() {
    enemyHp = selectEnemy.hp;
    baseDmg = selectTeam.item.baseDmg;
    physBuff = selectTeam.item.physical;
    magBuff = selectTeam.item.magic;
    enemyPhysRes = selectEnemy.item.physResistance;
    enemyMagRes = selectEnemy.item.magResistance;

    function calcDoubleHit() { //chance of attacking twice
        let atkChance = itemStats.attackChance;
        let atkDoubleHitChance = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //RNG 1-100
        if (atkDoubleHitChance > 0 && atkDoubleHitChance <= atkChance) { //RNG 1 until evasion value = dodged
            doubleHit = 2;
        } else {
            doubleHit = 1;
        }
    }
    if (physChosen == true) { //physical attack
        calcDoubleHit();
        let normalDmg = Math.floor(baseDmg - ((baseDmg * enemyPhysRes) / 100)); //base dmg - enemy resistance
        let buffedDmg = Math.floor(normalDmg + ((normalDmg * physBuff) / 100)); //resulting dmg + player physical buff
        finalDmg = buffedDmg * doubleHit; //buffed dmg * possible 2nd hit
        enemyHp -= finalDmg;
        enemyDeath();
        // console.log("base damage from item: " + baseDmg + "\n" + "enemy physical resistance from item: " + enemyPhysRes + "%" + "\n" + "normal damage done: " + normalDmg + "\n" + "damage after player buff calc: " + buffedDmg + "\n" + "Final damage after double hit check: " + finalDmg + "\n" + selectEnemy.name + " has " + enemyHp + " HP left");
    } else if (magChosen == true) { //magical skill
        calcDoubleHit();
        let normalDmg = Math.floor(baseDmg - ((baseDmg * enemyMagRes) / 100)); //base dmg - enemy resistance
        let buffedDmg = Math.floor(normalDmg + ((normalDmg * magBuff) / 100)); //resulting dmg + player physical buff
        finalDmg = buffedDmg * doubleHit; //buffed dmg * possible 2nd hit
        enemyHp -= finalDmg;
        enemyDeath();
        // console.log("base damage from item: " + baseDmg + "\n" + "enemy magical resistance from item: " + enemyMagRes + "%" + "\n" + "normal damage done: " + normalDmg + "\n" + "damage after player buff calc: " + buffedDmg + "\n" + "Final damage after double hit check: " + finalDmg + "\n" + selectEnemy.name + " has " + enemyHp + " HP left");
    } else if (guardChosen == true) {
        calcDoubleHit();
    }
    statField.innerText += selectTeam.name + " has dealt " + finalDmg + " damage. " + selectEnemy.name + " has " + enemyHp + " hp left." + "\n"
}
let physChosen;
let magChosen;
let guardChosen;
let playerOrderCh = playerOrder.children;
let playerOrderArr = Array.prototype.slice.call(playerOrderCh);
let guardBtn = document.getElementById("guardBtn");
let atkBtn = document.getElementById("atkBtn");
let magBtn = document.getElementById("magBtn");

//activates attack/skill/guard buttons
startBtn.addEventListener("click", function () {
    guardBtn.addEventListener("click", function () {
        if (selectTeam == undefined) {
            console.log("please select team member")
        } else {
            guardChosen = true;
            console.log("guarding");
            statField.innerText += "Guarding. " + "will only take half damage next turn" + "\n"
            //TO DO}
            moveMade()
        }
    })
    atkBtn.addEventListener("click", function () {
        if (selectTeam == undefined && selectEnemy == undefined) {
            console.log("please select team member and enemy")
        } else {
            physChosen = true;
            playerDamageDealt();
            moveMade()
        }
    })
    magBtn.addEventListener("click", function () {
        if (selectTeam == undefined && selectEnemy == undefined) {
            console.log("please select team member and enemy")
        } else {
            magChosen = true;
            moveMade()
        }
    })
})

/*---------------------------ENEMY MOVE CALCULATIONS---------------------------*/
function enemyMove() {
    function enemyDamageDealt() {
        let playerN;
        let enemyTargetRNG = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        switch (enemyTargetRNG) {
            case 1:
                playerHp = selectedTeam[0].hp;
                playerN = selectedTeam[0].name;
                playerPhysRes = selectedTeam[0].item.physResistance;
                playerMagRes = selectedTeam[0].item.magResistance;
                break;
            case 2:
                playerHp = selectedTeam[1].hp;
                playerN = selectedTeam[1].name;
                playerPhysRes = selectedTeam[1].item.physResistance;
                playerMagRes = selectedTeam[1].item.magResistance;
                break;
            case 3:
                playerHp = selectedTeam[2].hp;
                playerN = selectedTeam[2].name;
                playerPhysRes = selectedTeam[2].item.physResistance;
                playerMagRes = selectedTeam[2].item.magResistance;
                break;
        }
        enemyName = selectEnemy.name;
        enemyBaseDmg = selectEnemy.item.baseDmg;
        enemyPhysBuff = selectEnemy.item.physical;
        enemyMagBuff = selectEnemy.item.magic;
        statField.innerText += enemyName + "'s turn. ";
        //console.log(enemyName + "'s turn. " + "\n")

        function calcDoubleHit() { //chance of attacking twice
            let atkChance = itemStats.attackChance;
            let atkDoubleHitChance = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //RNG 1-100
            if (atkDoubleHitChance > 0 && atkDoubleHitChance <= atkChance) { //RNG 1 until evasion value = dodged
                doubleHit = 2;
            } else {
                doubleHit = 1;
            }
        }
        let enemyMoveRNG = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        let enemyNormalDmg;
        let enemyBuffedDmg;
        let enemyfinalDmg;

        switch (enemyMoveRNG) {
            case 1:
                calcDoubleHit();
                enemyNormalDmg = Math.floor(enemyBaseDmg - ((enemyBaseDmg * enemyPhysRes) / 100)); //base dmg - player resistance
                enemyBuffedDmg = Math.floor(enemyNormalDmg + ((enemyNormalDmg * physBuff) / 100)); //resulting dmg + enemy physical buff
                enemyfinalDmg = enemyBuffedDmg * doubleHit; //buffed dmg * possible 2nd hit
                playerHp -= enemyfinalDmg;
                //console.log("base damage from item: " + enemyBaseDmg + "\n" + "player physical resistance from item: " + playerPhysRes + "%" + "\n" + "normal damage done: " + enemyNormalDmg + "\n" + "damage after enemy buff calc: " + enemyBuffedDmg + "\n" + "Final damage after double hit check: " + enemyfinalDmg + "\n" + playerN + " has " + playerHp + " HP left");
                statField.innerText += enemyfinalDmg + " damage dealt. " + playerN + " has " + playerHp + " hp left." + "\n"
                break;
            case 2:
                calcDoubleHit();
                enemyNormalDmg = Math.floor(enemyBaseDmg - ((enemyBaseDmg * enemyMagRes) / 100)); //base dmg - player resistance
                enemyBuffedDmg = Math.floor(enemyNormalDmg + ((enemyNormalDmg * magBuff) / 100)); //resulting dmg + enemy physical buff
                enemyfinalDmg = enemyBuffedDmg * doubleHit; //buffed dmg * possible 2nd hit
                playerHp -= enemyfinalDmg;
                //console.log("base damage from item: " + enemyBaseDmg + "\n" + "player physical resistance from item: " + playerPhysRes + "%" + "\n" + "normal damage done: " + enemyNormalDmg + "\n" + "damage after enemy buff calc: " + enemyBuffedDmg + "\n" + "Final damage after double hit check: " + enemyfinalDmg + "\n" + playerN + " has " + playerHp + " HP left");
                statField.innerText += enemyfinalDmg + " damage dealt. " + playerN + " has " + playerHp + " hp left." + "\n"
                break;
            case 3:
                calcDoubleHit();
                //console.log("enemy guarded")
                statField.innerText += enemyName + " guards." + "\n"
                break;
        }

    }
    enemyDamageDealt()
}