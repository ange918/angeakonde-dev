import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="fr" suppressHydrationWarning>
      <body className={`${nunito.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
