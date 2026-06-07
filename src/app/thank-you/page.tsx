import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Consultation Request Received | Vivid Extensions",
  description: "Thank you for submitting your Vivid Extensions consultation request.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#fffaf5] px-6 py-16 text-[#2a1913] sm:px-10">
      <Script id="google-ads-consultation-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-451946226/09hmCK63vrocEPLNwNcB'});
        `}
      </Script>

      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8a604a]">
          Vivid Extensions
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          Your consultation request has been received.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d463c]">
          Thank you for submitting your Vivid Extensions consultation request. Our team will review your details and follow up with the next step.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-[#2a1913] px-7 py-3 font-semibold text-[#fffaf5] transition hover:bg-[#6f4d3d]"
        >
          Return to Vivid Extensions
        </Link>
      </section>
    </main>
  );
}
