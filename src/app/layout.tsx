import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AbtalQuest - Building Stronger Kids, One Challenge at a Time!",
  description: "AbtalQuest is an educational tool focused on building resilience, discipline, and positive habits in children through fun, engaging challenges.",
  keywords: ["AbtalQuest", "educational app", "children's app", "discipline", "resilience", "habit building", "parenting", "education"],
  metadataBase: new URL("https://abtalquest.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abtalquest.com",
    title: "AbtalQuest - Building Stronger Kids, One Challenge at a Time!",
    description: "AbtalQuest is an educational tool focused on building resilience, discipline, and positive habits in children through fun, engaging challenges.",
    siteName: "AbtalQuest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
