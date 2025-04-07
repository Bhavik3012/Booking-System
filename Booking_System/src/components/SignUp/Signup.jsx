import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#FFF3E0] flex flex-col">
      {/* Header Removed */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex justify-center flex-grow">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-[#424242] mb-6 text-center">
            Create an Account
          </h2>
          <form className="space-y-6">
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
                  placeholder="First Name"
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
                  placeholder="Last Name"
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
                placeholder="Create a password"
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
                placeholder="Confirm your password"
                className="mt-1 block w-full"
              />
            </div>
            <Button className="w-full bg-[#FFA726] hover:bg-[#FB8C00] text-white">
              Sign Up
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-[#424242]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-[#FFA726] hover:text-[#FB8C00]"
            >
              Log In
            </Link>
          </p>
        </div>
      </main>

      <br />
    </div>
  );
}
