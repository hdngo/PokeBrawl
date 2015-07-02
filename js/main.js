var bgm = new Audio('./audio/intro.mp3');
	bgm.volume =0.025;
	bgm.loop = true;
	bgm.play()

var charz = new Audio('./audio/charizard.mp3');
	charz.volume = 0.025;

var blast = new Audio('./audio/blastoise.mp3');
	blast.volume = 0.025;

$(document).ready(function(){
	$('#charizard').click(function(){
		bgm.pause();
		blast.pause();
		charz.play();
		//store pokemon selection
		sessionStorage.setItem("pokemon", "charizard");
		//add delay before redirecting
		window.setTimeout(function(){window.location.assign("./battle.html")}, 3500);
	})
	$('#blastoise').click(function(){
		bgm.pause();
		charz.pause();
		blast.play();
		//store pokemon selection
		sessionStorage.setItem("pokemon", "blastoise");
		//add delay before redirecting
		window.setTimeout(function(){window.location.assign("./battle.html")}, 3500);
	});
});