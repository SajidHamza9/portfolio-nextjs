import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://www.sajidhamza.dev";
const description =
  "Hamza Sajid is a Full Stack Software Engineer specialized in JavaScript & TypeScript, building modern web applications backed by solid cloud infrastructure. AWS Certified Developer and DevOps Engineer.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hamza Sajid — Full Stack Software Engineer",
    template: "%s | Hamza Sajid",
  },
  description,
  keywords: [
    "Hamza Sajid",
    "Full Stack Developer",
    "Full Stack Software Engineer",
    "JavaScript developer",
    "TypeScript developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "AWS Certified Developer",
    "web development",
    "cloud infrastructure",
    "portfolio",
  ],
  authors: [{ name: "Hamza Sajid", url: siteUrl }],
  creator: "Hamza Sajid",
  publisher: "Hamza Sajid",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hamza Sajid — Full Stack Software Engineer",
    siteName: "Hamza Sajid",
    type: "website",
    locale: "en_US",
    description,
    url: siteUrl,
    images: [
      {
        url: "/images/og.png",
        width: 1907,
        height: 957,
        alt: "Hamza Sajid — Full Stack Software Engineer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <ParticlesBackground />
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
