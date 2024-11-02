import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono, Share_Tech_Mono, Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "COSMOS",
  description: "Generated by create next app",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-JetBrainsMono",
});
const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrainsMono",
});
const ShareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ShareTechMono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-white bg-black flex ${ShareTechMono.variable} ${JetBrainsMono.variable} ${roboto.className}`}
      >
        <main className={`w-screen font-jetbrains-mono`}>{children}</main>
      </body>
    </html>
  );
}
