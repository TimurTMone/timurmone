import Link from "next/link";

type Venture = {
  name: string;
  tagline: string;
  href: string;
  status?: string;
};

const ventures: Venture[] = [
  {
    name: "Altai Labs",
    tagline: "AI Software Factory. We don't take projects. We build companies.",
    href: "https://altailabs.ai",
  },
  {
    name: "Altai Labs Club",
    tagline: "Learn AI by building real products. Weekly drops with prize pools.",
    href: "https://altailabs.club",
  },
  {
    name: "Yurtah.AI",
    tagline: "Trust and transaction infrastructure for emerging-market real estate.",
    href: "https://altailabs.ai/cases/yurtah-ai",
  },
  {
    name: "MalSat.AI",
    tagline: "AI-powered livestock and meat marketplace. Photo → breed, weight, price.",
    href: "https://altailabs.ai/cases/malsat-ai",
  },
  {
    name: "Solo OS",
    tagline: "The AI-powered operating system for solopreneurs.",
    href: "https://altailabs.ai/cases/solo-os",
  },
  {
    name: "Balam.AI",
    tagline: "Montessori super-app with AI teacher for new parents.",
    href: "https://altailabs.ai/cases/balam-ai",
  },
  {
    name: "JARAAN",
    tagline: "Civic app for Kyrgyzstan. See something? Make a difference.",
    href: "https://altailabs.xyz",
  },
  {
    name: "Ai-Prez",
    tagline: "AI-powered presidential briefing & command platform.",
    href: "https://altailabs.art",
  },
];

const essays: { title: string; href: string; date: string }[] = [
  // Essays go here. Placeholder for now.
];

const now = [
  "Shipping new ventures out of Altai Labs.",
  "Writing about vertical AI, emerging markets, and the solopreneur operating system.",
  "Taking on 2 co-founder conversations this quarter. Not more.",
];

const socials = [
  { label: "Email", href: "mailto:timur.mone@gmail.com" },
  { label: "GitHub", href: "https://github.com/TimurTMone" },
  { label: "Telegram", href: "https://t.me/timurmone" },
  { label: "LinkedIn", href: "https://linkedin.com/in/timurmone" },
  { label: "Altai Labs", href: "https://altailabs.ai" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 md:py-28">
      <div className="w-full max-w-[640px] flex flex-col gap-20">

        {/* Header */}
        <header>
          <div className="font-mono text-xs tracking-wide text-muted mb-10">
            tm
          </div>

          <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Timur Mone
          </h1>

          <p className="mt-8 text-lg md:text-xl leading-relaxed">
            Founder of{" "}
            <Link
              href="https://altailabs.ai"
              className="link"
            >
              Altai Labs
            </Link>
            , an AI software factory. I build vertical AI-native companies in
            industries no one else touches.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            Twelve ventures shipped. Zero VC taken. Revenue over rounds.
          </p>
        </header>

        <hr className="divider my-0" />

        {/* About */}
        <section>
          <h2 className="font-mono text-xs tracking-wider uppercase text-muted mb-8">
            About
          </h2>

          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              I&apos;m an engineer, founder, and builder. I spent the last years
              shipping software across industries that Silicon Valley ignores —
              real estate, livestock markets, hospitality, parenting, film,
              civic tech — and learned that most of the world still runs on
              spreadsheets and WhatsApp.
            </p>
            <p>
              AI changes that. Not as a feature bolted onto a dashboard — but
              as the substrate for an entirely new kind of software, one that
              collapses ten-person teams into one product and turns voice
              notes into contracts, photos into valuations, and industries
              into systems.
            </p>
            <p>
              I work with a small team of full-stack engineers and AI
              specialists. We ship fast. We stay independent. We build
              companies we&apos;d want to use ourselves.
            </p>
          </div>
        </section>

        <hr className="divider my-0" />

        {/* Ventures */}
        <section>
          <h2 className="font-mono text-xs tracking-wider uppercase text-muted mb-8">
            Ventures
          </h2>

          <ul className="space-y-6">
            {ventures.map((v) => (
              <li key={v.name}>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight group-hover:underline underline-offset-4 decoration-1">
                    {v.name}
                  </h3>
                  <p className="mt-1.5 text-muted leading-relaxed">
                    {v.tagline}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <hr className="divider my-0" />

        {/* Writing */}
        <section>
          <h2 className="font-mono text-xs tracking-wider uppercase text-muted mb-8">
            Writing
          </h2>

          {essays.length === 0 ? (
            <p className="text-muted italic">
              Essays on vertical AI, emerging-market software, and the
              solopreneur operating system. First ones coming soon.
            </p>
          ) : (
            <ul className="space-y-4">
              {essays.map((e) => (
                <li key={e.href} className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-muted shrink-0 w-24">
                    {e.date}
                  </span>
                  <Link href={e.href} className="link">
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <hr className="divider my-0" />

        {/* Now */}
        <section>
          <h2 className="font-mono text-xs tracking-wider uppercase text-muted mb-8">
            Now
          </h2>

          <ul className="space-y-3">
            {now.map((item, i) => (
              <li key={i} className="flex gap-4 text-lg leading-relaxed">
                <span className="text-muted shrink-0 font-mono text-sm pt-1">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-xs text-muted">
            Updated {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </section>

        <hr className="divider my-0" />

        {/* Contact */}
        <section>
          <h2 className="font-mono text-xs tracking-wider uppercase text-muted mb-8">
            Elsewhere
          </h2>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="link"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-4 pt-8 border-t text-xs font-mono text-muted flex justify-between">
          <span>© {new Date().getFullYear()} Timur Mone</span>
          <span>Built for signal, not noise.</span>
        </footer>
      </div>
    </main>
  );
}
