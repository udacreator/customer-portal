export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="text-gray-500">
            High-level overview for your customers.
          </p>
        </div>

        <div className="text-sm text-gray-500">
          Logged in as <span className="font-medium">Customer Name</span>
        </div>
      </header>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow">
          <div className="text-xs font-semibold uppercase text-gray-400">
            Total Shipments
          </div>
          <div className="mt-2 text-2xl font-semibold">123</div>
          <div className="mt-1 text-xs text-gray-400">Last 30 days</div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow">
          <div className="text-xs font-semibold uppercase text-gray-400">
            On-Time %
          </div>
          <div className="mt-2 text-2xl font-semibold">96.4%</div>
          <div className="mt-1 text-xs text-gray-400">Rolling 3 months</div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow">
          <div className="text-xs font-semibold uppercase text-gray-400">
            Open Claims
          </div>
          <div className="mt-2 text-2xl font-semibold">4</div>
          <div className="mt-1 text-xs text-gray-400">
            Awaiting resolution
          </div>
        </div>
      </section>

      {/* Embedded dashboard placeholder */}
      <section className="rounded-lg bg-white p-6 shadow">
        <h3 className="mb-2 text-xl font-semibold">Performance Overview</h3>
        <p className="mb-4 text-sm text-gray-500">
          This is where your embedded analytics (Power BI or Metabase) will live.
        </p>

        <div className="flex h-[450px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
          <span className="text-sm text-gray-400">
            Embedded dashboard placeholder
          </span>
        </div>
      </section>
    </div>
  );
}
