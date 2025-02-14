// In your blank js file, declare three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul')

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function() {
  if (input.value.trim() !== '') {.focus }


// Create a li element that will hold each entries chapter title and an associated delete button
    const li = document.createElement('li');
// create a delete button
    const deleteButton = document.createElement('button');


// Populate the li element variable's textContent or innerHTML with the input value.
    li.textContent = input.value;

// Populate the button textContent with a ❌
    deleteButton.textContent = '❌';


// Append the li element variable with the delete button
  li.append(deleteButton);
// Append the li element variable to the unordered list in your HTML.
  list.append(li);

// Add an event listener to the delete button that removes the li element when clicked
  deleteButton.addEventListener('click', function () {
  list.removeChild(li);
  input.focus();
});
  
});