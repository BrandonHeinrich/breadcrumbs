/* global navigator */

//alert("Index.js Started Loading");

var Events;
var Commands;

Events = {
  "OnLoad": function() {
  	alert("OnLoad Event");
    setInterval(Commands.PullLocation, 1000);
  }  
};

Commands = {
  "PullLocation": function() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
				  var latitude = document.getElementById("latitude");
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

//alert("Index.js Finished Loaded");
