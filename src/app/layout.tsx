import type {Metadata} from "next";
import "./globals.css";
import {dm_sans} from "@/styles/fonts";
import Nav from "@/ui/Nav";

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
      <body className={`${dm_sans.className}`}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
