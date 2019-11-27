function Stats(name, move, itemStats, Skills, hp, maxhp, mana, speed, mainEle, weakness) {
    this.name = name;
    this.move = move;
    this.item = itemStats;
    this.moves = Skills;
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
let dagger = new itemStats("dagger", "closeCombat", 10, 10, 10, 0, 15, 0, 0);
let slingshot = new itemStats("slingshot", "longRange", 10, 10, 10, 0, 15, 0, 0);
let bat = new itemStats("bat", "closeCombat", 10, 10, 10, 0, 15, 0, 0);
let whip = new itemStats("whip", "midRange", 10, 10, 10, 0, 15, 0, 0);
let katana = new itemStats("katana", "midRange", 10, 10, 10, 0, 15, 0, 0);
let knuckles = new itemStats("knuckles", "closeCombat", 10, 10, 10, 0, 15, 0, 0);
let axe = new itemStats("axe", "midRange", 10, 10, 10, 0, 15, 0, 0);
let blaster = new itemStats("blaster", "longRange", 10, 10, 10, 0, 15, 0, 0);

charJoker = new Stats("joker", move, dagger, jokerSkills, 100, 100, 50, 50, "curse", "bless");
charMona = new Stats("mona", move, slingshot, monaSkills, 100, 100, 50, 55, "wind", "elec");
charSkull = new Stats("skull", move, bat, skullSkills, 100, 100, 50, 30, "elec", "wind");
charPanther = new Stats("panther", move, monaSkills, whip, 100, 100, 50, 40, "fire", "ice");
charFox = new Stats("fox", move, katana, monaSkills, 100, 100, 50, 60, "ice", "fire");
charQueen = new Stats("queen", move, knuckles, monaSkills, 100, 100, 50, 45, "nuke", "psi");
charNoir = new Stats("noir", move, axe, monaSkills, 100, 100, 50, 30, "psi", "nuke");
charCrow = new Stats("crow", move, blaster, monaSkills, 100, 100, 50, 35, "bless", "curse");