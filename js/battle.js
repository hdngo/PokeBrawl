var playername = eval(sessionStorage.getItem('player')).name;

console.log(playername)

$(document).ready(function(){
	//use of eval(str) to have a str reference an object
	$('#cp-pname').text(sessionStorage.getItem('cp-pokemon'));
	$('#player-pname').text(sessionStorage.getItem('player-pokemon'));
	$('.move1').text(playername);
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