import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warrior Gym | Get Fit With Gauri | Prayagraj",
  description: "Join Warrior Gym in Prayagraj. Get fit with Gauri. We offer structured training, personal training, strength and conditioning in a supportive environment.",
  keywords: "gym, Prayagraj, fitness, workout, personal training, Warrior Gym, Get Fit With Gauri",
  openGraph: {
    title: "Warrior Gym | Get Fit With Gauri",
    description: "Start your fitness journey at Prayagraj's premium fitness destination.",
    url: "https://warriorgym.demo",
    siteName: "Warrior Gym",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
