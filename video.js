$(document).ready(function() {

	wt = $(".videos .vid iframe").width();

	ht = wt / 480 * 280 + "px";

	$(".videos .vid iframe").css({height:ht});

    $(window).resize(function(){
		wt = $(".videos .vid iframe").width();

		ht = wt / 480 * 280 + "px";

		$(".videos .vid iframe").css({height:ht});

	});
});