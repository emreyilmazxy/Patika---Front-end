const HeroSection = document.getElementById('hero');

if (HeroSection) {
  HeroSection.innerHTML = `
  <div class="hero__container">
      <div class="hero__content">

        <h1 class="hero__title">Formunu Değiştir, Hayatını Değiştir</h1>
       
        <p class="hero__subtitle">
          Profesyonel eğitmenlerimiz, modern ekipmanlarımız ve yenilikçi antrenman programlarımızla fitness
          hedeflerinize ulaşın.
        </p>
      
        <div class="hero__button-group">
          <a href="#programs" class="btn btn--primary">Hemen Başla</a>
          <a href="#pricing" class="btn btn--outline">Üyelik Paketleri</a>
        </div>

        <div class="hero__features">
          <div class="hero__feature">
            <span class="material-symbols-outlined">verified</span>
            <p class="hero__feature-text">%100 Memnuniyet Garantisi</p>
          </div>

          <div class="hero__feature">
            <span class="material-symbols-outlined">groups</span>
            <p class="hero__feature-text">Uzman Eğitmen Kadrosu</p>
          </div>

          <div class="hero__feature">
            <span class="material-symbols-outlined">fitness_center</span>
            <p class="hero__feature-text">Modern Ekipmanlar</p>
          </div>
        </div>
      </div>
 
     
      <div class="hero__image">
        <img src="/src/assets/images/hero-gym.png" alt="man doing sports" />
      </div>
    </div>
  `;
} 
