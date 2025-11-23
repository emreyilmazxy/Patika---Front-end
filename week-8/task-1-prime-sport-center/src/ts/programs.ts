const ProgramsSection = document.getElementById("programs");

if (ProgramsSection) {
  ProgramsSection.innerHTML = `
    <div class="programs__container">

      <h2 class="section-title">Programlarımız</h2>
      <p class="section-subtitle">
        Her seviyeye uygun profesyonel antrenman programlarımızla hedeflerinize ulaşın.
      </p>

      <div class="programs__grid">

    
        <div class="card-programs">
          <span class="card-programs__icon material-symbols-outlined">person_pin_circle</span>
          <h3 class="card-programs__title">Kişisel Antrenman</h3>
          <p class="card-programs__description">Kişiye özel programlarla hızlı sonuçlar.</p>
        </div>

     
        <div class="card-programs">
          <span class="card-programs__icon material-symbols-outlined">exercise</span>
          <h3 class="card-programs__title">Fonksiyonel Antrenman</h3>
          <p class="card-programs__description">Kas gruplarını bütünsel çalıştıran dinamik antrenmanlar.</p>
        </div>

       
        <div class="card-programs">
          <span class="card-programs__icon material-symbols-outlined">favorite</span>
          <h3 class="card-programs__title">Kardiyo Antrenmanı</h3>
          <p class="card-programs__description">Yağ yakımını hızlandıran etkili kardiyo seansları.</p>
        </div>

       
        <div class="card-programs">
          <span class="card-programs__icon material-symbols-outlined">bolt</span>
          <h3 class="card-programs__title">CrossFit</h3>
          <p class="card-programs__description">Dayanıklılık ve güç için yüksek yoğunluklu antrenmanlar.</p>
        </div>

       
        <div class="card-programs">
          <span class="card-programs__icon material-symbols-outlined">self_improvement</span>
          <h3 class="card-programs__title">Yoga & Esneme</h3>
          <p class="card-programs__description">Zihin ve beden dengesi için yoga ve esneme seansları.</p>
        </div>

       
        <div class="card-programs">
          <span class="card-programs__icon material-symbols-outlined">fitness_center</span>
          <h3 class="card-programs__title">Ağırlık Çalışmaları</h3>
          <p class="card-programs__description">Kas gelişimi için etkili ağırlık antrenmanları.</p>
        </div>

      </div>
    </div>
  `;
}
