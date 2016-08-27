console.log = function(msg){
    var log = document.getElementById("mylog");
    log.innerHTML += "<div>" + msg + "</div>";
}


window.onerror = function(message, url, linenumber) {
    console.log("JavaScript error: " + message + " on line " + 
            linenumber + " for " + url);
}

alert("Logger.js Finished Loaded");