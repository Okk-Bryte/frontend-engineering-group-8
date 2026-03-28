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

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // Replace with actual API endpoint:
    // fetch('https://your-api.com/contact', { method: 'POST', body: JSON.stringify(form) })
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setCharCount(0);
  };

  return (
    <section className="contact-section" ref={contactRef} id="contact" aria-label="Contact section">
      <h2>Have Questions About Planetary Science?</h2>
      <p className="contact-desc">
        Interested in learning more about space, astronomy, or how planetary data is collected and
        analyzed? Reach out and we'll get back to you.
      </p>

      <div className="form-grid" role="form" aria-label="Contact form">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="name">
            Full Name<span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <span className="field-error" id="name-error" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">
            Email<span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span className="field-error" id="email-error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">
            Phone Number<span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Please enter a valid phone number."
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
            aria-required="true"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <span className="field-error" id="phone-error" role="alert">
              {errors.phone}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">
            Message<span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
            maxLength={100}
            className={errors.message ? 'error' : ''}
            aria-required="true"
            aria-describedby={errors.message ? 'message-error' : 'char-count'}
          />
          <span className="char-count" id="char-count">
            {100 - charCount} characters
          </span>
          {errors.message && (
            <span className="field-error" id="message-error" role="alert">
              {errors.message}
            </span>
          )}
        </div>
      </div>

      <button className="submit-btn" onClick={handleSubmit} type="button" aria-label="Submit contact form">
        Submit &nbsp;›
      </button>

      {submitted && (
        <div className="success-msg" role="alert" aria-live="polite">
          ✓ Thank you! Your message has been submitted successfully.
        </div>
      )}
    </section>
  );
}

export default ContactForm;
