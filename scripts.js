document.addEventListener('DOMContentLoaded', () => {
    // Function to hide all sections
    function hideAllSections() {
        document.querySelectorAll('main > section').forEach(section => {
            section.classList.add('hidden');
        });
    }

    // Function to show a specific section
    function showSection(sectionId) {
        hideAllSections();
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.remove('hidden');
        }
    }

    // Event listeners for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent default link behavior
            const targetId = link.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Display fun fact on page load
    function getFunFact() {
        const funFacts = [
            "Eating fruits and vegetables can boost your mood!",
            "Staying hydrated is crucial for overall health.",
            "Regular physical activity can help prevent chronic diseases."
        ];
        const dayOfYear = new Date().getDay();
        return funFacts[dayOfYear % funFacts.length];
    }

    document.getElementById('fun-fact').textContent = getFunFact();

    // BMI Calculator functionality
    document.getElementById('calculate-bmi').addEventListener('click', () => {
        const height = parseFloat(document.getElementById('height-input').value);
        const weight = parseFloat(document.getElementById('weight-input').value);
        
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            document.getElementById('bmi-output').textContent = 'Please enter valid height and weight.';
            return;
        }

        const bmi = weight / ((height / 100) ** 2);
        document.getElementById('bmi-output').textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    });

    // Contact form functionality
    document.getElementById('send-button').addEventListener('click', () => {
        const name = document.getElementById('name-input').value;
        const email = document.getElementById('email-input').value;
        const message = document.getElementById('message-input').value;

        if (!name || !email || !message) {
            document.getElementById('contact-output').textContent = 'Please fill out all fields.';
            return;
        }

        // Simulate sending message
        document.getElementById('contact-output').textContent = 'Thank you for your message!';
    });
});
