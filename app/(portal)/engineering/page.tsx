export default function EngineeringPage() {
  return (
    <div className="space-y-6 p-8 fade-in-up">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
          Engineering
        </p>
        <h2 className="mt-1 text-3xl font-bold text-slate-900">Engineering</h2>
        <p className="mt-1 text-sm text-slate-500">
          View engineering calculations, drawings, and design documentation tied
          to your projects.
        </p>
      </header>

      <div className="rounded-lg bg-white p-6 shadow border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">
          Engineering Documents
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          This will eventually display downloadable PDFs, engineering calcs, and
          drawing packages linked to your orders and project structures.
        </p>

        <div className="mt-6 h-[300px] rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm bg-slate-50">
          Engineering placeholder (drawings, calcs, submittals)
        </div>
      </div>
    </div>
  );
}
