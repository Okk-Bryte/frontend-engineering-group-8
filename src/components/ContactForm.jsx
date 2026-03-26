import { useState } from 'react'

const INITIAL = {
  fullname: '', email: '', city: '', phone: '', message: '',
  contact: '', source: [],
}

function validate(fields) {
  const errors = {}
  if (!fields.fullname.trim()) errors.fullname = 'Full Name is required.'
  if (!fields.email.trim())    errors.email    = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = 'Please enter a valid email address.'
  if (!fields.phone.trim())   errors.phone   = 'Phone Number is required.'
  if (!fields.message.trim()) errors.message = 'Message is required.'
  return errors
}

export default function ContactForm() {
  const [fields,  setFields]  = useState(INITIAL)
  const [errors,  setErrors]  = useState({})
  const [success, setSuccess] = useState(false)

  const set = (key, val) => setFields(f => ({ ...f, [key]: val }))

  const toggleSource = (val) =>
    setFields(f => ({
      ...f,
      source: f.source.includes(val)
        ? f.source.filter(s => s !== val)
        : [...f.source, val],
    }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length) return

    setFields(INITIAL)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 6000)
  }

  return (
    <section className="contact-section s-gap" id="contact-section">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>

        <div className="form-header">
          <h2>Have Questions About Planetary Science?</h2>
          <p>
            Interested in learning more about space, astronomy, or how planetary
            data is collected and analyzed? Reach out and we'll get back to you!
          </p>
        </div>

        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullname">Full Name*</label>
          <input
            id="fullname" type="text" placeholder="Full Name"
            value={fields.fullname}
            onChange={e => set('fullname', e.target.value)}
            className={errors.fullname ? 'input-error' : ''}
          />
          {errors.fullname && <span className="field-error">{errors.fullname}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            id="email" type="email" placeholder="example@gmail.com"
            value={fields.email}
            onChange={e => set('email', e.target.value)}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        {/* City */}
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            id="city"
            value={fields.city}
            onChange={e => set('city', e.target.value)}
          >
            <option value="">Choose city</option>
            <option value="Festac">Festac</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
          </select>
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number*</label>
          <input
            id="phone" type="tel"
            placeholder="Please enter a valid phone number"
            value={fields.phone}
            onChange={e => set('phone', e.target.value)}
            className={errors.phone ? 'input-error' : ''}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        {/* Message */}
        <div className="form-group full">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message" rows={4} maxLength={100}
            placeholder="Tell us about your interests..."
            value={fields.message}
            onChange={e => set('message', e.target.value)}
            className={errors.message ? 'input-error' : ''}
          />
          <span className="char-note">
            <span>{fields.message.length}</span> / 100 characters
          </span>
          {errors.message && <span className="field-error">{errors.message}</span>}
        </div>

        {/* Radio */}
        <span className="group-label">How should we contact you?</span>
        <div className="radio-row">
          {['Phone', 'Email', 'Both'].map(opt => (
            <label key={opt}>
              <input
                type="radio" name="contact" value={opt}
                checked={fields.contact === opt}
                onChange={() => set('contact', opt)}
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Checkbox */}
        <span className="group-label">How did you hear about us?</span>
        <div className="check-row">
          {['Friend', 'TS Academy', 'Others'].map(opt => (
            <label key={opt}>
              <input
                type="checkbox" name="source" value={opt}
                checked={fields.source.includes(opt)}
                onChange={() => toggleSource(opt)}
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Submit */}
        <div className="submit-row">
          <button type="submit" className="btn-submit">Submit</button>
        </div>

        {/* Success */}
        {success && (
          <div className="form-success visible" role="alert">
            ✅ Thank you! Your message has been submitted successfully.
          </div>
        )}

      </form>
    </section>
  )
}
