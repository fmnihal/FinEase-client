import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginUser, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await loginUser(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700">Login</button>
      </form>
      <button onClick={handleGoogleLogin} className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 mt-4">Login with Google</button>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <p className="text-center text-gray-600 mt-4">New here? <Link to="/register" className="text-teal-600 hover:underline">Create an account</Link></p>
    </div>
  );
}