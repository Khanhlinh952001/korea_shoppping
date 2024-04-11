"use client"
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useCart } from "@/app/context/CartContext";
import { useData } from "@/app/hooks/useData";
// import { useClient } from "@/app/hooks/useClient"; // Import useClient hook

export default function CartDetail() {
  const { cartItems } = useCart();
  const { data } = useData();
  const [count, setCount] = useState(1);

  // const { updateCartQuantity, removeFromCart } = useClient(); // Use the useClient hook to get client functionalities
  const [loading, setLoading] = useState(true);

  const cartProduct = cartItems.map((item) => {
    const product = data.find((product) => product.code === item.productId);
    return product ? { ...product, quantity: item.count } : null; // Add quantity property and handle potential null value
  }).filter(Boolean); // Filter out potential null values

  console.log(cartProduct);
  useEffect(() => {
    setLoading(false); // Simulate loading time
  }, []);

  if (loading) {
    return <CircularProgress />; // Show loading indicator while fetching data
  }

  return (
    <div className="mt-6 bg-slate-50 ml-6 rounded-xl h-screen px-10">
      <h1 className="text-2xl pt-4 ml-4 text-gray-700">Chi tiết giỏ hàng</h1>
      <div className="px-8 py-4 ml-4 border mt-5 w-full bg-white rounded-xl">
        {cartProduct.map((item,index) => (
          <div key={index} className="flex items-center justify-between border-b py-2">
            <div>
            <img src={item.img[0].url} alt={index} className="w-28 h-28 min-w28" />
            </div>
            <div className="ml-8 justify-center">
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-red-600 ">Giá:    {(item.sales * 18.0 * count).toLocaleString("en")} VND</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => count > 1 && setCount(count - 1)}
                  className="bg-gray-200 px-2 py-1 rounded-full mr-2"
                >
                  -
                </button>
                <span className="px-2 py-1 bg-gray-600 rounded-full">{count}</span>
                <button
                   onClick={() => setCount(count + 1)}
                  className="bg-gray-200 px-2 py-1 rounded-full ml-2"
                >
                  +
                </button>
              </div>
            </div>
            <div>
            <button
              onClick={() => removeFromCart(item.code)} // Remove item from cart
              className="text-red-600 font-semibold"
            >
              Xóa
            </button>
            </div>
            
          </div>
        ))}
      </div>
      <div className="flex justify-end mr-6 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">Tiếp tục mua hàng</button>
        <button className="bg-red-500 text-white ml-4 px-4 py-2 rounded-xl">Thanh toán</button>
      </div>
    </div>
  );
}
