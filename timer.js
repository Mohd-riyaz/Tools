let countdownInterval;

function startCountdown() {
  const datetimeInput = document.getElementById("datetime").value;
  const target = new Date(datetimeInput).getTime();
  const message = document.getElementById("message");

  clearInterval(countdownInterval); // Reset if already running
  message.innerText = "";

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const gap = target - now;

    if (gap <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      message.innerText = "🎉 Time's Up!";
      return;
    }

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
  }, 1000);
}
