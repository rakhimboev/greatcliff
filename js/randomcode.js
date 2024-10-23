/*------Random Codes------*/

var code = ''; // initialize to empty string
var getCode = '';
var btnvalue;
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

// Function to generate a combination of characters
function generateCode() {
    code = '';
    // Generate 8-character code using a loop
    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length); // Ensure index is a whole number
        code += str.charAt(char);
    }
    return code;
}

// Display the generated code in the HTML
document.getElementById("codes").innerHTML = generateCode();

// Disable the submit button initially
disableButton(true);

// Disable or enable button
function disableButton(btnvalue) {
    var submitBtn = document.getElementById("submit");
    submitBtn.disabled = btnvalue;

    if (btnvalue) {
        submitBtn.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        submitBtn.style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        submitBtn.style.backgroundColor = "rgba(73, 119, 209, 1)";
        submitBtn.style.color = "rgba(255, 255, 255, 1)";
    }
}

// Evaluate the input code when the user types in the input field
function evaluateCode() {
    getCode = document.getElementById("codeentered").value;
    var trimmedInput = getCode.trim();
    var trimmedCode = code.trim();

    // Check if input matches generated code
    if (trimmedInput.length === trimmedCode.length && trimmedInput === trimmedCode) {
        disableButton(false); // Enable button if codes match
    } else {
        disableButton(true); // Keep button disabled if codes don't match
    }
}

// Set up event listener for input box
var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);
