
var player;
var computer; 

// Charizard Attack options
var charizardsAttacks = {
	move1: flamethrower = {
 		name: "Flamethrower",
 		attackPower: 90,
		accuracy: 100,
		maxpowerPoints: 15,
		currentPP: 15,
		type : "Fire"
	},
	move2:seismicToss={
		name:"Seismic Toss",
		attackPower: 100,
		accuracy: 100,
		maxpowerPoints: 20,
		currentPP: 20,
		type : "Fighting"
	},
	move3:earthquake={
		name:"Earthquake",
		attackPower: 100,
		accuracy: 100,
		maxpowerPoints: 10,
		currentPP: 10,
		type : "Ground"
	},
	move4:fireBlast={
		name:"Fire Blast",
		attackPower: 110,
		accuracy: 85,
		maxpowerPoints: 5,
		currentPP: 5,
		type : "Fire"	
	}
}
// Charizard Object
var charizard = {
	name : "Charizard",
	type : "Fire",
	level : 100,
	fullHealth : 359, currentHealth : 359,
	attack : 266,
	defense : 254,
	speed : 298,
	attacks : charizardsAttacks
}

// Blastoise Attack options
var blastoisesAttacks = {
  move1: surf = {
		name : "Surf",
		attackPower: 90,
		accuracy: 100,
		maxpowerPoints: 15,
		currentPP: 15,
		type : "Water"},
	move2: megaPunch = {
		name : "Mega Punch",
		attackPower: 80,
		accuracy : 85,
		maxpowerPoints : 20,
		currentPP: 20,
		type : "Normal"
	},
	move3: skullBash = {
		name : "Skull Bash",
		attackPower: 130,
		accuracy: 100,
		maxpowerPoints : 10,
		currentPP: 10,
		type : "Normal"
	},
	move4: hydroPump = {
		name : "Hydro Pump",
		attackPower : 110,
		accuracy : 80,
		maxpowerPoints : 5,
		currentPP: 5,
		type : "Water"
	}
}

// Blastoise object
var blastoise = {
	name : "Blastoise",
	type : "Water",
	level : 100,
	fullHealth : 361, currentHealth : 361,
	attack : 264,
	defense : 298,
	speed : 254,
	attacks : blastoisesAttacks
}

// battle/damage functions

// function hitOrMiss(accuracy){
//  var hit = false
//  var chance = Math.random() * 100
//  if (accuracy == 100 || chance <= accuracy){
//  	hit = true
//  }
//  return hit
// }

// function effectiveness(attack, targetType){
// 	var multiplier = 1
// 	if (attack.type == "Water" && targetType == "Fire"){
// 		effective = true
// 		multiplier = 2
// 	}
// 	else if (attack.type == "Fire" && targetType == "Water"){
// 		multiplier = 0.5
// 	}
// 	else{
// 		multiplier
// 	}	
// 	return multiplier
// }

function playerDamageDealt(attack){
	// var damageMultiplier = effectiveness(attack, computer.pokemon.type)
	var damage = Math.floor(attack.attackPower) //* (player.pokemon.attack /  computer.pokemon.defense) * damageMultiplier)
	if (attack.currentPP == 0){
		console.log("There are no Power Points left for this move!")
	}
	else{
		console.log(computer.name + "'s " + computer.pokemon.name + " received " + damage + " damage!")
		attack.currentPP --;
		// switch (damageMultiplier){
		// 	case 2: console.log("It's super effective!")
		// 		break;
		// 	case 0.5: console.log("It's not very effective...")
		// 		break;
	}
	
	computer.pokemon.currentHealth = computer.pokemon.currentHealth - damage;
	if (computer.pokemon.currentHealth <= 0){
		computer.pokemon.currentHealth =0
	}
	console.log(computer.pokemon.name + "'s Health: " +computer.pokemon.currentHealth + " / " + computer.pokemon.fullHealth)
	}
//}

function computerDamageDealt(attack){
	// var damageMultiplier = effectiveness(attack, player.pokemon.type)
	var damage = Math.floor(attack.attackPower)// * (computer.pokemon.attack /  player.pokemon.defense) * damageMultiplier)
	console.log(computer.name + "'s " + computer.pokemon.name + " used " + attack.name + "!")
	console.log(player.name + "'s " + player.pokemon.name + " received " + damage + " damage!")
	if (attack.currentPP == 0){
		console.log("There are no Power Points left for this move!")
	}
	// else{
	// 	switch (damageMultiplier){
	// 		case 2: console.log("It's super effective!")
	// 			break;
	// 		case 0.5: console.log("It's not very effective...")
	// 			break;
	// }
	attack.currentPP --;
	player.pokemon.currentHealth = player.pokemon.currentHealth - damage;
	if (player.pokemon.currentHealth <= 0){
		player.pokemon.currentHealth =0
	}
	console.log(player.pokemon.name + "'s Health: " + player.pokemon.currentHealth + " / " + player.pokemon.fullHealth)
	}
