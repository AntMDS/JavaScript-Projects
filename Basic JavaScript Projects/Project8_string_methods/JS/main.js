function function_Full_Sentence() { //used to showcasing using Concatenate to make a whole sentence
    var sentence_part_1 = "I have "; //sets a var as first part of the sentence
    var sentence_part_2 = "made this "; //sets a var for the seond part of the sentence
    var sentence_part_3 = "into a complete "; //sets a var for the third part of the sentece
    var sentence_part_4 = "sentence. "; //sets a var for the last part of the sentence
    var whole_sentence = sentence_part_1.concat(sentence_part_2,sentence_part_3,sentence_part_4); //combines all sentence parts vars into one single one using concatenate
    document.getElementById("Concatenate").innerHTML = whole_sentence //shows the outcome of the new var made through combining all the other with concatenate
}

function function_Slice_Method() { //used to showcase the slice method
    var Slice_Sentence = "All work and no play makes johnn a dull boy." //sets a sentence to a var
    var Slice_Section = Slice_Sentence.slice(27,33); //splices that sentence between the 27th and 30th characters, and sets tha small splices section as a string to a var
    document.getElementById("Slice").innerHTML = Slice_Section //displays he splices var string
}

function function_String_Method() { //used to showcase how to turn a interger into a string
    var x = 182;//sets the interger of 182 to the var x
    document.getElementById("Numbers_to_string").innerHTML = x.toString(); //uses .toString to convert the x interger variable into a string and shows it to the user 
}

function function_Precision_Method() { //used to showcase the precision method
    var x = 1452.243248235728942 //sets a long interger var
    document.getElementById("Precision").innerHTML = x.toPrecision(10) //cuts the interger set in var x to 10 digits
}