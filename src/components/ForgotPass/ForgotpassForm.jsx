import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ForgotpassForm = () => {
  return (
    <div className="bg-gray-100 flex  justify-center items-center py-3 md:py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="bg-white p-4 md:p-5 rounded shadow-sm">
              <div className="mb-5">
                <h2 className="text-2xl font-semibold">Password Reset</h2>
                <h3 className="text-sm text-gray-500 mt-1">
                  Provide the email address associated with your account to recover your password.
                </h3>
              </div>
              <form action="#!">
                <div className="grid gap-3 md:gap-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600"
                    >
                      Reset Password
                    </button>
                  </div>
                </div>
              </form>
              <hr className="my-5 border-gray-300" />
              <div className="flex justify-end gap-4">
                <Link to="/login" className="text-gray-500 hover:text-gray-700">
                  Login
                </Link>
                <Link to="/signup" className="text-gray-500 hover:text-gray-700">
                  Register
                </Link>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <Link
                  to="/auth/google"
                  className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-100"
                >
                  <FaGoogle />
                  <span>Google</span>
                </Link>
                <Link
                  to="/auth/facebook"
                  className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-100"
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotpassForm;
