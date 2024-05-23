import React from "react";

function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto bg-black bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Heading of the modal */}
            <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Forgot Password
              </h3>
            </div>
            {/* form Start */}
            <div className="p-4 md:p-5">
              <form className="space-y-4">
                {/* Your new password start */}
                <div>
                  <label
                    htmlFor="newPassword"
                    className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                  >
                    Your new password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="********"
                    required
                    autoComplete="off"
                  />
                </div>

                {/* Your confirm password start */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-md font-bold text-gray-900 dark:text-white"
                  >
                    Your confirm password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    autoComplete="off"
                  />
                </div>

                {/* update button */}
                <button
                  type="submit"
                  className="w-full text-white bg-pink-700 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
