function Skills(name, type, element, damage, mana, duration, amountAffected, healthRestore, effect, effectAmount) {
    this.name = name;
    this.type = type;
    this.element = element;
    this.damage = damage;
    this.manacost = mana;
    this.duration = duration;
    this.amountAffected = amountAffected;
    this.healthrestore = healthRestore;
    this.effect = effect;
    this.effectAmount = effectAmount;
};
/* Joker's skills */
let eiha = new Skills("Eiha", "attack", "curse", 15, 4, 1, 1, 0, "none", 0); //light curse damage
let cleave = new Skills("Cleave", "attack", "phys", 12, 6, 1, 1, 0, "none", 0); //light phys damage
let sukunda = new Skills("Sukunda", "debuff", "buff", 0, 8, 3, 1, 0, "evasion", 20); //evasion debuff on an enemy
let dreamNeedle = new Skills("Dream Needle", "attack", "phys", 15, 8, 1, 1, 0, "sleep", 0); //light phys damage (possible sleep status effect on enemy)
//let adverseResolve = new Skills("Adverse Resolve", "passive", "passive", 0, 0, 999, 1, 0, "crit", 2) //passive that boosts crit chance
let jokerSkills = [eiha, cleave, sukunda, dreamNeedle];

/* Mona's skills */
let garu = new Skills("Garu", "attack", "wind", 15, 3, 1, 1, 0, "none", 0);
let dia = new Skills("Dia", "heal", "heal", 0, 3, 1, 1, 30, "heal", 0);
let media = new Skills("Media", "heal", "heal", 0, 3, 1, 3, 30, "heal", 0);
let luckyPunch = new Skills("Lucky Punch", "attack", "phys", 10, 6, 1, 1, 0, "crit", 2)
let monaSkills = [garu, dia, media, luckyPunch];

/* Skulls's skills */
let zio = new Skills("Zio", "attack", "elec", 15, 4, 1, 1, 0, "none", 0);
let lunge = new Skills("Lunge", "attack", "phys", 12, 6, 1, 1, 0, "none", 0);
let tarukaja = new Skills("Tarukaja", "buff", "buff", 15, 4, 1, 1, 0, "none", 0);
let headbutt = new Skills("Headbutt", "attack", "phys", 22, 11, 1, 1, 0, "none", 0);
let skullSkills = [zio, lunge, tarukaja, headbutt];

/* Panther's skills */