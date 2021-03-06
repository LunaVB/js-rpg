function Stats(name, move, itemStats, Skills, hp, maxhp, mana, maxmana, speed, mainEle, weakness) {
    this.name = name;
    this.move = move;
    this.item = itemStats;
    this.moves = Skills;
    this.hp = hp;
    this.maxhp = maxhp;
    this.mana = mana;
    this.maxmana = maxmana;
    this.speed = speed;
    this.mainElement = mainEle;
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
let dagger = new itemStats("dagger", "closeCombat", 100, 10, 20, 20, 15, 0, 0);
let slingshot = new itemStats("slingshot", "longRange", 100, 10, 10, 5, 15, 0, 0);
let bat = new itemStats("bat", "closeCombat", 100, 10, 10, 10, 15, 0, 0);
let whip = new itemStats("whip", "midRange", 100, 10, 10, 10, 15, 0, 0);
let katana = new itemStats("katana", "midRange", 100, 10, 10, 20, 15, 0, 0);
let knuckles = new itemStats("knuckles", "closeCombat", 100, 10, 10, 10, 15, 0, 0);
let axe = new itemStats("axe", "midRange", 100, 10, 10, 15, 15, 0, 0);
let blaster = new itemStats("blaster", "longRange", 100, 10, 10, 5, 15, 0, 0);

charJoker = new Stats("joker", move, dagger, jokerSkills, 100, 100, 50, 50, 50, "curse", "bless");
charMona = new Stats("mona", move, slingshot, monaSkills, 100, 100, 50, 50, 55, "wind", "elec");
charSkull = new Stats("skull", move, bat, skullSkills, 100, 100, 50, 50, 30, "elec", "wind");
charPanther = new Stats("panther", move, whip, pantherSkills, 100, 100, 50, 50, 40, "fire", "ice");
charFox = new Stats("fox", move, katana, foxSkills, 100, 100, 50, 50, 60, "ice", "fire");
charQueen = new Stats("queen", move, knuckles, queenSkills, 100, 100, 50, 50, 45, "nuke", "psy");
charNoir = new Stats("noir", move, axe, noirSkills, 100, 100, 50, 50, 30, "psy", "nuke");
charCrow = new Stats("crow", move, blaster, crowSkills, 100, 100, 50, 50, 35, "bless", "curse");