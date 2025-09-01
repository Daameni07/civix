import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ onForgotPassword, onSwitchToRegister, mode = "full" }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const isOfficial = email.trim().toLowerCase().endsWith('gov.in');
      const role = isOfficial ? 'official' : 'citizen';

      localStorage.setItem('userRole', role);
      localStorage.setItem('authToken', 'dummy-token');
      toast.success(`✅ Logged in as ${role.charAt(0).toUpperCase() + role.slice(1)}!`);

      setTimeout(() => {
        navigate(role === 'official' ? '/dashboard/official' : '/dashboard/citizen');
      }, 1500);
    } else {
      toast.error('⚠️ Please enter both email and password.');
    }
  };

  const formContent = (
    <form className="space-y-4" onSubmit={handleLogin}>
      <h2 className="text-xl font-bold text-center text-blue-900">Welcome Back</h2>
      <input
        type="email"
        placeholder="Email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-md">
        Sign In
      </button>
      <p
        className="text-sm text-center text-blue-700 cursor-pointer hover:underline"
        onClick={onForgotPassword}
      >
        Forgot Password?
      </p>
      <p className="text-sm text-center text-gray-600 mt-2">
        New to Civix?{' '}
        <span
          className="text-blue-900 font-semibold cursor-pointer hover:underline"
          onClick={onSwitchToRegister}
        >
          Create Account
        </span>
      </p>
    </form>
  );

  return mode === "full" ? (
    <div className="flex items-center justify-center min-h-screen bg-brand-light px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {formContent}
      </div>
    </div>
  ) : (
    <div className="bg-white p-4 rounded-md shadow-md max-w-md mx-auto">
      {formContent}
    </div>
  );
}
