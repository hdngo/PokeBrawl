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
	})
	$('#blastoise').click(function(){
		bgm.pause();
		charz.pause();
		blast.play();
	});
});