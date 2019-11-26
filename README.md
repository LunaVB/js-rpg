# js-rpg
A javascript-based RPG



## TO DO ##
/*fix round not ending if one/two spots didn't spawn an enemy*/
prevent enemy from moving after they've been killed
hold proper info in holdTeamInfo and holdEnemyInfo after making a move (stats//calcHits)
calulate guard
draw hp and mana to screen + update after every attack (possible icons for buffs later?)
/*decide order of attacks, atm I can't seem to get the speed values back to the character objects after sorting them*/

<h2>IDEAS: <h2>

## PLAYERS ##
LEVELS
save state
3 players VS enemy waves
every player has weaknesses/strengths/elemental spells/physical skills/buffs
weapon types have strengths/weaknesses (?)

## ENEMIES ##
make "waves" (random 1-4 # of enemies)
make several enemy classes (auto-scale)
boss every 5 waves (bosses autoscale)

## Bugs: ##
characters can be deselected after game start (only visually)
//---------------------

## Done: ##
disable selects when pressing play button
implement weapon types and stats
pair race stats and item stats on character creation + proper item detection
RNG of boss item
make enemy stats
integrate enemy
double hit calculation
evasion calculation
player physical damage calculation
player magical damage calculation
visualise in console + field
draw basic temp players
draw basic temp enemies
randomize enemy targets
re-enable player buttons on round end
in case of 2 or 3 of the same enemy type, make sure they have different health/manapools
calculate enemy spawn by spot on the field instead of complete RNG
fix names in buttons
despawn enemy and clear enemy data when killed



