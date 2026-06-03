"use client";

import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const primaryCta = "Apply for an Extension Consultation";
const consultationAnchor = "https://www.jotform.com/form/261525089655061";
const imageBase = "/draft-extension-photos/gate3";
const supportingNote = "Each extension consultation request is personally reviewed and coordinated by our team.";

const vividStandardPoints = [
  "Soft, silky texture selected to feel close to natural hair.",
  "Consistent quality from root to end.",
  "Full, thick ends without excessive tapering.",
  "Designed to help minimize tangling and matting with proper care.",
  "Selected for a smooth, refined finish.",
];

const blendingPoints = [
  "Multi-dimensional tones for a more natural appearance.",
  "Expert shade matching for a seamless finish.",
  "Customizable colour options to match or enhance your hair.",
  "Designed to blend with natural movement and growth patterns.",
  "A polished result that feels natural when properly matched and installed.",
];

const longevityPoints = [
  "Designed to withstand daily styling and wear.",
  "Holds up beautifully to heat styling when properly maintained.",
  "Selected to help minimize unnecessary shedding with proper care.",
  "Maintains softness and shine with proper maintenance.",
  "Can often be reused through move-up appointments when maintained correctly.",
];

const versatilityPoints = [
  "Can be curled, waved, or smoothed like natural hair.",
  "Holds styling beautifully with proper care.",
  "Adds length, fullness, volume, or all three.",
  "Creates flexibility for everyday styling and special occasions.",
];

const detailCards = [
  {
    title: "Cuticle alignment matters",
    body: "Hair with aligned cuticles is designed to remain smoother, softer, and more manageable than lower-quality alternatives.",
  },
  {
    title: "Dimension creates a natural blend",
    body: "Multi-tonal extension colours often blend more naturally because real hair contains subtle shifts in shade, brightness, and depth.",
  },
  {
    title: "Less effort, more polish",
    body: "Higher-quality extension hair tends to require less styling to look refined because the hair maintains a smoother, more natural finish.",
  },
  {
    title: "A better long-term investment",
    body: "With proper care and maintenance, quality extension hair can often be reused through move-up appointments, making it a more considered long-term choice.",
  },
];

