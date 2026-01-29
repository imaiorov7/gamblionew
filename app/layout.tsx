import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
  metadataBase: new URL("https://website.gamblio.ai"),
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
        <Script
          src="https://nbg1.your-objectstorage.com/gamblio-widget/assets/sdk.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="gamblio-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof Gamblio !== 'undefined') {
                Gamblio.init({
                  tokenName: "token",
                  clientId: "0b7e7dee87b1c3b98e72131173dfbbbf",
                  language: "en",
                  envDev: true,
                  chatConfig: {
                    backgroundPrimary: "#1a1a1a" ,
                    hoverColor: "#2d2d2d",
                    logoUrl: "/images/logo-dark.svg",
                    chatBubbleProps: {
                      toggleIcon: '<svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 502.664 502.664" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><g><path style="fill:#010002;" d="M378.74,181.184c0-76.576-84.708-138.743-189.305-138.743C84.73,42.441,0,104.608,0,181.184 c0,47.154,32.291,88.591,81.343,113.7l-47.024,89.389l101.987-70.515c16.955,3.645,34.6,6.234,53.129,6.234 C294.053,319.992,378.74,257.846,378.74,181.184z M129.942,196.24H89.95v-40.014h39.992V196.24z M251.3,156.226h39.992v40.014 H251.3V156.226z M170.625,156.226h39.971v40.014h-39.971V156.226z"></path><path style="fill:#010002;" d="M502.664,268.481c0-50.325-38.763-93.984-95.602-115.943c2.804,10.332,4.314,21.053,4.314,32.097 c0,90.77-100.304,164.412-224.25,164.412c-1.532,0-2.955-0.324-4.465-0.324c32.68,30.868,83.695,50.799,141.138,50.799 c17.515,0,34.147-2.438,50.152-5.846l96.378,66.546l-44.457-84.363C472.206,352.111,502.664,312.981,502.664,268.481z"></path></g></g></g></g></svg>',
                      toggleOpenIcon: '<svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 502.664 502.664" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><g><path style="fill:#010002;" d="M378.74,181.184c0-76.576-84.708-138.743-189.305-138.743C84.73,42.441,0,104.608,0,181.184 c0,47.154,32.291,88.591,81.343,113.7l-47.024,89.389l101.987-70.515c16.955,3.645,34.6,6.234,53.129,6.234 C294.053,319.992,378.74,257.846,378.74,181.184z M129.942,196.24H89.95v-40.014h39.992V196.24z M251.3,156.226h39.992v40.014 H251.3V156.226z M170.625,156.226h39.971v40.014h-39.971V156.226z"></path><path style="fill:#010002;" d="M502.664,268.481c0-50.325-38.763-93.984-95.602-115.943c2.804,10.332,4.314,21.053,4.314,32.097 c0,90.77-100.304,164.412-224.25,164.412c-1.532,0-2.955-0.324-4.465-0.324c32.68,30.868,83.695,50.799,141.138,50.799 c17.515,0,34.147-2.438,50.152-5.846l96.378,66.546l-44.457-84.363C472.206,352.111,502.664,312.981,502.664,268.481z"></path></g></g></g></g></svg>'
                    }
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
