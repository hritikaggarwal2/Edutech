$(document).ready(function(){

	click = 0;

	$(".all_bars").click(function(){
		if(click == 0)
		{
			click = 1;


			ht = $(window).height();
			wt = $(window).width();

			max = (wt < ht ? ht : wt)*2 + "px";

			$(".bars").addClass("changed");

			$(".links").css({left:"0px",background:"#1f303a"});

		}
		else if(click == 1)
		{
			click = 0;
			
			$(".bars").removeClass("changed");
			$(".links").css({left:"-300px",background:"transparent"});

		}


	});


	$(window).scroll(function(){
		
	});
});