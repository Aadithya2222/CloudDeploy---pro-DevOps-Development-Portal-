import axios from "axios";

const API =
  "https://kf4vvptg3e.execute-api.ap-south-1.amazonaws.com";

export const createDeployment = async (
  repository: string,
  branch: string = "main"
) => {
  const response = await axios.post(`${API}/deployments`, {
    repository,
    branch,
    environment: "development",
  });

  return response.data;
};

export const getDeployments = async () => {
  const response = await axios.get(`${API}/deployments`);
  return response.data;
};

export const updateDeploymentStatus = async (
  deploymentId: string,
  status: string
) => {
  await axios.post(`${API}/deployments/status`, {
    deploymentId,
    status,
  });
};