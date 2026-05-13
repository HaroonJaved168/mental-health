import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Great_Vibes, Nunito_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Mental Health Well-Being Clinic",
  description:
    "A safe, confidential and non-judgmental space where you can talk, heal and grow. Healing with warmth and care.",
  openGraph: {
    title: "Mental Health Well-Being Clinic",
    description:
      "A safe, confidential and non-judgmental space where you can talk, heal and grow. Healing with warmth and care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${playfairDisplay.variable} ${greatVibes.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
