document.addEventListener('DOMContentLoaded', () => {
  // ── Social Proof Ticker (landing page) ──────────────────
  const ticker = document.getElementById('live-ticker');
  if (ticker) {
    const userEl = document.getElementById('ticker-user');
    const names  = ['User 98**', 'Rahul_**', 'User 41**', 'Priya_**', 'User 77**', 'Aman**', 'User 22**'];

    const flash = () => {
      userEl.textContent = names[Math.floor(Math.random() * names.length)];
      ticker.classList.add('visible');
      setTimeout(() => ticker.classList.remove('visible'), 3500);
    };

    setTimeout(() => {
      flash();
      setInterval(flash, 6000 + Math.random() * 8000);
    }, 2500);
  }

  // ── Countdown Timer (landing page) ──────────────────────
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    let secs = 14 * 60 + 59;

    setInterval(() => {
      secs = secs <= 0 ? 15 * 60 : secs - 1;
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      countdownEl.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
    }, 1000);
  }

  // ── Download Buttons ────────────────────────────────────
  document.querySelectorAll('.dl-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Production: window.location.href = 'assets/minishort_v2.apk';
      alert('🎉 Download starting…\n\nCheck your notifications or downloads folder for the APK file.');
    });
  });
});
