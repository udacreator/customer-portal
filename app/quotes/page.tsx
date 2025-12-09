export default function QuotesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-3xl font-bold text-slate-900">Finish Quotes</h2>
        <p className="text-sm text-slate-500">
          Centralized access to Nello finish quotes and pricing packages.
        </p>
      </header>

      <section className="rounded-lg bg-white p-6 shadow border border-slate-100 space-y-4">
        <p className="text-sm text-slate-500">
          This area will allow customers to view, download, and filter finish
          quotes by project, structure type, coating system, and status
          (requested, in review, approved).
        </p>

        <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 flex items-center justify-center">
          <span className="text-sm text-slate-400">
            Placeholder – future embedded report showing quote history,
            approvals, and current open requests.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-500">
          <div className="rounded-lg border border-slate-200 p-4">
            <div className="font-semibold text-slate-900 text-sm mb-1">
              Example use cases
            </div>
            <ul className="list-disc list-inside space-y-1">
              <li>Retrieve latest finish quote for a specific project.</li>
              <li>Compare alternate finishes for the same structure set.</li>
              <li>Track which quotes are still awaiting approval.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 p-4">
            <div className="font-semibold text-slate-900 text-sm mb-1">
              Future integrations
            </div>
            <ul className="list-disc list-inside space-y-1">
              <li>Link directly from quote to order status.</li>
              <li>Export quote data to Excel / PDF.</li>
              <li>Connect to embedded Power BI or Metabase quote dashboards.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
