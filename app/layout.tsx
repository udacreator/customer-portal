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
        <div className="flex h-full">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md flex flex-col px-6 py-8 justify-between">
            {/* Top: Brand + Nav */}
            <div>
              <h1 className="text-2xl font-semibold leading-tight text-slate-900 mb-8">
                Nello{" "}
                <span className="block text-sm font-normal text-slate-500">
                  Customer Portal
                </span>
              </h1>

              <nav className="flex flex-col gap-3 text-sm text-slate-700">
                <a href="/" className="hover:text-slate-900">
                  Home
                </a>
                <a href="/dashboard" className="hover:text-slate-900">
                  Overview Dashboard
                </a>
                <a href="/status" className="hover:text-slate-900">
                  Order Status
                </a>
                <a href="/quotes" className="hover:text-slate-900">
                  Finish Quotes
                </a>
                <a href="/engineering" className="hover:text-slate-900">
                  Engineering
                </a>
                <a href="/reports" className="hover:text-slate-900">
                  Reports
                </a>
                <a href="/settings" className="hover:text-slate-900">
                  Settings
                </a>
              </nav>
            </div>

            {/* Bottom: Footer */}
            <footer className="pt-8 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold">
                  N
                </div>
                <span>© Nello Corporation {new Date().getFullYear()}</span>
              </div>
            </footer>
          </aside>

          {/* Main content area */}
          <main className="flex-1 p-8 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
