import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export default function Login() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="w-full bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-blue-700 font-bold">Login</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
            Welcome Back
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-blue-700"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 block w-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-blue-700"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Sign In
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-blue-700">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 shadow-t">
        <div className="container mx-auto text-center text-sm text-blue-700">
          © 2025 Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
