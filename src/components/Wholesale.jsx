import { useState } from 'react';
import './Wholesale.css';

const INITIAL_FORM = { businessName: '', email: '', interest: '' };

export default function Wholesale() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
  }

  return (
    <section className="hhr-wholesale" id="wholesale">
      <div className="hhr-wholesale__copy">
        <div className="hhr-eyebrow hhr-wholesale__kicker">Wholesale / B2B</div>
        <h2 className="hhr-wholesale__title">Bring Horn Heritage Resins to your shelves</h2>
        <p className="hhr-wholesale__desc">
          We supply retailers, spas, wellness studios, and places of worship with traceable
          resin in bulk. Tell us about your business and we&rsquo;ll follow up with grades, lead
          times, and terms.
        </p>
      </div>
      <form className="hhr-wholesale__form" onSubmit={handleSubmit}>
        <input
          name="businessName"
          placeholder="Business name"
          value={form.businessName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Contact email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="interest"
          placeholder="What are you interested in?"
          value={form.interest}
          onChange={handleChange}
          required
        />
        <button type="submit" className="hhr-wholesale__submit">
          {submitted ? 'INQUIRY SENT' : 'SUBMIT INQUIRY'}
        </button>
      </form>
    </section>
  );
}
