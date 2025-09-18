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
    Applied: "bg-yellow-100 text-yellow-800",
    Interviewing: "bg-blue-100 text-blue-800",
    Offer: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
  };

  return (
    <Link href={`/job/${job.id}`} className="block">
      <div className="p-4 rounded bg-white shadow-sm hover:shadow-md transition flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">{job.company || "—"}</h3>
          <p className="text-sm text-slate-500">{job.title || "(No title)"}</p>
          <p className="mt-2 text-xs text-slate-400">
            Applied {job.date ? dayjs(job.date).format("MMM D, YYYY") : "—"}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span
            className={`px-2 py-1 rounded text-sm ${
              statusColors[job.status] || "bg-slate-100"
            }`}
          >
            {job.status}
          </span>
        </div>
      </div>
    </Link>
  );
}
