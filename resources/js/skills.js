function Skills(name, type, element, damage, mana, duration, amountAffected, healthRestore, effect, effectAmount, descr) {
    this.name = name;
    this.type = type;
    this.element = element;
    this.damage = damage;
    this.manacost = mana;
    this.duration = duration;
    this.amountAffected = amountAffected;
    this.healthRestore = healthRestore;
    this.effect = effect;
    this.effectAmount = effectAmount;
    this.description = descr;
};
/*var spellObject;

spellObject = {
    dia: {
        spellName: "Dia",
        nameId: "#dia",
        element: "heal",
        healthCost: 0,
        manaCost: 3,
        healthrestore: 25,
        targetAmount: 1,
        description: "light heal for one team member",
        spellFunction: "none",
    },
    media: {
        spellName: "Media",
        nameId: "#media",
        element: "heal",
        healthCost: 0,
        manaCost: 7,
        healthrestore: 25,
        targetAmount: 3,
        description: "light heal for all team members",
        spellFunction: "none",
    },
    luckyPunch: {
        spellName: "Lucky Punch",
        nameId: "#luckypunch",
        element: "phys",
        healthCost: 6,
        manaCost: 0,
        healthrestore: 25,
        targetAmount: 3,
        description: "miniscule physical damage to one foe, medium chance to crit",
        spellFunction: "none",
    },
}*/
/* Joker's skills */
let eiha = new Skills("Eiha", "attack", "curse", 15, 4, 1, 1, 0, "none", 0, "light curse damage to one foe");
let cleave = new Skills("Cleave", "attack", "phys", 12, 6, 1, 1, 0, "none", 0, "light physical damage to one foe");
let sukunda = new Skills("Sukunda", "debuff", "buff", 0, 8, 3, 1, 0, "evasion", 20, "lowers evasion of one enemy for 3 turns");
let dreamNeedle = new Skills("Dream Needle", "attack", "phys", 15, 8, 1, 1, 0, "sleep", 0, "light curse damage to one foe, smal chance to put the enemy to sleep");
let adverseResolve = new Skills("Adverse Resolve", "passive", "passive", 0, 0, 999, 1, 0, "crit", 2, "passively increases crit chance")
let jokerSkills = [eiha, cleave, sukunda, dreamNeedle, adverseResolve];

/* Mona's skills */
let garu = new Skills("Garu", "attack", "wind", 15, 3, 1, 1, 0, "none", 0, "light wind damage to one foe");
let dia = new Skills("Dia", "heal", "heal", 0, 3, 1, 1, 30, "heal", 0, "light heal for one team member");
let media = new Skills("Media", "heal", "heal", 0, 8, 1, 3, 30, "heal", 0, "light heal for all team members");
let luckyPunch = new Skills("Lucky Punch", "attack", "phys", 10, 6, 1, 1, 0, "crit", 2, "miniscule physical damage to one foe, medium chance to crit");
let windBoost = new Skills("Wind Boost", "passive", "passive", 0, 0, 999, 1, 0, "wind", 25, "passively increases damage for all wind skills")
let monaSkills = [garu, dia, media, luckyPunch, windBoost];

/* Skulls's skills */
let zio = new Skills("Zio", "attack", "elec", 15, 4, 1, 1, 0, "none", 0, "light electric damage to one foe");
let lunge = new Skills("Lunge", "attack", "phys", 12, 6, 1, 1, 0, "none", 0, "light physical damage to one foe");
let tarukaja = new Skills("Tarukaja", "buff", "buff", 15, 8, 3, 1, 0, "attack", 0, "increases attack for one team member for 3 turns");
let headbutt = new Skills("Headbutt", "attack", "phys", 22, 11, 1, 1, 0, "none", 0, "medium physical damage to one foe");
let shockBoost = new Skills("Shock Boost", "passive", "passive", 0, 0, 999, 1, 0, "elec", 25, "passively increases damage for all electric skills")
let skullSkills = [zio, lunge, tarukaja, headbutt, shockBoost];

