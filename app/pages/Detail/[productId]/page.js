"use client";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Rating from "@mui/material/Rating";
import { useCart } from "@/app/context/CartContext";
import { useDetail } from "@/app/hooks/useDetail";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function ProductDetail({ params }) {
  const { addToCart } = useCart();
  const productId = params.productId;
  const { detail } = useDetail(productId);
  const imageUrls = detail?.img && detail.img.map((image) => image.url);

  const handleAddToCart = () => {
      NotificationManager.success('Success', 'Add to cart');
      addToCart({ productId});
    
  };

  // console.log(detail);

  if (!detail) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="mt-6 bg-slate-50 ml-6 rounded-xl h-screen">
      <NotificationContainer/>
      <h1 className="text-2xl pt-4 ml-4 text-gray-700">Chi tiết sản phẩm</h1>
      <div className="flex justify-between">
        <div className="px-8 py-4 ml-4 border mt-5 w-7/12 bg-white rounded-xl">
          <div className="rounded-xl border border-[#2663eb]">
            <img
              src={imageUrls && imageUrls[0]}
              alt={detail.name}
              className="mt-4 mb-4 px-4 w-full"
            />
          </div>
          <div className="flex">
            {imageUrls &&
              imageUrls.map((image, index) => (
                <div key={index} className="rounded-xl border m-2">
                  <img
                    src={image}
                    alt={detail.name}
                    className="p-2 w-24 max-h-30"
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="w-6/12 pt-5 px-4">
          <div className="bg-white border rounded-xl mb-4 py-2">
            <h1 className="text-lg text-black font-bold px-4">{detail.name}</h1>
            <p className="text-gray-700 px-4">{detail.description}</p>
            <div className="flex">
              <p className="pl-4 text-gray-600">4.0</p>
              <Rating name="read-only" value={4} readOnly />
              <p className="pl-1 pt-1 text-gray-600 text-sm">
                (1005) | Đã bán 4059
              </p>
            </div>
            <div className="flex">
              <p className="font-bold text-xl text-red-600 pl-4 mt-3">
                {(detail.sales * 18.0).toLocaleString("en")} VND{" "}
              </p>
              <span className="mt-3 text-gray-700 ml-4 bg-slate-200 rounded-xl p-1">
                -12%
              </span>
            </div>
          </div>
          <div className=" bg-white border rounded-xl">
            <h4 className="text-gray-800 ml-4 mt-2 font-semibold">
              Thông tin vận chuyển
            </h4>
            <div className="flex">
              <img
                className="w-16 h-16 mt-1"
                src="https://salt.tikicdn.com/ts/upload/f6/67/ae/4075f9d8b4b2dbc5df204abaf97e3132.png"
                alt="Shipping"
              />
              <div className="px-4">
                <p className="text-sm mt-1 text-gray-700">
                  Bạn hãy nhập địa chỉ nhận hàng để được dự báo thời gian & chi
                  phí giao hàng chính xác nhất.
                </p>
                <button className="mt-1 mb-4 text-sm text-[#2663eb] border px-3 py-1 rounded-lg border-[#2663eb]">
                  Nhập địa chỉ
                </button>
              </div>
            </div>
          </div>

          <div className="border bg-white mt-4 rounded-lg px-4 pb-10">
            {/* <h6 className="text-lg font-semibold text-gray-700 mt-4">
              Số Lượng
            </h6> */}
            {/* <div className="flex mt-2">
              <button
                onClick={() => count > 1 && setCount(count - 1)}
                className="text-2xl text-gray-400 border-gray-400 border px-2 rounded-lg"
              >
                -
              </button>

              <div>
                <h2 className="text-xl py-1  text-gray-800 border-gray-400  border px-4 mx-2 rounded-lg">
                  {count}
                </h2>
              </div>
              <button
                onClick={() => setCount(count + 1)}
                className="text-2xl  text-gray-600 border-gray-400  border px-2 rounded-lg"
              >
                +
              </button>
            </div> */}
            <h6 className="text-lg font-semibold text-gray-700 mt-4">
              Tạm tính
            </h6>
            <p className="font-bold text-xl text-red-600">
              {(detail.sales * 18.0 ).toLocaleString("en")} VND
            </p>
            <button
              onClick={handleAddToCart} // Gọi hàm xử lý thêm vào giỏ hàng khi nhấn nút
              className="bg-[#ff434e] w-full text-xl py-1 rounded-xl mt-6"
            >
              Mua ngay
            </button>

            <button
              onClick={handleAddToCart} // Gọi hàm xử lý thêm vào giỏ hàng khi nhấn nút
              className="w-full text-xl py-1 rounded-xl  text-blue-600 border border-blue-600 mt-4"
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
