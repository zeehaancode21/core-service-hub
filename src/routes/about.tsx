import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Target, Users, Award, Zap, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHero } from "./services";
import { Counter, Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: `About Us — ${SITE.name}` },
      { name: "description", content: `Learn about ${SITE.name}, Mysore's trusted IT, security and electrical solutions provider serving 800+ clients.` },
      { property: "og:title", content: `About ${SITE.name}` },
      { property: "og:description", content: `${SITE.name} — Mysore's trusted IT, security and electrical solutions provider.` },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const VALUES = [
  { icon: ShieldCheck, title: "Reliability", desc: "Same-day response, honest diagnosis and long-term accountability." },
  { icon: BadgeCheck, title: "Genuine Products", desc: "Only authorized brands, sealed packaging and real warranties." },
  { icon: Users, title: "Client-First", desc: "Transparent pricing and jargon-free explanations for every decision." },
  { icon: Zap, title: "Speed", desc: "Fast installs and rapid fixes — because downtime costs you money." },
];

const CERTS = ["Hikvision Certified", "CP Plus Partner", "Dell Authorized Reseller", "HP Service Partner", "Licensed Electrical Contractor"];

function About() {
  return (
    <>
      <div className="-mt-16">
  <PageHero
    eyebrow="About Wintech"
    title="The last vendor call you'll ever need to make."
    sub={
      <div className="hero-content-wrapper">
        {/* New Tagline - Forced into a single line */}
        <div className="hero-tagline">
          <span className="pill">
            <span className="icon">🛡️</span> Secure
          </span>
          <span className="dot">·</span>
          <span className="pill">
            <span className="icon">⚡</span> Server-ready
          </span>
          <span className="dot">·</span>
          <span className="pill">
            <span className="icon">🔌</span> Wired
          </span>
          <span className="dot">·</span>
          <span className="pill">
            <span className="icon">📶</span> Wireless
          </span>
          <span className="dot">—</span>
          <span className="accent-badge">
            <span className="icon">✨</span> total coverage
          </span>
        </div>

        {/* Original Description */}
        <div className="hero-description">
          Whether it's protecting your business with CCTV, setting up office IT infrastructure, deploying servers & networks, repairing desktops and laptops, installing printers, implementing biometric attendance, providing GST billing software, or handling electrical works, we deliver complete technology solutions that simply work.
        </div>
      </div>
    }
  />
</div>

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.35),transparent_60%)]" />
              <div className="absolute inset-0 grid place-items-center text-white">
                <div className="text-center px-6">
                  <div className="font-display text-6xl sm:text-7xl font-extrabold">
                    <Counter to={12} suffix="+" />
                  </div>
                  <div className="mt-3 text-lg text-white/85">Years serving Mysore</div>
                  <div className="mt-8 grid grid-cols-2 gap-6 max-w-xs mx-auto">
                    <Stat n={2500} suf="+" label="Projects" />
                    <Stat n={800} suf="+" label="Clients" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Story</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">
                Built on trust. Grown by referrals.
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {SITE.name} started as a small CCTV and computer service shop in Mysore.
                  Over the last decade we've grown into a full-service partner for businesses
                  across the city — installing, maintaining and upgrading everything from
                  security cameras and servers to biometric access control and industrial
                  electrical panels.
                </p>
                <p>
                  What hasn't changed is how we work: pick up the phone, show up on time,
                  explain the problem clearly, and stand behind every job.
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <MissionCard icon={Target} title="Our Mission" desc="Deliver honest, reliable technology and electrical services that let our clients focus on their business." />
                <MissionCard icon={Award} title="Our Promise" desc="Genuine products, certified engineers and after-sales support that actually shows up." />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-surface">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">What We Stand For</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">Our core values</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="h-full rounded-xl bg-card border border-border p-6 hover:border-accent hover:shadow-lg transition-all">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-pad">
        <div className="container-x text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Certifications & Partnerships</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">Authorized. Trained. Trusted.</h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {CERTS.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                <BadgeCheck className="h-4 w-4 text-accent" />
                {c}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/contact" className="btn-primary">Work with us</Link>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style>{`
  /* Hero Content Wrapper - Remove extra space */
  .hero-content-wrapper {
    width: 100%;
    max-width: 100%;
    overflow: visible;
    margin-top: -0.5rem;
  }

  /* Remove space from PageHero */
  .page-hero {
    padding-top: 0 !important;
    padding-bottom: 0.5rem !important;
  }

  /* Tagline Styles - Force single line */
  .hero-tagline {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.2rem 0.3rem;
    font-size: 1rem;
    font-weight: 500;
    color: #1a3b54;
    padding: 0.4rem 1.2rem;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 60px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    width: fit-content;
    max-width: 100%;
    animation: taglinePulse 3s ease-in-out infinite alternate;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
    flex-wrap: nowrap;
    overflow: visible;
    white-space: nowrap;
  }

  .hero-tagline:hover {
    box-shadow: 0 8px 30px rgba(26, 76, 122, 0.08);
  }

  .hero-tagline .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.15rem;
    padding: 0.1rem 0.6rem;
    background: rgba(26, 76, 122, 0.06);
    border-radius: 40px;
    font-weight: 600;
    color: #0b2a44;
    border: 1px solid rgba(26, 76, 122, 0.08);
    transition: all 0.25s ease;
    cursor: default;
    white-space: nowrap;
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  .hero-tagline .pill:hover {
    background: rgba(26, 76, 122, 0.12);
    transform: translateY(-2px) scale(1.02);
  }

  .hero-tagline .pill .icon {
    font-size: 0.8rem;
    line-height: 1;
  }

  .hero-tagline .dot {
    color: #8aaec9;
    font-weight: 300;
    margin: 0 0.05rem;
    flex-shrink: 0;
    font-size: 0.85rem;
  }

  .hero-tagline .accent-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.15rem;
    padding: 0.1rem 0.9rem;
    background: linear-gradient(135deg, #1a4c7a, #2b7aaa);
    color: white;
    border-radius: 40px;
    font-weight: 600;
    box-shadow: 0 4px 14px rgba(26, 76, 122, 0.25);
    transition: all 0.3s ease;
    cursor: default;
    white-space: nowrap;
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  .hero-tagline .accent-badge:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(26, 76, 122, 0.35);
  }

  .hero-tagline .accent-badge .icon {
    font-size: 0.8rem;
  }

  /* Description Styles */
  .hero-description {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #1f3b4f;
    padding: 0.8rem 1.2rem;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.4);
    width: 100%;
    max-width: 100%;
    overflow: visible;
  }

  /* Animations */
  @keyframes taglinePulse {
    0% {
      box-shadow: 0 2px 12px rgba(26, 76, 122, 0.02);
      border-color: rgba(255, 255, 255, 0.4);
    }
    100% {
      box-shadow: 0 8px 32px rgba(26, 76, 122, 0.08);
      border-color: rgba(26, 76, 122, 0.15);
    }
  }

  @keyframes floatIn {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .hero-tagline {
    animation: taglinePulse 3s ease-in-out infinite alternate, floatIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .hero-description {
    animation: floatIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
    opacity: 0;
  }

  /* Responsive - Force single line on all screens */
  @media (max-width: 768px) {
    .hero-tagline {
      font-size: 0.75rem;
      padding: 0.3rem 0.8rem;
      width: auto;
      justify-content: flex-start;
      flex-wrap: nowrap;
      overflow-x: auto;
      white-space: nowrap;
      gap: 0.15rem 0.2rem;
    }
    .hero-tagline .pill {
      padding: 0.08rem 0.4rem;
      font-size: 0.7rem;
    }
    .hero-tagline .accent-badge {
      padding: 0.08rem 0.6rem;
      font-size: 0.7rem;
    }
    .hero-tagline .pill .icon {
      font-size: 0.65rem;
    }
    .hero-tagline .accent-badge .icon {
      font-size: 0.65rem;
    }
    .hero-tagline .dot {
      font-size: 0.7rem;
    }
    .hero-description {
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
    }
  }

  @media (max-width: 480px) {
    .hero-tagline {
      font-size: 0.6rem;
      padding: 0.2rem 0.6rem;
      gap: 0.1rem 0.15rem;
    }
    .hero-tagline .pill {
      padding: 0.05rem 0.3rem;
      font-size: 0.6rem;
    }
    .hero-tagline .accent-badge {
      padding: 0.05rem 0.4rem;
      font-size: 0.6rem;
    }
    .hero-tagline .pill .icon {
      font-size: 0.55rem;
    }
    .hero-tagline .accent-badge .icon {
      font-size: 0.55rem;
    }
    .hero-tagline .dot {
      font-size: 0.6rem;
    }
    .hero-description {
      font-size: 0.8rem;
      padding: 0.4rem 0.7rem;
    }
  }

  /* Force single line on all devices */
  .hero-tagline {
    display: flex !important;
    flex-wrap: nowrap !important;
    white-space: nowrap !important;
    overflow: visible !important;
  }
`}</style>
    </>
  );
}

function Stat({ n, suf, label }: { n: number; suf?: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold"><Counter to={n} suffix={suf} /></div>
      <div className="text-xs text-white/70 mt-1">{label}</div>
    </div>
  );
}

function MissionCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/5 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}