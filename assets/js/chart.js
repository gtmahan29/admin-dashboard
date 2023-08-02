//  داده‌ها
const data = {
    labels: ['اردیبهشت', 'خرداد', 'تیر'],
    datasets: [
    { 
        label: 'پرفروش‌ترین ماه‌ها',
        data: [3000, 7000, 6000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
          'rgb(153, 102, 255)'
        ],
        borderWidth: 1
    }
    ]
}

// المان‌ها
const salesChart = document.getElementById('sales-chart');
Chart.defaults.font.family = 'Vazir';
Chart.defaults.font.size = 10;

// چارت
new Chart(salesChart, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          grid: {
            display: false
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });