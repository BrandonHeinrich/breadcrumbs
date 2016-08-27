/* global navigator */

var Events;
var Commands;

Events = {
  "OnLoad": function() {
    setInterval(Commands.PullLocation, 1000);
    alert(6);
  }  
};

var latitude = document.getElementById("latitude");

Commands = {
  "PullLocation": function() 
latitude.innerHTML ="hello";
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
				  
				  var longitude = document.getElementById("longitude");
				  latitude.innerHTML = position.coords.latitude;
					longitude.innerHTML = position.coords.longitude;
				}, function(error) {
					alert('Error occurred. Error code: ' + error.code);			
				});
			}else{
				alert('no geolocation support');
			}
		},
  "LogLocation": function() {
        
  }
};
