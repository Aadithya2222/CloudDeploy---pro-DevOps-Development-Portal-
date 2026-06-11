import { useState } from "react";
import { registerUser } from "../services/authService";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const result = await registerUser(
        email,
        password
      );

      console.log(result);

      alert(
        "Registration Successful. Check email for verification code."
      );

      localStorage.setItem(
        "pendingEmail",
        email
      );

      window.location.href = "/verify";
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
          Register with Cognito
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
          onClick={handleRegister}
          className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"
        >
          Register
        </button>
      </div>
    </div>
  );
}