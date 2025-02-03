function updateCountdown() {
    const launchDate = new Date('February 14, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "🚀 Launch Time!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `🚀 ${days}d ${hours}h ${minutes}m ${seconds}s`;
}


setInterval(updateCountdown, 1000);
updateCountdown();
