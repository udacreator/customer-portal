"use client";

import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Overview Dashboard" },
  { href: "/status", label: "Order Status" },
  { href: "/quotes", label: "Finish Quotes" },
  { href: "/engineering", label: "Engineering" },
  { href: "/reports", label: "Reports" },
  { href: "/settings", label: "Settings" },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 text-sm text-slate-700">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname?.startsWith(item.href));

        return (
          <a
            key={item.href}
            href={item.href}
            className={[
              "rounded-md px-2 py-1.5 transition-colors",
              "hover:text-slate-900 hover:bg-slate-100",
              isActive
                ? "text-sky-700 font-semibold bg-slate-100 border-l-2 border-sky-600"
                : "border-l-2 border-transparent",
            ].join(" ")}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
