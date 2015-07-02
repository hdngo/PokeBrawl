$(document).ready(function(){
	$('.move1').click(function(){
		$('.move1').html(sessionStorage.getItem("pokemon"));
	});
});