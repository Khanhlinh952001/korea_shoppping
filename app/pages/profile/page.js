
"use client"
import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  // Giả sử dữ liệu người dùng và đơn hàng được lưu trong state
  const [userData, setUserData] = useState({});
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    // Mock Data for demonstration purpose
    const mockUserData = { name: "John Doe", email: "john@example.com", address: "123 Main St" };
    const mockOrderData = [
      { id: 1, product: "Product A", status: "Shipped" },
      { id: 2, product: "Product B", status: "Processing" },
      { id: 3, product: "Product C", status: "Delivered" }
    ];
    setUserData(mockUserData);
    setOrderData(mockOrderData);
  }, []);

  return (
    <div className="mt-6 bg-slate-50 ml-6 rounded-xl h-full p-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Personal Information</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>Address: {userData.address}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Order Status</h2>
        <ul>
          {orderData.map(order => (
            <li key={order.id} className="mb-2">
              {order.product} - {order.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
