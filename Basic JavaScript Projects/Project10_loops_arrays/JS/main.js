function function_Call_loop(){ //function to showcase while loops
    var Digit = ""
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit
}

function function_For_Loop() { //function to showcase for loops
    var Fish = ["Catfish","GoldFish","Swordfish","Salmon","Carp","Bass","Pike"]; //creats an array of objects for the loop to run through
    var Content = ""; // opens an empty string variable
    var Y;
    for (Y = 0; Y < Fish.length; Y++) { 
        Content += Fish[Y] + "<br>"; //aslong as there is 1 object in the array of Fish, adds the each object to content as a single string with breaks
    }
    document.getElementById("List_of_fish").innerHTML = Content; //displays the string in content
}

function function_Cat_Pics() { //function to showcase arrays and objects
    var Cat_Picture = []; //open an empty array under Cat_Picture
    Cat_Picture[0] = "sleeping"; //adds the object, sleeping to Cat_picture array
    Cat_Picture[1] = "playing"; //adds the object, sleeping to Cat_picture array
    Cat_Picture[2] = "eating"; //adds the object, sleeping to Cat_picture array
    Cat_Picture[3] = "purring"; //adds the object, sleeping to Cat_picture array
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[3] + "." //show cases a certain object from the Cat_Picture arrays
}

function function_Constant() { //function to showcase constants
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"Black", price:"$500"}; //creats an object with properties
    Musical_Instrument.color = "pink"; //changes the color property to pink
    Musical_Instrument.price = "$1080"; //changes the price property to $1080
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function function_Let() { //function to showcase Let
    var x = 82 //sets x as an interger
    document.write(x); 
    {
        let x = 34; // declares the variable making it so it cant be accessed outside of the block of code
        document.write("<br>" + x);
    }
    document.write("<br>" + x); // with show 82 because it cant access the declared variable with let, as its outsied the block
}

function function_Objects() {
    let car = { //creates a car object 
        make: "Dodge ", //car properties
        model: "Viper ", //car properties
        year: "2021 ", //car properties
        color: "red ", //car properties
        description : function() {
            return "the car is a " + this.year + this.color + this.make + this.color, this.model; // declares the car properties as a string in a function
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description(); //showcases the object and its properties
}