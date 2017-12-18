var vidID = window.location.search.replace("?vidID=","");

var ytplayer = document.getElementById('ytplayer');

ytplayer.src = "https://www.youtube.com/embed/"+vidID+"?autoplay=1&modestbranding=1&showinfo=0";