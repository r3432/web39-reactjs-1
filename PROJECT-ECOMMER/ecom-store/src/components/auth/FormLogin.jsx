import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { urlLogin } from '../../untils/variable';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); // Hook để điều hướng

  const user = {
   email: email,
    password:password,
  };

  const handelLogin = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true); // Sửa lỗi chính tả
      const respond = await axios.post(urlLogin, user);
      console.log(respond.data.user);
      localStorage.setItem('userInfo', JSON.stringify(respond.data.user));
      navigate('/dashboard'); // Sử dụng useNavigate để điều hướng
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false); // Đảm bảo set lại trạng thái là false trong khối finally
    }
  };   

  useEffect(() => {
    const isAuth = JSON.parse(localStorage.getItem('userInfo'));
    if (isAuth) navigate('/dashboard'); // Sử dụng useNavigate để điều hướng
  }, [navigate]);

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handelLogin}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <Link
          to="/forgot-password" // Thay vì href
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </Link>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full text-white ${isLoading ? 'bg-[#000]' : 'bg-primary-600'} hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
      >
        {isLoading ? 'Loading...' : 'Sign in'}
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{' '}
        <Link
          to="/signup" // Thay vì href
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
