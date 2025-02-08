"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Header from "../components/header";
import { Suspense } from "react";

function SigninForm({ callbackUrl }: { callbackUrl: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push(data.redirect || callbackUrl);
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch{
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen my-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-400 text-white font-semibold rounded-md hover:bg-orange-700 hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center">
          <hr className="border-t border-gray-300 w-full my-4" />
          <span className="text-center text-gray-600 mx-4">or</span>
          <hr className="border-t border-gray-300 w-full my-4" />
        </div>

        <div className="mt-6">
          <button className="w-full py-2 px-4 text-black font-semibold rounded-md flex items-center justify-start">
            <FaFacebook className="mr-2" />
            <span className="flex-1 text-center">Continue with Facebook</span>
          </button>

          <button className="w-full py-2 px-4 text-black font-semibold rounded-md flex items-center justify-start">
            <FaGoogle className="mr-2" />
            <span className="flex-1 text-center">Continue with Google</span>
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don&apos;t have an account? <Link href="/signup" className="hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function SigninPage() {
  return (
    <div>
      <Header>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-semibold">
            Home &gt; Sign In
          </p>
        </div>
      </Header>

      <Suspense fallback={<p>Loading...</p>}>
        <CallbackWrapper />
      </Suspense>
    </div>
  );
}

// Component to handle useSearchParams inside Suspense
function CallbackWrapper() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return <SigninForm callbackUrl={callbackUrl} />;
}

export default SigninPage;
