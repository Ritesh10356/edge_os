import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hunt AI — Agent Chat Interface",
  description: "A powerful AI agent chat platform with real-time task automation, activity tracking, and intelligent workflow management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
