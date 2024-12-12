// Toggle Hamburger Menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Section Navigation
function showSection(sectionId) {
    document.querySelectorAll('.content section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Dashboard Charts
function displayCharts() {
    const ctx = document.getElementById('healthChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    label: 'Blood Pressure (mmHg)',
                    data: [120, 122, 118, 125, 130, 128, 126],
                    borderColor: 'rgba(75, 192, 192, 1)',
                },
                {
                    label: 'Heart Rate (bpm)',
                    data: [72, 75, 70, 74, 76, 73, 72],
                    borderColor: 'rgba(153, 102, 255, 1)',
                },
            ],
        },
        options: { responsive: true },
    });
}

// Upload Reports
function uploadReport() {
    const fileInput = document.getElementById('file-input');
    const feedback = document.getElementById('report-feedback');

    if (fileInput.files.length > 0) {
        feedback.innerHTML = "Report analyzed! Sample data generated.";
    } else {
        feedback.innerHTML = "No report uploaded.";
    }
}

// Patient History
function loadHistory() {
    const history = document.getElementById('history-list');
    history.innerHTML = `
        <p>John Doe - Checkup: 12/12/2024</p>
        <p>Jane Smith - Vaccination: 10/11/2024</p>
    `;
}

// Contact Doctor
function contactDoctor() {
    alert("Contacting doctor... Please wait.");
}

// Chatbot Interaction
function sendMessage(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chat-input').value;
        const chatbox = document.getElementById('chatbox');
        chatbox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
        chatbox.innerHTML += `<p><strong>Bot:</strong> I’m here to help!</p>`;
        document.getElementById('chat-input').value = '';
    }
}

// Initialize App
window.onload = () => {
    displayCharts();
    loadHistory();
};
