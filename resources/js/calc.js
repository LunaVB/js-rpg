function calcElement() {

    let playerSkillElement = selectTeam.mainElement;
    let playerWeakness = selectTeam.weakness;
    let enemyElement = selectEnemy.strong;
    let enemyWeakness = selectEnemy.weakness;

    console.log(playerElement);
    console.log(playerWeakness);
    console.log(enemyElement);
    console.log(enemyWeakness);

}
let enemyHP;
let enemyTargetHp;
let enemyTarget;
let playerPHYSRES;
let playerNAME;
/* -------------------- ALL DAMAGE CALCULATIONS -------------------- */
function calcDamage() {
    calcEvasion();
    calcDoubleHit();
    calcFinalDamage();
    let physChosen;
    let magChosen;
    let guardChosen;
    let guardBtn = document.getElementById("guardBtn");
    let atkBtn = document.getElementById("atkBtn");
    let magBtn = document.getElementById("magBtn");

    /* ----- EVASION CHANCE (DODGE CHANCE) -----*/
    /*  generates number from 1-100
        if generated number is equal or smaller than the evasion stat
        attack/skill will be dodged*/
    function calcEvasion() {
        let evasion = selectTeam.item.evasion;
        let dodgeChance = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //RNG 1-100
        let evasionMultiplier;
        if (dodgeChance > 0 && dodgeChance <= evasion) {
            //console.log("evasion rate from item: " + evasion + "\n" + "RNG num: " + dodgeChance + "\n" + "dodged!");
            evasionMultiplier = 0;
        } else {
            // console.log("evasion rate from item: " + evasion + "\n" + "RNG num: " + dodgeChance + "\n" + "got hit");
            evasionMultiplier = 1;
        }
    }

    /* ----- ATTACK CHANCE (CHANCE TO HIT TWICE) -----*/
    /*  generates number from 1-100
        if generated number is equal or smaller than the attack chance stat
        attack will hit twice (double hit multiplier)*/
    function calcDoubleHit() {
        let atkChance = itemStats.attackChance;
        let atkDoubleHitChance = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //RNG 1-100
        if (atkDoubleHitChance > 0 && atkDoubleHitChance <= atkChance) { //RNG 1 until evasion value = dodged
            doubleHit = 2;
        } else {
            doubleHit = 1;
        }
    }

    /* ----- ELEMENT CALCULATIONS -----*/
    /*  
        These elements do double damage to each other
                FIRE  <==>  ICE
                WIND  <==>  ELEC
                NUKE  <==>  PSY
                BLESS <==>  CURSE*/



    /* function calcElement() {
         let playerElement = selectTeam.mainElement;
         console.log(playerElement);
     }*/

    /* ----- FINAL DAMAGE CALCULATIONS -----*/
    /* normal damage = base weapon damage - enemy resistance
       buffed damage = normal damage + buff
       elemental damage = buffed damage * elemental multiplier
       final damage = elemental damage * double hit multiplier 
       actual damage = final damage with dodge multiplier*/
    function calcFinalDamage() {
        let enemyHp = selectEnemy.hp;
        let physBuff = selectTeam.item.physical;
        let magBuff = selectTeam.item.magic;
        let enemyPhysRes = selectEnemy.item.physResistance;
        let enemyMagRes = selectEnemy.item.magResistance;
        let baseDmg = selectTeam.item.baseDmg;
        let normalDmg = Math.floor(baseDmg - ((baseDmg * enemyMagRes) / 100));
        let buffedDmg = Math.floor(normalDmg + ((normalDmg * magBuff) / 100));
        finalDmg = buffedDmg * doubleHit;
        // let actualDmg = finalDmg * evasionMultiplier;
        enemyHp -= finalDmg;
        statField.innerText += selectTeam.name + " has dealt " + finalDmg + " damage. " + selectEnemy.name + " has " + enemyHp + " hp left." + "\n"
        enemyHP = enemyHp;
        storeStats()
        enemy()
    }
}

