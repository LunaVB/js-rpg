/* ----- ALL DAMAGE CALCULATIONS ----- */
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
                FIRE <==> ICE
                WIND <==> ELEC
                NUKE <==> PSY
                BLESS <==> CURSE
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