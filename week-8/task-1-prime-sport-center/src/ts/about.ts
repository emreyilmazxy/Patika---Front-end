const aboutRoot = document.getElementById('about');

if (aboutRoot) {
  aboutRoot.innerHTML = `
             <div class="about__container">
      <div class="about__content">

        <div class="about__text">
          <h2 class="about__title">Hakkımızda</h2>
          <p class="about__description">
            Prime Sport Center, sağlıklı yaşam ve fitness hedeflerinize ulaşmanız için
            tasarlanmış modern bir spor merkezidir. Uzman eğitmenlerimiz ve son teknoloji
            ekipmanlarımızla, her seviyeden bireye uygun programlar sunuyoruz. Amacımız,
            size en iyi deneyimi sağlayarak, fiziksel ve zihinsel sağlığınızı desteklemektir.
            Bize katılın ve daha sağlıklı bir yaşama adım atın!
          </p>

         <div class ="about__features"> 
         <div class="about__features-text">
            <span class="material-symbols-outlined !text-[28px]">groups</span>
             <h3>Uzman Eğitmen Kadrosu</h3>
         </div>

          <div class="about__features-text">
             <span class="material-symbols-outlined !text-[28px]">fitness_center</span>
            <h3>Modern Ekipmanlar</h3>
          </div>

        <div class="about__features-text">
           <span class="material-symbols-outlined !text-[28px]">assignment_ind</span>
           <h3>Kişiye Özel Antrenman Programları</h3>
         </div>

         </div> 
         </div>
        

        <div class="about__image-wrapper">
          <img src="/src/assets/images/about.png" alt="koşu bantları görseli" class="about__image" />
        </div>

      </div>
    </div> 
   `;
}