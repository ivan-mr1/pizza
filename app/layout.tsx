import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pizza shop | Home",
  description: "Pizza shop description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <main className="min-h-full">{children}</main>
      </body>
    </html>
  );
}
