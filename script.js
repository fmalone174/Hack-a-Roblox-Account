// Get the textarea and the output paragraph
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

// Add an event listener for the 'input' event
inputText.addEventListener('input', function() {
  outputText.textContent = inputText.value || "Nothing typed yet!";
});
