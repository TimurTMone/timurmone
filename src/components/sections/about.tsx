"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { STATS } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <ScrollReveal>
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 text-xs font-mono font-medium tracking-wider uppercase text-accent-cyan bg-accent-cyan-glow border border-accent-cyan/20 rounded-full">
                About
              </span>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                We automate entire industries with AI.
              </h2>

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A small team of full-stack engineers and AI specialists who
                  build vertical operating systems — the kind of software that
                  runs entire business operations, not just features within them.
                  Real estate. Hospitality. Agriculture. Education. Industries
                  that Big Tech doesn&apos;t touch.
                </p>
                <p>
                  12+ AI-powered products shipped. No VC. No bloated agency
                  overhead. We understand the business first, then engineer the
                  system. That&apos;s why clients come back — and why we deliver
                  what most teams can&apos;t scope in the time it takes them to
                  write the proposal.
                </p>
                <p>
                  The philosophy is straightforward: AI is the multiplier. We
                  don&apos;t build dashboards — we build AI agents that make
                  dashboards obsolete.
                </p>
              </div>

              {/* Currently building */}
              <div className="mt-8 flex items-center gap-3 text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-muted-foreground">
                  Currently shipping:{" "}
                  <strong className="text-foreground">3 new products</strong>{" "}
                  &middot;{" "}
                  <strong className="text-foreground">Accepting 2 new clients</strong>
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glow-card p-6 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold font-mono text-accent-cyan">
                    {stat.value === 0 ? (
                      <span>$0</span>
                    ) : (
                      <>
                        {stat.label === "Revenue Generated" && "$"}
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix || ""}
                        />
                      </>
                    )}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
