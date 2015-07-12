//use of eval(str) to have a str reference an object
var player = eval(sessionStorage.getItem('player'));
var playerPokemon = player.pokemon;
var computer = eval(sessionStorage.getItem('computer'));
var computerPokemon = computer.pokemon;
console.log(playerPokemon.name);

$(document).ready(function(){

	//load opponent info
	$('#cp-pname').text(computerPokemon.name);
	$('#cp-curHP').text(computerPokemon.currentHealth);
	$('#cp-maxHP').text(computerPokemon.fullHealth);
	if(playerPokemon.name == "Charizard"){
		$('#players-pokemon').attr("src", "./images/charizard-sprite.gif");
		$('#cps-pokemon').attr("src", "./images/blastoise-sprite.gif");
	}

	//load player info
	$('#player-pname').text(player.pokemon.name);
	$('#player-curHP').text(playerPokemon.currentHealth);
	$('#player-maxHP').text(playerPokemon.fullHealth);

	//populate moves
	$('#move1').text(playerPokemon.attacks.move1.name);
	$('#move2').text(playerPokemon.attacks.move2.name);
	$('#move3').text(playerPokemon.attacks.move3.name);
	$('#move4').text(playerPokemon.attacks.move4.name);

	//show current move status
	var loadMove = function(){
	// $('td').hover(function(){
		var currentMove = $(this).attr('id');
		$('#current-pp').html(playerPokemon.attacks[currentMove].currentPP);
		$('#max-pp').html(playerPokemon.attacks[currentMove].maxpowerPoints)
		$('#move-type').text(playerPokemon.attacks[currentMove].type);
	}//);
// };
$('td').hover(loadMove);

//current problem : after selecting a move, the stats box does not update properly for the next move that is hovered over.
//edit slightly working, not immediately loading attacks on 1st hover
	
	$('td').hover(function(){
	if($(this).hasClass('move')){
			//To make sure a click only actions once, use unbind()
			var selectedMove = $(this).attr('id');
			$(this).unbind().click(function(){
				player.useAttack(playerPokemon.attacks[selectedMove]);
				var update_cp_health = computerPokemon.currentHealth;
				var update_pp_health = playerPokemon.currentHealth;
				var pp_move_pp = playerPokemon.attacks[selectedMove].currentPP
				var pp_move_maxpp = playerPokemon.attacks[selectedMove].maxpowerPoints;
				var sel_move_type = playerPokemon.attacks[selectedMove].type;
				$('#player-curHP').text(update_pp_health);
				$('#cp-curHP').text(update_cp_health);
				console.log(playerPokemon.attacks[selectedMove].currentPP);
				$('#current-pp').text(pp_move_pp);
				$('#max-pp')
.text(pp_move_maxpp);
				$('#move-type').text(sel_move_type);
				$('td').hover(loadMove);
				// console.log(playerPokemon.attacks[selectedMove].currentPP);
			});
		}
	});
	// });
	

	
	//attack function


	//music controls
	//mute
	$('.unmuted').click(function(){
		if($(this).hasClass('unmuted')){
			$(this).removeClass('unmuted');
		$(this).addClass('muted');
		battleBGM.volume = 0;
		$(this).text('unmute bgm');
	}
	//unmute
	else if($(this).hasClass('muted')){
		$(this).removeClass('muted');
		$(this).addClass('unmuted');
		battleBGM.volume = 0.025;
		$(this).text('mute bgm');
	}
	});
});