import Link from "next/link";
import { Bell } from "lucide-react";
import { ReactNode, useState } from "react";
import Header from "@/components/Header";

export default function ClientDashboardLayout({ children }: { children: ReactNode }) {
  // notification state (hydration-safe hack since no hooks allowed directly in layout)
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex-shrink-0 hidden md:flex flex-col">
        <div className="p-4 font-bold text-xl">FreelanceDash</div>
        <nav className="flex flex-col gap-2 p-4">
          <Link
            href="/client-dashboard"
            className="hover:bg-gray-700 rounded p-2"
          >
            Dashboard
          </Link>
          <Link
            href="/client-dashboard/overview"
            className="hover:bg-gray-700 rounded p-2"
          >
            Overview
          </Link>
          <Link
            href="/client-dashboard/projects"
            className="hover:bg-gray-700 rounded p-2"
          >
            Projects
          </Link>
          <Link
            href="/client-dashboard/profile"
            className="hover:bg-gray-700 rounded p-2"
          >
            Profile
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 overflow-auto flex-1 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
