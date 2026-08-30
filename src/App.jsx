import { Routes, Route, Link } from "react-router-dom";
import { ArrowRight, Building2, ChartNoAxesCombined, Landmark, Menu } from "lucide-react";

const programs = [
  { icon: Building2, title: "Real Estate Capital", text: "Fix & flip, DSCR, new construction, bridge, multifamily and commercial financing." },
  { icon: Landmark, title: "Business Capital", text: "Lines of credit, SBA, working capital, equipment financing and business term loans." },
  { icon: ChartNoAxesCombined, title: "Capital Strategy", text: "Strengthen your financial profile, improve fundability and create greater borrowing leverage." },
];

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">CAPITAL. STRATEGY. GROWTH.</p>
            <h1>Funding Solutions Built for Your Vision.</h1>
            <p className="hero-text">Real estate capital. Business financing. Smarter capital strategies. KP Capital Solutions helps investors and established businesses access the capital they need today while strengthening their position for tomorrow.</p>
            <div className="actions">
              <Link className="btn btn-gold" to="/loan-programs">Explore Loan Programs <ArrowRight size={18} /></Link>
              <Link className="btn btn-outline" to="/capital-strategy">Start Your Assessment</Link>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true"><span>K</span><strong>P</strong></div>
        </div>
      </section>

      <section className="path-section">
        <div className="container">
          <p className="section-kicker">ONE PARTNER. MULTIPLE PATHS TO CAPITAL.</p>
          <h2>Start Where You Are. Build Toward Where You're Going.</h2>
          <div className="program-grid">
            {programs.map(({ icon: Icon, title, text }) => (
              <article className="program-card" key={title}>
                <Icon size={34} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to={title === "Capital Strategy" ? "/capital-strategy" : "/loan-programs"}>Learn More <ArrowRight size={16} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="strategy-section">
        <div className="container strategy-grid">
          <div>
            <p className="section-kicker">MORE THAN AN APPROVAL</p>
            <h2>Capital Is More Powerful When There's a Strategy Behind It.</h2>
          </div>
          <div>
            <p>Some clients are ready to fund today. Others need to strengthen their financial profile first. And some already qualify but may be relying on capital that is more expensive or less flexible than necessary.</p>
            <p>We help identify where you are today, what may be limiting your options, and the right path toward greater access, flexibility and leverage.</p>
            <Link className="text-link" to="/capital-strategy">Discover Your Capital Strategy <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Placeholder({ title }) {
  return <main className="placeholder"><div className="container"><p className="section-kicker">KP CAPITAL SOLUTIONS</p><h1>{title}</h1><p>This page is being developed as part of the new KP Capital Solutions experience.</p></div></main>;
}

function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand"><div className="mini-shield"><span>K</span><strong>P</strong></div><div><b>CAPITAL</b><small>SOLUTIONS</small></div></Link>
        <nav>
          <Link to="/">Home</Link><Link to="/about">About</Link><Link to="/loan-programs">Loan Programs</Link><Link to="/capital-strategy">Capital Strategy</Link><Link to="/blog">Blog</Link><Link to="/contact">Contact</Link>
        </nav>
        <Link className="nav-cta" to="/capital-strategy">Start Your Assessment</Link>
        <button className="menu-button" aria-label="Open menu"><Menu /></button>
      </div>
    </header>
  );
}

function App() {
  return <><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<Placeholder title="About" />} /><Route path="/loan-programs" element={<Placeholder title="Loan Programs" />} /><Route path="/capital-strategy" element={<Placeholder title="Capital Strategy" />} /><Route path="/blog" element={<Placeholder title="Capital Insights" />} /><Route path="/contact" element={<Placeholder title="Contact" />} /></Routes></>;
}

export default App;
