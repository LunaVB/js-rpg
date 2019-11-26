function Stats(name, move, itemStats, hp, maxhp, mana, speed, mainEle, weakness) {
    this.name = name;
    this.move = move;
    this.item = itemStats;
    this.hp = hp;
    this.maxhp = maxhp;
    this.mana = mana;
    this.speed = speed;
    this.mainElements = mainEle;
    this.weakness = weakness;
};

function itemStats(name, type, baseDmg, evasion, atkChance, physRes, magRes, phys, mag, heal) {
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
let dagger = new itemStats("dagger", "closeCombat", 150, 10, 10, 0, 15, 0, 0);
let slingshot = new itemStats("slingshot", "longRange", 150, 10, 10, 0, 15, 0, 0);
let bat = new itemStats("bat", "closeCombat", 150, 10, 10, 0, 15, 0, 0);
let whip = new itemStats("whip", "midRange", 150, 10, 10, 0, 15, 0, 0);
let katana = new itemStats("katana", "midRange", 150, 10, 10, 0, 15, 0, 0);
let knuckles = new itemStats("knuckles", "closeCombat", 150, 10, 10, 0, 15, 0, 0);
let axe = new itemStats("axe", "midRange", 150, 10, 10, 0, 15, 0, 0);
let blaster = new itemStats("blaster", "longRange", 150, 10, 10, 0, 15, 0, 0);

charJoker = new Stats("joker", move, dagger, 100, 250, 50, 50, "eiha", "bless");
charMona = new Stats("mona", move, slingshot, 100, 250, 50, 55, "garu", "zio");
charSkull = new Stats("skull", move, bat, 100, 280, 50, 30, "zio", "garu");
charPanther = new Stats("panther", move, whip, 100, 180, 50, 40, "agi", "bufu");
charFox = new Stats("fox", move, katana, 100, 200, 50, 60, "bufu", "agi");
charQueen = new Stats("queen", move, knuckles, 100, 200, 50, 45, "nuke", "psi");
charNoir = new Stats("noir", move, axe, 100, 200, 50, 30, "psi", "nuke");
charCrow = new Stats("crow", move, blaster, 100, 200, 50, 35, "bless", "eiha");