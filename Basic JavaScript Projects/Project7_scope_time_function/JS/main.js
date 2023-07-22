var x = 10 //defines a glbal variable of X 

function function_Add_Global_Variable() { //Adds 20 to the global variable to showcase it works
    document.write (20 + x + "<br>");
}
function function_Add_Local_Variable() { //used to showcase a loval variable
    var y = 50 //defines the valiable of y as a loval variable
    document.write (y + 200);
}
function function_Add_Local_Variable_Error() { //used to showcase an error tryin to use a local variable like a global one
    console.log(y - 10);
}

function function_Fetch_Date() { //used to show understanding of IF commands
    if (new Date().getHours() < 18) { 
        document.getElementById("Greetings").innerHTML= "How are you today?"//if therer is a new date and the hours are less then 18, will ask the user how they are
    };
}

function function_If_statemtnet() { //used to sho further understanding of if simplified
    if ( 10 == 10) {
        document.write("the sky is blue"); //if 10 is equal to 10, print the sky is blue
    };
}

function function_Age() { //tells the user if they are old enough to vote
    Age = document.getElementById("Age").value; //fetchs the input of the user and assigns tha value to the variable age
    if (Age >= 18) {
        Vote = "You are old enough to vote!";//if they are 18 or older sets the variable vote as = "You are old enough to vote!"
    } else {
        Vote = "You are too young to vote!";//else they are younger then 18 sets the variable vote as = "You are too young to vote!"
    }
    document.getElementById("Hoe_old_are_you?").innerHTML = Vote;// tells the user the set variable of Vote
}

function function_Time() { //tells the user the current time of day
    var Time = new Date().getHours(); //fetches the current time of day and sets it as the variable of Time
    var Reply; //sets tje variable of Reply but is empty
    if (Time < 12 == Time < 18) {
        Reply = "It is morning time!"; //if the set variable of time is less than 12 and 18, the reply variable is set to "It is morning time!"
    } 
    else if (Time >= 12 == Time < 18) { //if the set variable of time is greater than or equal to 12 and is less than 18, the reply variable is set to "It is afternoon."
        Reply = "It is afternoon."
    } else {
        Reply = "it is evening time." //else , the reply variable is set to "it is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //tells the user the set variable of Reply

}