import Link from "next/link";
import dayjs from "dayjs";

type JobStatus = "Applied" | "Interviewing" | "Offer" | "Rejected";

interface Job {
  id: string;
  company: string;
  title: string;
  status: JobStatus;
  date?: string;
  notes?: string;
}

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const statusColors: Record<JobStatus, string> = {
    Applied:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Interviewing:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    Offer: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <Link href={`/job-application-tracker/job/${job.id}`} className="block">
      <div className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-md dark:hover:shadow-lg transition flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            {job.company || "—"}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {job.title || "(No title)"}
          </p>
          <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
            Applied {job.date ? dayjs(job.date).format("MMM DD, YYYY") : "—"}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              statusColors[job.status]
            }`}
          >
            {job.status}
          </span>
        </div>
      </div>
    </Link>
  );
}
