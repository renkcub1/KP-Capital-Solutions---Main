import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function About(){
  return <main className="about-page">
    <section className="about-hero">
      <div className="container about-hero-inner">
        <p className="section-kicker light">ABOUT KP CAPITAL SOLUTIONS</p>
        <h1>Capital Guidance Built Around the Client.</h1>
        <p>KP Capital Solutions helps real estate investors and established businesses identify financing that fits the opportunity today while building a stronger position for the opportunities ahead.</p>
      </div>
    </section>

    <section className="about-founder">
      <div className="container founder-grid">
        <div className="founder-photo-wrap">
          <img src="/assets/images/ken-bg.png" alt="Kenneth Buckner, Founder and Capital Advisor" className="founder-photo" />
        </div>
        <div className="founder-copy">
          <p className="section-kicker">FOUNDER</p>
          <h2>Kenneth Buckner</h2>
          <p className="founder-title">FOUNDER &amp; CAPITAL ADVISOR — ALPHARETTA, GA</p>
          <blockquote>“I built KP Capital Solutions because too many qualified business owners and investors need more than a loan product. They need someone helping them understand the process, the options and the strategy behind the capital.”</blockquote>
          <p>Kenneth Buckner works with real estate investors and established businesses to help identify financing options aligned with the transaction, the business and the client’s broader goals.</p>
          <p>KP Capital Solutions offers tailored capital solutions to a diverse range of clients, from individual real estate investors to established businesses and mortgage professionals. With specialized loan programs, practical expertise and a commitment to service, KP Capital Solutions supports clients and partners throughout the financing process.</p>
          <p>Based in Alpharetta, Georgia, KP Capital Solutions serves clients nationwide. Ken personally oversees client engagements, helping clients evaluate financing opportunities and develop a capital strategy aligned with where they are today and where they want to go.</p>
          <div className="founder-points">
            <span><Check size={17}/> Real Estate &amp; Business Capital</span>
            <span><Check size={17}/> Capital Strategy</span>
            <span><Check size={17}/> Funding Readiness</span>
            <span><Check size={17}/> Alpharetta, GA · Serving Nationwide</span>
          </div>
        </div>
      </div>
    </section>

    <section className="about-philosophy">
      <div className="container about-philosophy-grid">
        <div>
          <p className="section-kicker light">OUR APPROACH</p>
          <h2>Funding Is the Goal. Strategy Creates More Options.</h2>
        </div>
        <div>
          <p>When a client qualifies, the objective is straightforward: identify capital that fits the purpose and move the opportunity forward.</p>
          <p>When the right financing is not available today, the conversation does not have to stop. We can help identify factors affecting fundability and create a clearer path toward stronger borrowing capacity.</p>
          <p>And when a client already has access to capital, we look for ways to use it more strategically—matching the right source of capital to the right purpose and building greater flexibility over time.</p>
        </div>
      </div>
    </section>

    <section className="about-principles">
      <div className="container">
        <p className="section-kicker">HOW WE THINK ABOUT CAPITAL</p>
        <h2>Use the Right Capital for the Right Purpose.</h2>
        <div className="about-principle-grid">
          <article><span>01</span><h3>Understand the Opportunity</h3><p>Start with what you are trying to accomplish, not with a predetermined product.</p></article>
          <article><span>02</span><h3>Know Your Position</h3><p>Understand the financial profile, timing, liquidity and qualifications that shape your available options.</p></article>
          <article><span>03</span><h3>Build Greater Leverage</h3><p>Use transaction-specific financing and flexible capital strategically so each tool serves the right purpose.</p></article>
        </div>
      </div>
    </section>

    <section className="final-cta about-cta">
      <div className="container">
        <p className="section-kicker light">LET’S TALK CAPITAL</p>
        <h2>Start With Where You Are Today.</h2>
        <p>Whether you are ready to finance an opportunity or want to strengthen your position for future capital, we can help you determine the next step.</p>
        <div className="actions centered"><Link className="btn btn-gold" to="/loan-programs">Explore Loan Programs <ArrowRight size={18}/></Link><Link className="btn btn-outline" to="/capital-strategy">Start Your Assessment</Link></div>
      </div>
    </section>
  </main>
}
