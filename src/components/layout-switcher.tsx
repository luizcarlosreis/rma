"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, ArrowRightLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LayoutSwitcher() {
  const pathname = usePathname();
  
  // Ignore policy and terms routes if they don't have alternative versions
  if (pathname.includes("politica-de-privacidade") || pathname.includes("termos-de-uso")) {
    return null;
  }

  const isLayoutB = pathname.startsWith("/layout-b");

  let targetPath = "/";
  if (isLayoutB) {
    // Convert Layout B path to Layout A path
    targetPath = pathname.replace("/layout-b", "");
    if (targetPath === "") targetPath = "/";
  } else {
    // Convert Layout A path to Layout B path
    if (pathname === "/") {
      targetPath = "/layout-b";
    } else {
      targetPath = `/layout-b${pathname}`;
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={targetPath}
        className={cn(
          "flex items-center gap-2.5 rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 border",
          isLayoutB
            ? "bg-blue-950 border-blue-900 text-white hover:bg-sky-600 hover:border-sky-500 shadow-blue-900/10"
            : "bg-white border-slate-200 text-slate-900 hover:bg-slate-950 hover:text-white hover:border-slate-950 shadow-slate-950/15"
        )}
      >
        <Layers className={cn("h-4 w-4", isLayoutB ? "text-sky-400" : "text-rose-600")} />
        
        <span>
          {isLayoutB ? "Layout A (Original)" : "Layout B (Soft Blue)"}
        </span>

        <ArrowRightLeft className="h-3 w-3 opacity-60" />
      </Link>
    </div>
  );
}
