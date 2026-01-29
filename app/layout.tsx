import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Raleway } from "next/font/google";
import "./globals.css";
import Chatbot from "../components/Chatbot";
import { GoogleAnalytics } from '@next/third-parties/google'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlowdeX",
  description: "FlowdeX"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${raleway.variable} antialiased font-sans`}
      >
        <GoogleAnalytics gaId="G-370DVM1T5L" />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
