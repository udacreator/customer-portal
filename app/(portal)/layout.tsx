import SidebarNav from "../sidebar-nav";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col px-6 py-8 justify-between">
        {/* Top: Brand + Nav */}
        <div>
          <h1 className="text-2xl font-semibold leading-tight text-slate-900 mb-8">
            Nello
            <span className="block text-sm font-normal text-slate-500">
              Customer Portal
            </span>
          </h1>

          <SidebarNav />
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
      <main className="flex-1 overflow-auto bg-slate-50">{children}</main>
    </div>
  );
}
