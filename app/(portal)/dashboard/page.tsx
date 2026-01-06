"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type ShipmentRow = {
  shipment_key: string;
  customer_id: string;
  departure_datetime: string | null;
  payload: Record<string, any>;
};

function formatValue(v: any) {
  if (v === null || v === undefined) return "";
  if (typeof v === "string" || typeof v === "number" || typeof v === "boolean")
    return String(v);

  try {
    const s = JSON.stringify(v);
    return s.length > 140 ? s.slice(0, 140) + "…" : s;
  } catch {
    return String(v);
  }
}

// Columns you WANT to show (first-pass “nice” view)
const PRIMARY_COLUMNS: string[] = [
  "CustomerName",
  "CustomerStatus",
  "LastStatus",
  "DepartureDateTime",
  "TimeInTransitHours",
  "QuoteNumber",
  "SalesOrderID",
  "truck_header_BOLNum",
  "truck_header_consingedto",
  "truck_header_destinationcitystatezip",
  "truck_header_destinationaddress",
  "truck_header_shippernum",
  "truck_header_departdate",
  "truck_header_departuretime",
  "truck_header_arrivaltime",
  "truck_header_deliverytime",
  "LastQueued",
  "LastInsp",
];

// Columns to always hide (since you said they’re null / not needed right now)
const ALWAYS_HIDE: string[] = ["ArrivalDateTime", "DeliveryDate", "CustomerID"];

export default function DashboardPage() {
  const [rows, setRows] = useState<ShipmentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string>("");
  const [colSearch, setColSearch] = useState("");
  const [showAllColumns, setShowAllColumns] = useState(false);

  useEffect(() => {
    async function load() {
      setErr("");
      setLoading(true);

      const { data, error } = await supabase
        .from("customer_shipments_raw")
        .select("shipment_key, customer_id, departure_datetime, payload")
        .order("departure_datetime", { ascending: false })
        .limit(200);

      if (error) {
        setErr(error.message);
        setRows([]);
        setLoading(false);
        return;
      }

      setRows((data as ShipmentRow[]) ?? []);
      setLoading(false);
    }

    load();
  }, []);

  // Discover all possible payload keys (for debugging / search)
  const allPayloadKeys = useMemo(() => {
    const keySet = new Set<string>();
    for (const r of rows) {
      const p = r?.payload;
      if (p && typeof p === "object") {
        Object.keys(p).forEach((k) => keySet.add(k));
      }
    }
    return Array.from(keySet).sort((a, b) => a.localeCompare(b));
  }, [rows]);

  // Decide which columns to show in the table
  const tableColumns = useMemo(() => {
    const search = colSearch.trim().toLowerCase();

    // Start from curated columns
    let cols = PRIMARY_COLUMNS.filter((c) => !ALWAYS_HIDE.includes(c));

    // If "show all" enabled, append every other column we find
    if (showAllColumns) {
      const extras = allPayloadKeys
        .filter((k) => !ALWAYS_HIDE.includes(k))
        .filter((k) => !cols.includes(k));
      cols = [...cols, ...extras];
    }

    // Apply search filter
    if (search) {
      cols = cols.filter((k) => k.toLowerCase().includes(search));
    }

    // Also remove any that literally don't exist in the dataset yet (optional)
    // (If you want to keep them regardless, delete this block)
    const present = new Set<string>();
    rows.forEach((r) => {
      Object.keys(r.payload || {}).forEach((k) => present.add(k));
    });
    cols = cols.filter((k) => present.has(k));

    return cols;
  }, [allPayloadKeys, colSearch, rows, showAllColumns]);

  return (
    <div className="space-y-6 p-8 fade-in-up">
      {/* Header */}
      <header className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
            Dashboard
          </p>
          <h2 className="mt-1 text-3xl font-bold text-slate-900">
            Shipments
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Shipment table filtered automatically to the signed-in customer.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <div className="text-xs text-slate-500">
            Rows loaded:{" "}
            <span className="font-semibold text-slate-700">{rows.length}</span>
            {" • "}
            Columns:{" "}
            <span className="font-semibold text-slate-700">
              {tableColumns.length}
            </span>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              value={colSearch}
              onChange={(e) => setColSearch(e.target.value)}
              placeholder="Search columns…"
              className="w-full sm:w-[240px] rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
            />

            <label className="flex items-center gap-2 text-sm text-slate-700 select-none">
              <input
                type="checkbox"
                checked={showAllColumns}
                onChange={(e) => setShowAllColumns(e.target.checked)}
                className="h-4 w-4"
              />
              Show all columns
            </label>
          </div>
        </div>
      </header>

      {/* Table */}
      <section className="rounded-lg border border-slate-200 bg-white shadow overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
          <div className="text-sm font-semibold text-slate-900">
            Shipment Rows
          </div>
          <div className="text-xs text-slate-500">
            (We’ll curate this layout further once KPIs + final columns are confirmed.)
          </div>
        </div>

        {loading ? (
          <div className="p-6 text-sm text-slate-500">Loading…</div>
        ) : err ? (
          <div className="p-6 text-sm text-red-600">Error: {err}</div>
        ) : rows.length === 0 ? (
          <div className="p-6 text-sm text-slate-500">
            No rows returned. If you expected data, confirm your user is mapped in
            <span className="font-semibold"> portal_user_customer</span>.
          </div>
        ) : (
          <div className="overflow-auto">
            <table className="min-w-full text-xs">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  {tableColumns.map((k) => (
                    <th
                      key={k}
                      className="px-3 py-2 text-left font-semibold whitespace-nowrap"
                      title={k}
                    >
                      {k}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {rows.map((r) => (
                  <tr key={r.shipment_key} className="hover:bg-slate-50">
                    {tableColumns.map((k) => (
                      <td
                        key={k}
                        className="px-3 py-2 whitespace-nowrap text-slate-800"
                      >
                        {formatValue(r.payload?.[k])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
