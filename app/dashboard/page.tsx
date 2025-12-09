export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Dashboard</h2>
          <p className="text-sm text-slate-500">
            Nello customer performance overview.
          </p>
        </div>

        <div className="text-sm text-slate-500">
          Logged in as{" "}
          <span className="font-medium text-slate-900">Demo Customer</span>
        </div>
      </header>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow border border-slate-100">
          <div className="text-xs font-semibold uppercase text-slate-400">
            Total Shipments
          </div>
          <div className="mt-2 text-2xl font-semibold text-slate-900">123</div>
          <div className="mt-1 text-xs text-slate-400">Last 30 days</div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow border border-slate-100">
          <div className="text-xs font-semibold uppercase text-slate-400">
            On-Time %
          </div>
          <div className="mt-2 text-2xl font-semibold text-slate-900">
            96.4%
          </div>
          <div className="mt-1 text-xs text-slate-400">Rolling 3 months</div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow border border-slate-100">
          <div className="text-xs font-semibold uppercase text-slate-400">
            Open Issues
          </div>
          <div className="mt-2 text-2xl font-semibold text-slate-900">4</div>
          <div className="mt-1 text-xs text-slate-400">
            Awaiting resolution
          </div>
        </div>
      </section>

      {/* Embedded dashboard placeholder */}
      <section className="rounded-lg bg-white p-6 shadow border border-slate-100">
        <h3 className="mb-2 text-xl font-semibold text-slate-900">
          Performance Overview
        </h3>
        <p className="mb-4 text-sm text-slate-500">
          This is where Nello&apos;s embedded analytics (Power BI or Metabase)
          will be displayed for each customer account.
        </p>

        <div className="flex h-[450px] items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
          <span className="text-sm text-slate-400">
            Embedded dashboard placeholder
          </span>
        </div>
      </section>
    </div>
  );
}
