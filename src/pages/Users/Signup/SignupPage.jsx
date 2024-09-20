import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../../../components/Signup/SignupForm';
import Instance from '../../../Instance/Instance';

function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      console.log(values, 'data');
      const response = await Instance.post('/signup', values);

      if (response.status === 200) {
        navigate('/otp');
      } else {
        navigate('/signup');
      }
    } catch (error) {
      console.error('There was an error in signup!', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <SignupForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default SignupPage;
