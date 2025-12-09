import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Customer Portal",
  description: "Company customer dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-100">
        <div className="flex h-full">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md flex flex-col px-6 py-8">
            <h1 className="text-2xl font-semibold mb-8">Customer Portal</h1>

            <nav className="flex flex-col gap-4 text-gray-700">
              <a href="/" className="hover:text-black">
                Dashboard
              </a>
              <a href="/reports" className="hover:text-black">
                Reports
              </a>
              <a href="/settings" className="hover:text-black">
                Settings
              </a>
            </nav>

            <div className="mt-auto text-xs text-gray-400">
              © Your Company
            </div>
          </aside>

          {/* Main content area */}
          <main className="flex-1 p-8 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
