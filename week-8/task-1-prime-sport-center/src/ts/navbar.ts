// Navbar component placeholder
const navbarRoot = document.getElementById('navbar');

if (navbarRoot) {
  navbarRoot.innerHTML = `
<nav class="navbar">
      <div class="navbar__container">
      <div class="navbar__logo"><span class="material-symbols-outlined">
          sports_gymnastics
        </span>PrimeSport</div>

      <ul class="navbar__links">
        <li><a href="#hero">Ana Sayfa</a></li>
        <li><a href="#programs">Programlar</a></li>
        <li><a href="#trainers">Eğitmenler</a></li>
        <li><a href="#pricing">Fiyatlar</a></li>
        <li><a href="#contact">İletişim</a></li>
        <li><a href="#about">Hakkımızda</a></li>
      </ul>

      <button class="navbar__toggle">
        <span class="material-symbols-outlined">menu</span>
      </button>
      </div>
    </nav>
`;
}