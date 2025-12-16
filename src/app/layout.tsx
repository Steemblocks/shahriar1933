import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Shahriar — Full-Stack Developer & Blockchain Specialist",
  description:
    "Full-stack developer specializing in blockchain technology, Steem ecosystem, and modern web applications. Open source contributor and blockchain innovator.",
  keywords: [
    "Shahriar",
    "Full-Stack Developer",
    "Blockchain",
    "Steem",
    "TypeScript",
    "React",
    "Web Development",
    "Open Source",
  ],
  authors: [{ name: "Shahriar" }],
  openGraph: {
    type: "website",
    title: "Shahriar — Full-Stack Developer & Blockchain Specialist",
    description:
      "Building innovative web applications and contributing to the Steem blockchain ecosystem.",
    siteName: "Shahriar Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
