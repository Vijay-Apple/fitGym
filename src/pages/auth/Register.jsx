import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // <- added Link and useNavigate
import { registerUser } from "../../services/authService";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    role: "member",
    gender: "",
    address: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // to programmatically redirect

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser(formData);

      // Show success message
      setMessage("User registered successfully!");
      setError("");

      // Optionally, redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);

      console.log(res);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[450px]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Gym Management Register
        </h2>

        {message && (
          <p className="text-green-600 text-center mb-4">{message}</p>
        )}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Enter age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            <option value="member">Member</option>
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
          </select>

          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              rows="3"
              required
            />
          </div>

          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-lg"
          >
            Register
          </button>
        </form>

        {/* Login link */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
