const pricingSection = document.getElementById('pricing');
if (pricingSection) {
  pricingSection.innerHTML = `
               <div class="pricing__container">
      <h2>fiyatlandırma</h2>
      <p>Hedeflerinize uygun üyelik paketini seçin</p>

      <div class="pricing__grid">

        <article class="pricing__card">
          <h3>Temel</h3>
          <p class="pricing__amount">₺99/ay</p>
          <ul class="pricing__features">
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>Tüm temel ekipmanlara erişim</li>
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>Grup derslerine katılım</li>
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>1Soyunma odaları ve duşlar</li>
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>Standart fitness programı</li>
          </ul>
          <button class="pricing__button btn btn--outline btn--full">Şimdi Katıl</button>
        </article>

        <article class="pricing__card pricing__card--featured">
          <h3>Pro</h3>
          <p class="pricing__amount"><span>₺199</span>/ay</p>
          <ul class="pricing__features">
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>Tüm temel ekipmanlara erişim</li>
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>Grup derslerine katılım</li>
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>Soyunma odaları ve duşlar</li>
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>Standart fitness programı</li>
          </ul>
          <button class="pricing__button btn btn--primary btn--full">Şimdi Katıl</button>
          <div class="pricing__badge">önerilen</div>
        </article>

        <article class="pricing__card">
          <h3>Premium</h3>
          <p class="pricing__amount">₺299/ay</p>
          <ul class="pricing__features">
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>Tüm temel ekipmanlara erişim</li>
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>Grup derslerine katılım</li>
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>Soyunma odaları ve duşlar</li>
            <li><span class="material-symbols-outlined verified-icon">check_circle</span>Standart fitness programı</li>
          </ul>
          <button class="pricing__button btn btn--outline btn--full">Şimdi Katıl</button>
        </article>

      </div>
    </div>
  `;
}