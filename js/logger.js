var former = console.log;

console.log = function(msg){
    //former(msg);  //maintains existing logging via the console.
    var log = document.getElementById("mylog");
    log.innerHTML += "<div>" + msg + "</div>";
    
    alert(123);
}


window.onerror = function(message, url, linenumber) {
    console.log("JavaScript error: " + message + " on line " + 
            linenumber + " for " + url);
}