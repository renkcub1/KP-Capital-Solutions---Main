import {
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  Check,
  Landmark,
  LineChart,
  ShieldCheck,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import "./capital-strategy.css";

const paths = [
  {
    icon: BadgeDollarSign,
    num: "01",
    kicker: "READY TO FUND",
    title: "I Need Financing for an Opportunity",
    text: "You have a real estate transaction, business opportunity, acquisition, construction project or other capital need and are ready to explore financing.",
    detail: "We help identify financing aligned with the opportunity, your qualifications and the purpose of the capital.",
    action: "Explore Loan Programs",
    to: "/loan-programs",
    type: "internal"
  },
  {
    icon: ShieldCheck,
    num: "02",
    kicker: "NEEDS STRENGTHENING",
    title: "My Financial Profile Is Holding Me Back",
    text: "You need access to capital, but credit issues or other factors in your financial profile are preventing you from qualifying for the financing you need.",
    detail: "We help identify areas that may need attention and provide a path toward strengthening your financial profile and becoming better positioned for future funding.",
    action: "Explore Financial Profile Improvement",
    to: "/financial-profile-improvement",
    type: "internal"
  },
  {
    icon: BriefcaseBusiness,
    num: "03",
    kicker: "ESTABLISHED BUSINESS",
    title: "I Want Better Access to Business Capital",
    text: "Your business is established and generating revenue, but you may still be relying heavily on hard money, private lenders, personal credit or transaction-by-transaction financing.",
    detail: "Our Business Capital Assessment helps evaluate opportunities to establish business lines of credit and other reusable sources of capital.",
    action: "Start Your Assessment",
    to: "https://kpcapitalfunding.com/#/free-calculator",
    type: "external"
  }
];

const process = [
  [
    "01",
    "Assess",
    "Understand the business, current financial position, capital needs and existing access to financing."
  ],
  [
    "02",
    "Strengthen",
    "Address factors that may be limiting fundability, borrowing capacity or access to better financing options."
  ],
  [
    "03",
    "Strategize",
    "Determine which sources of capital are best suited for the business, transaction or investment purpose."
  ],
  [
    "04",
    "Fund",
    "Pursue financing aligned with the opportunity, qualifications and broader capital strategy."
  ],
  [
    "05",
    "Grow",
    "Build greater flexibility, reusable liquidity and access to capital for future opportunities."
  ]
];

export default function CapitalStrategy() {
  return (
    <main className="cs-page">

      <section className="cs-hero">
        <div className="container cs-hero-grid">
          <div>
            <p className="section-kicker light">CAPITAL STRATEGY</p>

            <h1>
              The Right Capital.
              <br />
              For Where You Are Today.
            </h1>

            <p>
              Some clients are ready to finance an opportunity today. Others
              need to strengthen their financial profile before the right
              financing becomes available. Established businesses may already
              qualify for capital but want better, more flexible ways to access
              it. The first step is identifying which path fits your situation.
            </p>
          </div>

          <div className="cs-hero-card">
            <LineChart />
            <span>THE OBJECTIVE</span>

            <strong>
              Use the right capital
              <br />
              for the right purpose.
            </strong>

            <p>
              Capital strategy is about understanding your position, choosing
              the right financing tools and building better access to capital
              over time.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-position">
        <div className="container">

          <div className="cs-heading">
            <p className="section-kicker">WHICH BEST DESCRIBES YOU?</p>

            <h2>Choose the Path That Fits Your Situation.</h2>

            <p>
              You do not need to understand every financing product before
              getting started. Find the situation that sounds most like where
              you are today.
            </p>
          </div>

          <div className="cs-path-grid">
            {paths.map(
              ({
                icon: Icon,
                num,
                kicker,
                title,
                text,
                detail,
                action,
                to,
                type
              }) => (
                <article key={num}>
                  <div className="cs-path-top">
                    <span>{num}</span>
                    <Icon />
                  </div>

                  <p className="cs-path-kicker">{kicker}</p>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <p className="cs-path-detail">{detail}</p>

                  {type === "external" ? (
                    <a className="cs-path-action" href={to}>
                      {action} <ArrowRight size={17} />
                    </a>
                  ) : (
                    <Link className="cs-path-action" to={to}>
                      {action} <ArrowRight size={17} />
                    </Link>
                  )}
                </article>
              )
            )}
          </div>

        </div>
      </section>

      <section className="cs-assessment">
        <div className="container cs-assessment-grid">

          <div>
            <p className="section-kicker light">BUSINESS CAPITAL ASSESSMENT</p>

            <h2>
              Take Your Business to the Next Level of Capital Access.
            </h2>

            <p>
              An established business should not have to start from scratch
              every time capital is needed. If your business is generating
              revenue and has an established operating history, there may be
              opportunities to build access to reusable business capital.
            </p>

            <p>
              Our Business Capital Assessment looks at the financial position
              behind the business and helps identify opportunities to pursue
              business lines of credit and other financing that can provide
              greater flexibility.
            </p>

            <ul>
              <li>
                <Check />
                Review the business financial profile
              </li>

              <li>
                <Check />
                Evaluate business credit and fundability
              </li>

              <li>
                <Check />
                Identify potential line-of-credit opportunities
              </li>

              <li>
                <Check />
                Build a stronger long-term capital position
              </li>
            </ul>
          </div>

          <div className="cs-assessment-card">
            <BriefcaseBusiness />

            <span>WHO THIS IS FOR</span>

            <h3>
              Established businesses ready for greater financial flexibility.
            </h3>

            <p>
              If your business is established and you want access to capital
              beyond relying on hard money, private lenders or personal credit
              every time a need arises, this is where to start.
            </p>

            <a href="https://kpcapitalfunding.com/#/free-calculator">
              Start Your Assessment <ArrowRight size={17} />
            </a>
          </div>

        </div>
      </section>

      <section className="cs-process">
        <div className="container">

          <div className="cs-heading">
            <p className="section-kicker">THE CAPITAL PATH</p>

            <h2>Assess. Strengthen. Strategize. Fund. Grow.</h2>

            <p>
              The objective is not simply obtaining the next loan. It is
              building a stronger financial position and greater access to
              capital as your business and opportunities grow.
            </p>
          </div>

          <div className="cs-process-grid">
            {process.map(([num, title, text]) => (
              <article key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="cs-leverage">
        <div className="container cs-leverage-grid">

          <div>
            <p className="section-kicker light">
              BUILD GREATER FINANCIAL FLEXIBILITY
            </p>

            <h2>
              A Business Line of Credit Can Change How You Approach
              Opportunity.
            </h2>

            <p>
              Hard money, private lending, bridge financing, DSCR and
              construction loans can all be valuable tools when they are used
              for the right purpose. The objective is not to eliminate those
              financing options.
            </p>

            <p>
              For qualified established businesses, a business line of credit
              can provide another layer of reusable liquidity for deposits,
              operating needs, project expenses and opportunities where
              flexible capital makes sense.
            </p>
          </div>

          <div className="cs-leverage-card">
            <Landmark />

            <span>LINE OF CREDIT STRATEGY</span>

            <strong>
              Preserve liquidity.
              <br />
              Create flexibility.
              <br />
              Keep capital available.
            </strong>

            <p>
              Use revolving business capital where it creates leverage while
              reserving transaction-specific financing for the purposes it
              serves best.
            </p>
          </div>

        </div>
      </section>

      <section className="cs-principle">
        <div className="container">

          <Target />

          <p className="section-kicker">THE PRINCIPLE</p>

          <h2>
            More Capital Is Not Always the Answer.
            <br />
            Better Access to Capital Is.
          </h2>

          <p>
            The goal is to give your business more options—so you can choose
            the right source of capital for the right purpose and be better
            positioned when the next opportunity appears.
          </p>

        </div>
      </section>

      <section className="final-cta cs-cta">
        <div className="container">

          <p className="section-kicker light">CHOOSE YOUR NEXT STEP</p>

          <h2>Where Are You Today?</h2>

          <p>
            Need financing now? Explore our loan programs. If your financial
            profile is preventing you from qualifying, start with Financial
            Profile Improvement. If your business is established and you want
            better access to reusable business capital, start your Business
            Capital Assessment.
          </p>

          <div className="actions centered">
            <a
              className="btn btn-gold"
              href="https://kpcapitalfunding.com/#/free-calculator" target="_blank" rel="noopener noreferrer"
            >
              Start Your Assessment <ArrowRight size={18} />
            </a>

            <Link className="btn btn-outline" to="/loan-programs">
              Explore Loan Programs
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}