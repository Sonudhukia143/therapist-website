import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

// ✅ Google Fonts setup
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// ✅ Metadata (auto-injected by Next into <head>)
export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD",
  description: "Therapy for Anxiety, Relationships & Trauma in Los Angeles",
  keywords: [
    "Therapist",
    "Los Angeles",
    "Anxiety Treatment",
    "Relationship Counseling",
    "Trauma Recovery",
    "Dr. Serena Blake",
  ],
  authors: [{ name: "Dr. Serena Blake" }],
  creator: "Grow My Therapy",
};

// ✅ Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png"></link>
        <link rel="manifest" href="favicon_io/site.webmanifest"></link>
      </head>
      <body className="bg-white-900 text-gray-900">
          <TopBar />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
