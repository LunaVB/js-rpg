/* ----- ALL DAMAGE CALCULATIONS ----- */

function calcDamage() {
    /* ----- EVASION CHANCE (DODGE CHANCE) -----*/
    /*  generates number from 1-100
        if generated number is equal or smaller than the evasion stat
        attack/skill will be dodged
    */
    function calcEvasion() {
        let evasion = itemStats.evasion;
        let dodgeChance = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //RNG 1-100
        if (dodgeChance > 0 && dodgeChance <= evasion) {
            console.log("evasion rate from item: " + evasion + "\n" + "RNG num: " + dodgeChance + "\n" + "dodged!");
        } else {
            console.log("evasion rate from item: " + evasion + "\n" + "RNG num: " + dodgeChance + "\n" + "got hit");
        }
    }
    /* ----- ATTACK CHANCE (CHANCE TO HIT TWICE) -----*/
    /*  generates number from 1-100
        if generated number is equal or smaller than the attack chance stat
        attack will hit twice (calculated later)
    */
    function calcDoubleHit() {
        let atkChance = itemStats.attackChance;
        let atkDoubleHitChance = Math.floor(Math.random() * (100 - 1 + 1)) + 1; //RNG 1-100
        if (atkDoubleHitChance > 0 && atkDoubleHitChance <= atkChance) { //RNG 1 until evasion value = dodged
            doubleHit = 2;
        } else {
            doubleHit = 1;
        }
    }
































}