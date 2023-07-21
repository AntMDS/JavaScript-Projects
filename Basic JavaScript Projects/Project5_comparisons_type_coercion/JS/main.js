function function_Type_of() {
    document.write(typeof 3);
}

function function_Type_of_coercion() {
    document.write(typeof "10" + 5);
}

function function_NaN_false() {
    document.getElementById("NaN_false").innerHTML = isNaN('007');
}

function function_NaN_true() {
    document.getElementById("NaN_true").innerHTML = isNaN('egg');
}

function function_infinity() {
    document.write(2e310);
}

function function_negative_infinity() {
    document.write(-3e310);
}

function function_boolean_true() {
    document.write(10 > 2);
}

function function_boolean_false() {
    document.write(10 < 2);
}

function function_log_console() {
    console.log(2 + 2);
}

function function_double_equals_true() {
    document.write(10 == 10);
}

function function_double_equals_false() {
    document.write(10 == 32);
}

function function_triple_equals_true() {
    x = 10;
    y = 10;
    document.write(X === y);
}

function function_triple_equals_false_diff() {
    x = 82;
    y = "100";
    document.write(X === y);    
}

function function_triple_equals_false_Value() {
    x = 20;
    y = 10;
    document.write(X === y);    
}

function function_triple_equals_false_data() {
    x = 10;
    y = "fox";
    document.write(X === y);   
}