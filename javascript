// Function to add a character to the display
function addToDisplay(char) {
    document.getElementById("display").value += char;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  // Function to calculate the result
  function calculate() {
    try {
      const result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
  // Add event listeners to digit and operator buttons
const buttons = document.querySelectorAll("#buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const char = button.textContent;
    addToDisplay(char);
  });
});