import { useState } from "react";
import { verifyUser } from "../services/authService";

export default function Verify() {
  const [code, setCode] = useState("");

  const email =
    localStorage.getItem("pendingEmail") || "";

  const handleVerify = async () => {
    try {
      await verifyUser(email, code);

      alert("Verification Successful");

      window.location.href = "/";
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl p-8 shadow-xl">

        <h1 className="text-3xl font-bold text-white mb-2">
          Verify Account
        </h1>

        <input
          type="text"
          placeholder="Verification Code"
          className="w-full p-3 rounded-lg bg-slate-800 text-white mb-4"
          value={code}
          onChange={(e) =>
            setCode(e.target.value)
          }
        />

        <button
          onClick={handleVerify}
          className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"
        >
          Verify
        </button>
      </div>
    </div>
  );
}