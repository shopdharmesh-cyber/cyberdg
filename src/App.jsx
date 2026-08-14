import './App.css'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

const STATS = [
  { value: '200+', label: 'Assessments delivered' },
  { value: '24/7', label: 'SOC monitoring' },
  { value: '<15 min', label: 'Avg. incident response' },
  { value: '99.9%', label: 'Client retention' },
]

const SERVICES = [
  {
    title: 'Penetration Testing',
    description:
      'Simulate real-world attacks across web, mobile, network, and cloud environments before adversaries find the gaps.',
  },
  {
    title: 'Managed Detection & Response',
    description:
      '24/7 monitoring from our SOC with human-led triage and rapid containment, not just automated alerts.',
  },
  {
    title: 'Compliance & Risk',
    description:
      'SOC 2, ISO 27001, HIPAA, and PCI DSS readiness, audit support, and ongoing risk management without the busywork.',
  },
  {
    title: 'Cloud Security',
    description:
      'Harden AWS, Azure, and GCP environments against misconfiguration, identity sprawl, and drift.',
  },
  {
    title: 'Incident Response',
    description:
      'Rapid containment, forensics, and recovery support when something does go wrong, available around the clock.',
  },
  {
    title: 'Security Awareness Training',
    description:
      'Turn your employees into your first line of defense with phishing simulations and hands-on training.',
  },
]

const FEATURES = [
  {
    title: 'Real engineers, not just scanners',
    description:
      'Every engagement is led by senior practitioners who dig past automated findings to what actually matters.',
  },
  {
    title: 'Fixed-fee, transparent pricing',
    description:
      'Know the full cost upfront. No surprise change orders or hourly overruns once work begins.',
  },
  {
    title: 'Fast, actionable reporting',
    description:
      'Findings are prioritized by real business risk, with clear remediation steps your team can act on immediately.',
  },
  {
    title: 'Support after the engagement',
    description:
      'We stay available for retesting, questions, and guidance long after the final report is delivered.',
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Scope & Discovery',
    description: 'We map your environment and align on goals, timelines, and rules of engagement.',
  },
  {
    step: '02',
    title: 'Assessment & Testing',
    description: 'Our team actively tests your systems the way a real attacker would, safely and methodically.',
  },
  {
    step: '03',
    title: 'Reporting & Remediation',
    description: 'You get a clear, prioritized report plus direct access to engineers for remediation guidance.',
  },
  {
    step: '04',
    title: 'Ongoing Monitoring',
    description: 'Optional continuous monitoring and periodic retesting keep you secure as your systems evolve.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'CyberDG found critical issues our previous vendor missed entirely, and helped us fix them before our SOC 2 audit.',
    name: 'Priya Nandan',
    title: 'VP of Engineering, Fintech Startup',
  },
  {
    quote:
      'Their SOC team caught and contained an incident at 2am on a Sunday. That alone paid for the contract.',
    name: 'Marcus Webb',
    title: 'CTO, Healthcare SaaS',
  },
  {
    quote:
      'Clear reports, fair pricing, and engineers who actually explain the risk in plain language. Exactly what we needed.',
    name: 'Dana Ortiz',
    title: 'Head of IT, E-commerce Company',
  },
]

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="28" height="28">
                <path
                  d="M16 2 L28 7 V15 C28 22.5 22.8 28.6 16 30 C9.2 28.6 4 22.5 4 15 V7 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M11 16.5 L14.3 19.8 L21.5 12.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            CyberDG
          </a>
          <nav className="site-nav" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary btn-small" href="#contact">
            Get a Free Assessment
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <p className="eyebrow">Offensive &amp; defensive security, in one team</p>
            <h1>Cybersecurity that keeps up with you.</h1>
            <p className="hero-subtext">
              Penetration testing, 24/7 managed detection, and compliance support for teams who can&apos;t afford
              downtime. We find the gaps before attackers do.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Get a Free Assessment
              </a>
              <a className="btn btn-secondary" href="#process">
                See How It Works
              </a>
            </div>
          </div>
          <div className="stats-band">
            <div className="container stats-grid">
              {STATS.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Services</p>
              <h2>Security coverage across your entire stack</h2>
              <p className="section-subtext">
                From offensive testing to round-the-clock defense, we cover the services growing companies need to
                stay secure and compliant.
              </p>
            </div>
            <div className="card-grid">
              {SERVICES.map((service) => (
                <div className="card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Why CyberDG</p>
              <h2>Security partners, not just vendors</h2>
            </div>
            <div className="feature-grid">
              {FEATURES.map((feature) => (
                <div className="feature" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Process</p>
              <h2>How an engagement works</h2>
            </div>
            <div className="process-grid">
              {PROCESS_STEPS.map((item) => (
                <div className="process-step" key={item.step}>
                  <span className="step-number">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Testimonials</p>
              <h2>Trusted by security-conscious teams</h2>
            </div>
            <div className="testimonial-grid">
              {TESTIMONIALS.map((testimonial) => (
                <blockquote className="testimonial" key={testimonial.name}>
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                  <footer>
                    <span className="testimonial-name">{testimonial.name}</span>
                    <span className="testimonial-title">{testimonial.title}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="cta-band">
          <div className="container cta-inner">
            <h2>Ready to find out where you&apos;re exposed?</h2>
            <p>Get a free, no-obligation security assessment and see what a real attacker could find.</p>
            <a className="btn btn-primary" href="mailto:hello@cyberdg.example">
              Talk to Our Team
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" width="24" height="24">
                  <path
                    d="M16 2 L28 7 V15 C28 22.5 22.8 28.6 16 30 C9.2 28.6 4 22.5 4 15 V7 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M11 16.5 L14.3 19.8 L21.5 12.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              CyberDG
            </a>
            <p>Cybersecurity that keeps up with you.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <p className="footer-copy">&copy; {new Date().getFullYear()} CyberDG. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
