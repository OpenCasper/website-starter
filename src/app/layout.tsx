import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivid Extensions Consultation Request | Vivid Salon",
  description:
    "Consultation-request-first Vivid Extensions planning built around premium hair quality, colour blending, method selection, styling versatility, and long-term maintenance.",
  keywords: [
    "Vivid Extensions",
    "hair extensions Mississauga",
    "natural looking hair extensions Mississauga",
    "hair extension consultation Mississauga",
    "tape in extensions Mississauga",
    "weft extensions Mississauga",
    "fusion extensions Mississauga",
    "Vivid Salon hair extensions",
  ],
  openGraph: {
    title: "Vivid Extensions Consultation Request | Vivid Salon",
    description:
      "Apply for a personally reviewed Vivid Extensions consultation request built around premium hair quality, seamless blending, and a custom recommendation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
