var f = new Array()
f[0] = ["cQfIGvfeqYw", "BNQbmshpskM"]
f[1] = ["fj5Fa85IAxY", "AUAsTV7pD28", "DLB06ug08tY", "HAMjqSYkhM", "DvTIHYBJSBg-TY", "jnTDxDUJT78"]
f[2] = ["920julHeFw"]
f[5] = ["sbx-mgMwauI", "bvEbhcFpPa8", "pbQ4FAddoHo"]
f[6] = ["6ZP1DKDLCDU", "yRNk_fEC1Zw", "2v2ksI_sho0" , "AD86CwFYd1c"]
f[7] = ["fWfbxc1ZxNA", "bvGE6irh_Wc", "675kF6H_aGc", "DxUVHAXKHPM", "SaKlVjIE-TY"]
f[8] = ["Ojl1ynb7_IU", "NnIgYrfEFnA", "SM0TJHmLZ-E"]
f[9] = ["AW8axHNAyOI", "CJA0ujk3sRg"]
f[10] = []
var l = "https://www.youtube.com/embed/";

$(document).ready(function () {		
	var len = f[localStorage.getItem("storageName")].length;
	var tot = l + f[localStorage.getItem("storageName")][0]
	$(".video").append('<iframe width="700" height="393.92" src="'+tot+'" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
	$(".desc").append('<div class="head">Programming with c++</div><div class="long">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>')
	for(i = 1; i<len;i++){
		var tot = l + f[localStorage.getItem("storageName")][i];
		$(".other").append('<iframe width="300" height="169.49" src='+tot+' frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>')
	}
})