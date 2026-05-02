export default function App() {
  return (
    <div style={{ fontFamily: "Arial", color: "#111" }}>

      {/* NAV */}
      <nav style={{ padding: "20px", display: "flex", justifyContent: "space-between" }}>
        <h2>Klinik L’Medina</h2>
        <button style={{ background: "#0f766e", color: "white", padding: "10px 15px", borderRadius: "8px" }}>
          Book Appointment
        </button>
      </nav>

      {/* HERO */}
      <section style={{ padding: "70px 20px", textAlign: "center", background: "#f5faff" }}>
        <h1 style={{ fontSize: "42px" }}>Hiding your smile?</h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Specialist Oral & Maxillofacial Dental Care in Batu Pahat
        </p>

        <div style={{ marginTop: "25px" }}>
          <button style={{ marginRight: "10px", padding: "12px 18px", background: "green", color: "white", borderRadius: "8px" }}>
            Chat on WhatsApp
          </button>
          <button style={{ padding: "12px 18px", border: "1px solid #000", borderRadius: "8px" }}>
            Book Appointment
          </button>
        </div>

        <div style={{ marginTop: "30px", fontSize: "14px", color: "#555" }}>
          ⭐ 5.0 Google Rated · Gentle Care · Specialist Doctors
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "space-around", padding: "40px", textAlign: "center" }}>
        <div><h2>20+</h2><p>Years Experience</p></div>
        <div><h2>5.0★</h2><p>Google Rating</p></div>
        <div><h2>1000+</h2><p>Happy Patients</p></div>
      </section>

      {/* ABOUT DOCTOR */}
      <section style={{ padding: "50px 20px", background: "#fafafa", textAlign: "center" }}>
        <h2>Meet the Doctor</h2>
        <h3>Dr. Siti Salmiah</h3>
        <p>Oral & Maxillofacial Specialist</p>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          "We treat patients, not just teeth." Gentle, safe and modern dental care focused on comfort.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "50px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>

        <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>

          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
            <h3>Scaling & Polishing</h3>
            <p>Gentle cleaning for fresh and healthy gums.</p>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
            <h3>Wisdom Tooth Surgery</h3>
            <p>Painless specialist oral surgery with care.</p>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
            <h3>Braces & Cosmetic Dentistry</h3>
            <p>Straight, confident smile transformation.</p>
          </div>

        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "50px 20px", background: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center" }}>Patient Reviews</h2>

        <div style={{ marginTop: "20px" }}>
          <p>“Very professional and painless treatment. Highly recommended.”</p>
          <p>“Friendly doctor and staff, very comfortable experience.”</p>
          <p>“Best dental clinic in Batu Pahat.”</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#0f766e", color: "white" }}>
        <h2>Book Your Appointment Today</h2>
        <p>We are here to make your smile confident again.</p>
        <button style={{ marginTop: "20px", padding: "12px 20px", background: "white", color: "#0f766e", borderRadius: "8px" }}>
          WhatsApp Now
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "30px", textAlign: "center" }}>
        <p>Klinik L’Medina · Batu Pahat, Malaysia</p>
      </footer>

    </div>
  );
}
