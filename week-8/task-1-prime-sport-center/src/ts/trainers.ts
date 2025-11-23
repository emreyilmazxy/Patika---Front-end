const TrainersSection = document.getElementById("trainers");

if (TrainersSection) {
    TrainersSection.innerHTML = `
      <div class="trainers__container">

      <header class="trainers__header">
        <h2 class="trainers__title">Eğitmenlerimiz</h2>
        <p class="trainers__subtitle">Profesyonel eğitmenlerimizle tanışın</p>
      </header>

      <div class="trainers__grid">

        <div class="card-trainers">

          <div class="card-trainers__image-wrapper">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ahmet Yılmaz" class="card-trainers__image" />
          </div>

          <h3 class="card-trainers__title">Ahmet Yılmaz</h3>
          <p class="card-trainers__subtitle">Fonksiyonel Antrenman Uzmanı </p>
          <p class="card-trainers__description">sınırlarınızı zorlayın ve hedeflerinize ulaşın</p>
        </div>

        <div class="card-trainers">

          <div class="card-trainers__image-wrapper">
            <img src="https://randomuser.me/api/portraits/women/35.jpg" alt="Elif Yılmaz"
              class="card-trainers__image" />
          </div>

          <h3 class="card-trainers__title">Elif Yılmaz</h3>
          <p class="card-trainers__subtitle">Pilates ve Yoga Eğitmeni </p>
          <p class="card-trainers__description">Beden ve zihin bütünlüğüyle esnekliğinizi ve gücünüzü artırır.</p>
        </div>


        <div class="card-trainers">

          <div class="card-trainers__image-wrapper">
            <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Zeynep Demir"
              class="card-trainers__image" />
          </div>

          <h3 class="card-trainers__title">Zeynep Demir</h3>
          <p class="card-trainers__subtitle">Vücut Geliştirme Koçu </p>
          <p class="card-trainers__description">Kişiye özel programlarla estetik ve güçlü bir fizik inşa eder</p>
        </div>


        <div class="card-trainers">

          <div class="card-trainers__image-wrapper">
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Can Öztürk" class="card-trainers__image" />
          </div>

          <h3 class="card-trainers__title">Can Öztürk</h3>
          <p class="card-trainers__subtitle">Kardiyo ve Dayanıklılık Uzmanı </p>
          <p class="card-trainers__description">Kalp sağlığınızı en üst düzeye çıkaracak enerjik antrenmanlar sunar.</p>
        </div>


        <div class="card-trainers">

          <div class="card-trainers__image-wrapper">
            <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Selin Arslan"
              class="card-trainers__image" />
          </div>

          <h3 class="card-trainers__title">Selin Arslan</h3>
          <p class="card-trainers__subtitle">CrossFit Seviye 2 Eğitmeni </p>
          <p class="card-trainers__description">Yüksek yoğunluklu antrenmanlarla performansınızı zirveye taşır.</p>
        </div>


        <div class="card-trainers">

          <div class="card-trainers__image-wrapper">
            <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Murat Çelik" class="card-trainers__image" />
          </div>

          <h3 class="card-trainers__title">Murat Çelik</h3>
          <p class="card-trainers__subtitle">Dövüş Sanatları ve Savunma Uzmanı</p>
          <p class="card-trainers__description">Özgüveninizi artırırken disiplin ve odaklanma becerisi kazandırır.</p>
        </div>



        
      </div>
    </div>
  
  
  
  
  
  
  
  
  `;
}
