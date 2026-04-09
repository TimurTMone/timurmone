import { ServiceTier } from "@/types";

export const services: ServiceTier[] = [
  {
    name: "AI Strategy Session",
    price: "$2,500",
    period: "half-day",
    description:
      "We audit your operations and deliver a concrete AI automation roadmap with ROI projections. You leave with a prioritized implementation plan — not a slide deck.",
    features: [
      "4-hour deep-dive into your operations",
      "AI opportunity mapping across your business",
      "Prioritized roadmap with ROI estimates",
      "Tech stack and architecture recommendation",
      "Written report delivered within 48 hours",
    ],
    cta: "Book Strategy Session",
    highlight: false,
  },
  {
    name: "AI Product Build",
    price: "$25K–$80K",
    period: "per product",
    description:
      "We design, build, and ship your AI-powered product end-to-end. Full-stack. Multi-platform. Production-ready. From concept to App Store in weeks.",
    features: [
      "Full product design & architecture",
      "Multi-platform (Web + iOS + Android)",
      "AI integration (vision, voice, NLP, agents)",
      "Admin dashboard & analytics",
      "Deployed to production with CI/CD",
      "30 days post-launch support",
    ],
    cta: "Start Your Build",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "AI Automation Retainer",
    price: "$15K",
    period: "/month",
    description:
      "Ongoing AI automation engineering embedded in your company. We build AI systems, train your team, and continuously optimize your operations.",
    features: [
      "Dedicated AI automation team",
      "40+ hours/month of hands-on building",
      "Architecture & code reviews",
      "AI agent development & deployment",
      "Team training on AI tools",
      "Weekly strategy calls",
    ],
    cta: "Discuss Retainer",
    highlight: false,
  },
];
