document.addEventListener('DOMContentLoaded', () => {
    
    // Config for forms
    const forms = [
        { id: 'insurance-form', msg: 'Thank you! An insurance agent will contact you shortly.' },
        { id: 'bill-form', msg: 'Bill payment processed successfully! (Demo)' },
        { id: 'order-form', msg: 'Your order has been placed! detailed sent to your phone.' }
    ];

    forms.forEach(form => {
        const formElement = document.getElementById(form.id);
        if (formElement) {
            formElement.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Simulate loading state
                const btn = formElement.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = 'Processing...';
                btn.disabled = true;

                setTimeout(() => {
                    alert(form.msg);
                    formElement.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 1500);
            });
        }
    });

    // Simple scroll reveal effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Apply animation classes
    document.querySelectorAll('.card, .form-wrapper').forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});
