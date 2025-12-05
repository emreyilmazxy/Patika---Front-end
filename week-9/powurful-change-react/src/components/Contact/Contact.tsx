import { useState, FormEvent } from "react";
import "./Contact.scss";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="contact__title section-title">Contact Us</h2>
                <p className="contact__subtitle text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat,
                    totam laboriosam ut culpa impedit quis, dolores ipsum maxime minus ea inventore
                    consectetur est amet eum quia ipsam porro fugiat?
                </p>

                <div className="contact__container">
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__info">
                            <p className="contact__info-item">
                                <strong>Mobile Number:</strong><br />
                                +135 773 321 442
                            </p>
                            <p className="contact__info-item">
                                <strong>Email Address:</strong><br />
                                demo@demo.com
                            </p>
                        </div>

                        <h3 className="contact__form-title">Make an Appointment</h3>

                        <div className="contact__input-group">
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Your Message"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary contact__btn">Send Message</button>
                    </form>

                    <div className="contact__map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.404558018351!2d29.79852557641589!3d40.77511933374847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb47bf3f78c7e5%3A0xd1fe1a628eccce46!2sPrime%20Sports%20Club!5e0!3m2!1str!2str!4v1764456998621!5m2!1str!2str"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
