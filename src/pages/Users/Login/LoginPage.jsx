import axiosInstance from '../../../Instance/Instance'
import LoginForm from '../../../components/Login/LoginForm'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate()
const[error,setError]=useState('')

// const handleSubmit = async (value) => {
//   try {
//     console.log(value, 'data');
//     const response = await axiosInstance.post('/login'c);
//     const token =response.data.token;
    
  
//   if(response.status ==200){
//     response.data.role=='user' ? navigate('/'): navigate('/agent/agenthome')
//     localStorage.setItem('jwt',token)
//   }
      
   
  
//   } catch (error) {
//     if (error) {
//       const errorMsg = error.response.data.message;
//       setError(errorMsg);
//     }
//   }
// };

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm
       error={error}/>
    </div>
  );
}
export default Login;
