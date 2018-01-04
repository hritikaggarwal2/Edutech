var f = new Array()
var g = new Array()
var h = new Array()
f[0] = ["cQfIGvfeqYw", "BNQbmshpskM"]
f[1] = ["fj5Fa85IAxY", "AUAsTV7pD28", "DLB06ug08tY", "-HAMjqSYkhM", "DvTIHYBJSBg", "jnTDxDUJT78"]
f[2] = ["-920julHeFw"]
f[4] = ["3wW1Y2_1rHA"]
f[5] = ["sbx-mgMwauI", "bvEbhcFpPa8", "pbQ4FAddoHo"]
f[6] = ["6ZP1DKDLCDU", "yRNk_fEC1Zw", "2v2ksI_sho0" , "AD86CwFYd1c"]
f[7] = ["fWfbxc1ZxNA", "bvGE6irh_Wc", "675kF6H_aGc", "DxUVHAXKHPM", "SaKlVjIE-TY"]
f[8] = ["Ojl1ynb7_IU", "NnIgYrfEFnA", "SM0TJHmLZ-E"]
f[9] = ["AW8axHNAyOI", "CJA0ujk3sRg"]
f[10] = ["pGlNBgRqV6Y"]

g = [

"This course deals with the basic usage of Internet for total beginners. The course starts with introduction of a web browser, followed by searching on the Internet using the Google Search Engine. Next the course discusses a step-by-step procedure to create a new Gmail account, along with the basics of emailing.",
"Understand and master the usage of English grammar rules. This course helps the viewers understand the simple yet important concepts in the English language. Starting with nouns, the course extends all the way to punctuations and tenses. It’s the perfect course for any non-native beginner.",
"Social Networking has become an important part of today’s world, but not many tutorials are available for people to grasp all the basic knowledge required by any first-timer. This course is just the right place. The course deals with starting up with Facebook, and working in its environment. New Courses coming shortly.",
"Entrepreneurship is the process of designing, launching, and running a new business which is often initially a small business. The people who create these businesses are called entrepreneurs. This course gives an introduction to entrepreneurship, and deals with its various aspects.",
"The G Suite is a brand of cloud computing, productivity and collaboration tools, software and products developed by Google which includes Google Docs, Google Slides, Google Drive, etc. This course gives a complete basic walkthrough around a few of these products while going deep into the major features.",
"Microsoft Office is an office suite of applications, servers, and services developed by Microsoft. The products include MS Word, MS PowerPoint, MS Access, and many more essential softwares. This course gives a complete basic walkthrough around a few of these products while going deep into the major features.",
"Web Development refers to the development of a web site for either the internet or intranet. This course will teach the viewers about HTML, CSS, and JavaScript, which are the fundamental languages for such a development. The course includes video tutorials for beginner, intermediate, and expert. ",
"C++ is an imperative, object-oriented and generic programming language, which is an extension of the language C. This language is one of the most popular programming languages, and forms the backbone of several other languages. This course gives detailed tutorials on the major commands of the language.",
"Adobe Photoshop is a raster graphics editor developed and published by Adobe Systems for mac OS and Windows. This course helps getting started with using Adobe Photoshop with some basic tutorials, and then extends its reach to some major advanced concepts.",
"Doodles are simple drawings that can have concrete representational meaning or may just be composed of random and abstract lines. This course teaches the basic concepts of doodling, and how a person can master such a technique.",
"There are many browsers available today, but the most preferred amongst them is Google Chrome. This course helps the user get the most out of Google Chrome by understanding and using different types of extensions."

]


var m = localStorage.getItem("storageName");
h = ["Learn The Internet", "English Speaking Course", "Going Deep Into Social Network", "Introduction Entrepreneurship", "Get Started With G Suite", "Get Started with Microsoft Office", "Understanding Web Development", "Learning C++ Programming", "Hands-on Photoshop", "Learn The Art Of Doodling", "Using Extensions"]
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
			$(".block0").css({"background":"rgba(0, 0, 0, 0.8)"})
			$(".convid").append('<iframe class="'+ml[0]+'"  src="'+l+ml[0]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')

		})

		$(".block1").click(function () {
			for(i = 0; i<len;i++){
				$(".block"+i).css({"background":"transparent"})
				$("."+ml[i]).remove()
			}
			$(".block1").css({"background":"rgba(0, 0, 0, 0.8)"})
			$(".convid").append('<iframe class="'+ml[1]+'" src="'+l+ml[1]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
		})

		$(".block2").click(function () {
			for(i = 0; i<len;i++){
				$(".block"+i).css({"background":"transparent"})
				$("."+ml[i]).remove()
			}
			$(".block2").css({"background":"rgba(0, 0, 0, 0.8)"})
			$(".convid").append('<iframe class="'+ml[2]+'"  src="'+l+ml[2]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
		})	

		$(".block3").click(function () {
			for(i = 0; i<len;i++){
				$(".block"+i).css({"background":"transparent"})
				$("."+ml[i]).remove()
			}
			$(".block3").css({"background":"rgba(0, 0, 0, 0.8)"})
			$(".convid").append('<iframe class="'+ml[3]+'" src="'+l+ml[3]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
		})

		$(".block4").click(function () {
			for(i = 0; i<len;i++){
				$(".block"+i).css({"background":"transparent"})
				$("."+ml[i]).remove()
			}
			$(".block4").css({"background":"rgba(0, 0, 0, 0.8)"})
			$(".convid").append('<iframe class="'+ml[4]+'"  src="'+l+ml[4]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
		})

		$(".block5").click(function () {
			for(i = 0; i<len;i++){
				$(".block"+i).css({"background":"transparent"})
				$("."+ml[i]).remove()
			}
			$(".block5").css({"background":"rgba(0, 0, 0, 0.8)"})
			$(".convid").append('<iframe class="'+ml[5]+'"  src="'+l+ml[5]+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
		})

	}else{
		$(".video").css({"width":"100%", "flex-direction":"column"})		
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


