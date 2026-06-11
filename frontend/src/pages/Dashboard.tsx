import { useState, useEffect } from "react";
import { logoutUser } from "../services/authService";

interface Deployment {
  deploymentId: string;
  repository: string;
  branch: string;
  environment: string;
  status: string;
  createdAt: string;
}

export default function Dashboard() {
  const [appName, setAppName] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [status, setStatus] = useState("");
  const [deployments, setDeployments] = useState<Deployment[]>([]);

  useEffect(() => {
    loadDeployments();

    const interval = setInterval(() => {
      loadDeployments();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const loadDeployments = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/deployments`
      );

      const result = await response.json();

      const data =
        typeof result.body === "string"
          ? JSON.parse(result.body)
          : result;

      setDeployments(data);
    } catch (error) {
      console.error("Failed to load deployments", error);
    }
  };

  const updateDeploymentStatus = async (
    deploymentId: string,
    deploymentStatus: string
  ) => {
    try {
      await fetch(
        `${import.meta.env.VITE_API_URL}/deployments/status`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            deploymentId,
            status: deploymentStatus,
          }),
        }
      );
    } catch (error) {
      console.error("Status update failed", error);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    window.location.href = "/";
  };

  const handleDeploy = async () => {
    try {
      setStatus("Creating Deployment...");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/deployments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            repository: githubUrl,
            branch: "main",
            environment: "development",
          }),
        }
      );

      const result = await response.json();

      const deployment =
        typeof result.body === "string"
          ? JSON.parse(result.body)
          : result;

      const deploymentId = deployment.deploymentId;

      setStatus(
        `Deployment Created: ${deploymentId}`
      );

      await loadDeployments();

      // BUILDING
      setTimeout(async () => {
        await updateDeploymentStatus(
          deploymentId,
          "BUILDING"
        );

        await loadDeployments();
      }, 3000);

      // DEPLOYED
      setTimeout(async () => {
        await updateDeploymentStatus(
          deploymentId,
          "DEPLOYED"
        );

        await loadDeployments();
      }, 8000);
    } catch (error) {
      console.error(error);
      setStatus("Deployment Failed");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "text-yellow-400";

      case "BUILDING":
        return "text-blue-400";

      case "DEPLOYED":
        return "text-green-400";

      case "FAILED":
        return "text-red-400";

      default:
        return "text-white";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-4">
        Dashboard
      </h1>

      <p className="mb-8">
        Welcome to CloudDeploy Pro 🚀
      </p>

      <div className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Application Name"
          value={appName}
          onChange={(e) =>
            setAppName(e.target.value)
          }
          className="w-full p-3 rounded-lg bg-slate-800"
        />

        <input
          type="text"
          placeholder="GitHub Repository URL"
          value={githubUrl}
          onChange={(e) =>
            setGithubUrl(e.target.value)
          }
          className="w-full p-3 rounded-lg bg-slate-800"
        />

        <button
          onClick={handleDeploy}
          className="bg-green-600 px-5 py-3 rounded-lg"
        >
          Deploy
        </button>

        {status && (
          <p className="text-green-400">
            {status}
          </p>
        )}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Deployment History
        </h2>

        {deployments.length === 0 ? (
          <p>No deployments found.</p>
        ) : (
          <div className="space-y-4">
            {deployments.map((deployment) => (
              <div
                key={deployment.deploymentId}
                className="bg-slate-800 p-4 rounded-lg border border-slate-700"
              >
                <p>
                  <strong>ID:</strong>{" "}
                  {deployment.deploymentId}
                </p>

                <p>
                  <strong>Repository:</strong>{" "}
                  {deployment.repository}
                </p>

                <p>
                  <strong>Branch:</strong>{" "}
                  {deployment.branch}
                </p>

                <p>
                  <strong>Environment:</strong>{" "}
                  {deployment.environment}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={getStatusColor(
                      deployment.status
                    )}
                  >
                    {deployment.status}
                  </span>
                </p>

                <p>
                  <strong>Created:</strong>{" "}
                  {new Date(
                    deployment.createdAt
                  ).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-600 px-5 py-3 rounded-lg mt-8"
      >
        Logout
      </button>
    </div>
  );
}