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

