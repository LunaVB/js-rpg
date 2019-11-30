function enemyItemStats(name, type, baseDmg, evasion, atkChance, physRes, magRes, phys, mag, heal) {
    this.name = name;
    this.type = type; //WEAPON TYPE (CLOSE COMBAT, MID-RANGE, LONG RANGE, EQUIPMENT)
    this.baseDmg = baseDmg; //BASE WEAPON DAMAGE
    this.evasion = evasion; //EXTRA EVASION(DODGE CHANCE %)
    this.attackChance = atkChance; //CHANCE TO ATTACK TWICE

    this.physResistance = physRes; //RESISTANCE AGAINST PHYSICAL ATTACKS
    this.magResistance = magRes; //RESISTANCE AGAINST MAGICAL SKILLS

    //BUFFS
    this.physical = phys; //BUFF TO PHYSICAL ATTACKS (%)
    this.magic = mag; //BUFF TO MAGICAL SKILLS (%)
    this.healing = heal; //HEALING BUFF (%)
};

function enemyStats(name, move, type, enemyItemStats, hp, maxhp, mana, speed, mainEle, weakness, strong) {
    this.name = name;
    this.move = move;
    this.type = type;
    this.item = enemyItemStats;
    this.hp = hp;
    this.maxhp = maxhp;
    this.mana = mana;
    this.speed = speed;
    this.mainElements = mainEle;
    this.weakness = weakness;
    this.strong = strong;
}
let enemyImg1 = document.getElementById("enemy1");
let enemyImg2 = document.getElementById("enemy2");
let enemyImg3 = document.getElementById("enemy3");
let baseEnemyItem = new enemyItemStats("branch", "closeCombat", 10, 20, 30, 0, 15, 0, 0);


