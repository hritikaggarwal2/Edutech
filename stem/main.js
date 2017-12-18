$(document).ready(function(){
	contentH = $(".problem").innerHeight();
	windowH = $(window).height();
	
	if (contentH > windowH){
		$(".problem").css({height:"auto"});
	}
	else
	{
		$(".problem").css({height:"100%"});
	}
});