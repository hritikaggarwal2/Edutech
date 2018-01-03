var f = new Array()
var g = new Array()
var h = new Array()
f[0] = ["cQfIGvfeqYw", "BNQbmshpskM"]
f[1] = ["fj5Fa85IAxY", "AUAsTV7pD28", "DLB06ug08tY", "HAMjqSYkhM", "DvTIHYBJSBg-TY", "jnTDxDUJT78"]
f[2] = ["920julHeFw"]
f[5] = ["sbx-mgMwauI", "bvEbhcFpPa8", "pbQ4FAddoHo"]
f[6] = ["6ZP1DKDLCDU", "yRNk_fEC1Zw", "2v2ksI_sho0" , "AD86CwFYd1c"]
f[7] = ["fWfbxc1ZxNA", "bvGE6irh_Wc", "675kF6H_aGc", "DxUVHAXKHPM", "SaKlVjIE-TY"]
f[8] = ["Ojl1ynb7_IU", "NnIgYrfEFnA", "SM0TJHmLZ-E"]
f[9] = ["AW8axHNAyOI", "CJA0ujk3sRg"]
f[10] = []

g = ["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum",]
var m = localStorage.getItem("storageName");
h = ["Using Internet", "English", "Social Network", "Entrepreneurship", "G Suite", "Microsoft Office", "Web Development", "C++ Programming", "Photoshop", "Doodling", "Extensions"]
var l = "https://www.youtube.com/embed/";
var ml = f[m];
$(document).ready(function () {	
	if (m!=3) {
		var len = ml.length;
		var tot = l + ml[0]
		$(".desc").append('<div class="head">'+ h[m] +'</div><div class="long">'+g[m]+'</div>')
		$(".convid").append('<iframe class="'+ml[0]+'" src="'+tot+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
		for(i = 0; i<len;i++){
			var tot = l + ml[i];
			$(".other").append('<div><iframe src='+tot+' frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe><div class="block block'+i+'"></div></div>')
		}

		$(".block0").click(function () {
			for(i = 0; i<len;i++){
				$(".block"+i).css({"background":"transparent"})
				$("."+ml[i]).remove()
			}
			$(".block0").css({"background":"rgba(0, 0, 0, 0.5)"})
			$(".convid").append('<iframe class="'+ml[0]+'"  src="'+l+ml[0]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')

		})

		$(".block1").click(function () {
			for(i = 0; i<len;i++){
				$(".block"+i).css({"background":"transparent"})
				$("."+ml[i]).remove()
			}
			$(".block1").css({"background":"rgba(0, 0, 0, 0.5)"})
			$(".convid").append('<iframe class="'+ml[1]+'" src="'+l+ml[1]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
		})

		$(".block2").click(function () {
			for(i = 0; i<len;i++){
				$(".block"+i).css({"background":"transparent"})
				$("."+ml[i]).remove()
			}
			$(".block2").css({"background":"rgba(0, 0, 0, 0.5)"})
			$(".convid").append('<iframe class="'+ml[2]+'"  src="'+l+ml[2]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
		})	

		$(".block3").click(function () {
			for(i = 0; i<len;i++){
				$(".block"+i).css({"background":"transparent"})
				$("."+ml[i]).remove()
			}
			$(".block3").css({"background":"rgba(0, 0, 0, 0.5)"})
			$(".convid").append('<iframe class="'+ml[3]+'" src="'+l+ml[3]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
		})

		$(".block4").click(function () {
			for(i = 0; i<len;i++){
				$(".block"+i).css({"background":"transparent"})
				$("."+ml[i]).remove()
			}
			$(".block4").css({"background":"rgba(0, 0, 0, 0.5)"})
			$(".convid").append('<iframe class="'+ml[4]+'"  src="'+l+ml[4]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
		})

		$(".block5").click(function () {
			for(i = 0; i<len;i++){
				$(".block"+i).css({"background":"transparent"})
				$("."+ml[i]).remove()
			}
			$(".block5").css({"background":"rgba(0, 0, 0, 0.5)"})
			$(".convid").append('<iframe class="'+ml[5]+'"  src="'+l+ml[5]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
		})

	}else{
		$(".video").css({"width":"100%"})		
		$(".video").append('<div class="entre"><div>Why Entrepreneurship?</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Understanding Entrepreneurship</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Introduction to Customer Discovery</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Industry, Competition, and Strategy Preparation</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Project : Domain Expertise</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Project : Industry Stakeholders and Business Models</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Project : Project Specs</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Project : Self Awarness</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Project : Value Creation Project</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Resource List</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Tips On Ted Talks</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Assignment 1 - Legal and accounting basics for Startups</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Assignment 2 - Product Design</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Assignment 3 - Introduction to Intellectual Property</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Assignment 4 - Finding your Market</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Assignment 5 - Intro to Venture Capital</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".video").append('<div class="entre"><div>Assignment 6 - Customer Discovery</div><div class="star"><a href="">Start Now</a></div></div>')
		$(".convid").css({"display":"none"})		
	}
	
})


