import { DarkModeProvider } from "@/context/Darkmode.js"
import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"


export const metadata = {
  title: "Akash Laha",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet" />
      </Head>
      <body>
        <DarkModeProvider>
          {children}
          <Analytics />
        </DarkModeProvider>
      </body>
    </html>
  );
}
