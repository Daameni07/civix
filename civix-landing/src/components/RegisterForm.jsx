import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function RegisterForm() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [role, setRole] = useState('citizen');
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
          toast.warn("⚠️ Unable to fetch location.");
        }
      );
    } else {
      toast.error("❌ Geolocation not supported by your browser.");
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || password !== confirm) {
      toast.error("⚠️ Please fill all fields correctly.");
      return;
    }

    if (role === 'official' && !email.endsWith('.gov.in')) {
      toast.error("⚠️ Public officials must use a government email.");
      return;
    }

    try {
      console.log("Registering user:", { name, email, role, location });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      localStorage.setItem("userRole", role);

      // 🎉 Show success message with login prompt
      toast.success("🎉 Successfully registered! Please sign in to get started.");

      // ⏳ Delay navigation to allow toast to display
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      toast.error("❌ Registration failed.");
      console.error(err);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleRegister}>
      <h2 className="text-xl font-bold text-center text-blue-900">Create Account</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <input
        type="password"
        placeholder="Confirm Password"
        className="input"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />

      <div className="flex space-x-4">
        <label>
          <input
            type="radio"
            name="role"
            value="citizen"
            checked={role === 'citizen'}
            onChange={() => setRole('citizen')}
          /> Citizen
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="official"
            checked={role === 'official'}
            onChange={() => setRole('official')}
          /> Public Official
        </label>
      </div>

      <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-md">
        Create Account
      </button>
    </form>
  );
}

