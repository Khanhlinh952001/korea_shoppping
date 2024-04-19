"use client"
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation"; // Thay đổi từ "next/navigation" sang "next/router"
import { useClient } from "@/app/hooks/useClient";

export default function CartDetail() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, calculateTotal } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const {client ,cartProducts}= useClient();
  // useEffect(() => {
  //   setLoading(false); // Simulate loading time
  // }, []);

  console.table(cartProducts)
  useEffect(() => {
    if (cartItems.length > 0) {
      setLoading(false); // Dừng hiển thị loading khi có dữ liệu trong giỏ hàng
    }
  }, [cartItems]);

  // console.log(calculateTotal); // Không cần in ra calculateTotal ở đây

  // if (loading) {
  //   return <CircularProgress />; // Hiển thị indicator khi đang tải dữ liệu
  // }

  return (

   
    <div className="mt-6 bg-slate-50 ml-6 rounded-xl h-screen px-10">
      <h1 className="text-2xl pt-4 ml-4 text-gray-700">Chi tiết giỏ hàng</h1>
      {
        cartItems ?  <div className="px-8 py-4 ml-4 border mt-5 w-full bg-white rounded-xl">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between border-b py-2">
            <div>
              <img src={item.img[0].url} alt={index} className="w-28 h-28 min-w-28 max-w-28" />
            </div>
            <div className="flex-1 px-8">
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-600">Giá: {(item.sales * 18.0 * item.quantity).toLocaleString("en")} VND</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="bg-gray-200 px-2 py-1 rounded-full mr-2"
                >
                  -
                </button>
                <span className="px-2 py-1 bg-gray-600 rounded-full">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(index)}
                  className="bg-gray-200 px-2 py-1 rounded-full ml-2"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={() => removeFromCart(index)} // Sửa từ "item.index" thành "index"
                className="text-red-600 font-semibold"
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
        <div className="text-end text-red-600">
          <h1 className="text-lg">Tổng cộng : {(calculateTotal() * 18.000).toLocaleString("en")} VND</h1> {/* Thêm () để gọi hàm calculateTotal */}
        </div>
        <div className="flex justify-end mr-6 mt-4">
          <button onClick={() => router.push("/")} className="bg-blue-500 text-white px-4 py-2 rounded-xl">Tiếp tục mua hàng</button>
          <button className="bg-red-500 text-white ml-4 px-4 py-2 rounded-xl">Thanh toán</button>
        </div>
      </div>: <div className=" flex justify-center m-0">
          <div className="text-center"> <img src="https://nghithao.vn/assets/images/no-cart.png" alt="chua co san pham" className="pt-20" />
            <p className="text-gray-600 pt-10">Chua co san pham   <span onClick={()=>{router.push("/")}} className="text-blue-400 cursor-pointer ">tiep tuc mua sam</span> </p> 
          </div>

        </div> 
       
      }


    </div>


  );
}