const processSteps = [
  {
    title: "Apply",
    body: "Submit your consultation request and share your goals.",
  },
  {
    title: "Review",
    body: "Our team reviews your request, photos, hair history, and preferred availability.",
  },
  {
    title: "Coordinate",
    body: "A Vivid coordinator reaches out to arrange the best available virtual consultation time.",
  },
  {
    title: "Recommend",
    body: "Your specialist reviews the best next step for your colour, length, method, quantity, and maintenance.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a604a]">{children}</p>;
}

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a href={consultationAnchor} className={`group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#2a1913] px-7 py-4 font-semibold text-[#fffaf5] transition hover:bg-[#6f4d3d] ${className}`}>
      {primaryCta} <ArrowRight className="transition group-hover:translate-x-1" size={18} />
    </a>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-2.5 sm:mt-7 sm:gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-[1.15rem] border border-[#2a1913]/10 bg-white/55 px-3.5 py-2.5 text-sm font-semibold leading-6 text-[#3d2a22] sm:px-4 sm:py-3">
          <CheckCircle2 className="mt-0.5 shrink-0 text-[#8a604a]" size={18} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EditorialSection({
  id,
  eyebrow,
  headline,
  body,
  points,
  image,
  imageAlt,
  reverse = false,
  imagePosition = "object-[50%_36%]",
  imageScale = "scale-100",
}: {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  points: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  imagePosition?: string;
  imageScale?: string;
}) {
  return (
    <section id={id} className="bg-[#fffaf5] px-5 py-18 sm:px-8 sm:py-20 lg:px-12">
      <div className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "" : ""}`}>
        <figure className={`relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#2a1913]/10 bg-[#e9d8c8] shadow-xl shadow-[#7c5a49]/10 lg:min-h-[620px] ${reverse ? "lg:order-2" : ""}`}>
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover ${imagePosition} ${imageScale}`} />
        </figure>
        <div className={reverse ? "lg:order-1" : ""}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-[#261814] sm:text-6xl">{headline}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b3329]/74">{body}</p>
          <BulletList items={points} />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f1ea] text-[#261814]">
      <Script id="vivid-extensions-consultations-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Vivid Extensions Consultation Request",
          provider: {
            "@type": "HairSalon",
            name: "Vivid Salon",
            url: "https://vividbydv.ca",
          },
          areaServed: ["Mississauga", "Port Credit", "Toronto"],
          serviceType: "Hair extension consultation request",
          description: "Consultation-request-first Vivid Extensions planning built around premium hair quality, colour blending, method selection, and long-term maintenance.",
        })}
      </Script>

      <section className="relative isolate px-5 pb-14 pt-5 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_10%,rgba(213,176,145,0.36),transparent_32%),radial-gradient(circle_at_88%_4%,rgba(255,255,255,0.76),transparent_34%),linear-gradient(135deg,#fffaf5_0%,#f3e5d8_54%,#dfc5b2_100%)]" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-[#2a1913]/10 pb-4">
          <a href="#top" className="group leading-none">
            <p className="text-sm font-semibold tracking-[0.28em] text-[#2a1913]">VIVID EXTENSIONS</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-[#7b5847]">Consultation Request</p>
          </a>
          <div className="hidden items-center gap-5 text-sm text-[#4b3329]/72 lg:flex">
            <a href="#standard" className="transition hover:text-[#2a1913]">Standard</a>
            <a href="#blending" className="transition hover:text-[#2a1913]">Blend</a>
            <a href="#longevity" className="transition hover:text-[#2a1913]">Longevity</a>
            <a href="#versatility" className="transition hover:text-[#2a1913]">Styling</a>
            <a href="#details" className="transition hover:text-[#2a1913]">Details</a>
            <a href="#consultation" className="transition hover:text-[#2a1913]">Process</a>
          </div>
          <a href={consultationAnchor} className="hidden min-h-14 items-center justify-center gap-3 rounded-full bg-[#2a1913] px-7 py-4 font-semibold text-[#fffaf5] transition hover:bg-[#6f4d3d] md:inline-flex">
            {primaryCta} <ArrowRight size={18} />
          </a>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl gap-5 pb-8 pt-6 sm:gap-8 sm:pt-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-14 lg:pb-16 lg:pt-16">
          <motion.div initial="visible" animate="visible" transition={{ staggerChildren: 0.1 }} className="relative z-10 order-1 max-w-3xl lg:order-1">
            <motion.p variants={reveal} className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8a604a]">
              Vivid Extensions
            </motion.p>
            <motion.h1 variants={reveal} className="mt-3 text-[2.75rem] font-semibold leading-[0.94] tracking-[-0.06em] text-[#160d0a] sm:mt-4 sm:text-6xl lg:text-7xl">
              Luxury hair. Seamless results.
            </motion.h1>
            <motion.p variants={reveal} className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[#2f1e17] sm:text-xl sm:leading-8">
              Vivid Extensions are designed for soft movement, natural blend, and a polished finish from root to end. Every journey begins with a personal virtual consultation so our team can understand your goals and guide you toward the right recommendation.
            </motion.p>
            <motion.div variants={reveal} className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton className="w-full sm:w-auto" />
            </motion.div>
            <motion.p variants={reveal} className="mt-4 max-w-xl text-sm leading-6 text-[#4b3329]/70">
              {supportingNote}
            </motion.p>
          </motion.div>

          <motion.figure initial={{ opacity: 1, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} className="relative order-2 min-h-[280px] overflow-hidden rounded-[2rem] border border-[#2a1913]/10 bg-white shadow-2xl shadow-[#7c5a49]/14 sm:min-h-[560px] lg:order-2 lg:min-h-[650px]">
            <Image src={`${imageBase}/hero-backup.jpg`} alt="Mobile crop-safe Vivid Extensions result" fill priority sizes="100vw" className="object-cover object-[50%_22%] sm:hidden" />
            <Image src={`${imageBase}/hero-primary.jpg`} alt="Premium Vivid Extensions result showing soft movement and polished length" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="hidden object-cover object-[50%_22%] sm:block" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_60%,rgba(38,24,20,0.34)_100%)]" />
            <figcaption className="absolute bottom-4 left-4 right-4 rounded-[1.35rem] bg-[#fffaf5]/96 p-4 text-[#1f120d] shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-sm sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6f4734]">Consultation first</p>
              <p className="mt-2 text-2xl font-bold leading-tight tracking-[-0.04em]">A refined recommendation before the final plan.</p>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <EditorialSection
        id="standard"
        eyebrow="The Vivid Standard"
        headline="Premium quality you can see and feel."
        body="Vivid Extensions are selected for softness, movement, and consistency. From the first touch to the final style, the goal is hair that feels natural, photographs beautifully, and maintains a polished finish with proper care."
        points={vividStandardPoints}
        image={`${imageBase}/why-consultation.jpg`}
        imageAlt="Polished Vivid Extensions result supporting the premium quality section"
        imagePosition="object-[50%_28%]"
        imageScale="scale-[1.04]"
      />

      <EditorialSection
        id="blending"
        eyebrow="Colour & Blending"
        headline="Blended to look effortless."
        body="Natural hair is never one flat shade. Vivid Extensions are matched with dimension, tone, and movement in mind, helping create a softer blend that complements your colour rather than appearing separate from it."
        points={blendingPoints}
        image={`${imageBase}/blend-detail-1.jpg`}
        imageAlt="Close-up dimensional colour blend for Vivid Extensions"
        reverse
      />

      <EditorialSection
        id="longevity"
        eyebrow="Designed for Longevity"
        headline="Designed for beauty beyond the first wear."
        body="Premium extension hair should not only look beautiful on day one. With proper care and maintenance, quality hair can maintain softness, shine, and wearability through the life of the installation."
        points={longevityPoints}
        image={`${imageBase}/gallery-proof.jpg`}
        imageAlt="Vivid Extensions result showing movement and long polished finish"
        imagePosition="object-[50%_30%]"
      />

      <section id="versatility" className="border-y border-[#2a1913]/10 bg-[#ead7c6] px-5 py-18 text-[#261814] sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionEyebrow>Styling Versatility</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">One installation. Multiple ways to wear it.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b3329]/76">
              Whether the goal is length, fullness, volume, dimension, or a complete transformation, Vivid Extensions are designed to move with your styling routine while keeping the finish soft and polished.
            </p>
            <BulletList items={versatilityPoints} />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <figure className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-[#2a1913]/10 bg-[#e9d8c8] shadow-xl shadow-[#7c5a49]/10">
              <Image src={`${imageBase}/gallery-length.jpg`} alt="Long Vivid Extensions result showing styling versatility" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover object-[50%_30%]" />
            </figure>
            <figure className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-[#2a1913]/10 bg-[#e9d8c8] shadow-xl shadow-[#7c5a49]/10 md:mt-12">
              <Image src={`${imageBase}/gallery-density.jpg`} alt="Vivid Extensions result showing soft fullness and styled density" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover object-[50%_32%]" />
            </figure>
          </div>
        </div>
      </section>

      <section id="details" className="bg-[#fffaf5] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>The Craft</SectionEyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-[#261814] sm:text-6xl">
            The Details That Make the Difference
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {detailCards.map(({ title, body }) => (
              <article key={title} className="rounded-[1.5rem] border border-[#2a1913]/10 bg-[#f8f1ea] p-6 shadow-lg shadow-[#7c5a49]/7">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#261814]">{title}</h3>
                <p className="mt-4 leading-7 text-[#4b3329]/72">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="bg-[#f8f1ea] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionEyebrow>Why Consultation Comes First</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-[#261814] sm:text-6xl">
              Your result begins with the right match.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b3329]/74">
              Extensions are not one-size-fits-all. Colour, length, density, method, lifestyle, and maintenance all affect the final result. Every Vivid Extensions journey begins with a personal virtual consultation so our team can review your goals and recommend the right path before anything is ordered or booked.
            </p>
            <div className="mt-8">
              <CtaButton />
              <p className="mt-4 max-w-xl text-sm leading-6 text-[#4b3329]/70">{supportingNote}</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map(({ title, body }, index) => (
              <article key={title} className="rounded-[1.5rem] border border-[#2a1913]/10 bg-[#fffaf5] p-6 shadow-lg shadow-[#7c5a49]/7">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8a604a]">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#261814]">{title}</h3>
                <p className="mt-3 leading-7 text-[#4b3329]/72">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation-request" className="bg-[#fffaf5] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] bg-[#2a1913] text-[#fffaf5] shadow-2xl shadow-[#2a1913]/18 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="p-8 sm:p-12">
            <SectionEyebrow>Your Next Step</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              Begin with a personal consultation.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#f7e7da]/76">
              Share your goals, preferred availability, and optional photos. Our team will review your request and coordinate the best available virtual consultation time.
            </p>
            <div className="mt-8">
              <a className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#fffaf5] px-8 py-4 font-semibold text-[#2a1913] transition hover:bg-[#e5cbb8]" href={consultationAnchor}>
                {primaryCta} <ArrowRight size={18} />
              </a>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[#f7e7da]/72">{supportingNote}</p>
            </div>
          </div>
          <figure className="relative min-h-[260px] sm:min-h-[420px] lg:min-h-full">
            <img src={`${imageBase}/final-cta-backup.jpg`} alt="Final Vivid Extensions consultation request call-to-action image" className="absolute inset-0 h-full w-full object-cover object-[50%_30%]" />
          </figure>
        </div>
      </section>

      <footer className="border-t border-[#2a1913]/10 bg-[#fffaf5] px-5 pb-24 pt-8 text-sm text-[#4b3329]/62 sm:px-8 sm:pb-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>Vivid Extensions. Consultation-request-first extension planning under Vivid Salon.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} /> Personally reviewed and coordinated by our team.
          </div>
        </div>
      </footer>

    </main>
  );
}
