/* global navigator */

var State = {
	"Log" : [],
	"Username" : "Brandon Heinrich"
};

var Events = {
  "OnLoad": function() {
  	document.addEventListener("deviceready", Events.DeviceReady, false);
    
    console.log("End of on load event");
  },
  "DeviceReady": function() {
      // Bind the phonegap ev.ents
  	document.addEventListener("pause", Events.Pause, true);
  	document.addEventListener("resume", Events.Resume, true);
  	document.addEventListener("backbutton", Events.BackButton, true);
  	document.addEventListener("menubutton", Events.MenuButton, true);
  	
  	// We want to update location at least once a second
    setInterval(Commands.PullLocation, 1000);
  	console.log("Device is ready");
  },
  "Pause": function() {
  	console.log("paused");
  },
  "Resume": function() {
  	console.log("resuming");
  },
  "BackButton": function() {
  	alert("BackButton Pressed");
  	console.log("Back");
  },
  "MenuButton": function() {
  	alert("MenuButton Pressed");
  	console.log("Menu");
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

alert("Index.js Finished Loading");