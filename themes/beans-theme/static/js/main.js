document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Set loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            formStatus.textContent = '';
            formStatus.className = 'form-status';

            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                
                if (response.ok) {
                    formStatus.textContent = 'Thanks! Your message has been sent successfully. We\'ll be in touch soon.';
                    formStatus.classList.add('success');
                    contactForm.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            formStatus.textContent = "Oops! There was a problem submitting your form.";
                        }
                        formStatus.classList.add('error');
                    });
                }
            })
            .catch(error => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                formStatus.textContent = "Oops! There was a problem submitting your form.";
                formStatus.classList.add('error');
            });
        });
    }
});
