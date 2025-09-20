"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { JobStatus, useJobs } from "@/context/JobsContext";

type JobForm = {
  company: string;
  title: string;
  status: JobStatus;
  date: string;
  notes: string;
};

export default function AddJob() {
  const { addJob } = useJobs();
  const router = useRouter();
  const [form, setForm] = useState<JobForm>({
    company: "",
    title: "",
    status: "Applied",
    date: new Date().toISOString().slice(0, 10),
    notes: "",
  });

  function onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.company.trim()) return alert("Company name is required");
    addJob({ ...form, date: new Date(form.date).toISOString() });
    router.push("/job-application-tracker");
  }

  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold">Add Job</h2>
        <form
          onSubmit={onSubmit}
          className="mt-6 grid gap-4 bg-white dark:bg-slate-800 p-6 rounded-lg shadow"
        >
          <label className="grid gap-1">
            <span className="text-sm font-medium">Company</span>
            <input
              name="company"
              value={form.company}
              onChange={onChange}
              className="mt-1 p-2 rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Job Title</span>
            <input
              name="title"
              value={form.title}
              onChange={onChange}
              className="mt-1 p-2 rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Status</span>
            <select
              name="status"
              value={form.status}
              onChange={onChange}
              className="mt-1 p-2 rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Applied</option>
              <option>Interviewing</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Application Date</span>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={onChange}
              className="mt-1 p-2 rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Notes</span>
            <textarea
              name="notes"
              value={form.notes}
              onChange={onChange}
              rows={4}
              className="mt-1 p-2 rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <div className="flex gap-3 justify-end pt-2">
            <button
              type="button"
              onClick={() => router.push("/job-application-tracker")}
              className="px-4 py-2 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
