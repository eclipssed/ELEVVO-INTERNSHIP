"use client";
import { Job, useJobs } from "@/context/JobsContext";
import dayjs from "dayjs";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import JobNavbar from "@/components/JobNavbar";
import Footer from "@/components/Footer";

export default function JobDetails() {
  const { jobs, deleteJob, updateJob } = useJobs();
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const job = jobs.find((j) => j.id === id);

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<Job | null>(null);

  useEffect(() => {
    if (job)
      setForm({
        ...job,
        date: job.date
          ? job.date.slice(0, 10)
          : new Date().toISOString().slice(0, 10),
      });
  }, [job]);

  if (!job)
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <JobNavbar />
        <main className="flex-1 container mx-auto p-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow text-center">
            <p className="mb-4">Job not found</p>
            <button
              onClick={() => router.push("/job-application-tracker")}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Back to Dashboard
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );

  function onDelete() {
    if (confirm("Delete this job?")) {
      deleteJob(id);
      router.push("/job-application-tracker");
    }
  }

  function onEditToggle() {
    setEditing((e) => !e);
  }

  function onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((f) => (f ? { ...f, [name]: value } : f));
  }

  function onSave(e: React.FormEvent) {
    e.preventDefault();
    if (!form) return;
    updateJob(id, { ...form, date: new Date(form.date).toISOString() });
    setEditing(false);
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <main className="flex-1 container mx-auto p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">{job.company}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {job.title}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onEditToggle}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {editing ? "Cancel" : "Edit"}
            </button>
            <button
              onClick={onDelete}
              className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
          {!editing ? (
            <div className="grid gap-4">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-xs text-slate-500">Status</h4>
                  <p className="font-medium">{job.status}</p>
                </div>
                <div>
                  <h4 className="text-xs text-slate-500">Applied</h4>
                  <p className="font-medium">
                    {job.date ? dayjs(job.date).format("MMM D, YYYY") : "—"}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-xs text-slate-500">Notes</h4>
                <p className="whitespace-pre-wrap mt-1 text-sm text-slate-700 dark:text-slate-300">
                  {job.notes || "—"}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSave} className="grid gap-4">
              <label className="grid">
                <span className="text-sm font-medium">Company</span>
                <input
                  name="company"
                  value={form?.company ?? ""}
                  onChange={onChange}
                  className="mt-1 p-2 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900"
                />
              </label>
              <label className="grid">
                <span className="text-sm font-medium">Job Title</span>
                <input
                  name="title"
                  value={form?.title ?? ""}
                  onChange={onChange}
                  className="mt-1 p-2 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900"
                />
              </label>
              <label className="grid">
                <span className="text-sm font-medium">Status</span>
                <select
                  name="status"
                  value={form?.status ?? "Applied"}
                  onChange={onChange}
                  className="mt-1 p-2 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900"
                >
                  <option>Applied</option>
                  <option>Interviewing</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>
              </label>
              <label className="grid">
                <span className="text-sm font-medium">Application Date</span>
                <input
                  type="date"
                  name="date"
                  value={form?.date ?? ""}
                  onChange={onChange}
                  className="mt-1 p-2 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900"
                />
              </label>
              <label className="grid">
                <span className="text-sm font-medium">Notes</span>
                <textarea
                  name="notes"
                  value={form?.notes ?? ""}
                  onChange={onChange}
                  rows={4}
                  className="mt-1 p-2 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900"
                />
              </label>
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