//LOW LEVEL WAVE SPAWNER (SLIME, PYROJACK, KOROPOKKURU, PIXIE AND MAKAMI)
function generateLowLvlWave() {
    let enemySlime = new enemyStats("slime", move, "lowlvl", baseEnemyItem, 40, 40, 20, 20, 0, "fire", "phys");
    let enemySlime2 = new enemyStats("slime 2", move, "lowlvl", baseEnemyItem, 40, 40, 20, 20, 0, "fire", "phys");
    let enemySlime3 = new enemyStats("slime 3", move, "lowlvl", baseEnemyItem, 40, 40, 20, 20, 0, "fire", "phys");

    let enemyPyrojack = new enemyStats("pyrojack", move, "lowlvl", baseEnemyItem, 20, 20, 20, 20, 0, "wind", "fire");
    let enemyPyrojack2 = new enemyStats("pyrojack 2", move, "lowlvl", baseEnemyItem, 20, 20, 20, 20, 0, "wind", "fire");
    let enemyPyrojack3 = new enemyStats("pyrojack 3", move, "lowlvl", baseEnemyItem, 20, 20, 20, 20, 0, "wind", "fire");

    let enemyKoropokkuru = new enemyStats("koropokkuru", move, "lowlvl", baseEnemyItem, 35, 35, 20, 20, 0, "fire", "ice");
    let enemyKoropokkuru2 = new enemyStats("koropokkuru 2", move, "lowlvl", baseEnemyItem, 35, 35, 20, 20, 0, "fire", "ice");
    let enemyKoropokkuru3 = new enemyStats("koropokkuru 3", move, "lowlvl", baseEnemyItem, 35, 35, 20, 20, 0, "fire", "ice");

    let enemyPixie = new enemyStats("pixie", move, "lowlvl", baseEnemyItem, 25, 25, 20, 20, 0, "ice", "elec");
    let enemyPixie2 = new enemyStats("pixie 2", move, "lowlvl", baseEnemyItem, 25, 25, 20, 20, 0, "ice", "elec");
    let enemyPixie3 = new enemyStats("pixie 3", move, "lowlvl", baseEnemyItem, 25, 25, 20, 20, 0, "ice", "elec");

    let enemyMakami = new enemyStats("makami", move, "lowlvl", baseEnemyItem, 55, 55, 20, 20, 0, "elec", "wind");
    let enemyMakami2 = new enemyStats("makami 2", move, "lowlvl", baseEnemyItem, 55, 55, 20, 20, 0, "elec", "wind");
    let enemyMakami3 = new enemyStats("makami 3", move, "lowlvl", baseEnemyItem, 55, 55, 20, 20, 0, "elec", "wind");

    console.log("creating wave ...")
    let mob1 = Math.floor(Math.random() * (5 - 1 + 1)) + 1; //decides which mobs will spawn in 1st spot
    let mob2 = Math.floor(Math.random() * (5 - 1 + 1)) + 1; //decides which mobs will spawn in 2nd spot
    let mob3 = Math.floor(Math.random() * (5 - 1 + 1)) + 1; //decides which mobs will spawn in 3rd spot

    switch (mob1) {
        case 1:
            enemy1 = enemySlime;
            enemyName1.innerText = enemySlime.name;
            enemyImg1.style.backgroundImage = "url(./resources/img/enemies/" + enemySlime.name + ".png)";
            break;
        case 2:
            enemy1 = enemyPixie;
            enemyName1.innerText = enemyPixie.name;
            enemyImg1.style.backgroundImage = "url(./resources/img/enemies/" + enemyPixie.name + ".png)";
            break;
        case 3:
            enemy1 = enemyMakami;
            enemyName1.innerText = enemyMakami.name;
            enemyImg1.style.backgroundImage = "url(./resources/img/enemies/" + enemyMakami.name + ".png)";
            break;
        case 4:
            enemy1 = enemyKoropokkuru;
            enemyName1.innerText = enemyKoropokkuru.name;
            enemyImg1.style.backgroundImage = "url(./resources/img/enemies/" + enemyKoropokkuru.name + ".png)";
            break;
        case 5:
            enemy1 = enemyPyrojack;
            enemyName1.innerText = enemyPyrojack.name;
            enemyImg1.style.backgroundImage = "url(./resources/img/enemies/" + enemyPyrojack.name + ".png)";
            break;
    }
    switch (mob2) {
        case 1:
            if (enemy1 == enemySlime) {
                enemy2 = enemySlime2;
                enemyName2.innerText = enemySlime2.name;
            } else {
                enemy2 = enemySlime;
                enemyName2.innerText = enemySlime.name;
            }
            enemyImg2.style.backgroundImage = "url(./resources/img/enemies/" + enemySlime.name + ".png)";
            break;
        case 2:
            if (enemy1 == enemyPixie) {
                enemy2 = enemyPixie2;
                enemyName2.innerText = enemyPixie2.name;
            } else {
                enemy2 = enemyPixie;
                enemyName2.innerText = enemyPixie.name;
            }
            enemyImg2.style.backgroundImage = "url(./resources/img/enemies/" + enemyPixie.name + ".png)";
            break;
        case 3:
            if (enemy1 == enemyMakami) {
                enemy2 = enemyMakami2;
                enemyName2.innerText = enemyMakami2.name;
            } else {
                enemy2 = enemyMakami;
                enemyName2.innerText = enemyMakami.name;
            }
            enemyImg2.style.backgroundImage = "url(./resources/img/enemies/" + enemyMakami.name + ".png)";
            break;
        case 4:
            if (enemy1 == enemyKoropokkuru) {
                enemy2 = enemyKoropokkuru2;
                enemyName2.innerText = enemyKoropokkuru2.name;
            } else {
                enemy2 = enemyKoropokkuru;
                enemyName2.innerText = enemyKoropokkuru.name;
            }
            enemyImg2.style.backgroundImage = "url(./resources/img/enemies/" + enemyKoropokkuru.name + ".png)";
            break;
        case 5:
            if (enemy1 == enemyPyrojack) {
                enemy2 = enemyPyrojack2;
                enemyName2.innerText = enemyPyrojack2.name;
            } else {
                enemy2 = enemyPyrojack;
                enemyName2.innerText = enemyPyrojack.name;
            }
            enemyImg2.style.backgroundImage = "url(./resources/img/enemies/" + enemyPyrojack.name + ".png)";
            break;
    }
    switch (mob3) {
        case 1:
            if (enemy1 == enemySlime) {
                enemy3 = enemySlime2;
                enemyName3.innerText = enemySlime2.name;
            } else if (enemy2 == enemySlime) {
                enemy3 = enemySlime2;
                enemyName3.innerText = enemySlime2.name;
            } else if (enemy2 == enemySlime2) {
                enemy3 = enemySlime3;
                enemyName3.innerText = enemySlime3.name;
            } else {
                enemy3 = enemySlime;
                enemyName3.innerText = enemySlime.name;
            }
            enemyImg3.style.backgroundImage = "url(./resources/img/enemies/" + enemySlime.name + ".png)";
            break;
        case 2:
            if (enemy1 == enemyPixie) {
                enemy3 = enemyPixie2;
                enemyName3.innerText = enemyPixie2.name;
            } else if (enemy2 == enemyPixie) {
                enemy3 = enemyPixie2;
                enemyName3.innerText = enemyPixie2.name;
            } else if (enemy2 == enemyPixie2) {
                enemy3 = enemyPixie3;
                enemyName3.innerText = enemyPixie3.name;
            } else {
                enemy3 = enemyPixie;
                enemyName3.innerText = enemyPixie.name;
            }
            enemyImg3.style.backgroundImage = "url(./resources/img/enemies/" + enemyPixie.name + ".png)";
            break;
        case 3:
            if (enemy1 == enemyMakami) {
                enemy3 = enemyMakami2;
                enemyName3.innerText = enemyMakami2.name;
            } else if (enemy2 == enemyMakami) {
                enemy3 = enemyMakami2;
                enemyName3.innerText = enemyMakami2.name;
            } else if (enemy2 == enemyMakami2) {
                enemy3 = enemyMakami3;
                enemyName3.innerText = enemyMakami3.name;
            } else {
                enemy3 = enemyMakami;
                enemyName3.innerText = enemyMakami.name;
            }
            enemyImg3.style.backgroundImage = "url(./resources/img/enemies/" + enemyMakami.name + ".png)";
            break;
        case 4:
            if (enemy1 == enemyKoropokkuru) {
                enemy3 = enemyKoropokkuru2;
                enemyName3.innerText = enemyKoropokkuru2.name;
            } else if (enemy2 == enemyKoropokkuru) {
                enemy3 = enemyKoropokkuru2;
                enemyName3.innerText = enemyKoropokkuru2.name;
            } else if (enemy2 == enemyKoropokkuru2) {
                enemy3 = enemyKoropokkuru3;
                enemyName3.innerText = enemyKoropokkuru3.name;
            } else {
                enemy3 = enemyKoropokkuru;
                enemyName3.innerText = enemyKoropokkuru.name;
            }
            enemyImg3.style.backgroundImage = "url(./resources/img/enemies/" + enemyKoropokkuru.name + ".png)";
            break;
        case 5:
            if (enemy1 == enemyPyrojack) {
                enemy3 = enemyPyrojack2;
                enemyName3.innerText = enemyPyrojack2.name;
            } else if (enemy2 == enemyPyrojack) {
                enemy3 = enemyPyrojack2;
                enemyName3.innerText = enemyPyrojack2.name;
            } else if (enemy2 == enemyPyrojack2) {
                enemy3 = enemyPyrojack3;
                enemyName3.innerText = enemyPyrojack3.name;
            } else {
                enemy3 = enemyPyrojack;
                enemyName3.innerText = enemyPyrojack.name;
            }
            enemyImg3.style.backgroundImage = "url(./resources/img/enemies/" + enemyPyrojack.name + ".png)";
            break;
    }
    holdEnemyInfo1 = enemy1;
    document.getElementById("healthEnemy1").max = holdEnemyInfo1.maxhp;
    document.getElementById("healthEnemy1").value = holdEnemyInfo1.hp;
    holdEnemyInfo2 = enemy2;
    document.getElementById("healthEnemy2").max = holdEnemyInfo2.maxhp;
    document.getElementById("healthEnemy2").value = holdEnemyInfo2.hp;

    holdEnemyInfo3 = enemy3;
    document.getElementById("healthEnemy3").max = holdEnemyInfo3.maxhp;
    document.getElementById("healthEnemy3").value = holdEnemyInfo3.hp;


    statField.innerText += "\n" + "*----- NEW WAVE SPAWNED -----*" + "\n ";
    statField.innerText += enemy1.name + ", " + enemy2.name + " and " + enemy3.name + " have spawned" + "\n";

}