/* Panther's skills */
let agi = new Skills("Agi", "attack", "fire", 15, 4, 1, 1, 0, "none", 0, "light fire damage to one foe");
let dormina = new Skills("Dormina", "debuff", "ailment", 0, 5, 1, 1, 0, "sleep", 0, "small chance to put an enemy to sleep");
let tarunda = new Skills("Tarunda", "debuff", "buff", 0, 8, 3, 1, 0, "attack", 20, "lowers attack of one enemy for 3 turns");
let fireBoost = new Skills("Fire Boost", "passive", "passive", 0, 0, 999, 1, 0, "fire", 25, "passively increases damage for all fire skills")
let pantherSkills = [agi, dia, dormina, tarunda, fireBoost];

/*Fox's skills*/
let bufu = new Skills("Bufu", "attack", "ice", 15, 4, 1, 1, 0, "none", 0, "light ice damage to one foe");
let giantSlice = new Skills("Giant Slice", "attack", "phys", 22, 11, 1, 1, 0, "none", 0, "light physical damage to one foe");
let sukukaja = new Skills("Sukukaja", "buff", "buff", 15, 8, 1, 1, 0, "evasion", 20, "lowers evasion of one enemy for 3 turns");
let visciousStrike = new Skills("Viscious Strike", "attack", "phys", 22, 22, 1, 3, 0, "none", 0, "medium physical damage to all foes");
let speedMaster = new Skills("Speed Master", "passive", "passive", 0, 0, 999, 1, 0, "speed", 20, "passively increases speed")
let foxSkills = [bufu, giantSlice, sukukaja, visciousStrike, speedMaster];

/*Queen's skills*/
let frei = new Skills("Frei", "attack", "nuke", 15, 4, 1, 1, 0, "none", 0, "light nuclear damage to one foe");
let vajraBlast = new Skills("Vajra Blast", "attack", "phys", 12, 15, 1, 3, 0, "none", 0, "light physical damage to all foes");
let diarama = new Skills("Diarama", "heal", "heal", 0, 6, 1, 1, 50, "heal", 1, "medium heal for one team member");
let rakukaja = new Skills("Rakukaja", "buff", "buff", 15, 8, 1, 1, 0, "defense", 20, "increases defense for one team member for 3 turns");
let dekunda = new Skills("Dekunda", "buff", "buff", 0, 10, 1, 3, 0, "nullify debuff", 1, "nullifies debuffs for all team members");
let defenseMaster = new Skills("Defense Master", "passive", "passive", 0, 0, 999, 1, 0, "defense", 20, "passively increases defense")
let queenSkills = [frei, vajraBlast, diarama, rakukaja, defenseMaster];

/*Noir's skills*/
let psio = new Skills("Psio", "attack", "psy", 15, 4, 1, 1, 0, "none", 0, "light psychic damage to one foe");
let tripleDown = new Skills("Triple Down", "attack", "gun", 10, 25, 1, 3, 0, "triple attack", 3, "light gun damage to all foes 3 times");
let amritaDrop = new Skills("Amrita Drop", "buff", "heal", 0, 6, 1, 1, 0, "nullify debuff", 1, "nullifies debuffs for one team member");
let tetrakarn = new Skills("Tetrakarn", "buff", "buff", 0, 35, 1, 1, 0, "nullify damage", 1, "nullifies the next incoming damage for one team member");
let psyBoost = new Skills("Psy Boost", "passive", "passive", 0, 0, 999, 1, 0, "psy", 25, "passively increases damage for all psychic skills")
let noirSkills = [psio, tripleDown, amritaDrop, tetrakarn, psyBoost];

/*Crow's skills*/
let megatonRaid = new Skills("Megaton Raid", "attack", "phys", 30, 32, 1, 1, 0, "none", 0, "severe physical damage to one foe");
let kouha = new Skills("Kouha", "attack", "bless", 15, 4, 1, 1, 0, "none", 0, "light bless damage to one foe");
let makouha = new Skills("Makouha", "attack", "bless", 12, 11, 1, 3, 0, "none", 0, "light curse damage to all foes");
let attackMaster = new Skills("Attack Master", "passive", "passive", 0, 0, 999, 1, 0, "attack", 20, "passively increases damage for all physical skills")
let crowSkills = [megatonRaid, eiha, kouha, makouha, attackMaster];