export default function EngineeringPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-3xl font-bold text-slate-900">Engineering</h2>
        <p className="text-sm text-slate-500">
          Access to engineering calculations, drawings, and submittal packages.
        </p>
      </header>

      <section className="rounded-lg bg-white p-6 shadow border border-slate-100 space-y-4">
        <p className="text-sm text-slate-500">
          This section is designed to give utilities, EPCs, and engineers direct
          access to project documentation: calculation packages, foundation
          loads, pole drawings, and revision history.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase text-slate-400">
              Calculations
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Placeholder for embedded views listing calculation packages by
              project, structure ID, and revision.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase text-slate-400">
              Drawings
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Placeholder for access to signed PDFs, DXF/DWG files, and
              submittal sets with version control.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase text-slate-400">
              Future integration
            </div>
            <p className="mt-2 text-xs text-slate-500">
              This area will tie together engineering documents with order
              status and quotes, so each structure’s lifecycle is visible end to
              end.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
