"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (!token) return window.location.href = "/admin/login";

    // const user = jwtDecode(token);
    // if (user.role !== "admin") return window.location.href = "/admin/login";

    axios
      .get("https://server-72rr.onrender.com/data", )
      .then((res) => setOrders(res.data))
      .catch(() => window.location.href = "/admin/login");
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Admin Orders</h2>
      <div className="bg-white p-4 rounded shadow">
        {orders.length === 0 ? <p>No orders found.</p> : (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-300">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Distance</th>
                <th className="p-2 border">Freight Type</th>
                <th className="p-2 border">Load Type</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="text-center">
                  <td className="p-2 border">{order.name}</td>
                  <td className="p-2 border">{order.email}</td>
                  <td className="p-2 border">{order.phone}</td>
                  <td className="p-2 border">{order.distance} km</td>
                  <td className="p-2 border">{order.freightType}</td>
                  <td className="p-2 border">{order.loadType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
