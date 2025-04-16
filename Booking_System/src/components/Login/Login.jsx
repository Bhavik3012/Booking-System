import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#FFF3E0] flex flex-col">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-[#424242] mb-6 text-center">
            Welcome Back
          </h2>
          <form className="space-y-6">
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
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                className="mt-1 block w-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-[#FFA726] focus:ring-[#FFA726] border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-[#424242]"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#FFA726] hover:text-[#FB8C00]"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <Button className="w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white">
              Sign In
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-[#424242]">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-[#FFA726] hover:text-[#FB8C00]"
            >
              Sign Up
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
