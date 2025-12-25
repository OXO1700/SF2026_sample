const target = new Date("2025-10-20T09:00:00"); // 開始日時

function updateCountdown() {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent =
      "文化祭 開催中！";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;

  document.getElementById("countdown").textContent =
    `${days}日 ${hours}時間 ${minutes}分`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
