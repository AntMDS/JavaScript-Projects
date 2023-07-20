function Add_Function() {
    var addition = 2 + 2;
    document.getElementById("add").innerHTML= "2 + 2 =" + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("subtract").innerHTML = "5 - 2 =" + Subtraction;
}

function multiplication_Function() {
    var multiplication = 6 * 8;
    document.getElementById("multiply").innerHTML = "6 x 8 =" + multiplication;
}

function divisio_function() {
    var division = 48 / 6;
    document.getElementById("divide").innerHTML = "48 / 8 =" + division
}

function multiple_Math_function() {
    var Multiple_Operators = (1 + 2) * 10 / 2 -5;
    document.getElementById("Multiple_Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 = "+ Multiple_Operators
}

function modulus_operator() {
    var modulus = 25 % 6;
    document.getElementById("modulus_math").innerHTML = "when you divide 25 by 6 you have a remainder of: " + modulus
}

function negation_operator() {
    var negation_x = 10
    document.getElementById("negation_math").innerHTML = -negation_x
}

function increment_operator() {
    var increment_x =5;
    increment_x++;
    document.write(increment_x)
}

function decrement_operator() {
    var decrement_x = 5.25;
    decrement_x--;
    document.write(decrement_x);
}

function random_math() {
    window.alert(Math.random() * 100);
}