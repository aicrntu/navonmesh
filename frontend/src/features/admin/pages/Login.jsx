import { useState } from "react";
import { adminLogin } from "../../../api/auth.api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await adminLogin({ email, password });
    localStorage.setItem("admin_token", res.data.data.token);
    window.location.href = "/admin/dashboard";
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 bg-white shadow rounded">
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2">
          Login
        </button>
      </div>
    </div>
  );
}
