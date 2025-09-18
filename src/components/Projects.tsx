const projects = [
  { id: 1, name: "E-commerce Website", status: "In Progress", deadline: "Sep 30" },
  { id: 2, name: "Portfolio Redesign", status: "Completed", deadline: "Aug 12" },
  { id: 3, name: "Mobile App UI", status: "Pending", deadline: "Oct 10" },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="font-semibold mb-4">Client Projects</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b text-left">
            <th className="p-2">Project</th>
            <th className="p-2">Status</th>
            <th className="p-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.status}</td>
              <td className="p-2">{p.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
