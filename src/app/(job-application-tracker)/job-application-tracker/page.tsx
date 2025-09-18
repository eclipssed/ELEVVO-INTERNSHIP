"use client";
import Link from "next/link";
import { useJobs } from "@/context/JobsContext";
import JobCard from "@/components/JobCard";

const JobApplicationTrackerPage = () => {
  const { jobs } = useJobs();
  return (
    <div>
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Job Tracker</h1>
          <p className="text-sm text-slate-500">{jobs.length} applications</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/job-application-tracker/add"
            className="px-3 py-2 bg-indigo-600 text-white rounded"
          >
            Add Job
          </Link>
          <Link
            href="/job-application-tracker/export"
            className="px-3 py-2 border rounded"
          >
            Export/Import
          </Link>
        </div>
      </header>

      <main className="mt-6 grid gap-4">
        {jobs.length === 0 ? (
          <div className="p-6 rounded bg-white shadow text-center">
            <p className="text-slate-600">
              No job applications yet. Add one to get started.
            </p>
            <Link
              href="/job-application-tracker/add"
              className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded"
            >
              Add a job
            </Link>
          </div>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </main>
    </div>
  );
};

export default JobApplicationTrackerPage;
