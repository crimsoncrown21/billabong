import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Billabong School — Excellence in Education",
  description:
    "Billabong is a top independent co-educational school. We welcome pupils aged 4 to 18 across our Pre-Prep, Junior School, Senior School and Sixth Form.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
