import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/navigation/footer";
import { NavbarMenu } from "@/components/navigation/navbar";
import DashedBorder from "@/components/shared/dashed-border";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gamblio",
    template: "%s | Gamblio",
  },
  metadataBase: new URL("https://gamblio.ai"),
  verification: {
    google: "GdcYdmUvcUlMe97AUj-1moCr-iYa0-47T6Id5SIu0Pk",
  },
  // Site-wide OpenGraph defaults (pages can override)
  openGraph: {
    siteName: "Gamblio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gamblio",
      },
    ],
  },
  // Site-wide Twitter defaults (pages can override)
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} dark antialiased w-full overflow-x-hidden relative`}
      >
        <NavbarMenu />
        <DashedBorder
          sides="x"
          className="w-full p-0 divide-y divide-dashed mx-0  md:mx-0"
        >
          {children}
          <Footer />
        </DashedBorder>
        <Toaster />
      </body>
    </html>
  );
}
