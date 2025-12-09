"use client";

export default function HomePage() {
  return (
    <div
      className="relative flex h-full items-center justify-center px-4 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: 'url("/high-voltage.jpg")', // in /public
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Demo badge */}
      <div className="absolute top-4 right-4 rounded-full bg-sky-700/90 px-4 py-1 text-xs font-semibold text-white shadow">
        Demo Mode
      </div>

      {/* Sign-in Card */}
      <div className="relative w-full max-w-xl rounded-2xl bg-white/90 backdrop-blur-md p-10 shadow-xl border border-white/40 mt-10 fade-in-up">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            Welcome
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Nello Customer Portal
          </h1>
          <p className="mt-3 text-sm text-slate-700 leading-relaxed">
            Access your Nello projects, poles, and shipment performance in one
            secure place.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-800">
              Email
            </label>
            <input
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
              placeholder="you@customer.com"
              type="email"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-800">
              Password
            </label>
            <input
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
              placeholder="••••••••"
              type="password"
            />
          </div>

          {/* Sign-in button */}
          <button
            className="mt-2 w-full rounded-md bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-sky-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700 focus:ring-offset-white"
            onClick={() => {
              window.location.href = "/dashboard";
            }}
          >
            Sign In
          </button>

          {/* Demo message */}
          <div className="mt-4 flex items-start gap-2 text-xs text-slate-600">
            <span className="mt-[3px] text-sky-400">•</span>
            <p>
              This is a demo login for preview purposes. In the production
              version, dashboard and reports would require authentication.
            </p>
          </div>

          {/* Info */}
          <div className="mt-5 border-t border-slate-200 pt-3 text-xs text-slate-600 flex items-center justify-between">
            <span>Need access?</span>
            <a
              href="https://www.nelloinc.com/contact.cfm"
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 hover:text-sky-900 font-medium"
            >
              Contact Nello support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
