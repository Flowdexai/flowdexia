import type { Metadata } from "next";
<<<<<<< HEAD
import { Geist, Geist_Mono, Pacifico, Raleway } from "next/font/google";
import "./globals.css";
import Chatbot from "../components/Chatbot";
=======
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
>>>>>>> 15618532eb7e866ae6ad5e8a889affbc87a59285

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

<<<<<<< HEAD
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

=======
>>>>>>> 15618532eb7e866ae6ad5e8a889affbc87a59285
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
  description: "FlowdeX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
<<<<<<< HEAD
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${raleway.variable} antialiased font-sans`}
      >
        {children}
        <Chatbot />
=======
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
>>>>>>> 15618532eb7e866ae6ad5e8a889affbc87a59285
      </body>
    </html>
  );
}
