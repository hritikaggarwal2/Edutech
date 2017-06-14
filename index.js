$(document).ready(function(){

	click = 0;

	$(".all_bars").click(function(){
		if(click == 0)
		{
			click = 1;
			console.log(click);

			$(".nav .all_bars").css({"padding-top":"15px"})


			ht = $(window).height();
			wt = $(window).width();

			max = (wt < ht ? ht : wt)*2 + "px";
			$(".black").css({"width":max,"height":max,});

			$(".bars").addClass("changed");

			$(".nav").css({position:"fixed",height:"600px",background:"#89dcfa"});

			$(".links").css({display:"inline"});
			
			setTimeout(function(){
				$(".links").css({width:"100%",height:"480px"});
				$(".links li").delay(1000).css({"font-size":"23px",transform:"scale(1.1)"});
			}, 500);
			setTimeout(function(){
				$(".links li").delay(1000).css({"font-size":"23px",transform:"scale(1)"});
			}, 900);
		}
		else if(click == 1)
		{
			click = 0;
			console.log(click);
			

			$(".links").css({width:"50%",height:"240px"});

			$(".links li").delay(1000).css({"font-size":"0px",transform:"scale(0)"});
			
			setTimeout(function(){
				$(".black").css({"width":0,"height":0,opacity:0},50);
				$(".nav .all_bars").css({"padding-top":"0px"})
				$(".bars").removeClass("changed");
				$(".nav").css({position:"absolute",height:"150px",background:"transparent"});
			}, 500);
			setTimeout(function(){
				$(".links").css({display:"none"});
			}, 900);

			setTimeout(function(){
				$(".black").css({opacity:1},50);
			}, 1200);
		}


	});
});