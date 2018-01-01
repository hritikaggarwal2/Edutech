var cpp = "0";
var dood = "1";
var abcdef = "2";
$(".cpp").click(function () {
	localStorage.setItem("storageName", cpp);
	console.log(cpp);	
	console.log(localStorage.getItem("storageName"));
	window.open("C:/Raghav/Edutech/vids.html", "_self")	
})

$(".doodle").click(function () {
	localStorage.setItem("storageName", dood);
	console.log(dood);	
	console.log(localStorage.getItem("storageName"));
	window.open("C:/Raghav/Edutech/vids.html", "_self")	
})