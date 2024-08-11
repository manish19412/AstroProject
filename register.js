document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Show the popup
    var popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Hide the popup after 3 seconds
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000);
});
