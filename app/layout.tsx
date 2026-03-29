import type { Metadata } from "next";
import "./globals.css"; // <-- He import sarvat mahatvache ahe

export const metadata: Metadata = {
  title: "Pranay Kalekar - Portfolio",
  description: "IT Graduate & Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}