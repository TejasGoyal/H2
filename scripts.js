// scripts.js

// Fun facts
const funFacts = [
    "Eating fruits and vegetables can boost your mood!",
    "Staying hydrated is crucial for overall health.",
    "Regular physical activity can help prevent chronic diseases."
];

function getFunFact() {
    const dayOfYear = new Date().getDOY(); // Get the day of the year
    return funFacts[dayOfYear % funFacts.length];
}

Date.prototype.getDOY = function() {
    const start = new Date(this.getFullYear(), 0, 0);
    const diff = this - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

document.getElementById('fun-fact').textContent = getFunFact();

// BMI Calculator
document.getElementById('calculate-bmi').addEventListener('click', () => {
    const height = parseFloat(document.getElementById('height-input').value);
    const weight = parseFloat(document.getElementById('weight-input').value);
    
    if (!height || !weight) {
        document.getElementById('bmi-output').textContent = "Please enter both height and weight.";
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    document.getElementById('bmi-output').textContent = `Your BMI is: ${bmi.toFixed(2)}`;
});

// Contact form
document.getElementById('send-button').addEventListener('click', () => {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    if (!name || !email || !message) {
        document.getElementById('contact-output').textContent = "Please fill in all fields.";
        return;
    }

    document.getElementById('contact-output').textContent = "Thank you for your message!";
});
