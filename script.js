// script.js

// Initialize Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Confidence (C)', 'Empathy (E)', 'Authenticity (A)', 'Determination (D)', 'Impression Score'],
    datasets: [{
      label: 'Values',
      data: [0, 0, 0, 0, 0], // Initial values
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 1 // Ensure y-axis range is 0 to 1
      }
    }
  }
});

// Function to calculate impression score
function calculateImpressionScore(C, α, E, β, A, γ, D, δ) {
  return Math.pow(C, α) * Math.pow(E, β) * Math.pow(A, γ) * Math.pow(D, δ);
}

// Function to update chart data
function updateChart() {
  const C = parseFloat(document.getElementById('confidence').value);
  const α = parseFloat(document.getElementById('alpha').value);
  const E = parseFloat(document.getElementById('empathy').value);
  const β = parseFloat(document.getElementById('beta').value);
  const A = parseFloat(document.getElementById('authenticity').value);
  const γ = parseFloat(document.getElementById('gamma').value);
  const D = parseFloat(document.getElementById('determination').value);
  const δ = parseFloat(document.getElementById('delta').value);

  const impressionScore = calculateImpressionScore(C, α, E, β, A, γ, D, δ);

  myChart.data.datasets[0].data = [C, E, A, D, impressionScore];
  myChart.update();
}

// Function to update span elements with slider values
function updateValues() {
  document.getElementById('confidenceValue').textContent = document.getElementById('confidence').value;
  document.getElementById('alphaValue').textContent = document.getElementById('alpha').value;
  document.getElementById('empathyValue').textContent = document.getElementById('empathy').value;
  document.getElementById('betaValue').textContent = document.getElementById('beta').value;
  document.getElementById('authenticityValue').textContent = document.getElementById('authenticity').value;
  document.getElementById('gammaValue').textContent = document.getElementById('gamma').value;
  document.getElementById('determinationValue').textContent = document.getElementById('determination').value;
  document.getElementById('deltaValue').textContent = document.getElementById('delta').value;
}

// Add event listeners
document.getElementById('confidence').addEventListener('input', updateValues);
document.getElementById('alpha').addEventListener('input', updateValues);
document.getElementById('empathy').addEventListener('input', updateValues);
document.getElementById('beta').addEventListener('input', updateValues);
document.getElementById('authenticity').addEventListener('input', updateValues);
document.getElementById('gamma').addEventListener('input', updateValues);
document.getElementById('determination').addEventListener('input', updateValues);
document.getElementById('delta').addEventListener('input', updateValues);
document.getElementById('updateGraph').addEventListener('click', updateChart);

// Initial call to set default values
updateValues();