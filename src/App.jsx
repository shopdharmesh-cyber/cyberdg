import './App.css'

const PHONE = '+91 94565 47821'
const PHONE_LINK = 'tel:+919456547821'
const EMAIL = 'ppsolutionsindia@gmail.com'
const EMAIL_LINK = 'mailto:ppsolutionsindia@gmail.com'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

const STATS = [
  { value: '500+', label: 'CCTV installations' },
  { value: '4-in-1', label: 'Security, cyber, accounts & insurance' },
  { value: 'Same day', label: 'Site visit in Haldwani' },
  { value: '100%', label: 'Genuine products with warranty' },
]

const SERVICES = [
  {
    title: 'CCTV & Surveillance',
    icon: 'camera',
    description:
      'HD and IP camera installation with DVR/NVR setup for homes, shops, offices, and warehouses — watch your property live from your mobile, anywhere.',
  },
  {
    title: 'Security & Alarm Systems',
    icon: 'bell',
    description:
      'Video door phones, biometric attendance, access control, and intruder alarm systems to keep your premises protected round the clock.',
  },
  {
    title: 'Cybersecurity Services',
    icon: 'shield',
    description:
      'Secure Wi-Fi and network setup, device protection, data backup, and safe-banking guidance to keep your business and family safe online.',
  },
  {
    title: 'Accounting Services',
    icon: 'ledger',
    description:
      'Bookkeeping, GST registration and filing, income tax returns, and business accounting handled accurately and on time.',
  },
  {
    title: 'Insurance Solutions',
    icon: 'umbrella',
    description:
      'Life, health, motor, and general insurance from trusted providers — honest advice to pick the right cover for your family and business.',
  },
  {
    title: 'AMC & Support',
    icon: 'wrench',
    description:
      'Annual maintenance contracts, repairs, and upgrades for your CCTV and security systems, with prompt local service when you need it.',
  },
]

const FEATURES = [
  {
    title: 'Local team, prompt service',
    description:
      'Based right here in Haldwani — free site visits, quick installation, and support that reaches you the same day, not next week.',
  },
  {
    title: 'Genuine products, real warranty',
    description:
      'We install only branded, genuine equipment with proper bills and manufacturer warranty — no grey-market shortcuts.',
  },
  {
    title: 'Honest, transparent pricing',
    description:
      'Clear quotations before work begins. You pay what was agreed — no hidden charges or surprise add-ons.',
  },
  {
    title: 'One partner for everything',
    description:
      'Security, cyber safety, accounts, and insurance under one roof — one call to a team that already knows your setup.',
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Free Consultation',
    description: 'Call or visit us — we understand your requirement and inspect your site or documents free of cost.',
  },
  {
    step: '02',
    title: 'Clear Quotation',
    description: 'You get a written, itemized quote with genuine product options that fit your budget.',
  },
  {
    step: '03',
    title: 'Installation & Setup',
    description: 'Our technicians install, configure, and demo everything — including mobile viewing on your phone.',
  },
  {
    step: '04',
    title: 'Ongoing Support',
    description: 'AMC plans, quick repairs, GST filing reminders, and policy renewals — we stay with you after the sale.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'They installed 8 cameras at my shop in one day and set up viewing on my phone. Six months later, service is still just one call away.',
    name: 'Rajesh Bisht',
    title: 'Shop Owner, Haldwani',
  },
  {
    quote:
      'PP Solutions handles our GST filing and accounts every month. Accurate, on time, and they explain everything in simple language.',
    name: 'Meena Pandey',
    title: 'Restaurant Owner, Kathgodam',
  },
  {
    quote:
      'Took health and motor insurance through them. Honest advice, no pushy selling — and they helped us with the claim process too.',
    name: 'Suresh Rawat',
    title: 'Transport Business, Nainital',
  },
]

const SERVICE_ICONS = {
  camera: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="13" height="10" rx="2" />
      <path d="M15 10.5 L21 7 V17 L15 13.5" />
      <circle cx="8.5" cy="11" r="2.5" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 9 A6 6 0 0 0 6 9 C6 14 4 15.5 4 15.5 H20 C20 15.5 18 14 18 9 Z" />
      <path d="M10.3 19 A2 2 0 0 0 13.7 19" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 L20 5.5 V11 C20 16.5 16.5 20.8 12 22 C7.5 20.8 4 16.5 4 11 V5.5 Z" />
      <path d="M8.5 11.8 L11 14.3 L15.5 9.8" />
    </svg>
  ),
  ledger: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8 H16 M8 12 H16 M8 16 H12" />
    </svg>
  ),
  umbrella: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 A9 9 0 0 1 21 12 H3 A9 9 0 0 1 12 3 Z" />
      <path d="M12 12 V18.5 A2 2 0 0 1 8 18.5" />
      <path d="M12 3 V2" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 6.5 A4.5 4.5 0 0 0 8.9 12.1 L3.5 17.5 A2.1 2.1 0 0 0 6.5 20.5 L11.9 15.1 A4.5 4.5 0 0 0 17.5 9.5 L14.8 12.2 L11.8 9.2 Z" />
    </svg>
  ),
}

function BrandMark({ size = 28 }) {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" width={size} height={size}>
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
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <BrandMark />
            PP Solutions
          </a>
          <nav className="site-nav" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary btn-small" href={PHONE_LINK}>
            Call {PHONE}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <p className="eyebrow">Security &middot; Cyber &middot; Accounts &middot; Insurance — Haldwani, Uttarakhand</p>
            <h1>Complete protection for your home, shop, and business.</h1>
            <p className="hero-subtext">
              PP Solutions brings CCTV &amp; surveillance, cybersecurity, accounting, and insurance services under one
              roof — trusted local expertise, genuine products, and support that&apos;s always one call away.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={PHONE_LINK}>
                Book a Free Site Visit
              </a>
              <a className="btn btn-secondary" href="#services">
                Explore Our Services
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
              <h2>Everything you need, from one trusted partner</h2>
              <p className="section-subtext">
                From cameras that guard your premises to accounts and insurance that guard your future — PP Solutions
                covers it all.
              </p>
            </div>
            <div className="card-grid">
              {SERVICES.map((service) => (
                <div className="card" key={service.title}>
                  <span className="card-icon">{SERVICE_ICONS[service.icon]}</span>
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
              <p className="eyebrow">Why PP Solutions</p>
              <h2>Neighbours you can trust, service you can count on</h2>
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
              <h2>How we work</h2>
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
              <h2>Trusted across Haldwani and nearby towns</h2>
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
            <h2>Ready to secure your home or business?</h2>
            <p>
              Call us for a free site visit and quotation — CCTV, cybersecurity, accounts, or insurance, we&apos;re happy
              to help.
            </p>
            <div className="contact-details">
              <a href={PHONE_LINK}>{PHONE}</a>
              <span aria-hidden="true">&middot;</span>
              <a href={EMAIL_LINK}>{EMAIL}</a>
              <span aria-hidden="true">&middot;</span>
              <span>Haldwani, Uttarakhand</span>
            </div>
            <a className="btn btn-primary" href={PHONE_LINK}>
              Call Us Now
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <BrandMark size={24} />
              PP Solutions
            </a>
            <p>CCTV &middot; Cybersecurity &middot; Accounting &middot; Insurance — Haldwani, Uttarakhand</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <p className="footer-copy">&copy; {new Date().getFullYear()} PP Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
