function ProfilePage() {
  return (
    <div className="max-w-2xl bg-white dark:bg-[#042831] border dark:border-[#083142] rounded-md p-6">
      <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="text-sm block mb-1">Name</label>
          <input
            className="w-full rounded-md border p-2 bg-white dark:bg-[#042831]"
            defaultValue="Furqan"
          />
        </div>
        <div>
          <label className="text-sm block mb-1">Email</label>
          <input
            className="w-full rounded-md border p-2 bg-white dark:bg-[#042831]"
            defaultValue="furqan@example.com"
          />
        </div>
        <div>
          <label className="text-sm block mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-md border p-2 bg-white dark:bg-[#042831]"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-slate-800 text-white"
          >
            Save
          </button>
          <button type="button" className="px-4 py-2 rounded-md border">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;
