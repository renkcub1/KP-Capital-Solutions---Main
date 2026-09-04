import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <p className="section-kicker light">LEGAL</p>
          <h1>Privacy Policy</h1>
          <p>Last Updated: September 4, 2026</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container legal-content-inner">
          <p>
            KP Capital Solutions ("KP Capital Solutions," "we," "us," or "our")
            respects your privacy and is committed to protecting the personal
            information you provide through kpcapitalsolutions.com and related
            services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information that you voluntarily provide when you
            contact us, request information, submit an assessment, inquire about
            financing, or otherwise communicate with us.
          </p>
          <p>This information may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Telephone number</li>
            <li>Company or business name</li>
            <li>Financing interests or requested services</li>
            <li>Information about a business, property, project, or financing need</li>
            <li>Information included in messages or documents you provide to us</li>
          </ul>

          <h2>2. Information Collected Automatically</h2>
          <p>
            When you visit our website, certain technical information may be
            collected automatically through cookies, analytics technologies,
            server logs, and similar tools. This may include your IP address,
            browser type, device information, pages visited, referring website,
            and general website usage information.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We may use information collected through our website to:</p>
          <ul>
            <li>Respond to inquiries and requests</li>
            <li>Evaluate financing needs and potential financing options</li>
            <li>Provide information about our products and services</li>
            <li>Communicate regarding an inquiry, application, or transaction</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Maintain business and transaction records</li>
            <li>Prevent fraud, misuse, or security threats</li>
            <li>Comply with applicable legal and regulatory requirements</li>
          </ul>

          <h2>4. Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share information
            when reasonably necessary to provide requested services, including
            with lenders, financing providers, processors, service providers,
            technology providers, professional advisers, and other parties
            involved in evaluating or facilitating a financing request.
          </p>
          <p>
            We may also disclose information when required by law, regulation,
            legal process, or governmental request, or when necessary to protect
            our rights, customers, business, or others.
          </p>

          <h2>5. Financing and Third-Party Providers</h2>
          <p>
            KP Capital Solutions may work with independent lenders, financial
            institutions, funding providers, and other third parties. Information
            may be provided to such parties when necessary to evaluate or
            facilitate financing requested by you.
          </p>
          <p>
            Third parties may maintain their own privacy policies and practices.
            KP Capital Solutions is not responsible for the privacy practices of
            independent third-party websites or service providers.
          </p>

          <h2>6. Cookies and Analytics</h2>
          <p>
            Our website may use cookies and similar technologies to operate the
            website, understand website traffic and usage, improve performance,
            and support marketing or analytics activities.
          </p>
          <p>
            You may control cookies through your browser settings. Disabling
            certain cookies may affect some website functionality.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We use reasonable administrative, technical, and organizational
            safeguards designed to protect personal information. However, no
            internet transmission or electronic storage system can be guaranteed
            to be completely secure.
          </p>

          <h2>8. Data Retention</h2>
          <p>
            We may retain personal information for as long as reasonably
            necessary to respond to inquiries, provide services, maintain
            business records, satisfy legal or regulatory obligations, resolve
            disputes, and enforce agreements.
          </p>

          <h2>9. Email, Telephone, and Electronic Communications</h2>
          <p>
            When you provide your contact information and submit an inquiry, you
            authorize KP Capital Solutions to contact you regarding that inquiry
            or requested service using the contact information you provided.
          </p>
          <p>
            Submission of a website inquiry does not constitute approval for
            financing and does not obligate you to enter into a financing
            transaction.
          </p>

          <h2>10. Children's Privacy</h2>
          <p>
            Our website and services are intended for adults and businesses and
            are not directed to children under 13. We do not knowingly collect
            personal information from children under 13.
          </p>

          <h2>11. Your Privacy Choices</h2>
          <p>
            You may contact us to request that we update or correct personal
            information you previously provided. Certain information may need to
            be retained for legal, regulatory, fraud-prevention, or legitimate
            business purposes.
          </p>

          <h2>12. Links to Other Websites</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content, security, or privacy practices of those
            websites. You should review the privacy policies of third-party sites
            before providing personal information.
          </p>

          <h2>13. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted on this page with an updated effective or revision date.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            Questions regarding this Privacy Policy may be directed to:
          </p>

          <p>
            <strong>KP Capital Solutions</strong>
            <br />
            Alpharetta, Georgia
            <br />
            Email:{" "}
            <a href="mailto:info@kpcapitalsolutions.com">
              info@kpcapitalsolutions.com
            </a>
            <br />
            Phone: <a href="tel:+17703553353">770-355-3353</a>
          </p>

          <div className="legal-back">
            <Link to="/">Return to KP Capital Solutions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}