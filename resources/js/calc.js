/* -------------------- ALL DAMAGE CALCULATIONS -------------------- */
function calcDamage() {

    /* ----- EVASION CHANCE (DODGE CHANCE) -----*/
    /*  generates number from 1-100
        if generated number is equal or smaller than the evasion stat
        attack/skill will be dodged
    */

    function calcEvasion() {}

    /* ----- ATTACK CHANCE (CHANCE TO HIT TWICE) -----*/
    /*  generates number from 1-100
        if generated number is equal or smaller than the attack chance stat
        attack will hit twice (double hit multiplier)
    */

    function calcDoubleHit() {}

    /* ----- ELEMENT CALCULATIONS -----*/
    /*  
        These elements do double damage to each other
                FIRE  <==>  ICE
                WIND  <==>  ELEC
                NUKE  <==>  PSY
                BLESS <==>  CURSE
    */

    function calcElement() {}

    /* ----- FINAL DAMAGE CALCULATIONS -----*/
    /*  
       normal damage = base weapon damage - enemy resistance
       buffed damage = normal damage + buff
       elemental damage = buffed damage * elemental multiplier
       final damage = elemental damage * double hit multiplier 
       actual damage = final damage with dodge check
    */

    function calcFinalDamage() {}
}

/* -------------------- ENEMY FUNCTIONS -------------------- */
function enemy() {

    /* ----- ENEMY TURN RNG -----*/
    /* generates either a 1 or 2
       if 1 the enemy will use a normal attack
       if 2 the enemy will use a skill 
    */

    function enemyTurn() {}

    /* ----- ENEMY DESPAWN -----*/
    /* if an enemy's HP hits 0 or below
       despawns enemy and clears enemy data
    */
    function enemyDespawn() {}

}
/* -------------------- SAVING STATS -------------------- */
function saveStats() {

    /* ----- STORE STATS -----*/
    /*  stores teammate and enemy stats after an attack
     */

    function storeStats() {}

    /* ----- DISABLE TEAMMATE BUTTON -----*/
    /*  whenever a teammate has finished their turn
        their button is disabled as to "end" their turn
        and make it impossible to select them until the next round
    */

    function disableTeamButton() {}

    /* ----- RESET ROUND -----*/
    /*  re-enables teammate buttons on round reset
     */

    function roundReset() {}

}






























}