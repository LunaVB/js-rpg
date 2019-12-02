let enemyHP;
let doubleHit;
let enemyTargetHp;
let enemyTarget;
let playerPHYSRES;
let playerNAME;
let evasionMultiplier;
let elementMultiplier;
let healthRestore;
let skillType;
let skillTarget;
let teamMadeMove = 0;

/* -------------------- ALL DAMAGE CALCULATIONS -------------------- */

function calcEvasion() {
    /* ----- EVASION CHANCE (DODGE CHANCE) -----*/
    /*  generates number from 1-100
        if generated number is equal or smaller than the evasion stat
        attack/skill will be dodged*/
    evasionMultiplier;
    let evasion = selectEnemy.item.evasion;
    let dodgeChance = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //RNG 1-100
    if (dodgeChance > 0 && dodgeChance <= evasion) {
        //   console.log("enemy evasion rate " + evasion + "\n" + "RNG num: " + dodgeChance + "\n" + "DODGED!");
        evasionMultiplier = 0;
        statField.innerText += "DODGED!" + "\n";
        statField.innerText += "------" + "\n";

    } else {
        //  console.log("enemy evasion rate " + evasion + "\n" + "RNG num: " + dodgeChance + "\n" + "got hit");
        evasionMultiplier = 1;
    }
}


function calcDoubleHit() {
    /* ----- ATTACK CHANCE (CHANCE TO HIT TWICE) -----*/
    /*  generates number from 1-100
        if generated number is equal or smaller than the attack chance stat
        attack will hit twice (double hit multiplier)*/
    let atkChance = selectTeam.item.attackChance;
    let atkDoubleHitChance = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //RNG 1-100
    if (atkDoubleHitChance > 0 && atkDoubleHitChance <= atkChance) { //RNG 1 until evasion value = dodged
        doubleHit = 2;
        //    console.log("double attack chance value " + atkChance + "\n" + "RNG num: " + atkDoubleHitChance + "\n" + "DOUBLE HIT!");
        if (evasionMultiplier === 1 && evasionMultiplier === 1) {
            statField.innerText += "DOUBLE HIT!" + "\n"
        }
    } else {
        doubleHit = 1;
        //   console.log("double attack chance value " + atkChance + "\n" + "RNG num: " + atkDoubleHitChance + "\n");
    }
}


function calcDamage() {
    /* ----- FINAL DAMAGE CALCULATIONS -----*/
    calcFinalDamage()

    function calcFinalDamage() {
        /* normal damage = base weapon damage - enemy resistance
           buffed damage = normal damage + buff
           elemental damage = buffed damage * elemental multiplier
           final damage = elemental damage * double hit multiplier 
           actual damage = final damage with dodge multiplier*/
        calcEvasion();
        calcDoubleHit();
        skillTarget = 1;
        let enemyHp = selectEnemy.hp;
        let physBuff = selectTeam.item.physical;
        let magBuff = selectTeam.item.magic;
        let enemyPhysRes = selectEnemy.item.physResistance;
        let baseDmg = selectTeam.item.baseDmg;
        let normalDmg = Math.floor(baseDmg - ((baseDmg * enemyPhysRes) / 100));
        let buffedDmg = Math.floor(normalDmg + ((normalDmg * magBuff) / 100));
        finalDmg = buffedDmg * doubleHit;
        let actualDmg = finalDmg * evasionMultiplier;
        enemyHp -= actualDmg;
        statField.innerText += selectTeam.name + " has dealt " + actualDmg + " damage. " + selectEnemy.name + " has " + enemyHp + " hp left." + "\n";
        statField.innerText += "------" + "\n";
        // console.log("PLAYER TURN" + "\n" + "base damage from item: " + baseDmg + "\n" + "damage after enemy phys resistance: " + normalDmg + "\n" + ", damage after buff: " + buffedDmg + "\n" + ", damage after double hit check: " + finalDmg + "\n" + ", damage after evasion check: " + actualDmg)
        enemyHP = enemyHp;
        storeStats();
        enemy();
    }
}

