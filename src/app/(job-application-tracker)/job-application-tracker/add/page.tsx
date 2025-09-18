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
    <div>
      <h2 className="text-xl font-semibold">Add Job</h2>
      <form
        onSubmit={onSubmit}
        className="mt-4 grid gap-3 bg-white p-4 rounded shadow"
      >
        <label className="grid">
          <span className="text-sm">Company</span>
          <input
            name="company"
            value={form.company}
            onChange={onChange}
            className="mt-1 p-2 border rounded"
          />
        </label>
        <label className="grid">
          <span className="text-sm">Job Title</span>
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            className="mt-1 p-2 border rounded"
          />
        </label>
        <label className="grid">
          <span className="text-sm">Status</span>
          <select
            name="status"
            value={form.status}
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
          <span className="text-sm">Application Date</span>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
            className="mt-1 p-2 border rounded"
          />
        </label>
        <label className="grid">
          <span className="text-sm">Notes</span>
          <textarea
            name="notes"
            value={form.notes}
            onChange={onChange}
            rows={4}
            className="mt-1 p-2 border rounded"
          />
        </label>
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={() => router.push("/job-application-tracker")}
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
    </div>
  );
}
