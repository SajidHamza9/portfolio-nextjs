import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Analytics } from "@vercel/analytics/next";

const description = "Hello, I'm Hamza Sajid, I'm a Full Stack Developer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sajidhamza.live"),
  title: "Hamza Sajid",
  description,
  keywords: ["portfolio", "web development", "mobile development", "design"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hamza Sajid",
    type: "website",
    description,
    url: "https://www.sajidhamza.live",
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
