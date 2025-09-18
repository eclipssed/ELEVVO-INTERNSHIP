export default function ProfilePage() {
  return (
    <div className="bg-white rounded shadow p-4 max-w-lg">
      <h2 className="font-semibold mb-4">Profile Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input
            type="text"
            defaultValue="John Doe"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            defaultValue="johndoe@example.com"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full border p-2 rounded"
          />
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Save Changes
        </button>
      </form>
    </div>
  );
}
