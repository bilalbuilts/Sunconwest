import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const heading = Plus_Jakarta_Sans({ variable: "--font-heading", subsets: ["latin"], display: "swap" });
const body = Inter({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} | Construction Services Perth, Western Australia`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.legalName,
  openGraph: { siteName: site.legalName, locale: "en_AU", type: "website" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f2f45",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${heading.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col pb-16 lg:pb-0">
        <a
          href="#main"
          className="sr-only z-[100] rounded bg-accent px-4 py-2 font-bold text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <JsonLd data={localBusinessSchema} />
      </body>
    </html>
  );
}
