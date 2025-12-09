export default function StatusPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Order Status</h2>
          <p className="text-sm text-slate-500">
            Real-time visibility into your Nello orders and projects.
          </p>
        </div>
      </header>

      <section className="rounded-lg bg-white p-6 shadow border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Live order and project tracking
        </h3>
        <p className="text-sm text-slate-500 mb-4">
          This section will surface real-time status for each structure: design,
          fabrication, galvanizing, shipping, and delivery milestones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase text-slate-400">
              Example
            </div>
            <div className="mt-1 text-sm font-medium text-slate-900">
              Project 12345 – I-70 Transmission
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Current stage: Fabrication  
              Estimated ship: 03/18/2025
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase text-slate-400">
              Example
            </div>
            <div className="mt-1 text-sm font-medium text-slate-900">
              Project 67890 – Distribution Poles
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Current stage: Galvanizing  
              Estimated ship: 03/22/2025
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase text-slate-400">
              What will live here
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Embedded analytics and reports showing each PO, structure, and
              line item with milestone dates, exceptions, and alerts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
