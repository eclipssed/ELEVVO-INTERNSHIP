type Project = {
  id: string;
  name: string;
  status: "Active" | "Paused" | "Completed" | "Stalled";
  deadline: string;
  client: string;
};

const projects: Project[] = [
  {
    id: "p1",
    name: "Marketing Website",
    status: "Active",
    deadline: "2025-10-15",
    client: "Acme Inc",
  },
  {
    id: "p2",
    name: "Mobile App UI",
    status: "Interviewing" as any,
    deadline: "2025-11-01",
    client: "BlueWave",
  },
  {
    id: "p3",
    name: "Ecommerce Revamp",
    status: "Paused",
    deadline: "2025-09-30",
    client: "ShopSmart",
  },
  {
    id: "p4",
    name: "Landing Page A/B",
    status: "Completed",
    deadline: "2025-08-12",
    client: "QuickStart",
  },
];

function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Projects</h2>
        <div className="text-sm text-slate-500">
          Showing {projects.length} projects
        </div>
      </div>

      <div className="overflow-x-auto bg-white dark:bg-[#042831] border dark:border-[#083142] rounded-md">
        <table className="min-w-full divide-y text-sm">
          <thead className="bg-slate-50 dark:bg-[#032729]">
            <tr>
              <th className="px-4 py-3 text-left">Project</th>
              <th className="px-4 py-3 text-left">Client</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Deadline</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {projects.map((p) => (
              <tr
                key={p.id}
                className="hover:bg-slate-50 dark:hover:bg-[#04303c]"
              >
                <td className="px-4 py-3">{p.name}</td>
                <td className="px-4 py-3">{p.client}</td>
                <td className="px-4 py-3">{p.status}</td>
                <td className="px-4 py-3">
                  {new Date(p.deadline).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectsPage;
