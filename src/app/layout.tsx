import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const ralewayLightFont = localFont({
  src: "../fonts/Raleway-Light.ttf",
  variable: "--font-ralewayLight",
  display: "swap",
});

const ralewayNormalFont = localFont({
  src: "../fonts/Raleway-Regular.ttf",
  variable: "--font-ralewayNormal",
  display: "swap",
});

const ralewayMediumFont = localFont({
  src: "../fonts/Raleway-Medium.ttf",
  variable: "--font-ralewayMedium",
  display: "swap",
});

const ralewaySemiBoldFont = localFont({
  src: "../fonts/Raleway-SemiBold.ttf",
  variable: "--font-ralewaySemiBold",
  display: "swap",
});

const ralewayBoldFont = localFont({
  src: "../fonts/Raleway-Bold.ttf",
  variable: "--font-ralewayBold",
  display: "swap",
});

const dotoexbFont = localFont({
  src: "../fonts/Doto_Rounded-ExtraBold.ttf",
  variable: "--font-dotoexb",
  display: "swap",
});

/* @theme {
  --font-light: Raleway Light, "sans-serif"; -> font-raleway font-light
  --font-reg: Raleway Regular, "sans-serif"; -> font-raleway font-normal
  --font-sb: Raleway SemiBold, "sans-serif"; -> font-raleway font-semibold
  --font-med: Raleway Medium, "sans-serif"; -> font-raleway font-medium
  --font-b: Raleway Bold, "sans-serif"; > font-raleway font-bold
  --font-deb: Doto Rounded ExtraBold, "sans-serif";
} */

export const metadata: Metadata = {
  title: "Portfolio | AKash Laha",
  description: "A modern, fast, and optimized portfolio built with Next.js.",
  metadataBase: new URL("https://canum.xyz"),
  openGraph: {
    title: "Portfolio | AKash Laha",
    description: "A modern, fast, and optimized portfolio built with Next.js.",
    url: "https://canum.xyz",
    siteName: "Portfolio | Akash Laha",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${ralewayLightFont.variable}
        ${ralewayMediumFont.variable}
        ${ralewayNormalFont.variable}
        ${ralewayBoldFont.variable}
        ${ralewaySemiBoldFont.variable}
        ${dotoexbFont.variable}
      `}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
