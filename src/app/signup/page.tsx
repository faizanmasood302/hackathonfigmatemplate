import Link from 'next/link';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Header from '.././components/header'

export default function Signin() {
  return (
    <div>
      <Header>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl md:text-3xl font-semibold">
            Home &gt; signUp
          </p>
        </div>
      </Header>


      <div className="">
   

        <div className="flex items-center justify-center min-h-screen my-40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold  text-gray-800">Sign Up</h2>
            <form action="/signin" method="POST" className="mt-6">
            <div className="mb-4">
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="text"
                  id="Name"
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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

              <button
                className="w-full py-2 px-4 text-black font-semibold rounded-md flex items-center justify-start"
              >
                <FaFacebook className="mr-2" /> <span className="flex-1 text-center">Continue with Facebook</span>
              </button>
              <button
                className="w-full py-2 px-4 text-black font-semibold rounded-md flex items-center justify-start"
              >
                <FaGoogle className="mr-2" /> <span className="flex-1 text-center">Continue with Facebook</span>
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-600">
                already have account? <Link href="/signup" className=" hover:underline">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
