function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white dark:bg-[#042831] border dark:border-[#083142] rounded-md p-4 flex items-center justify-between">
      <div>
        <div className="text-xs text-slate-500">{title}</div>
        <div className="text-2xl font-semibold mt-1">{value}</div>
      </div>
      <div className="text-3xl text-slate-300">•</div>
    </div>
  );
}

export default StatCard;
