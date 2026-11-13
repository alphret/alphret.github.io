import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Configure Montserrat font with ExtraBold weight
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  title: "Alphret",
  description: "Personal website of Alphret",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="de">
      {/* Apply Montserrat directly to the body */}
      <body className={montserrat.className}>{children}</body>
      </html>
  );
}
