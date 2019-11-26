# js-rpg
A javascript RPG based on the Persona franchise
link [here](https://lunavb.github.io/js-rpg/rpg.html)

<h3>TO DO</h3>
1. fix round not ending if one/two spots didn't spawn an enemy.
2. prevent enemy from moving after they've been killed.
3. hold proper info in holdTeamInfo and holdEnemyInfo after making a move (stats//calcHits).
4. calulate guard.
5. draw hp and mana to screen + update after every attack (possible icons for buffs later?).
6. decide order of attacks, atm I can't seem to get the speed values back to the character objects after sorting them.

<h3>DONE</h3>
1. disable selects when pressing play button.
2. implement weapon types and stats.
3. pair race stats and item stats on character creation + proper item detection.
4. RNG of boss item.
5. make enemy stats.
6. integrate enemy.
7. double hit calculation.
8. evasion calculation.
9. player physical damage calculation.
10. player magical damage calculation.
11. visualise in console + field.
12. draw basic temp players.
13. draw basic temp enemies.
14. randomize enemy targets.
15. re-enable player buttons on round end.
16. in case of 2 or 3 of the same enemy type, make sure they have different health/manapools.
17. calculate enemy spawn by spot on the field instead of complete RNG.
18. fix names in buttons.
19. despawn enemy and clear enemy data when killed.

<h2>IDEAS: <h2>

### PLAYERS
LEVELS :)  .
save state.
3 players VS enemy waves.
every player has weaknesses/strengths/elemental spells/physical skills/buffs.
weapon types have strengths/weaknesses (?).

### ENEMIES
make "waves" (random 1-4 # of enemies).
make several enemy classes (auto-scale).
boss every 5 waves (bosses autoscale).

### Bugs:
characters can be deselected after game start (only visually).


