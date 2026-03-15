import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BigSixteen — Ange Akonde | Full Stack Developer",
  description:
    "Full Stack Developer based in Cotonou, Benin. Building digital products for Africa and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
