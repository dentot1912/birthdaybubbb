import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday Maeratul Helmiah",
  description: "A special surprise prepared just for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${greatVibes.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#3E2E2B] text-[#EAD5C3] font-sans selection:bg-[#EAD5C3]/20 selection:text-[#EAD5C3]">
        {children}
      </body>
    </html>
  );
}
