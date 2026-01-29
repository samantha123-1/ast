// DOM Elements
const tickerContent = document.getElementById('ticker-content');
const newsGrid = document.getElementById('news-grid');
const ctx = document.getElementById('marketChart').getContext('2d');

// Mock Data
const coins = [
    { name: 'BTC', price: '98,245.00', change: '+2.4%', type: 'up' },
    { name: 'ETH', price: '5,432.10', change: '-1.2%', type: 'down' },
    { name: 'SOL', price: '345.50', change: '+5.7%', type: 'up' },
    { name: 'XRP', price: '2.45', change: '+0.8%', type: 'up' },
    { name: 'ADA', price: '1.20', change: '-0.5%', type: 'down' },
    { name: 'DOGE', price: '0.45', change: '+12.4%', type: 'up' },
    { name: 'DOT', price: '15.30', change: '-2.1%', type: 'down' }
];

const news = [
    {
        title: 'Bitcoin Breaks All-Time High Amid Institutional Frenzy',
        date: '2 hours ago',
        tag: 'Market Watch',
        image: 'assets/news1.png'
    },
    {
        title: 'Ethereum 3.0 Update: What You Need to Know',
        date: '5 hours ago',
        tag: 'Technology',
        image: 'assets/news2.png'
    },
    {
        title: 'Top 5 Altcoins to Watch This Bull Run',
        date: '1 day ago',
        tag: 'Analysis',
        image: 'assets/hero-bg.png' // Fallback usage
    }
];

// Initialize Ticker
function initTicker() {
    let tickerHTML = '';
    // Duplicate array to ensure smooth infinite scroll
    const displayCoins = [...coins, ...coins, ...coins];
    
    displayCoins.forEach(coin => {
        tickerHTML += `
            <div class="ticker-item">
                <span style="color: #fff">${coin.name}</span>
                <span style="margin: 0 10px">$${coin.price}</span>
                <span class="${coin.type}">${coin.change}</span>
            </div>
        `;
    });
    tickerContent.innerHTML = tickerHTML;
}

// Initialize News
function initNews() {
    let newsHTML = '';
    news.forEach(item => {
        newsHTML += `
            <article class="news-card">
                <img src="${item.image}" alt="${item.title}" class="news-img">
                <div class="news-content">
                    <span class="news-tag">${item.tag}</span>
                    <h3 class="news-title">${item.title}</h3>
                    <p class="news-date">${item.date}</p>
                </div>
            </article>
        `;
    });
    newsGrid.innerHTML = newsHTML;
}

// Initialize Chart
function initChart() {
    // Generate some random data for the chart
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const dataPoints = [45000, 48000, 42000, 56000, 52000, 68000, 98000];

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(0, 255, 136, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 255, 136, 0.0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'AST Index',
                data: dataPoints,
                borderColor: '#00ff88',
                backgroundColor: gradient,
                borderWidth: 2,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#00ff88',
                pointRadius: 4,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#fff', font: { family: 'Outfit' } }
                }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#a0a0b0' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#a0a0b0' }
                }
            }
        }
    });
}

// Run everything on load
document.addEventListener('DOMContentLoaded', () => {
    initTicker();
    initNews();
    initChart();
});
