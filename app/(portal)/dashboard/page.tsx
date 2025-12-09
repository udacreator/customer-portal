"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        // Not logged in – send back to sign in
        window.location.href = "/";
        return;
      }

      setUserEmail(data.user.email ?? null);
      setCheckingAuth(false);
    }

    loadUser();
  }, []);

  if (checkingAuth) {
    return (
      <div className="p-8">
        <p className="text-sm text-slate-500">Loading dashboard…</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-8 fade-in-up">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
            Overview
          </p>
          <h2 className="mt-1 text-3xl font-bold text-slate-900">
            Customer Dashboard
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            High-level view of your Nello orders, quotes, and engineering
            activity.
          </p>
        </div>

        <div className="flex flex-col items-end gap-1 text-right">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            Demo Mode
          </span>
          <div className="text-xs text-slate-500">
            Logged in as{" "}
            <span className="font-medium text-slate-900">
              {userEmail ?? "Demo Customer"}
            </span>
          </div>
        </div>
      </header>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow border border-slate-100">
          <div className="text-xs font-semibold uppercase text-slate-400">
            Total Shipments (Last 30 days)
          </div>
          <div className="mt-2 text-2xl font-semibold text-slate-900">123</div>
          <div className="mt-2 h-1.5 rounded-full bg-slate-100">
            <div className="h-full w-3/4 rounded-full bg-sky-600" />
          </div>
          <div className="mt-1 text-xs text-slate-400">
            18 in transit • 3 delayed
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow border border-slate-100">
          <div className="text-xs font-semibold uppercase text-slate-400">
            On-Time Delivery
          </div>
          <div className="mt-2 text-2xl font-semibold text-slate-900">
            96.4%
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-slate-100">
            <div className="h-full w-[96%] rounded-full bg-emerald-500" />
          </div>
          <div className="mt-1 text-xs text-slate-400">
            Rolling 3-month performance
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow border border-slate-100">
          <div className="text-xs font-semibold uppercase text-slate-400">
            Open Issues
          </div>
          <div className="mt-2 text-2xl font-semibold text-slate-900">4</div>
          <div className="mt-2 h-1.5 rounded-full bg-slate-100">
            <div className="h-full w-1/4 rounded-full bg-amber-500" />
          </div>
          <div className="mt-1 text-xs text-slate-400">
            Example only – claims, RFIs, or holds.
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
          will be displayed for each customer: order status, shipping
          performance, finish quotes, and engineering deliverables.
        </p>

        <div className="flex h-[450px] items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
          <span className="text-sm text-slate-400">
            Embedded dashboard placeholder – future Power BI / Metabase embed.
          </span>
        </div>
      </section>
    </div>
  );
}
