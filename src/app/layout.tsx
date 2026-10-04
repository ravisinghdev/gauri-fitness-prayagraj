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

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "WARRIOR GYM | Get Fit With Gauri | Prayagraj",
    template: "%s | WARRIOR GYM",
  },
  description: "Experience a higher standard of fitness at Warrior Gym, Prayagraj. Premium facilities, expert personal training, and intelligent programming by Gauri.",
  keywords: ["Warrior Gym", "Gauri Fitness", "Gym in Prayagraj", "Personal Training", "Fitness Center Prayagraj", "Govind Plaza Gym", "Dhoomanganj Gym"],
  authors: [{ name: "Gauri" }],
  creator: "Warrior Gym",
  metadataBase: new URL("https://warriorgym.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WARRIOR GYM | Get Fit With Gauri",
    description: "Experience a higher standard of fitness at Warrior Gym, Prayagraj. Premium facilities, expert personal training, and intelligent programming.",
    url: "https://warriorgym.vercel.app",
    siteName: "WARRIOR GYM",
    images: [
      {
        url: "/gauri/1.jpg",
        width: 1200,
        height: 630,
        alt: "Warrior Gym Premium Facility",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WARRIOR GYM | Get Fit With Gauri",
    description: "Start your fitness journey at Prayagraj's premium fitness destination.",
    images: ["/gauri/1.jpg"],
  },
  icons: {
    icon: "/gauri/logo.png",
    shortcut: "/gauri/logo.png",
    apple: "/gauri/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
