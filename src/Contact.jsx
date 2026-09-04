import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import "./contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/contact-submit.php", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to submit your request.");
      }

      setStatus("Thank you. Your request has been submitted.");
      form.reset();
    } catch (error) {
      setStatus(
        error.message ||
          "We could not submit your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <p className="section-kicker light">CONTACT KP CAPITAL SOLUTIONS</p>
          <h1>Let&apos;s Talk About<br />Your Next Opportunity.</h1>
          <p>
            Whether you&apos;re financing a real estate investment, looking for
            business capital, or determining the best path forward, tell us what
            you&apos;re working on.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-grid">
          <div className="contact-form-panel">
            <p className="section-kicker">START THE CONVERSATION</p>
            <h2>Tell Us How We Can Help.</h2>
            <p className="contact-intro">
              Share a few details about your financing need, business or
              opportunity. We&apos;ll review your information and determine the
              most appropriate next step.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label>
                  <span>Name *</span>
                  <input type="text" name="name" autoComplete="name" required />
                </label>

                <label>
                  <span>Email *</span>
                  <input type="email" name="email" autoComplete="email" required />
                </label>
              </div>

              <div className="contact-form-row">
                <label>
                  <span>Phone</span>
                  <input type="tel" name="phone" autoComplete="tel" />
                </label>

                <label>
                  <span>Company</span>
                  <input type="text" name="company" autoComplete="organization" />
                </label>
              </div>

              <label>
                <span>What Can We Help With? *</span>
                <select name="assistance" defaultValue="" required>
                  <option value="" disabled>Select an option</option>
                  <option value="real-estate-financing">Real Estate Financing</option>
                  <option value="business-financing">Business Financing</option>
                  <option value="business-line-of-credit">Business Line of Credit</option>
                  <option value="financial-profile-improvement">Financial Profile Improvement</option>
                  <option value="capital-strategy">Capital Strategy</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label>
                <span>Message *</span>
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Tell us about your financing need, business or opportunity."
                  required
                />
              </label>

              <button
                className="btn btn-navy contact-submit"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Request"}
                {!submitting && <ArrowRight size={18} />}
              </button>

              {status && (
                <p className="contact-form-status" role="status">
                  {status}
                </p>
              )}

              <p className="contact-form-note">
                By submitting this form, you agree that KP Capital Solutions may
                contact you regarding your inquiry.
              </p>
            </form>
          </div>

          <aside className="contact-sidebar">
            <div className="contact-info-card">
              <Building2 className="contact-card-icon" />
              <p className="contact-card-kicker">KP CAPITAL SOLUTIONS</p>
              <h2>Capital. Strategy. Growth.</h2>
              <p>
                Strategic financing guidance for real estate investors,
                established businesses and entrepreneurs.
              </p>

              <div className="contact-details">
                <a href="mailto:info@kpcapitalsolutions.com">
                  <Mail />
                  <span>
                    <small>Email</small>
                    info@kpcapitalsolutions.com
                  </span>
                </a>

                <a href="tel:+17703553353">
                  <Phone />
                  <span>
                    <small>Phone</small>
                    770-355-3353
                  </span>
                </a>

                <div>
                  <MapPin />
                  <span>
                    <small>Location</small>
                    Alpharetta, Georgia
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-assessment-card">
              <p className="contact-card-kicker">BUSINESS CAPITAL ASSESSMENT</p>
              <h3>Looking for Better Access to Reusable Business Capital?</h3>
              <p>
                If your business is established and generating revenue, start
                with our Business Capital Assessment to evaluate opportunities
                for business lines of credit and other flexible capital.
              </p>
              <ul>
                <li><Check /> Established businesses</li>
                <li><Check /> Business line-of-credit opportunities</li>
                <li><Check /> Greater capital flexibility</li>
              </ul>
              <a
                className="contact-assessment-link"
                href="https://kpcapitalfunding.com/#/free-calculator" target="_blank" rel="noopener noreferrer"
              >
                Start Your Assessment <ArrowRight size={17} />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}