// }

function checkFaint(pokemon){
	var fainted = false
	if (pokemon.currentHealth <= 0){
		fainted = true
		console.log(pokemon.name + " fainted!")
	}
	return fainted
}

function computersMove(){
	var randomMove = Math.floor(Math.random() * 4)
	// if (computer.name == "Blue"){
		switch (randomMove){
			case 0: //computer.useAttack(computer.pokemon.attacks.move1)
				computerDamageDealt(computer.pokemon.attacks.move1)
			break;
			case 1: //computer.useAttack(computer.pokemon.attacks.move2)
				computerDamageDealt(computer.pokemon.attacks.move2)
			break;
			case 2: //computer.useAttack(computer.pokemon.attacks.move3)
			computerDamageDealt(computer.pokemon.attacks.move3)
			break;
			case 3: //computer.useAttack(computer.pokemon.attacks.move4)
			computerDamageDealt(computer.pokemon.attacks.move4)
			break;
			default: console.log(computer.pokemon.name + " is ignoring " + computer.name + "!");
		}
	// }
	// else{
	// 	switch (randomMove){
	// 		case 0: computer.useAttack(move1)
	// 		break;
	// 		case 1: computer.useAttack(move2)
	// 		break;
	// 		case 2: computer.useAttack(move3)
	// 		break;
	// 		case 3: computer.useAttack(move4s)
	// 		break;
	// 		default: console.log(computer.pokemon.name + " is ignoring " + computer.name + "!");
	// 	}
	// }
}

// function battleResult(character, opponent){
// 	var opponentStatus = checkFaint(opponent.pokemon)
// 	var characterStatus = checkFaint(character.pokemon)
// 	if (opponentStatus == true){
// 		console.log(opponent.name + " was defeated!")
// 		character.wins += 1
// 		opponent.losses += 1
// 	}
//   else if (characterStatus == true){
//   	console.log(character.name + " blacked out!")
//   	character.losses += 1
//   	opponent.wins += 1
// 	}
// }

// Trainer objects

var red = {
	name : "Red",
	pokemon : charizard,
	wins : 0, losses : 0,
	useAttack : function(attack){
		console.log(this.name + "'s " + this.pokemon.name + " used " + attack.name + "!")
		// if (hitOrMiss(attack.accuracy) == true){
			if(this == player){
			playerDamageDealt(attack)
			computersMove()
			// computerDamageDealt(attack)
			}// battleResult(player, computer)
			// }
			// else{
				// attack.currentPP --;
			// 	battleResult(computer, player)
			// }
		// }
		// else{
		// 	console.log(this.pokemon.name + "'s attack missed!")
		// }
	}
}

var blue = {
	name : "Blue",
	pokemon : blastoise,
	wins : 0, losses : 0,
	useAttack : function(attack){
		console.log(this.name + "'s " + this.pokemon.name + " used " + attack.name + "!")
		// if (hitOrMiss(attack.accuracy) == true){
			if(this == player){
			playerDamageDealt(attack)
			computersMove()
			// computerDamageDealt(attack)
			}// battleResult(player, computer)
			// }
			// else{
				// attack.currentPP --;
			// 	battleResult(computer, player)
			// }
		// }
		// else{
		// 	console.log(this.pokemon.name + "'s attack missed!")
		// }
		
	}
}
//}

//game start and reset functions
// function chooseTeam(team){
// 		if (team == red){
// 			player = red;
// 		computer = blue;
// 	}
// 	else{
// 		player == blue; computer = red;
// 	}
// }

function newGame(){
	player.pokemon.currentHealth = player.pokemon.fullHealth
	computer.pokemon.currentHealth = computer.pokemon.fullHealth
	for (var eachAttack in charizardsAttacks){
		charizardsAttacks[eachAttack].currentPP = charizardsAttacks[eachAttack].maxpowerPoints
	}
	for (var eachAttack in blastoisesAttacks){
		blastoisesAttacks[eachAttack].currentPP = blastoisesAttacks[eachAttack].maxpowerPoints
	}
}

// function resetScores(){
// 	player.wins = 0, player.losses = 0;
// 	computer.wins = 0, computer.losses = 0;
// }

// // Tests
// chooseTeam(red)
// player.useAttack(fireBlast)
// computersMove()
// console.log("---------------")
// player.useAttack(earthquake)
// computersMove()
// console.log("===============")
// newGame();
// console.log("You lost (" + player.losses + ") times")
// console.log(player.pokemon.currentHealth) //current HP should be back to full
// console.log(charizardsAttacks) //current pp should be shown to equal max
// console.log(computer.wins)
// resetScores()
// console.log(computer.wins) 