function enemy() {
    /* -------------------- ENEMY FUNCTIONS -------------------- */
    enemyTarget()
    enemyTurn();
    enemyDespawn();
    /* ----- ENEMY TARGET RNG -----*/
    /* generates either a number between 0-2
       to decide which player to attack*/
    function enemyTarget() {
        enemyTarget;
        let playerN;
        let enemyName = selectEnemy.name;
        let enemyTargetRNG = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        switch (enemyTargetRNG) {
            case 1:
                playerHp = selectedTeam[0].hp;
                playerN = selectedTeam[0].name;
                playerPhysRes = selectedTeam[0].item.physResistance;
                playerMagRes = selectedTeam[0].item.magResistance;
                enemyTarget = selectedTeam[0];
                break;
            case 2:
                playerHp = selectedTeam[1].hp;
                playerN = selectedTeam[1].name;
                playerPhysRes = selectedTeam[1].item.physResistance;
                playerMagRes = selectedTeam[1].item.magResistance;
                enemyTarget = selectedTeam[1];
                break;
            case 3:
                playerHp = selectedTeam[2].hp;
                playerN = selectedTeam[2].name;
                playerPhysRes = selectedTeam[2].item.physResistance;
                playerMagRes = selectedTeam[2].item.magResistance;
                enemyTarget = selectedTeam[2];
                break;
        }
        enemyTargetHp = playerHp;
        playerPHYSRES = playerPhysRes;
        playerNAME = playerN;
        enemyTarget
    }
    /* ----- ENEMY TURN RNG -----*/
    /* generates either a 1 or 2
       if 1 the enemy will use a normal attack
       if 2 the enemy will use a skill*/
    function enemyTurn() {
        playerNAME;
        let enemyMoveRNG = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        let enemyNormalDmg;
        let enemyBuffedDmg;
        let enemyfinalDmg;
        enemyTargetHp;
        playerPHYSRES;
        playerNAME;
        playerPhysRes = playerPHYSRES;
        playerN = playerNAME;
        enemyPhysRes = selectEnemy.item.physResistance;
        enemyMagRes = selectEnemy.item.magResistance;
        physBuff = selectTeam.item.physical;
        magBuff = selectTeam.item.magic;
        enemyName = selectEnemy.name;
        enemyBaseDmg = selectEnemy.item.baseDmg;
        enemyPhysBuff = selectEnemy.item.physical;
        enemyMagBuff = selectEnemy.item.magic;
        console.log(enemyTargetHp)
        console.log(enemyTarget)
        if (selectEnemy.hp >= 1) {
            statField.innerText += enemyName + "'s turn. ";
            switch (enemyMoveRNG) {
                case 1:
                    enemyNormalDmg = Math.floor(enemyBaseDmg - ((enemyBaseDmg * enemyPhysRes) / 100));
                    enemyBuffedDmg = Math.floor(enemyNormalDmg + ((enemyNormalDmg * physBuff) / 100));
                    enemyfinalDmg = enemyBuffedDmg * doubleHit;
                    enemyTargetHp -= enemyfinalDmg;
                    //console.log("base damage from item: " + enemyBaseDmg + "\n" + "player physical resistance from item: " + playerPhysRes + "%" + "\n" + "normal damage done: " + enemyNormalDmg + "\n" + "damage after enemy buff calc: " + enemyBuffedDmg + "\n" + "Final damage after double hit check: " + enemyfinalDmg + "\n" + playerN + " has " + playerHp + " HP left");
                    statField.innerText += enemyfinalDmg + " damage dealt. " + playerN + " has " + enemyTargetHp + " hp left." + "\n"
                    break;
                case 2:
                    enemyNormalDmg = Math.floor(enemyBaseDmg - ((enemyBaseDmg * enemyMagRes) / 100));
                    enemyBuffedDmg = Math.floor(enemyNormalDmg + ((enemyNormalDmg * magBuff) / 100));
                    enemyfinalDmg = enemyBuffedDmg * doubleHit;
                    enemyTargetHp -= enemyfinalDmg;
                    //console.log("base damage from item: " + enemyBaseDmg + "\n" + "player physical resistance from item: " + playerPhysRes + "%" + "\n" + "normal damage done: " + enemyNormalDmg + "\n" + "damage after enemy buff calc: " + enemyBuffedDmg + "\n" + "Final damage after double hit check: " + enemyfinalDmg + "\n" + playerN + " has " + playerHp + " HP left");
                    statField.innerText += enemyfinalDmg + " damage dealt. " + playerN + " has " + enemyTargetHp + " hp left." + "\n"
                    break;
            }
        } else {
            console.log("selected enemy is dead")
        }
        /* ----- REASSIGN TARGETED PLAYER HP -----*/
        /* HP value is returned to the proper character previously targeted by an enemy*/
        enemyTarget.hp = enemyTargetHp;
        holdTeamInfo1;
        holdTeamInfo2;
        holdTeamInfo3;
        let playerOrderCh = playerOrder.children;
        let playerOrderArr = Array.prototype.slice.call(playerOrderCh);
        for (let i = 0; i < 3; i++) {
            if (playerOrderArr[i].firstChild.data === enemyTarget.name) {
                console.log(holdTeamInfo1);
                console.log(holdTeamInfo2);
                console.log(holdTeamInfo1);
                switch (i) {
                    case 0:
                        holdTeamInfo1.hp = enemyTarget.hp;
                        document.getElementById("healthPlayer1").value = holdTeamInfo1.hp;
                        console.log("playerInfo 1 saved")
                        console.log(holdTeamInfo1)
                        break;
                    case 1:
                        holdTeamInfo2.hp = enemyTarget.hp;
                        document.getElementById("healthPlayer2").value = holdTeamInfo2.hp;
                        console.log("playerInfo 2 saved");
                        console.log(holdTeamInfo2)
                        break;
                    case 2:
                        holdTeamInfo3.hp = enemyTarget.hp;
                        document.getElementById("healthPlayer3").value = holdTeamInfo3.hp;
                        console.log("playerInfo 3 saved");
                        console.log(holdTeamInfo3)
                        break;
                }
            }
        }
    }
    /* ----- ENEMY DESPAWN -----*/
    /* if an enemy's HP hits 0 or below
       despawns enemy and clears enemy data*/
    function enemyDespawn() {
        console.log("enemyDespawn check")

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
    }
}
let teamMadeMove = 0;
/* -------------------- SAVING STATS -------------------- */
function storeStats() {
    enemyHP;
    storeStatsEnemy();
    storeStatsTeam();
    disableTeamButton();
    roundReset();

    /* ----- STORE STATS -----*/
    /*  stores teammate and enemy stats after an attack*/
    function storeStatsEnemy() {
        selectEnemy.hp = enemyHP;
        let enemyOrderCh = enemyOrder.children;
        let enemyOrderArr = Array.prototype.slice.call(enemyOrderCh);
        enemyHp = selectEnemy.hp;
        for (let i = 0; i < 3; i++) { //stores changed enemy HP into appropriate holdEnemyInfo
            if (enemyOrderArr[i].firstChild.data === selectEnemy.name) {
                switch (i) {
                    case 0:
                        holdEnemyInfo1.hp = enemyHP;
                        document.getElementById("healthEnemy1").value = holdEnemyInfo1.hp;
                        console.log("enemyInfo 1 saved");
                        //console.log(holdEnemyInfo1.hp);
                        break;
                    case 1:
                        holdEnemyInfo2.hp = enemyHP;
                        document.getElementById("healthEnemy2").value = holdEnemyInfo2.hp;
                        console.log("enemyInfo 2 saved");
                        //console.log(holdEnemyInfo2.hp);
                        break;
                    case 2:
                        holdEnemyInfo3.hp = enemyHP;
                        document.getElementById("healthEnemy3").value = holdEnemyInfo3.hp;
                        console.log("enemyInfo 3 saved");
                        // console.log(holdEnemyInfo3.hp);
                        break;
                }
            }
        }
    }

    function storeStatsTeam() {
        playerOrderCh = playerOrder.children;
        playerOrderArr = Array.prototype.slice.call(playerOrderCh);
        //----- REDO FOR BUFFS, UPDATES BEING DONE AFTER ENEMY ATTACK ATM ----- 

        /*for (let i = 0; i < 3; i++) {
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
        }*/
    }
    /* ----- DISABLE TEAMMATE BUTTON -----*/
    /*  whenever a teammate has finished their turn
        their button is disabled as to "end" their turn
        and make it impossible to select them until the next round*/
    function disableTeamButton() {
        let playerOrderCh = playerOrder.children;
        let playerOrderArr = Array.prototype.slice.call(playerOrderCh);
        for (let i = 0; i < 3; i++) {
            if (playerOrderArr[i].firstChild.data === selectTeam.name) {
                document.getElementById("playerName" + (i + 1)).disabled = true;
                enemyName1.classList.remove("selected");
                enemyName2.classList.remove("selected");
                enemyName3.classList.remove("selected");
            }
        }
    }
    /* ----- RESET ROUND -----*/
    /*  re-enables teammate buttons on round reset*/
    function roundReset() {
        playerOrderCh = playerOrder.children;
        playerOrderArr = Array.prototype.slice.call(playerOrderCh);
        teamMadeMove += 1;
        console.log(teamMadeMove)
        if (teamMadeMove === 3) {
            // roundNumber += 1;
            console.log("round ended. resetting buttons");
            for (let i = 0; i < 3; i++) {
                playerOrderArr[i].disabled = false;
                playerName1.classList.remove("selected");
                playerName2.classList.remove("selected");
                playerName3.classList.remove("selected");
            }
            enemy();
        }
        if (teamMadeMove > 3) {
            teamMadeMove = 1;
        }
    }
}