function calcFinalSkillDamage() {
    /* ----- FINAL SKILL DAMAGE CALCULATIONS -----*/
    skillType = selectSkill.type;
    healthRestore = selectSkill.healthRestore;
    skillTarget = selectSkill.amountAffected;
    calcElement();
    calcEvasion();
    calcDoubleHit();

    function calcElement() {
        /* ----- ELEMENT CALCULATIONS -----*/
        /*  
            These elements do double damage to each other
                    FIRE  <==>  ICE
                    WIND  <==>  ELEC
                    NUKE  <==>  PSY
                    BLESS <==>  CURSE */
        let playerSkillElement = selectSkill.element;
        let enemyWeakness = selectEnemy.weakness;

        if ((playerSkillElement == "fire" && enemyWeakness === "fire") || (playerSkillElement === "ice" && enemyWeakness === "ice")) {
            console.log("WEAK!!");
            statField.innerText += "WEAK!! Weakness hit: 1.5x damage!" + "\n";
            elementMultiplier = 1.5;
        } else if ((playerSkillElement == "elec" && enemyWeakness === "elec") || (playerSkillElement === "wind" && enemyWeakness === "wind")) {
            console.log("WEAK!!");
            statField.innerText += "WEAK!! Weakness hit: 1.5x damage!" + "\n";
            elementMultiplier = 1.5;
        } else if ((playerSkillElement == "nuke" && enemyWeakness == "nuke") || (playerSkillElement === "psy" && enemyWeakness === "psy")) {
            console.log("WEAK!!");
            statField.innerText += "WEAK!! Weakness hit: 1.5x damage!" + "\n";
            elementMultiplier = 1.5;
        } else if ((playerSkillElement == "curse" && enemyWeakness == "curse") || (playerSkillElement === "bless" && enemyWeakness === "bless")) {
            console.log("WEAK!!");
            statField.innerText += "WEAK!! Weakness hit: 1.5x damage!" + "\n";
            elementMultiplier = 1.5;
        } else {
            console.log("no weaknesses hit");
            elementMultiplier = 1;
        }
    }

    //OFFENSIVE SKILLS
    if (skillType === "attack") {
        /* normal damage = base weapon damage - enemy resistance
          buffed damage = normal damage + buff
          elemental damage = buffed damage * elemental multiplier
          final damage = elemental damage * double hit multiplier 
          actual damage = final damage with dodge multiplier*/
        //    console.log("attack skill selected")
        let enemyHp = selectEnemy.hp;
        let magBuff = selectTeam.item.magic;
        let enemyMagRes = selectEnemy.item.magResistance;
        let baseDmg = selectSkill.damage;
        elementMultiplier;
        let normalDmg = Math.floor(baseDmg - ((baseDmg * enemyMagRes) / 100));
        let buffedDmg = Math.floor(normalDmg + ((normalDmg * magBuff) / 100));
        finalDmg = buffedDmg * doubleHit;
        let actualDmg = finalDmg * elementMultiplier * evasionMultiplier;

        //single target skill
        if (skillTarget === 1) {
            if (evasionMultiplier != 0) {
                statField.innerText += selectTeam.name + " has dealt " + actualDmg + " damage. " + selectEnemy.name + " has " + enemyHp + " hp left." + "\n";
                statField.innerText += "------" + "\n";
            }
            //   console.log("single target attack selected");
            enemyHp -= actualDmg;

            //triple target skill
        } else if (skillTarget === 3) {
            console.log("triple target attack selected");
            if (evasionMultiplier != 0) {
                holdEnemyInfo1.hp -= actualDmg;
                holdEnemyInfo2.hp -= actualDmg;
                holdEnemyInfo3.hp -= actualDmg;
                enemyHp -= actualDmg;
                statField.innerText += selectTeam.name + " has dealt " + actualDmg + " damage to enemy team" + "\n";
                statField.innerText += "------" + "\n";
            }

            console.log(holdEnemyInfo1.hp);
            console.log(holdEnemyInfo2.hp);
            console.log(holdEnemyInfo3.hp);
        }
        // console.log("PLAYER TURN" + "\n" + "base damage from item: " + baseDmg + "\n" + "damage after enemy phys resistance: " + normalDmg + "\n" + ", damage after buff: " + buffedDmg + "\n" + ", damage after double hit check: " + finalDmg + "\n" + ", damage after element/evasion multiplier: " + actualDmg)
        enemyHP = enemyHp;
        storeStats()
        enemy()

        //HEALING SKILLS
    } else if (skillType === "heal") {
        playerHp = selectTeam.hp;
        console.log(playerHp)
        console.log(healthRestore)
        if (skillTarget === 1) {
            playerHp += healthRestore;
            if (playerHp >= 100) { //prevents overhealing when using single heal
                playerHp === 100
            }
            statField.innerText += selectTeam.name + " has restored " + healthRestore + " HP." + "\n";
            statField.innerText += "------" + "\n";
        } else if (skillTarget === 3) {
            selectedTeam[0].hp += healthRestore;
            holdTeamInfo1.hp = selectedTeam[0].hp;
            selectedTeam[1].hp += healthRestore;
            holdTeamInfo2.hp = selectedTeam[1].hp;
            selectedTeam[2].hp += healthRestore;
            holdTeamInfo3.hp = selectedTeam[2].hp;
            if (selectedTeam[0].hp >= 100 || selectedTeam[1].hp >= 100 || selectedTeam[2].hp >= 100) { //prevents overhealing when using team heal
                holdTeamInfo1.hp = 100;
                holdTeamInfo2.hp = 100;
                holdTeamInfo3.hp = 100;
            }
            statField.innerText += selectTeam.name + " has restored " + healthRestore + " HP to all team members." + "\n";
            statField.innerText += "------" + "\n";
        }
    }
    storeStats();
    enemy();
}


