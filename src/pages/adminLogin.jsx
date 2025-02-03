"use client"
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://server-72rr.onrender.com/login", formData);
      localStorage.setItem(res.data.token);
      window.location.href = "/admin/orders"; // Redirect without useRouter
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input type="text" name="username" onChange={handleChange} placeholder="Username" className="w-full p-2 mb-3 border rounded" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" className="w-full p-2 mb-3 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}
