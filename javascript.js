let resultField = document.getElementById("result");

// Append characters to the display
function append(character) {
  resultField.value += character;
}

// Clear the display
function clearDisplay() {
  resultField.value = "";
}

// Delete the last character
function deleteLast() {
  resultField.value = resultField.value.slice(0, -1);
}

// Evaluate the expression
function calculate() {
  try {
    resultField.value = eval(resultField.value);
  } catch (error) {
    resultField.value = "Error";
  }
}
