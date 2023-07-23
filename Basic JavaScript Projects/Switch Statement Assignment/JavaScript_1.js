function function_Favourite_Flower() { //used to display the switch function
    var flower_Output; //makes an empty variable for later use 
    var flowers = document.getElementById("Flower_Input").value; //sets a string in a variable from the users input
    var flowers_string = " is a great choice of flower!"; //sets a string in a variable
    switch (flowers) { //uses keywords to match the user input to one of the switch cases
        case "Orchid":
            flower_Output = "Orchid" + flowers_string; // set the var of flower_output, if the keyword the user inputs matches "Orchid"
        break;
        case "Rose":
            flower_Output = "Rose" + flowers_string; // set the var of flower_output, if the keyword the user inputs matches "Rose"
        break;
        case "Tulip":
            flower_Output = "Tulip" + flowers_string; // set the var of flower_output, if the keyword the user inputs matches "Tulip"
        break;
        case "Carnation":
            flower_Output = "Carnation" + flowers_string; // set the var of flower_output, if the keyword the user inputs matches "Carnation"
        break;
        case "Lily":
            flower_Output = "Lily" + flowers_string; // set the var of flower_output, if the keyword the user inputs matches "Lily"
        break;
        case "Daisy":
            flower_Output = "Daisy" + flowers_string; // set the var of flower_output, if the keyword the user inputs matches "Daisy"
        break;
        case "Iris":
            flower_Output = "Iris" + flowers_string; // set the var of flower_output, if the keyword the user inputs matches "Iris"
        break;
        case "Daffodil":
            flower_Output = "Daffodil" + flowers_string; // set the var of flower_output, if the keyword the user inputs matches "Daffodil"
        break;
        default:
        flower_Output = "Please enter a color from the list given above."; // sets the var of flower_Output if the string entered by the user doesnt match nay keywords
    }
    document.getElementById("Output").innerHTML = flower_Output; // showcases the strin set in flower_Output to the user
}