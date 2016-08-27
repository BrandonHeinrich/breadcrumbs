/* global navigator */

var State = {
	"Log" : [],
	"Username" : "Brandon Heinrich"
};

var Events = {
  "OnLoad": function() {
  	// Bind the phonegap ev.ents
  	document.addEventListener("pause", Events.Pause, false);
  	document.addEventListener("resume", Events.Resume, false);
  	document.addEventListener("backbutton", Events.BackButton, false);
  	document.addEventListener("menubutton", Events.MenuButton, false);
  	
  	// We want to update location at least once a second
    setInterval(Commands.PullLocation, 1000);
  },
  "Pause": function() {
  	console.log("paused");
  },
  "Resume": function() {
  	console.log("resuming");
  },
  "BackButton": function() {
  	alert("BackButton Pressed");
  },
  "MenuButton": function() {
  	alert("MenuButton Pressed");
  }
};

var Commands = {
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
