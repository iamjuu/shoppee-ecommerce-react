import React from "react";
import { Formik, Form, Field } from 'formik';
import { HiOutlineMail } from 'react-icons/hi';
import { GoLock } from 'react-icons/go';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Bg from '../../assets/Login/boys.png';


const initialValues = {
  email: '',
  password: ''
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required')
});

function UserLogin({ handleSubmit, error }) {
  return (
    <div className='flex flex-col justify-center items-center bg-white p-8 rounded-md shadow-lg'>
      <div className='w-28 h-28'>
        <h1 className='text-5xl font-bold'>Login</h1>
      </div>
      <div className='flex'>
        <div className="hidden sm:block">
          <img className='w-96' src={Bg} alt="" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <div className="flex items-center bg-white border-2 border-gray-300 rounded-lg focus-within:border-blue-500 transition duration-300">
                  <HiOutlineMail className="text-gray-500 mx-3"/>
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

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <div className="flex items-center bg-white border-2 border-gray-300 rounded-lg focus-within:border-blue-500 transition duration-300">
                  <GoLock className="text-gray-500 mx-3"/>
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

              <div className="text-red-500">
                <h1>{error}</h1>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>

              <div className="mt-4 text-center">
                <span>Don't have an account? </span>
                <Link to="/signup" className="text-blue-500 hover:text-blue-700">Signup</Link>


              </div>
              <div className="text-center">
                <Link to="/forgotpassword" className="text-red-400 hover:text-red-600">Forgot password</Link>

              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default UserLogin;


