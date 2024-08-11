document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.feedback-form');
    const nameField = form.querySelector('input[name="name"]');
    const emailField = form.querySelector('input[name="email"]');
    const suggestionField = form.querySelector('textarea[name="suggestion"]');

    form.addEventListener('submit', function(event) {
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const suggestion = suggestionField.value.trim();

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = true;
        let message = '';

        if (!name) {
            message += 'Name is required.\n';
            valid = false;
        }

        if (!email || !emailPattern.test(email)) {
            message += 'Please enter a valid email address.\n';
            valid = false;
        }

        if (!suggestion) {
            message += 'Suggestion is required.\n';
            valid = false;
        }

        if (!valid) {
            alert(message.trim());
            event.preventDefault(); // Prevent form submission
        } else {
            // Display confirmation dialog
            const confirmSubmission = confirm('Do you really want to submit the form?');
            if (!confirmSubmission) {
                event.preventDefault(); // Prevent form submission if the user cancels
            }
        }
    });
});
