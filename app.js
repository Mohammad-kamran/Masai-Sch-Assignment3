// Function to change button color when clicked
function changeColor(event) {
    event.target.style.backgroundColor = 'lightblue';
}

// Function to display the message when mouse is over the button
function showMessage(event) {
    const messageId = `message${event.target.id.charAt(event.target.id.length - 1)}`;
    document.getElementById(messageId).style.display = 'block';
}

// Function to hide the message when mouse is out of the button
function hideMessage(event) {
    const messageId = `message${event.target.id.charAt(event.target.id.length - 1)}`;
    document.getElementById(messageId).style.display = 'none';
}

// Function to hide the button when double-clicked
function hideButton(event) {
    event.target.style.display = 'none';
}

// Add event listeners to the buttons for the specified events
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', changeColor);       // Click event to change color
    button.addEventListener('mouseover', showMessage);   // Mouseover event to show message
    button.addEventListener('mouseout', hideMessage);    // Mouseout event to hide message
    button.addEventListener('dblclick', hideButton);     // Double-click event to hide button
});
