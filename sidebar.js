// ========================================
//   SIDEBAR JS — Pertanian Indonesia
//   Dipakai oleh semua halaman pengimputan
// ========================================

document.addEventListener('DOMContentLoaded', function () {

  // ── Auth ──
  const u = sessionStorage.getItem('user') || 'Admin';
  const elUser = document.getElementById('sbUser');
  if (elUser) elUser.textContent = u.charAt(0).toUpperCase() + u.slice(1);

  // ── Tanggal ──
  const elDate = document.getElementById('tbDate');
  if (elDate) elDate.textContent =
    new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  // ── Toggle sub-menu Nama Kelompok ──
  window.toggleSub = function (el, subId) {
    const sub = document.getElementById(subId);
    const arr = document.getElementById('arr-kelompok');
    if (!sub) return;
    sub.classList.toggle('open');
    if (arr) arr.textContent = sub.classList.contains('open') ? '▼' : '▶';
  };

  // ── Alert sukses sementara ──
  window.showAlert = function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3000);
  };

  // ── Toggle tampil/sembunyikan form ──
  window.toggleForm = function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  };

  // ── Logout ──
  window.logout = function () {
    if (confirm('Yakin ingin keluar?')) {
      sessionStorage.clear();
      window.location.href = 'index.html';
    }
  };

});