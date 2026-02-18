import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "HeyNex — Turn Your Computer Into a Private AI Agent",
  description:
    "HeyNex turns your personal computer into a private AI agent. Control it from your phone, anywhere.",
  metadataBase: new URL("https://heynex.app"),
  openGraph: {
    title: "HeyNex — Turn Your Computer Into a Private AI Agent",
    description:
      "HeyNex turns your personal computer into a private AI agent. Control it from your phone, anywhere.",
    url: "https://heynex.app",
    siteName: "HeyNex",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HeyNex — Turn Your Computer Into a Private AI Agent",
    description:
      "HeyNex turns your personal computer into a private AI agent. Control it from your phone, anywhere.",
    images: ["/assets/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
