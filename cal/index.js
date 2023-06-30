// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the calculator display element
  var display = document.getElementById('result');

  // Get all the number and operator buttons
  var buttons = document.querySelectorAll('.input1');

  // Attach click event listeners to the buttons
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the clicked button value
      var value = this.value;

      // Handle different button actions
      if (value === '=') {
        // Evaluate the expression and display the result
        display.value = eval(display.value);
      } else if (value === 'DEL') {
        // Clear the calculator display
        display.value = '';
      } else {
        // Append the button value to the display
        display.value += value;
      }
    });
  });
});
