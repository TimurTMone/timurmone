"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "They delivered the complete platform in weeks — what our previous agency quoted 6 months for. The AI features weren't even in the original scope, but they're now the core of our product.",
    name: "Enterprise Client",
    role: "Loyalty & Rewards Platform",
    project: "Full product delivery",
  },
  {
    quote:
      "They understood both the technology and our market. The system our team uses daily was built in a fraction of the time we expected. AI contract generation alone saved us thousands in legal fees.",
    name: "Real Estate Developer",
    role: "Emerging Market",
    project: "AI-powered CRM platform",
  },
  {
    quote:
      "Seven different surfaces — from guest phones to kitchen displays — all running off one system. Staff productivity increased dramatically from day one. This is what digital transformation actually looks like.",
    name: "Hospitality Group",
    role: "Resort Operations",
    project: "Multi-surface operating system",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            badge="Testimonials"
            title="What Clients Say"
            subtitle="Real feedback from real engagements."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="glow-card p-8 h-full flex flex-col">
                <Quote className="w-8 h-8 text-accent-cyan/30" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                  <div className="mt-1 text-xs font-mono text-accent-cyan">
                    {t.project}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
