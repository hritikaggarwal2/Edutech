var inte = "0";
var engl = "1";
var net = "2";
var office = "5";
var web = "6";
var cpp = "7";
var ps = "8";
var dood = "9";
var ext = "10";

var abc = document.URL
var ret = abc.replace('courses.html','vids.html')

$(".inte").click(function () {
	localStorage.setItem("storageName", inte);
	console.log(inte);	
	console.log(localStorage.getItem("storageName"));
	window.open(ret, "_self")	
})

$(".engl").click(function () {
	localStorage.setItem("storageName", engl);
	console.log(engl);	
	console.log(localStorage.getItem("storageName"));
	window.open(ret, "_self")	
})

$(".net").click(function () {
	localStorage.setItem("storageName", net);
	console.log(net);	
	console.log(localStorage.getItem("storageName"));
	window.open(ret, "_self")	
})

$(".office").click(function () {
	localStorage.setItem("storageName", office);
	console.log(office);	
	console.log(localStorage.getItem("storageName"));
	window.open(ret, "_self")	
})


$(".web").click(function () {
	localStorage.setItem("storageName", web);
	console.log(web);	
	console.log(localStorage.getItem("storageName"));
	window.open(ret, "_self")	
})

$(".cpp").click(function () {
	localStorage.setItem("storageName", cpp);
	console.log(cpp);	
	console.log(localStorage.getItem("storageName"));
	window.open(ret, "_self")	
})

$(".ps").click(function () {
	localStorage.setItem("storageName", ps);
	console.log(ps);	
	console.log(localStorage.getItem("storageName"));
	window.open(ret, "_self")	
})

$(".dood").click(function () {
	localStorage.setItem("storageName", dood);
	console.log(dood);	
	console.log(localStorage.getItem("storageName"));
	window.open(ret, "_self")	
})

$(".ext").click(function () {
	localStorage.setItem("storageName", ext);
	console.log(ext);	
	console.log(localStorage.getItem("storageName"));
	window.open(ret, "_self")	
})



