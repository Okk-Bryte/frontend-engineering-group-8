import { useState } from 'react';
import './ContactForm.css';

function ContactForm({ contactRef }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (name === 'message') setCharCount(value.length);
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }));
  };

  // ✅ ENDPOINT ADDED HERE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    try {
      const response = await fetch("https://whitebricks.com/tsacademy.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
        setCharCount(0);
        setErrors({});
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error.");
    }
  };

  return (
    <section className="contact-section" ref={contactRef} id="contact">
      <h2>Have Questions About Planetary Science?</h2>
      <p className="contact-desc">
        Interested in learning more about space, astronomy, or how planetary data is collected and
        analysed? Reach out, and we'll get back to you.
      </p>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="name">Full Name<span>*</span></label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email<span>*</span></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number<span>*</span></label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Please enter a valid phone number."
              value={form.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">Message<span>*</span></label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={form.message}
              onChange={handleChange}
              maxLength={100}
              className={errors.message ? 'error' : ''}
            />
            <span className="char-count">{100 - charCount} characters</span>
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>
        </div>

        {/* Submit button INSIDE form */}
        <button className="submit-btn" type="submit">
          Submit ›
        </button>

        {/* Success message */}
        {submitted && (
          <div className="success-msg">
            ✓ Thank you! Your message has been submitted successfully.
          </div>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
