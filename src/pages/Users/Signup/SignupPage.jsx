import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../../../components/Signup/SignupForm';
import Instance from '../../../Instance/Instance';

function SignupPage() {
  const [signupError, setSignupError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      console.log(values, 'data');
      const response = await Instance.post('/signup', values);

      if (response.status === 200) {
        navigate('/otp'); // Redirect to OTP page on success
      } else {
        setSignupError('Signup failed, please try again.');
      }
    } catch (error) {
      console.error('There was an error during signup!', error);
      setSignupError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
    <SignupForm handleSubmit={handleSubmit} />
    {signupError && (
      <div className="mt-4">
        <div>
        <p className="text-red-500">{signupError}</p>

        </div>
      </div>
    )}
  </div>
  
  );
}

export default SignupPage;
