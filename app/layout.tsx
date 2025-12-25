import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lee Stotts - Digital Business Card",
  description: "Professional digital business card for Lee Stotts",
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
