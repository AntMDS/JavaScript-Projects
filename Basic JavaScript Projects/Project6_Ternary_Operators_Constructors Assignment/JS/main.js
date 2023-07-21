function Ride_Function() { // is used to show case a ternary operator
    var Height, Can_Ride; // pre defining the variables
    Height = document.getElementById("Height").value; //sets the variable of Height to what the user inputs
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough"; //sets the variable of Can_Ride, to either "You are too short" : "You are tall enough" depending if the value of Height tha the user input is above 52 or equal to it 
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) { //Creates an object constructor, the object constructor being Vehicle
    this.Vehicle_Make = Make; //This is used to get the values for the newly maed objet for the make of the vehicle
    this.Vehicle_Model = Model; //This is used to get the values for the newly maed objet for the model of the vehicle
    this.Vehicle_Year = Year; //This is used to get the values for the newly maed objet for the year of the vehicle
    this.Vehicle_Color = Color; //This is used to get the values for the newly maed objet for the Color of the vehicle
}

var Jack = new Vehicle("Dodge","Viper",2020,"Red"); //defines Jack for the vehicle function
var Emily = new Vehicle("Jeep","Trail Hawk",2019,"White and Black"); //defines Emily for the vehicle function
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard"); //defines Erik for the vehicle function

function function_Keywords_and_Constructors() { //used to showcase keywprds and constructors of the vehicle constructor
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + " -colored " + Erik.Vehicle_Model +" Manufactured in " + Erik.Vehicle_Year;
}

function Cake(look, Flavour, Occasion) { //makes cake a new object constructor
    this.Cake_Look = look;
    this.Cake_Flavour = Flavour;
    this.Cake_Occasion = Occasion;
}

var TripleChocolate = new Cake("Chocolate covered cake, with chocolate icing ontop","dark,light and milk chocolate","Parties") //sets the calues for the object consctructor of Triple_Chocolate

function function_Cake() { //used to show the understanding of This and New
    document.getElementById("Cake").innerHTML = "The best cake is the triple chocolate cake, it tastes like " + TripleChocolate.Cake_Flavour + " and it looks like " + TripleChocolate.Cake_Look + " But its only for " + TripleChocolate.Cake_Occasion;
}

function function_count() { //used to showcase a nested function by making a counting function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count (){ //nests a counting function inside Function_count
        var Start_point = 5;
        function Plus_one() {Start_point += 1;} //nests Plus_one inside of the function Count
        Plus_one();
        return Start_point;
    }
}