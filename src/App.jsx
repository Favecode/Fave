// src/App.jsx
import React from "react";
import "./App.css";

// Images
import heroImg from "./hero.jpg";
import doctor1 from "./hero3.JPG";
import doctor2 from "./A.jpg";
import doctor3 from "./B.jpg";
import CEO from "./cad.jpg";

function App() {
  // Scroll to contact section when clicking "Book Appointment"
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="logo">Hope-Care</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#departments">Departments</a></li>
          <li><a href="#experts">Experts</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero">
        <div className="hero-text">
          <h1>
            Your <span>Health</span> Comes First
          </h1>
          <p>
            Providing world-class healthcare with compassion, innovation, and excellence.
          </p>
          <div className="hero-buttons">
            <button className="book" onClick={scrollToContact}>Book Appointment</button>
            <button className="login">Login</button>
          </div>
        </div>
        <img src={heroImg} alt="Healthcare" className="hero-img" />
      </section>

     {/* ===== ABOUT SECTION ===== */}
<section className="about" id="about">
  <h2>About Us</h2>
  <p>
    Hope-Care is a modern healthcare platform offering exceptional
    medical services, personalized attention, and cutting-edge technology.
  </p>

  {/* About Numbers */}
  <div className="about-numbers">
    <div>
      <h3>250+</h3>
      <p>Qualified Doctors</p>
    </div>
    <div>
      <h3>120+</h3>
      <p>Modern Clinics</p>
    </div>
    <div>
      <h3>98%</h3>
      <p>Recovery Rate</p>
    </div>
  </div>

  {/* CEO Section */}
{/* CEO Section */}
<div className="ceo-section" style={{ display: "flex", alignItems: "center", marginTop: "40px", gap: "20px" }}>
  <div className="ceo-image">
    <img 
      src={CEO} 
      alt="CEO"
      style={{ width: "350px", borderRadius: "10px", objectFit: "cover" }}
    />
  </div>
  <div className="ceo-text">
    <h3>Dr. Akinyemi </h3>
    <p>
      CEO & Founder of Hope-Care, dedicated to bringing world-class
      healthcare services with compassion, innovation, and excellence.
    </p>
  </div>
</div>

</section>


      {/* ===== SERVICES ===== */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {[
            { img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png", title: "Cardiology", desc: "Comprehensive heart care provided by top specialists." },
            { img: "https://cdn-icons-png.flaticon.com/512/2966/2966331.png", title: "Dentistry", desc: "Professional dental services for your confident smile." },
            { img: "https://cdn-icons-png.flaticon.com/512/2966/2966340.png", title: "Pediatrics", desc: "Specialized child care for healthy growth and happiness." },
            { img: "https://cdn-icons-png.flaticon.com/512/2966/2966317.png", title: "Laboratory", desc: "Accurate diagnostic testing with modern technology." },
          ].map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DEPARTMENTS ===== */}
      <section className="departments" id="departments">
        <h2>Departments</h2>
        <div className="departments-grid">
          {[
            { title: "Emergency Care", desc: "24/7 advanced emergency response and trauma care." },
            { title: "Neurology", desc: "Expert neurological treatment and rehabilitation services." },
            { title: "Orthopedics", desc: "Bone and joint specialists restoring movement and strength." },
          ].map((dept, index) => (
            <div key={index}>
              <h3>{dept.title}</h3>
              <p>{dept.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EXPERTS ===== */}
      <section className="experts" id="experts">
        <h2>Our Experts</h2>
        <div className="experts-grid">
          {[
            { img: doctor1, name: "Dr. Favor", specialty: "Cardiologist" },
            { img: doctor2, name: "Dr. Heritage", specialty: "Pediatrician" },
            { img: doctor3, name: "Dr. Emmanuel", specialty: "Neurologist" },
          ].map((doc, index) => (
            <div key={index} className="expert-card">
              <img src={doc.img} alt={doc.name} />
              <h3>{doc.name}</h3>
              <p>{doc.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEEDBACK ===== */}
      <section className="feedback" id="feedback">
        <h2>What Our Patients Say</h2>
        <div className="feedback-grid">
          <div>
            <p>“The doctors here really care. My recovery was faster than expected!”</p>
            <h4>- Alade M.</h4>
          </div>
          <div>
            <p>“Modern equipment, friendly nurses, and top-notch professionalism.”</p>
            <h4>- Adunni F.</h4>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Get in touch to book appointments or ask about our services.</p>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#departments">Departments</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© 2025 Hope-Care. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
