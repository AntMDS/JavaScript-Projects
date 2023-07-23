function function_Countdown() { 
    var seconds = document.getElementById("seconds").value; //sets the entered amount by the user as an integer var

    function tick() {
        seconds = seconds - 1; //causes the times to tick down everytime its run by avalue of 1
        timer.innerHtml = seconds;
        var time = setTimeout(tick, 1000); //sets the timer to pause for 1 second to make it a functioning timer thats accurate
        if (seconds == -1) { 
            alert("time is up!"); //if the time falls below a value of 1 tell the user time is up
            clearTimeout(time); //resets the time to nothing so it can be reenter by the user
            timer.innerHtml = "";
        }
    }
    tick(); //runs the tick function
}