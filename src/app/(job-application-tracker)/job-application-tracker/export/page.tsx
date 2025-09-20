"use client";
import { useJobs, Job } from "@/context/JobsContext";
import React, { useRef } from "react";

export default function ExportImport() {
  const { jobs, setAll } = useJobs();
  const fileRef = useRef<HTMLInputElement | null>(null);

  function exportJson() {
    const blob = new Blob([JSON.stringify(jobs, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `job-applications-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function onImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string);
        if (!Array.isArray(parsed)) {
          throw new Error("Invalid format: expected array");
        }

        const normalized: Job[] = parsed.map((item: Partial<Job>) => ({
          id: item.id || crypto.randomUUID(),
          company: item.company || "",
          title: item.title || "",
          status: item.status || "Applied",
          date: item.date || new Date().toISOString(),
          notes: item.notes || "",
        }));

        setAll(normalized);
        alert("Imported successfully");
      } catch (err: any) {
        alert("Import failed: " + err.message);
      }
    };
    reader.readAsText(file);

    // Reset input so user can re-import same file if needed
    e.target.value = "";
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <main className="flex-1 container mx-auto p-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold">Export / Import</h2>
          <div className="mt-6 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm grid gap-4">
            <div className="flex gap-3">
              <button
                onClick={exportJson}
                className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >
                Export JSON
              </button>
              <label className="px-4 py-2 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition">
                Import JSON
                <input
                  ref={fileRef}
                  onChange={onImport}
                  type="file"
                  accept="application/json"
                  className="hidden"
                />
              </label>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Importing will replace your current saved applications.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
