import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nello Customer Portal",
  description: "Secure customer access to Nello projects, poles, and shipments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-slate-900">
        {children}
      </body>
    </html>
  );
}
