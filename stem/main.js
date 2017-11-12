$(document).ready(function(){
	contentH = $(".problem").innerHeight();
	windowH = $(window).height();

	console.log(contentH);
	console.log(windowH);
	
	if (contentH > windowH){
		$(".problem").css({height:"auto"});
		console.log("asd");
	}
	else
	{
		$(".problem").css({height:"100%"});
	}


	$(window).resize(function(){
		location.reload()
	});

	windowW = $(window).width();
	if(windowW < 200)
	{
		$("#submit").val("Join Now");
		console.log("asd");
	}
});