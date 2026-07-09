/* =========================================================================
   SPIDERMAN INTERACTION
   -------------------------------------------------------------------------
   Sosok yang bergelantungan di section "Tentang Saya" (animasi CSS pendulum,
   lihat .swing-rig di style.css). File ini menambahkan interaksi: klik pada
   kotak visual untuk menembakkan "jaring" berupa partikel yang meluncur dari
   pusat, digambar lewat canvas di atas kotak tersebut.
   ========================================================================= */
(function () {
  const box = document.getElementById('aboutVisual');
  const canvas = document.getElementById('webShootCanvas');
  if (!box || !canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  function resize() {
    W = canvas.width = box.clientWidth;
    H = canvas.height = box.clientHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function shootWeb(cx, cy) {
    const count = 14;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * (1.5 + Math.random() * 2),
        vy: Math.sin(angle) * (1.5 + Math.random() * 2),
        life: 1
      });
    }
  }

  box.addEventListener('click', (e) => {
    const rect = box.getBoundingClientRect();
    shootWeb(e.clientX - rect.left, e.clientY - rect.top);
  });

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.02;
      if (p.life > 0) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0,229,255,${p.life})`;
        ctx.lineWidth = 1.4;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
        ctx.stroke();
      }
    });
    particles = particles.filter((p) => p.life > 0);
    requestAnimationFrame(animate);
  }
  animate();
})();
