"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Gauge, Layers3, ShieldCheck, Sparkles } from "lucide-react";

const capabilities = [
  "Premium art direction system",
  "Responsive Next.js architecture",
  "Motion-ready interaction layer",
  "Search visibility foundations",
  "Local QA and browser checks",
  "Approval-gated integrations",
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Lenis",
  "Playwright",
];

const principles = [
  {
    icon: Layers3,
    title: "Structured for real projects",
    body: "A clean starter that can become a real website without undoing sandbox assumptions.",
  },
  {
    icon: Gauge,
    title: "Performance-minded by default",
    body: "Mobile-first layouts, restrained animation, optimized assets, and bundle review hooks.",
  },
  {
    icon: ShieldCheck,
    title: "Safe approval gates",
    body: "Deployment, APIs, domains, analytics, CMS, payments, and business systems stay off until approved.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-[#f7f3ec]">
      <section className="relative isolate px-6 py-6 sm:px-10 lg:px-14">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_8%,rgba(198,157,95,0.24),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.1),transparent_24%),linear-gradient(135deg,#090909_0%,#16130f_48%,#060606_100%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[680px] w-[680px] -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.03] blur-3xl" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#c99a5b] text-sm font-semibold text-[#100b08]">
              WS
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-white">WEBSITE STARTER</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">Premium foundation</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#capabilities" className="transition hover:text-white">Capabilities</a>
            <a href="#stack" className="transition hover:text-white">Stack</a>
            <a href="#gates" className="transition hover:text-white">Gates</a>
          </div>
          <a className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0d0907] transition hover:bg-[#c99a5b]" href="#gates">
            Review gates
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-14 pb-20 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-32">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
            <motion.div variants={reveal} className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c99a5b]/30 bg-[#c99a5b]/10 px-4 py-2 text-sm text-[#eccb9b]">
              <Sparkles size={16} /> Production-minded premium website starter
            </motion.div>
            <motion.h1 variants={reveal} className="max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">
              Build polished websites without messy rework later.
            </motion.h1>
            <motion.p variants={reveal} className="mt-8 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl">
              A clean foundation for high-end websites: strong frontend tooling, local QA, search-ready structure, and strict approval gates before anything goes live.
            </motion.p>
            <motion.div variants={reveal} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#capabilities" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c99a5b] px-7 py-4 font-semibold text-[#100b08] transition hover:bg-[#e8bd79]">
                Explore foundation <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </a>
              <a href="#stack" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
                View stack
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="rounded-[2rem] border border-white/10 bg-[#0f0d0b] p-7">
              <p className="text-sm uppercase tracking-[0.28em] text-[#c99a5b]">Readiness</p>
              <div className="mt-8 grid gap-4">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-white/78">
                    <CheckCircle2 className="text-[#c99a5b]" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="capabilities" className="border-y border-white/10 bg-[#0f0d0b] px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
              <Icon className="text-[#c99a5b]" size={28} />
              <h2 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h2>
              <p className="mt-4 leading-7 text-white/55">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 lg:p-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c99a5b]">Confirmed stack</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl">
            Modern frontend tools, ready for premium execution.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-white/70">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="gates" className="px-6 pb-20 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#f3e8dc] p-8 text-[#120d0a] sm:p-12 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8b6335]">Activation path</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              APIs, deployment, domains, analytics, and business systems stay gated.
            </h2>
          </div>
          <a className="rounded-full bg-[#120d0a] px-8 py-4 font-semibold text-white transition hover:bg-[#c99a5b] hover:text-[#120d0a]" href="mailto:hello@example.invalid">
            Placeholder CTA
          </a>
        </div>
      </section>
    </main>
  );
}
