import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

const useAxiosSecure = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        } else if (user) {
          const token = await user.getIdToken();
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logoutUser();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logoutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;