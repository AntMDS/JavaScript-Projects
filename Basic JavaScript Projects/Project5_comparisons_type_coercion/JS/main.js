function function_Type_of() { //Used to display typeof
    document.write(typeof 3);
}

function function_Type_of_coercion() { //Used to display cpervion in typeof operator
    document.write(typeof "10" + 5);
}

function function_NaN_false() { //Used to display NaN false
    document.getElementById("NaN_false").innerHTML = isNaN('007');
}

function function_NaN_true() { //Used to display NaN true
    document.getElementById("NaN_true").innerHTML = isNaN('egg');
}

function function_infinity() { //Used to display infinity
    document.write(2e310);
}

function function_negative_infinity() { //Used to display negative infinity
    document.write(-3e310);
}

function function_boolean_true() { //Used to display a boolean thats true
    document.write(10 > 2);
}

function function_boolean_false() { //Used to display a boolean thats false
    document.write(10 < 2);
}

function function_log_console() { //Used to display a log in console '4'
    console.log(2 + 2);
}

function function_double_equals_true() { //Used to showcase the use of douuble equals as true
    document.write(10 == 10);
}

function function_double_equals_false() { //Used to showcase the use of douuble equals as false 
    document.write(10 == 32);
}

function function_triple_equals_true() { //Used to display triples equals as true
    x = 10; //defines x variable
    y = 10; //defines y variable
    document.write(X === y);
}

function function_triple_equals_false_diff() { //Used to display triples equals as false due to a different value and data type
    x = 82; //defines x variable
    y = "fox"; //defines y variable
    document.write(X === y);    
}

function function_triple_equals_false_Value() { //Used to display triple equals as false due to a differnt value
    x = 20; //defines x variable
    y = 10; //defines y variable
    document.write(X === y);    
}

function function_triple_equals_false_data() { //Used to display triple equals as false due to a differnt data type
    x = 10; //defines x variable
    y = "Ten"; //defines y variable
    document.write(X === y);   
}

function function_And_true() { //Used to display an And operator as true
    document.write(5 > 2 && 10 > 4);
}

function function_And_false() { //Used to display an And operator as false
    document.write(5 > 2 && 2 > 4); 
}

function function_OR_true() { //Used to display a OR operator as true
    document.write(5 > 2 || 10 > 4);
}

function function_OR_false() { //Used to display a OR operator as false
    document.write(5 > 10 || 10 > 40);
}

function function_NOT_true() { //Used to display a NOT operator as true
    document.write(20 !== 10)
}

function function_NOT_false() { //Used to display a NOT operator as false
    document.write(20 !== 20)
}