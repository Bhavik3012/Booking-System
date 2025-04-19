// src/components/Login/Login.jsx
import React, { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authService.login({ email, password });

      // Redirect to home and force full reload
      navigate("/", { replace: true });
      window.location.reload();
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF3E0] flex flex-col">
      <main className="container mx-auto px-4 py-12 flex justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-[#424242] mb-6 text-center">
            Welcome Back
          </h2>

          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#424242]"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="mt-1 block w-full"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#424242]"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1 block w-full"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-[#FFA726] focus:ring-[#FFA726] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-[#424242]">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-[#FFA726] hover:text-[#FB8C00]"
              >
                Forgot your password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white ${
                loading ? "opacity-50" : ""
              }`}
            >
              {loading ? "Signing In…" : "Sign In"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[#424242]">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#FFA726] hover:text-[#FB8C00]"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
