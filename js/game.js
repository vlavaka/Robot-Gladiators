var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

enemyNames[0]
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.legth; i++) {
    console.log(enemyNames[i];
    console.log(i);
    console.log(enemyName[i] + " is at " + i + " index ");
}

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + "#" + ". " + "#" + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert( + " has died!");
    } else {
      window.alert( "#"+ " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      "#"  + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  }

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable.
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + "#" + " . " + "#" + " now had " + enemyHealth + " health remaining "
        );

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        "#" + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaning."
        );
}

 /var fight = function(enemyName) {
     ... // fight fuction statements
 }
 for(var i = 0; i < enemyNames.length; i++) {
     fight(enemyNames[i]);
 }

 // put new code under this 
 console.log(playerName + " attacked " + "#" + " . " + " now has " + enemyHealth + " health remaining. ");

 // check enemy's health 
 if (enemyHealth <= 0) {
     window.alert("#" + " still has " + enemyHealth + " health left. ");
 }

 // put new code under this
 console.log("#" + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaing.");

 // check player's health
 if (playerHealth <= 0) {
     window.alert("#" + " still has " + playerHealth + " health left.");
 }
