import React from "react";
import "../style.css"; // Ensure this CSS file exists

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <div className="contact-links">
                <a href="https://www.facebook.com/ogShady.rabbit?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <img src="/public/icon/fb.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/prollynoturz_?igsh=eThmZzZyOXU1YXU4" target="_blank" rel="noopener noreferrer">
                    <img src="/public/icon/insta,png.png" alt="Instagram" />
                </a>
                <a href="pauladrianbalg@gmail.com">
                    <img src="/public/icon/mail.png" alt="Email" />
                </a>
            </div>
        </section>
    );
};

export default Contact;
