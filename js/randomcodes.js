/*------Random Codes------*/

var code = ' ';//initialize to null value
var getCode = ' ';
var btnvalue;
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
//var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//var codebox=document.getElementById("codeentered");
//odebox.addEventListener("input", evaluateCode);

//Function to generate combination of characters
function generateCode(){
    code ="";
    //Generate character multiple times using a loop
    for (let i=1; i<=8; i++){
        var char = Math.random()*str.length;
        code += str.charAt(char)
    }
    return code;
}
//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();



//disableButton();
//}

//Disable Button
function disableButton(btnvalue){
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true){
    //set button and label color translucent
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
} else {
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
}
}
//initially disable button
disableButton(true);

// Get input box and add event listener
var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode(){
    getCode = document.getElementById("codeentered").value;
    var charset1 = getCode.trim();
    var charset2 = code.trim();
    if (charset1.length == charset2.length && charset1 == charset2){
        disableButton(false);
    } else {
        disableButton(true);
    }
}

//Activate function
disableButton();