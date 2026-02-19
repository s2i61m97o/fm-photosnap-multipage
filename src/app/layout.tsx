import type {Metadata} from "next";
import "./globals.css";
import {dm_sans} from "@/styles/fonts";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className}`}>{children}</body>
    </html>
  );
}
