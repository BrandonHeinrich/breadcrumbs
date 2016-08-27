/* global navigator */

alert("Index.js Started Loading");

var Events;
var Commands;

Events = {
  "OnLoad": function() {
  	alert("OnLoad Event");
    setInterval(Commands.PullLocation, 1000);
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

alert("Index.js Finished Loaded");
