/*function createChar() {
    let charHuman = new Stats("human", itemStats, 100, 250);
    let charOrc = new Stats("orc", itemStats, 100, 280);
    let charElf = new Stats("elf", itemStats, 100, 180);
    let charVampire = new Stats("vampire", itemStats, 100, 200);
    selectedRace.disabled = true;
    selectedItem.disabled = true;
    startBtn.disabled = true;
    statField.innerText += "You have selected: " + "\n";
    switch (selectedItem.value) {
        case "boots":
            itemStats = Object.assign(boots, Stats);
            break;
        case "cloak":
            itemStats = Object.assign(cloak, Stats);
            break;
        case "staff":
            itemStats = Object.assign(staff, Stats);
            break;
        case "dagger":
            itemStats = Object.assign(dagger, Stats);
            break;
        case "bow":
            itemStats = Object.assign(bow, Stats);
            break;
        default:
            console.log("Something went wrong at item selection");
            break;
    }
}*/










/*function calcOrder() {
                     console.log("player team speed stats: " + selectedTeam[0].speed + " " + selectedTeam[1].speed + " and " + selectedTeam[2].speed + ". Enemy speed stats: " + enemy1.speed);
                     //IF FIRST SELECTED CHARACTER IS THE FASTEST
                     //character 1 is faster
                     if (selectedTeam[0].speed > selectedTeam[1].speed && selectedTeam[0].speed > selectedTeam[2].speed && selectedTeam[0].speed > enemy1.speed) {
                         console.log(selectedTeam[0].name + " goes first")
                         selectedTeam[0].move = "first";
                         //character 2 is 2nd
                         if (selectedTeam[1].speed > selectedTeam[2].speed && selectedTeam[1].speed > enemy1.speed) {
                             console.log(selectedTeam[1].name + " goes second")
                             selectedTeam[1].move = "second";
                             //character 3 is 3rd, enemy goes last
                             if (selectedTeam[2].speed > enemy1.speed) {
                                 console.log(selectedTeam[1].name + " goes third")
                                 selectedTeam[1].move = "third";
                                 console.log(enemy1.name + " goes last")
                                 enemy1.move = "last";
                             } //enemy is 3rd, character 3 goes last
                             else {
                                 console.log(enemy1.name + " goes third")
                                 enemy1.move = "third";
                                 console.log(selectedTeam[2].name + " goes last")
                                 selectedTeam[2].move = "last";
                             }
                         } //character 3 is 2nd
                         else if (selectedTeam[2].speed > selectedTeam[1].speed && selectedTeam[2].speed > enemy1.speed) {
                             console.log(selectedTeam[2].name + " goes second")
                             selectedTeam[2].move = "second";
                             //character 2 is 3rd, enemy goes last
                             if (selectedTeam[1].speed > enemy1.speed) {
                                 console.log(selectedTeam[1].name + " goes third")
                                 selectedTeam[1].move = "third";
                                 console.log(enemy1.name + " goes last")
                                 enemy1.move = "last";
                             } //enemy is 3rd, character 2 goes last
                             else {
                                 console.log(enemy1.name + " goes third")
                                 enemy1.move = "third";
                                 console.log(selectedTeam[1].name + " goes last")
                                 selectedTeam[1].move = "last";
                             }
                         } //enemy is 2nd
                         else if (enemy1.speed > selectedTeam[1].speed && enemy1.speed > selectedTeam[2].speed) {
                             console.log(enemy1.name + " goes second")
                             enemy1.move = "second";
                             //character 2 is 3rd, character 3 goes last
                             if (selectedTeam[1].speed > selectedTeam[2].speed) {
                                 console.log(selectedTeam[1].name + " goes third")
                                 selectedTeam[1].move = "third";
                                 console.log(selectedTeam[2].name + " goes last")
                                 selectedTeam[2].move = "last";
                             } //character 3 is 3rd, character 2 goes last
                             else {
                                 console.log(selectedTeam[2].name + " goes third")
                                 selectedTeam[2].move = "third";
                                 console.log(selectedTeam[1].name + " goes last")
                                 selectedTeam[1].move = "last";
                             }
                         }
                     }

                     //IF SECOND SELECTED CHARACTER IS THE FASTEST
                     else if (selectedTeam[1].speed > selectedTeam[0].speed && selectedTeam[1].speed > selectedTeam[2].speed && selectedTeam[1].speed > enemy1.speed) {
                         console.log(selectedTeam[1].name + " goes first")
                         selectedTeam[1].move = "first";
                         //character 1 is 2nd
                         if (selectedTeam[0].speed > selectedTeam[2].speed && selectedTeam[0].speed > enemy1.speed) {
                             console.log(selectedTeam[1].name + " goes second")
                             selectedTeam[1].move = "second";
                             //character 3 is 3rd, enemy goes last
                             if (selectedTeam[2].speed > enemy1.speed) {
                                 console.log(selectedTeam[2].name + " goes third")
                                 selectedTeam[2].move = "third";
                                 console.log(enemy1.name + " goes last")
                                 enemy1.move = "last";
                             } //enemy is 3rd, character 3 goes last
                             else {
                                 console.log(enemy1.name + " goes third")
                                 enemy1.move = "third";
                                 console.log(selectedTeam[2].name + " goes last")
                                 selectedTeam[2].move = "last";
                             }
                         } //character 3 is 2nd
                         else if (selectedTeam[2].speed > selectedTeam[1].speed && selectedTeam[2].speed > enemy1.speed) {
                             console.log(selectedTeam[2].name + " goes second")
                             selectedTeam[2].move = "second";
                             //character 1 is 3rd, enemy goes last
                             if (selectedTeam[0].speed > enemy1.speed) {
                                 console.log(selectedTeam[0].name + " goes third")
                                 selectedTeam[0].move = "third";
                                 console.log(enemy1.name + " goes last")
                                 enemy1.move = "last";
                             } //enemy is 3rd, character 1 goes last
                             else {
                                 console.log(enemy1.name + " goes third")
                                 enemy1.move = "third";
                                 console.log(selectedTeam[0].name + " goes last")
                                 selectedTeam[0].move = "last";
                             }
                         } //enemy is 2nd
                         else if (enemy1.speed > selectedTeam[0].speed && enemy1.speed > selectedTeam[2].speed) {
                             console.log(enemy1.name + " goes second")
                             enemy1.move = "second";
                             //character 1 is 3rd, character 3 goes last
                             if (selectedTeam[0].speed > selectedTeam[2].speed) {
                                 console.log(selectedTeam[0].name + " goes third")
                                 selectedTeam[0].move = "third";
                                 console.log(selectedTeam[2].name + " goes last")
                                 selectedTeam[2].move = "last";
                             } //character 3 is 3rd, character 1 goes last
                             else {
                                 console.log(selectedTeam[2].name + " goes third")
                                 selectedTeam[2].move = "third";
                                 console.log(selectedTeam[0].name + " goes last")
                                 selectedTeam[0].move = "last";
                             }
                         }

                     } //IF THIRD SELECTED CHARACTER IS THE FASTEST
                     else if (selectedTeam[2].speed > selectedTeam[1].speed && selectedTeam[2].speed > selectedTeam[0].speed && selectedTeam[2].speed > enemy1.speed) {
                         console.log(selectedTeam[2].name + " goes first")
                         selectedTeam[2].move = "first";
                         //character 1 is 2nd
                         if (selectedTeam[0].speed > selectedTeam[1].speed && selectedTeam[0].speed > enemy1.speed) {
                             console.log(selectedTeam[1].name + " goes second")
                             selectedTeam[1].move = "second";
                             //character 2 is 3rd, enemy goes last
                             if (selectedTeam[1].speed > enemy1.speed) {
                                 console.log(selectedTeam[1].name + " goes third")
                                 selectedTeam[1].move = "third";
                                 console.log(enemy1.name + " goes last")
                                 enemy1.move = "last";
                             } //enemy is 3rd, character 3 goes last
                             else {
                                 console.log(enemy1.name + " goes third")
                                 enemy1.move = "third";
                                 console.log(selectedTeam[1].name + " goes last")
                                 selectedTeam[1].move = "last";
                             }
                         } //character 2 is 2nd
                         else if (selectedTeam[1].speed > selectedTeam[0].speed && selectedTeam[1].speed > enemy1.speed) {
                             console.log(selectedTeam[1].name + " goes second")
                             selectedTeam[1].move = "second";
                             //character 1 is 3rd, enemy goes last
                             if (selectedTeam[0].speed > enemy1.speed) {
                                 console.log(selectedTeam[0].name + " goes third")
                                 selectedTeam[0].move = "third";
                                 console.log(enemy1.name + " goes last")
                                 enemy1.move = "last";
                             } //enemy is 3rd, character 1 goes last
                             else {
                                 console.log(enemy1.name + " goes third")
                                 enemy1.move = "third";
                                 console.log(selectedTeam[0].name + " goes last")
                                 selectedTeam[0].move = "last";
                             }
                         } //enemy is 2nd
                         else if (enemy1.speed > selectedTeam[0].speed && enemy1.speed > selectedTeam[1].speed) {
                             console.log(enemy1.name + " goes second")
                             enemy1.move = "second";
                             //character 1 is 3rd, character 2 goes last
                             if (selectedTeam[0].speed > selectedTeam[1].speed) {
                                 console.log(selectedTeam[0].name + " goes third")
                                 selectedTeam[0].move = "third";
                                 console.log(selectedTeam[1].name + " goes last")
                                 selectedTeam[1].move = "last";
                             } //character 2 is 3rd, character 1 goes last
                             else {
                                 console.log(selectedTeam[1].name + " goes third")
                                 selectedTeam[1].move = "third";
                                 console.log(selectedTeam[0].name + " goes last")
                                 selectedTeam[0].move = "last";
                             }
                         }
                     }
                     //IF ENEMY IS THE FASTEST
                     else if (enemy1.speed > selectedTeam[0].speed && enemy1.speed > selectedTeam[1].speed && enemy1.speed > selectedTeam[2].speed) {
                         console.log(enemy1.name + " goes first")
                         enemy1.move = "first";
                         //character 1 is 2nd
                         if (selectedTeam[0].speed > selectedTeam[1].speed && selectedTeam[0].speed > selectedTeam[2].speed) {
                             console.log(selectedTeam[0].name + " goes second")
                             selectedTeam[0].move = "second";
                             //character 2 is 3rd, character 3 goes last
                             if (selectedTeam[1].speed > selectedTeam[2].speed) {
                                 console.log(selectedTeam[1].name + " goes third")
                                 selectedTeam[1].move = "third";
                                 console.log(selectedTeam[2].name + " goes last")
                                 selectedTeam[2].move = "last";
                             } //character 3 is 3rd, character 2 goes last
                             else {
                                 console.log(selectedTeam[2].name + " goes third")
                                 selectedTeam[2].move = "third";
                                 console.log(selectedTeam[1].name + " goes last")
                                 selectedTeam[1].move = "last";
                             }
                         } //character 2 is 2nd
                         else if (selectedTeam[1].speed > selectedTeam[0].speed && selectedTeam[1].speed > selectedTeam[2].speed) {
                             console.log(selectedTeam[1].name + " goes second")
                             selectedTeam[1].move = "second";
                             //character 1 is 3rd, character 3 goes last
                             if (selectedTeam[0].speed > selectedTeam[2].speed) {
                                 console.log(selectedTeam[0].name + " goes third")
                                 selectedTeam[0].move = "third";
                                 console.log(selectedTeam[2].name + " goes last")
                                 selectedTeam[2].move = "last";
                             } //character 3 is 3rd, character 1 goes last
                             else {
                                 console.log(selectedTeam[2].name + " goes third")
                                 selectedTeam[2].move = "third";
                                 console.log(selectedTeam[0].name + " goes last")
                                 selectedTeam[0].move = "last";
                             }
                         } //character 3 is 2nd
                         else if (selectedTeam[2].speed > selectedTeam[0].speed && selectedTeam[2].speed > selectedTeam[1].speed) {
                             console.log(selectedTeam[2].name + " goes second")
                             selectedTeam[2].move = "second";
                             //character 1 is 3rd, character 2 goes last
                             if (selectedTeam[0].speed > selectedTeam[1].speed) {
                                 console.log(selectedTeam[0].name + " goes third")
                                 selectedTeam[0].move = "third";
                                 console.log(selectedTeam[1].name + " goes last")
                                 selectedTeam[1].move = "last";
                             } //character 2 is 3rd, character 1 goes last
                             else {
                                 console.log(selectedTeam[1].name + " goes third")
                                 selectedTeam[1].move = "third";
                                 console.log(selectedTeam[0].name + " goes last")
                                 selectedTeam[0].move = "last";
                             }
                         }
                     }
                 }) */