import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Context } from '.././index';


const Login = () => {
  const {flag,setFlag}=useContext(Context)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginAPI=async()=>{
    try {
        console.log("hi i was hitted")
        const res=await axios.post('http://localhost:5000/user/login',{
            email: formData.email,
            password: formData.password
        },{
            headers:{
                "Content-Type":'application/json'
            }
        });
        const data=res.data;
        console.log("the data is ==>",data)
        if(data.success){
            toast.success(data.message)
            setFlag(false)
            return navigate('/success')
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error('Some internal error')
    }
    
 }


  const handleSubmit = async(e) => {
   
    e.preventDefault();
    await loginAPI();
    console.log("the form data is ===>",formData)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <Link to={'/register'} className='hover:underline text-blue-700'> Register</Link>
      </div>
    </div>
  );
};

export default Login;
