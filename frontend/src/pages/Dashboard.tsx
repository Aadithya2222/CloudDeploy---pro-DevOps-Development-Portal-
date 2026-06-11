import { logoutUser } from "../services/authService";

export default function Dashboard() {
  const handleLogout = async () => {
    await logoutUser();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-4">
        Dashboard
      </h1>

      <p className="mb-6">
        Welcome to CloudDeploy Pro 🚀
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-600 px-5 py-3 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}