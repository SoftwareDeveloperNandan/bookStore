import React from "react";
import Gif from "../../public/Tablet-login.gif";


function admin() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-slate-200">
        <div className="flex flex-col  md:flex-row shadow-lg rounded-2xl overflow-hidden">
          <div className="md:w-1/2 flex items-center justify-center bg-transparent">
            <img src={Gif} alt="GIF" className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold text-center text-gray-500 mb-8">
              Admin Login
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-slate-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-xl fw-bold  bg-slate-100 text-slate-900 outline-none shadow-sm"
                  placeholder="abc@gmail.com"
                  autoComplete="off"
                />
              </div>

              {/* line break */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white rounded-md  text-gray-900">OR</span>
                </div>
              </div>
              {/* Mobile number field */}
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-900">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  className="w-full px-4 py-2 border rounded-xl fw-bold  bg-slate-100 text-slate-900 outline-none shadow-sm"
                  placeholder="+91 1234567890"
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-xl fw-bold  bg-slate-100 text-slate-900 outline-none shadow-sm"
                  placeholder="********"
                  autoComplete="off"
                />
              </div>
              <div className="mb-6 text-right">
                <a
                  href="/forgot-password"
                  className="text-blue-900 cursor-pointer hover:underline"
                  
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full outline-none cursor-pointer border-none bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default admin;
