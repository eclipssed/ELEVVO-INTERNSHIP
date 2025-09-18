"use client";
import { useJobs, Job } from "@/context/JobsContext";
import dayjs from "dayjs";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
      <div>
        <p>Job not found</p>
        <button
          onClick={() => router.push("/job-application-tracker")}
          className="text-indigo-600"
        >
          Back
        </button>
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
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{job.company}</h2>
          <p className="text-sm text-slate-500">{job.title}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={onEditToggle} className="px-3 py-2 border rounded">
            {editing ? "Cancel" : "Edit"}
          </button>
          <button
            onClick={onDelete}
            className="px-3 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="mt-4 bg-white p-4 rounded shadow">
        {!editing ? (
          <div className="grid gap-3">
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
              <p className="whitespace-pre-wrap mt-1 text-sm text-slate-700">
                {job.notes || "—"}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={onSave} className="grid gap-3">
            <label className="grid">
              <span className="text-sm font-medium">Company</span>
              <input
                name="company"
                value={form?.company ?? ""}
                onChange={onChange}
                className="mt-1 p-2 border rounded"
              />
            </label>
            <label className="grid">
              <span className="text-sm font-medium">Job Title</span>
              <input
                name="title"
                value={form?.title ?? ""}
                onChange={onChange}
                className="mt-1 p-2 border rounded"
              />
            </label>
            <label className="grid">
              <span className="text-sm font-medium">Status</span>
              <select
                name="status"
                value={form?.status ?? "Applied"}
                onChange={onChange}
                className="mt-1 p-2 border rounded"
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
                className="mt-1 p-2 border rounded"
              />
            </label>
            <label className="grid">
              <span className="text-sm font-medium">Notes</span>
              <textarea
                name="notes"
                value={form?.notes ?? ""}
                onChange={onChange}
                rows={4}
                className="mt-1 p-2 border rounded"
              />
            </label>
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
