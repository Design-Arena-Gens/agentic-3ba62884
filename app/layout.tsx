import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTube Competitor Analyzer - AI-Powered Channel Analysis",
  description: "Analyze successful YouTube channels and discover their winning strategies to grow your channel profitably",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
