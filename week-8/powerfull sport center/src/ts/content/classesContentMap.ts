import yogaImage from "../../assets/images/yoga.jpg";
import groupImage from "../../assets/images/group.webp";
import stretchImage from "../../assets/images/stret.webp";
import soloImage from "../../assets/images/solo.jpg";


export const CONTENT_MAP: Record<string, string> = {
  "yoga-btn": `
    <div class="classes__content-wrapper">
      <div class="classes__text">
        <h3 class="classes__content-title">Why are your Yoga</h3>
        <p class="classes__content-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates...
        </p>

        <h3 class="classes__content-title">When comes Yoga your Time.</h3>
        <p class="classes__content-description--flex">
          <span>Saturday-Sunday: 10:00 AM - 11:00 AM</span>
          <span>Monday-Wednesday: 06:00 PM - 07:00 PM</span>
          <span>Thursday-Friday: 08:00 AM - 09:00 AM</span>
        </p>
      </div>
    </div>

    <div class="classes__img-wrapper">
      <img src="${yogaImage}" alt="woman doing Yoga" />
    </div>
  `,

  "group-btn": `
    <div class="classes__content-wrapper">
      <div class="classes__text">
        <h3 class="classes__content-title">Why Choose Our Group Classes?</h3>
        <p class="classes__content-description">
          Our group training sessions are designed to boost motivation...
        </p>

        <h3 class="classes__content-title">Group Class Schedule</h3>
        <p class="classes__content-description--flex">
          <span>Saturday–Sunday: 10:00 AM – 11:00 AM</span>
          <span>Monday–Wednesday: 06:00 PM – 07:00 PM</span>
          <span>Thursday–Friday: 08:00 AM – 09:00 AM</span>
        </p>
      </div>
    </div>

    <div class="classes__img-wrapper">
      <img src="${groupImage}" alt="group training session" />
    </div>
  `,

  "solo-btn": `
    <div class="classes__content-wrapper">
      <div class="classes__text">
        <h3 class="classes__content-title">Why Choose Solo Training?</h3>
        <p class="classes__content-description">
          Solo training sessions provide a fully personalized workout experience...
        </p>

        <h3 class="classes__content-title">Solo Training Schedule</h3>
        <p class="classes__content-description--flex">
          <span>Monday–Sunday: Flexible Hours</span>
          <span>Morning Sessions: 08:00 AM – 12:00 PM</span>
          <span>Evening Sessions: 04:00 PM – 08:00 PM</span>
        </p>
      </div>
    </div>

    <div class="classes__img-wrapper">
      <img src="${soloImage}" alt="personal solo training session" />
    </div>
  `,

  "stretching-btn": `
    <div class="classes__content-wrapper">
      <div class="classes__text">
        <h3 class="classes__content-title">Why Choose Our Stretching Classes?</h3>
        <p class="classes__content-description">
          Stretching sessions help improve flexibility, release muscle tension...
        </p>

        <h3 class="classes__content-title">Stretching Class Schedule</h3>
        <p class="classes__content-description--flex">
          <span>Saturday–Sunday: 09:00 AM – 10:00 AM</span>
          <span>Tuesday–Thursday: 06:30 PM – 07:30 PM</span>
          <span>Friday: 08:00 AM – 09:00 AM</span>
        </p>
      </div>
    </div>

    <div class="classes__img-wrapper">
      <img src="${stretchImage}" alt="guided stretching session" />
    </div>
  `
};
