import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "material-symbols";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrioWab",
  description: "TrioWab-Dashboard Reactjs Nextjs Tamplete",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-[1920px] mx-auto">{children}</main>
      </body>
    </html>
  );
}
