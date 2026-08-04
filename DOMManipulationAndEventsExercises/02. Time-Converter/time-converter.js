document.addEventListener('DOMContentLoaded', solve);

function attachEventsListeners() {
    const days = document.getElementById('days-input');
    const hours = document.getElementById('hours-input');
    const minutes = document.getElementById('minutes-input');
    const seconds = document.getElementById('seconds-input');

    function convert(totalSeconds) {
        days.value = totalSeconds / 86400;
        hours.value = totalSeconds / 3600;
        minutes.value = totalSeconds / 60;
        seconds.value = totalSeconds;
    }

    document.getElementById('daysBtn').addEventListener('click', () => {
        convert(Number(days.value) * 86400);
    });

    document.getElementById('hoursBtn').addEventListener('click', () => {
        convert(Number(hours.value) * 3600);
    });

    document.getElementById('minutesBtn').addEventListener('click', () => {
        convert(Number(minutes.value) * 60);
    });

    document.getElementById('secondsBtn').addEventListener('click', () => {
        convert(Number(seconds.value));
    });
}