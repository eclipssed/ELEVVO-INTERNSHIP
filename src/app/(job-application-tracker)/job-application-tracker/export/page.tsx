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
    <div>
      <h2 className="text-xl font-semibold">Export / Import</h2>
      <div className="mt-4 bg-white p-4 rounded shadow grid gap-3">
        <div className="flex gap-2">
          <button
            onClick={exportJson}
            className="px-3 py-2 bg-indigo-600 text-white rounded"
          >
            Export JSON
          </button>
          <label className="px-3 py-2 border rounded cursor-pointer">
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
        <p className="text-sm text-slate-500">
          Import will replace your current local data.
        </p>
      </div>
    </div>
  );
}
