// Function to change button color on click
function changeColor(event) {
    event.target.style.backgroundColor = 'lightblue';
}

// Function to show message on mouseover
function showMessage(event) {
    const messageId = event.target.getAttribute('data-message');
    document.getElementById(messageId).style.display = 'block';
}

// Function to hide message on mouseout
function hideMessage(event) {
    const messageId = event.target.getAttribute('data-message');
    document.getElementById(messageId).style.display = 'none';
}

// Function to hide the button on double click
function hideButton(event) {
    event.target.style.display = 'none';
}

// Add event listeners to each button
document.getElementById('button1').addEventListener('click', changeColor);
document.getElementById('button1').addEventListener('mouseover', showMessage);
document.getElementById('button1').addEventListener('mouseout', hideMessage);
document.getElementById('button1').addEventListener('dblclick', hideButton);

document.getElementById('button2').addEventListener('click', changeColor);
document.getElementById('button2').addEventListener('mouseover', showMessage);
document.getElementById('button2').addEventListener('mouseout', hideMessage);
document.getElementById('button2').addEventListener('dblclick', hideButton);

document.getElementById('button3').addEventListener('click', changeColor);
document.getElementById('button3').addEventListener('mouseover', showMessage);
document.getElementById('button3').addEventListener('mouseout', hideMessage);
document.getElementById('button3').addEventListener('dblclick', hideButton);
