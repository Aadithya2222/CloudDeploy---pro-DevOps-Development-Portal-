import { useState } from "react";
import { loginUser } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await loginUser(email, password);

      alert("Login Successful");

      window.location.href = "/dashboard";
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl p-8 shadow-xl">

        <h1 className="text-3xl font-bold text-white mb-2">
          CloudDeploy Pro
        </h1>

        <p className="text-slate-400 mb-6">
          Login with Cognito
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-4"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-4"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}