import type { Metadata } from "next";
import { Poppins, Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Belle Zerrudo — Professional Web Designer in Bacoor, Cavite | Portfolio",
  description: "Belle Zerrudo is a professional web designer based in Bacoor, Cavite, Philippines. I create beautiful, strategic websites that help businesses grow. Specializing in landing pages, business websites, portfolios, and e-commerce. Available for clients worldwide.",
  keywords: ["Web Designer", "Web Developer", "Cavite", "Bacoor", "Philippines", "Website Design", "UI/UX Design", "Portfolio Website", "Landing Page Design", "E-commerce Website", "Freelance Web Designer", "Responsive Web Design", "Small Business Website", "Web Design Philippines"],
  authors: [{ name: "Belle Zerrudo" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Belle Zerrudo — Professional Web Designer | Portfolio",
    description: "I design strategic, beautiful websites that help businesses stand out, connect with their audience, and grow. Based in Bacoor, Cavite, serving clients worldwide.",
    type: "website",
    locale: "en_US",
    siteName: "Belle Zerrudo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belle Zerrudo — Web Designer Portfolio",
    description: "Professional web designer from Bacoor, Cavite. I create beautiful websites that grow your business. Let's work together!",
    creator: "@bellezerrudo",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bellezerrudo.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${workSans.variable} antialiased bg-white text-[#1A1A1A]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
