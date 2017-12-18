$(window).on('load', function() {
    $(".loader").fadeOut("slow");
});

$(document).ready(function() {
    $("body,html").css({"overflow-y": "visible"});

    $(window).resize(function(){
		//location.reload()
	});
});