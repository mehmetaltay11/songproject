document.addEventListener('DOMContentLoaded', () => {
    const pulseButton = document.getElementById('pulseButton');
    let isPulsing = false;
    let pulseInterval;

    function startPulse() {
        if (!isPulsing) {
            isPulsing = true;
            pulseInterval = setInterval(() => {
                pulseButton.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    pulseButton.style.transform = 'scale(1)';
                }, 200);
            }, 1000);
            pulseButton.textContent = 'Stop Pulse';
        } else {
            isPulsing = false;
            clearInterval(pulseInterval);
            pulseButton.style.transform = 'scale(1)';
            pulseButton.textContent = 'Pulse Effect';
        }
    }

    pulseButton.addEventListener('click', startPulse);
});