function enemy() {
    /* -------------------- ENEMY FUNCTIONS -------------------- */
    enemyTarget()
    enemyTurn();
    enemyDespawn();

    function enemyTarget() {
        /* ----- ENEMY TARGET RNG -----*/
        /* generates either a number between 0-2
           to decide which player to attack*/
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

    function enemyTurn() {
        /* ----- ENEMY TURN RNG -----*/
        /* generates either a 1 or 2
           if 1 the enemy will use a normal attack
           if 2 the enemy will use a skill*/
        calcEvasionEnemyTurn()
        calcDoubleHitEnemyTurn()

        function calcEvasionEnemyTurn() {
            /* ----- EVASION CHANCE (DODGE CHANCE) -----*/
            /*  generates number from 1-100
                if generated number is equal or smaller than the evasion stat
                attack/skill will be dodged*/
            evasionMultiplier;
            let evasionTeam = selectTeam.item.evasion;
            let dodgeChance = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //RNG 1-100
            if (dodgeChance > 0 && dodgeChance <= evasionTeam) {
                // console.log("enemy evasion rate " + evasionTeam + "\n" + "RNG num: " + dodgeChance + "\n" + "DODGED!");
                evasionMultiplier = 0;
                statField.innerText += "DODGED!" + "\n"
            } else {
                // console.log("enemy evasion rate " + evasionTeam + "\n" + "RNG num: " + dodgeChance + "\n" + "got hit");
                evasionMultiplier = 1;
            }
        }

        function calcDoubleHitEnemyTurn() {
            /* ----- ATTACK CHANCE (CHANCE TO HIT TWICE) -----*/
            /*  generates number from 1-100
                if generated number is equal or smaller than the attack chance stat
                attack will hit twice (double hit multiplier)*/
            let atkChanceEnemy = selectEnemy.item.attackChance;
            let atkDoubleHitChance = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //RNG 1-100
            if (atkDoubleHitChance > 0 && atkDoubleHitChance <= atkChanceEnemy) { //RNG 1 until evasion value = dodged
                doubleHit = 2;
                //  console.log("double attack chance value " + atkChanceEnemy + "\n" + "RNG num: " + atkDoubleHitChance + "\n" + "DOUBLE HIT!");
                if (evasionMultiplier === 1) {
                    statField.innerText += "DOUBLE HIT!" + "\n"
                }
            } else {
                doubleHit = 1;
                //  console.log("double attack chance value " + atkChanceEnemy + "\n" + "RNG num: " + atkDoubleHitChance + "\n");
            }
        }
        playerNAME;
        let enemyMoveRNG = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        let enemyNormalDmg;
        let enemyBuffedDmg;
        let enemyfinalDmg;
        let enemyActualDmg;
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
        // console.log(enemyTargetHp)
        //console.log(enemyTarget)
        if (selectEnemy.hp >= 1) {
            switch (enemyMoveRNG) {
                case 1:
                    enemyNormalDmg = Math.floor(enemyBaseDmg - ((enemyBaseDmg * enemyPhysRes) / 100));
                    enemyBuffedDmg = Math.floor(enemyNormalDmg + ((enemyNormalDmg * physBuff) / 100));
                    enemyfinalDmg = enemyBuffedDmg * doubleHit;
                    enemyActualDmg = finalDmg * evasionMultiplier;
                    enemyTargetHp -= enemyActualDmg;
                    // console.log("ENEMY TURN" + "\n" + "base enemy damage from item: " + enemyBaseDmg + "\n" + "damage after phys resistance: " + enemyNormalDmg + "\n" + ", damage after buff: " + enemyBuffedDmg + "\n" + ", damage after double hit check: " + enemyfinalDmg + "\n" + ", damage after evasion check: " + enemyActualDmg)
                    statField.innerText += enemyActualDmg + " damage dealt. " + playerN + " has " + enemyTargetHp + " hp left." + "\n";
                    statField.innerText += "------" + "\n";
                    break;
                case 2:
                    enemyNormalDmg = Math.floor(enemyBaseDmg - ((enemyBaseDmg * enemyMagRes) / 100));
                    enemyBuffedDmg = Math.floor(enemyNormalDmg + ((enemyNormalDmg * magBuff) / 100));
                    enemyfinalDmg = enemyBuffedDmg * doubleHit;
                    enemyActualDmg = finalDmg * evasionMultiplier;
                    enemyTargetHp -= enemyActualDmg;
                    // console.log("ENEMY TURN" + "\n" + "base enemy damage from item: " + enemyBaseDmg + "\n" + "damage after phys resistance: " + enemyNormalDmg + "\n" + ", damage after buff: " + enemyBuffedDmg + "\n" + ", damage after double hit check: " + enemyfinalDmg + "\n" + ", damage after evasion check: " + enemyActualDmg)
                    statField.innerText += enemyActualDmg + " damage dealt. " + playerN + " has " + enemyTargetHp + " hp left." + "\n";
                    statField.innerText += "------" + "\n";
                    break;
            }
        } else {
            // console.log("selected enemy is dead")
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
            if (playerOrderArr[i].firstChild.data === enemyTarget.name && skillTarget === 1) {
                switch (i) {
                    case 0:
                        holdTeamInfo1.hp = enemyTarget.hp;
                        if (holdTeamInfo1.hp >= 1) {
                            document.getElementById("healthPlayer1").value = holdTeamInfo1.hp;
                        } else if (holdTeamInfo1.hp >= 100) {
                            document.getElementById("healthPlayer1").value = 100;
                        } else {
                            document.getElementById("healthPlayer1").value = 0;
                        }
                        break;
                    case 1:
                        holdTeamInfo2.hp = enemyTarget.hp;
                        if (holdTeamInfo2.hp >= 1) {
                            document.getElementById("healthPlayer2").value = holdTeamInfo2.hp;
                        } else if (holdTeamInfo2.hp >= 100) {
                            document.getElementById("healthPlayer2").value = 100;
                        } else {
                            document.getElementById("healthPlayer2").value = 0;
                        }
                        break;
                    case 2:
                        holdTeamInfo3.hp = enemyTarget.hp;
                        if (holdTeamInfo3.hp >= 1) {
                            document.getElementById("healthPlayer3").value = holdTeamInfo3.hp;
                        } else if (holdTeamInfo3.hp >= 100) {
                            document.getElementById("healthPlayer3").value = 100;
                        } else {
                            document.getElementById("healthPlayer3").value = 0;
                        }
                        break;
                }
            }

        }
        document.getElementById("healthPlayer1").value = holdTeamInfo1.hp;
        document.getElementById("healthPlayer2").value = holdTeamInfo2.hp;
        document.getElementById("healthPlayer3").value = holdTeamInfo3.hp;

    }

    function enemyDespawn() {
        /* ----- ENEMY DESPAWN -----*/
        /* if an enemy's HP hits 0 or below
           despawns enemy and clears enemy data*/
        if (holdEnemyInfo1.hp <= 0 || holdEnemyInfo2.hp <= 0 || holdEnemyInfo3.hp <= 0) {
            if (holdEnemyInfo1.hp <= 0) {
                enemyImg1.style.backgroundImage = "";
                enemyName1.disabled = true;
                enemy1 = "";
                holdEnemyInfo1 = "";
                document.getElementById("healthEnemy1").value = 0;
                //     console.log("enemy 1 deleted")
            }
            if (holdEnemyInfo2.hp <= 0) {
                enemyImg2.style.backgroundImage = "";
                enemyName2.disabled = true;
                enemy2 = "";
                holdEnemyInfo2 = "";
                document.getElementById("healthEnemy2").value = 0;

                //     console.log("enemy 2 deleted")
            }
            if (holdEnemyInfo3.hp <= 0) {
                enemyImg3.style.backgroundImage = "";
                enemyName3.disabled = true;
                enemy3 = "";
                holdEnemyInfo3 = "";
                document.getElementById("healthEnemy3").value = 0;

                //   console.log("enemy 3 deleted")
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
/* -------------------- SAVING STATS -------------------- */
function storeStats() {
    enemyHP;
    storeStatsEnemy();
    storeStatsTeam();
    disableTeamButton();
    roundReset();


    function storeStatsEnemy() {
        /* ----- STORE STATS -----*/
        /*  stores teammate and enemy stats after an attack*/
        selectEnemy.hp = enemyHP;
        let enemyOrderCh = enemyOrder.children;
        let enemyOrderArr = Array.prototype.slice.call(enemyOrderCh);
        enemyHp = selectEnemy.hp;
        if (skillTarget === 1) { //single target skill
            for (let i = 0; i < 3; i++) { //stores changed enemy HP into appropriate holdEnemyInfo
                if (enemyOrderArr[i].firstChild.data === selectEnemy.name) {
                    switch (i) {
                        case 0:
                            if (holdEnemyInfo1.hp >= 1) {
                                document.getElementById("healthEnemy1").value = holdEnemyInfo1.hp;
                            } else {
                                document.getElementById("healthEnemy1").value = 0;
                            }
                            break;
                        case 1:
                            if (holdEnemyInfo2.hp >= 1) {
                                document.getElementById("healthEnemy2").value = holdEnemyInfo2.hp;
                            } else {
                                document.getElementById("healthEnemy2").value = 0;
                            }
                            break;
                        case 2:
                            if (holdEnemyInfo3.hp >= 1) {
                                document.getElementById("healthEnemy3").value = holdEnemyInfo3.hp;
                            } else {
                                document.getElementById("healthEnemy3").value = 0;
                            }
                            break;
                    }
                }
            }
        } else if (skillTarget === 3) {
            for (let i = 0; i < 3; i++) { //stores all enemy HP into their holdEnemyInfo
                console.log("skill target 3")
                switch (i) {
                    case 0:
                        if (holdEnemyInfo1.hp >= 1) {
                            document.getElementById("healthEnemy1").value = holdEnemyInfo1.hp;
                        } else {
                            document.getElementById("healthEnemy1").value = 0;
                        }
                        console.log(holdEnemyInfo1.hp);
                        break;
                    case 1:
                        if (holdEnemyInfo2.hp >= 1) {
                            document.getElementById("healthEnemy2").value = holdEnemyInfo2.hp;
                        } else {
                            document.getElementById("healthEnemy2").value = 0;
                        }
                        break;
                    case 2:
                        if (holdEnemyInfo3.hp >= 1) {
                            document.getElementById("healthEnemy3").value = holdEnemyInfo3.hp;
                        } else {
                            document.getElementById("healthEnemy3").value = 0;
                        }
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

    function disableTeamButton() {
        /* ----- DISABLE TEAMMATE BUTTON -----*/
        /*  whenever a teammate has finished their turn
            their button is disabled as to "end" their turn
            and make it impossible to select them until the next round*/
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
    roundNumber = 1;

    function roundReset() {
        /* ----- RESET ROUND -----*/
        /*  re-enables teammate buttons on round reset*/
        playerOrderCh = playerOrder.children;
        playerOrderArr = Array.prototype.slice.call(playerOrderCh);
        teamMadeMove += 1;
        if (teamMadeMove === 3) {
            roundNumber += 1;
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