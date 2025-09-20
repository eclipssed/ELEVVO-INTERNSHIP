"use client";
import Link from "next/link";

export default function JobNavbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/job-application-tracker"
          className="text-xl font-bold tracking-wide"
        >
          Job Tracker
        </Link>
        <div className="flex gap-4">
          <Link
            href="/job-application-tracker/add"
            className="hover:text-indigo-200 transition"
          >
            Add Job
          </Link>
          <Link
            href="/job-application-tracker/export"
            className="hover:text-indigo-200 transition"
          >
            Export/Import
          </Link>
        </div>
      </div>
    </nav>
  );
}
