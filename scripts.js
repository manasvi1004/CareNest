

// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}

// Toggle Dark Mode on click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Save the mode in localStorage
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.innerText = 'Switch to Light Mode'; // Change button text
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.innerText = 'Switch to Dark Mode'; // Change button text
    }
});


// Patient Status Line Chart (Chart.js)
const ctxPatientStatus = document.getElementById('patientStatusChart').getContext('2d');
const patientStatusChart = new Chart(ctxPatientStatus, {
    type: 'line',
    data: {
        labels: ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
        datasets: [
            {
                label: 'Inpatients',
                data: [300, 400, 500, 600, 500, 450],
                backgroundColor: 'rgba(34, 202, 236, 0.2)',
                borderColor: 'rgba(34, 202, 236, 1)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: 'Outpatients',
                data: [200, 300, 400, 500, 400, 350],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Earnings Doughnut Chart (Chart.js)
const ctxEarnings = document.getElementById('earningsChart').getContext('2d');
const earningsChart = new Chart(ctxEarnings, {
    type: 'doughnut',
    data: {
        labels: ['Patient Care', 'Pharmacy', 'Grants and Donations'],
        datasets: [{
            data: [800, 550, 150],
            backgroundColor: ['#66b3ff', '#99ff99', '#ffcc99'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%'
    }
});


// Filter Chart Data (Update on Button Click)
document.getElementById('weekBtn').addEventListener('click', () => {
    // Update labels and data for the week
    patientStatusChart.data.labels = ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
    patientStatusChart.data.datasets[0].data = [300, 400, 500, 600, 500, 450]; // Update inpatient data
    patientStatusChart.data.datasets[1].data = [200, 300, 400, 500, 400, 350]; // Update outpatient data
    patientStatusChart.update();
});

document.getElementById('monthBtn').addEventListener('click', () => {
    // Update labels and data for the month
    patientStatusChart.data.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    patientStatusChart.data.datasets[0].data = [1200, 1500, 1800, 2000]; // Update inpatient data for month
    patientStatusChart.data.datasets[1].data = [800, 950, 1100, 1300]; // Update outpatient data for month
    patientStatusChart.update();
});
