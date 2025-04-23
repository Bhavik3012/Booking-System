import React, { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

export default function CreateAdmin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    if (!firstName.trim() || !lastName.trim()) {
      return "First and last name are required.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const validationError = validate();
    if (validationError) {
      return setError(validationError);
    }

    setLoading(true);
    try {
      // Check if current user is admin
      const isAdmin = await authService.isAdmin();
      if (!isAdmin) {
        throw new Error("Only admins can create admin accounts");
      }

      // Create admin account
      const fullName = `${firstName.trim()} ${lastName.trim()}`;
      await authService.createAdminAccount({ email, password, name: fullName });
      
      setSuccess(true);
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 2000);
    } catch (err) {
      setError(err.message || "Failed to create admin account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF3E0] flex flex-col">
      <main className="container mx-auto px-4 py-12 flex justify-center flex-grow">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-[#424242] mb-6 text-center">
            Create Admin Account
          </h2>

          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
          )}

          {success && (
            <div className="mb-4 text-green-600 text-sm text-center">
              Admin account created successfully! Redirecting...
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[#424242]"
                >
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  required
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-[#424242]"
                >
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  required
                  className="mt-1 block w-full"
                />
              </div>
            </div>

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
                placeholder="Enter admin email"
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
                placeholder="Create a password"
                required
                className="mt-1 block w-full"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#424242]"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="mt-1 block w-full"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white ${
                loading ? "opacity-50" : ""
              }`}
            >
              {loading ? "Creating Admin Account..." : "Create Admin Account"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
} 