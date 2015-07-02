$(document).ready(function(){
	$('.move1').click(function(){
		$('.move1').html(sessionStorage.getItem("pokemon"));
	});
	$('.unmuted').click(function(){
		if($(this).hasClass('unmuted')){
			$(this).removeClass('unmuted');
		$(this).addClass('muted');
		battleBGM.volume = 0;
	}
	else if($(this).hasClass('muted')){
		$(this).removeClass('muted');
		$(this).addClass('unmuted');
		battleBGM.volume = 0.025;
	}
	});
});