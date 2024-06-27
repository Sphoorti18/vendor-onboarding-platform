do {
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('vendor-form');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            validateForm();
        });
    
        function validateForm() {
            const name = document.getElementById('vendor-name').value.trim();
            const email = document.getElementById('vendor-email').value.trim();
            const phone = document.getElementById('vendor-phone').value.trim();
            const address = document.getElementById('vendor-address').value.trim();
    
            if (name === "" || email === "" || phone === "" || address === "") {
                alert("All fields are required!");
                return;
            }
    
            if (!validateEmail(email)) {
                alert("Please enter a valid email address!");
                return;
            }
    
            if (!validatePhone(phone)) {
                alert("Please enter a valid phone number!");
                return;
            }
    
            alert("Form submitted successfully!");
            form.reset();
        }
    
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    
        function validatePhone(phone) {
            const re = /^[0-9]{10}$/;
            return re.test(phone);
        }
    });
    
} while (condition);