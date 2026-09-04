import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Landmark,
  LineChart
} from "lucide-react";
import { Link } from "react-router-dom";
import "./blog.css";

const insights = [
  {
    icon: Landmark,
    category: "BUSINESS CAPITAL",
    title: "Why Established Businesses Should Build Reusable Access to Capital",
    text: "A business line of credit can complement private lending, bridge financing and other transaction-specific capital while giving an established business greater financial flexibility."
  },
  {
    icon: Building2,
    category: "REAL ESTATE CAPITAL",
    title: "DSCR vs. Hard Money: Choosing the Right Capital for the Deal",
    text: "Both can be valuable financing tools. The important question is when each structure makes sense for the property, business plan, timeline and exit strategy."
  },
  {
    icon: ChartNoAxesCombined,
    category: "FUNDING READINESS",
    title: "Getting Declined for Financing Doesn't Always Mean the Deal Is Over",
    text: "Credit, liquidity, documentation and other financial factors can affect fundability. Understanding what lenders see can help identify what needs to be strengthened."
  },
  {
    icon: BadgeDollarSign,
    category: "CAPITAL STRATEGY",
    title: "When a Business Line of Credit Makes More Sense Than Another Loan",
    text: "Not every capital need requires a separate term loan. Revolving business capital can provide reusable liquidity for certain operating, project and opportunity costs."
  },
  {
    icon: LineChart,
    category: "CAPITAL STRATEGY",
    title: "The Difference Between Having Capital and Having a Capital Strategy",
    text: "Access to financing is valuable. Knowing which source to use, when to use it and how it affects liquidity can create significantly greater financial flexibility."
  },
  {
    icon: BriefcaseBusiness,
    category: "BUSINESS CAPITAL",
    title: "What Lenders Look for in an Established Business",
    text: "Revenue, operating history, credit, cash flow and documentation can all influence financing options. Knowing how lenders evaluate the business helps you prepare."
  }
];

export default function Blog() {
  const featured = insights[0];
  const FeaturedIcon = featured.icon;

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <p className="section-kicker light">CAPITAL INSIGHTS</p>
          <h1>Better Information.<br />Better Capital Decisions.</h1>
          <p>Practical insights for real estate investors and established business owners navigating financing, fundability and capital strategy.</p>
        </div>
      </section>

      <section className="blog-featured">
        <div className="container">
          <div className="blog-section-heading">
            <div>
              <p className="section-kicker">FEATURED INSIGHT</p>
              <h2>Build Better Access to Capital.</h2>
            </div>
            <p>Financing decisions should support both the opportunity in front of you and the financial position you're building for the future.</p>
          </div>

          <article className="featured-insight">
            <div className="featured-insight-visual">
              <FeaturedIcon />
              <span>KP CAPITAL INSIGHTS</span>
              <strong>Capital.<br />Strategy.<br />Growth.</strong>
            </div>
            <div className="featured-insight-copy">
              <p className="blog-category">{featured.category}</p>
              <h2>{featured.title}</h2>
              <p>{featured.text}</p>
              <span className="blog-coming">Full Insight Coming Soon</span>
            </div>
          </article>
        </div>
      </section>

      <section className="blog-insights">
        <div className="container">
          <div className="blog-section-heading">
            <div>
              <p className="section-kicker">LATEST INSIGHTS</p>
              <h2>Understand Your Financing Options.</h2>
            </div>
            <p>Explore practical perspectives on real estate financing, business capital, funding readiness and building a stronger capital position.</p>
          </div>

          <div className="blog-grid">
            {insights.slice(1).map(({ icon: Icon, category, title, text }) => (
              <article className="blog-card" key={title}>
                <div className="blog-card-top">
                  <Icon />
                  <span>{category}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="blog-card-link">Full Insight Coming Soon</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-strategy">
        <div className="container blog-strategy-grid">
          <div>
            <p className="section-kicker light">PUT THE INSIGHTS TO WORK</p>
            <h2>Information Matters.<br />Your Capital Position Matters More.</h2>
            <p>Understanding financing is important, but the right strategy depends on your business, financial profile, opportunity and objectives.</p>
          </div>
          <div className="blog-strategy-card">
            <ChartNoAxesCombined />
            <span>CAPITAL STRATEGY</span>
            <strong>Know where you are.<br />Know your options.<br />Make the next move.</strong>
            <Link to="/capital-strategy">Explore Capital Strategy <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="final-cta blog-cta">
        <div className="container">
          <p className="section-kicker light">READY TO TALK CAPITAL?</p>
          <h2>Put the Right Capital Behind Your Next Opportunity.</h2>
          <p>Explore financing for a current opportunity or learn how KP Capital Solutions can help you build stronger access to business capital.</p>
          <div className="actions centered">
            <Link className="btn btn-gold" to="/loan-programs">Explore Loan Programs <ArrowRight size={18} /></Link>
            <a className="btn btn-outline" href="https://kpcapitalfunding.com/#/free-calculator">Start Your Assessment</a>
          </div>
        </div>
      </section>
    </main>
  );
}
