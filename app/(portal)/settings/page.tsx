export default function SettingsPage() {
  return (
    <div className="space-y-6 p-8 fade-in-up">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
          Settings
        </p>
        <h2 className="mt-1 text-3xl font-bold text-slate-900">Account Settings</h2>
        <p className="mt-1 text-sm text-slate-500">
          Manage your customer profile, notifications, and linked project preferences.
        </p>
      </header>

      <div className="rounded-lg bg-white p-6 shadow border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">User Preferences</h3>
        <p className="mt-2 text-sm text-slate-500">
          These settings will later allow customers to customize reports, alerts, and account access.
        </p>

        <div className="mt-6 h-[300px] rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
          Settings placeholder (future configuration panel)
        </div>
      </div>
    </div>
  );
}
