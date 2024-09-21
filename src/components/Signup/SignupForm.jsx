import React from 'react';
import { Formik, Form, Field } from 'formik';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { GoLock } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Bg from '../../assets/Signup/handover.png';

const initialValues = {
  Name: '',
  email: '',
  password: '',
};

const SignupForm = ({ handleSubmit }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-8 rounded-md shadow-lg">
      <div className="w-28 h-28">
        <h1 className="text-5xl font-bold">Signup</h1>
      </div>
      <div className="flex">
        <div className="hidden sm:block">
          <img className="w-96" src={Bg} alt="Signup" />
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)} // Pass the form values to handleSubmit
        >
          {({ errors, touched }) => (
            <Form className="max-w-md mx-auto">
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="Name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <div className="flex items-center bg-white border-2 border-gray-300 rounded-lg focus-within:border-blue-500 transition duration-300">
                  <AiOutlineUser className="text-gray-500 mx-3" />
                  <Field
                    type="text"
                    id="Name"
                    name="Name"
                    className="bg-transparent w-full py-2 px-3 focus:outline-none"
                  />
                </div>
                {touched.Name && errors.Name && (
                  <small className="text-red-500">{errors.Name}</small>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <div className="flex items-center bg-white border-2 border-gray-300 rounded-lg focus-within:border-blue-500 transition duration-300">
                  <HiOutlineMail className="text-gray-500 mx-3" />
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="bg-transparent w-full py-2 px-3 focus:outline-none"
                  />
                </div>
                {touched.email && errors.email && (
                  <small className="text-red-500">{errors.email}</small>
                )}
              </div>

              {/* Password Field */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <div className="flex items-center bg-white border-2 border-gray-300 rounded-lg focus-within:border-blue-500 transition duration-300">
                  <GoLock className="text-gray-500 mx-3" />
                  <Field



                    type="password"
                    id="password"
                    name="password"
                    className="bg-transparent w-full py-2 px-3 focus:outline-none"
                  />
                </div>
                {touched.password && errors.password && (
                  <small className="text-red-500">{errors.password}</small>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>

              {/* Login Link */}
              <div className="mt-4 text-center">
                <span>Already have an account? </span>
                <Link to="/login" className="text-blue-500 hover:text-blue-700">
                  Login
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;
