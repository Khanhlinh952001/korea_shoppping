"use client"
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
  const [quantity, setQuantity] = useState(1);
  const imageUrls = detail?.img && detail.img.map((image) => image.url);

  const handleAddToCart = () => {
    NotificationManager.success('Success', 'Add to cart',1000);
    addToCart(detail, quantity);
  };

  if (!detail) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="mt-6 bg-slate-50 ml-6 rounded-xl h-full p-6">
      <NotificationContainer/>
      <h1 className="text-2xl pt-4 text-gray-700">Chi tiết sản phẩm</h1>
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <div className="md:w-1/2 md:mr-4">
          <div className="rounded-xl border border-[#2663eb] overflow-hidden">
            <img
              src={imageUrls && imageUrls[0]}
              alt={detail.name}
              className="w-full"
            />
          </div>
          <div className="flex flex-wrap justify-center md:justify-start mt-4">
            {imageUrls &&
              imageUrls.map((image, index) => (
                <div key={index} className="rounded-xl border m-2 overflow-hidden">
                  <img
                    src={image}
                    alt={detail.name}
                    className="w-24 h-24 object-cover"
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
          <div className="bg-white border rounded-xl mb-4 py-2 px-4">
            <h1 className="text-lg text-black font-bold">{detail.name}</h1>
            <p className="text-gray-700">{detail.description}</p>
            <div className="flex items-center mt-2">
              <Rating name="read-only" value={4} readOnly />
              <p className="pl-1 text-gray-600 text-sm">(1005) | Đã bán 4059</p>
            </div>
            <div className="flex items-center mt-2">
              <p className="font-bold text-xl text-red-600 mr-2">
                {(detail.sales * 18.0).toLocaleString("en")} VND
              </p>
              <span className="text-gray-700 bg-slate-200 rounded-xl p-1">-12%</span>
            </div>
          </div>

          <div className="bg-white border rounded-xl mb-4 py-2 px-4">
            <h4 className="text-gray-800 font-semibold">Thông tin vận chuyển</h4>
            <div className="flex mt-2">
              <img
                className="w-16 h-16 mt-1"
                src="https://salt.tikicdn.com/ts/upload/f6/67/ae/4075f9d8b4b2dbc5df204abaf97e3132.png"
                alt="Shipping"
              />
              <div className="pl-4">
                <p className="text-sm text-gray-700 mt-1">Bạn hãy nhập địa chỉ nhận hàng để được dự báo thời gian & chi phí giao hàng chính xác nhất.</p>
                <button className="mt-1 text-sm text-[#2663eb] border px-3 py-1 rounded-lg border-[#2663eb]">Nhập địa chỉ</button>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-xl mb-4 py-2 px-4">
            <h6 className="text-lg font-semibold text-gray-700">Số Lượng</h6>
            <div className="flex mt-2">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="text-2xl text-gray-400 border-gray-400 border px-2 rounded-lg"
              >
                -
              </button>
              <div>
                <h2 className="text-xl py-1 text-gray-800 border-gray-400 border px-4 mx-2 rounded-lg">{quantity}</h2>
              </div>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-2xl text-gray-600 border-gray-400 border px-2 rounded-lg"
              >
                +
              </button>
            </div>
            <h6 className="text-lg font-semibold text-gray-700 mt-2">Tạm tính</h6>
            <p className="font-bold text-xl text-red-600">{(detail.sales * 18.0 * quantity).toLocaleString("en")} VND</p>
            <button onClick={handleAddToCart} className="w-full mt-4 py-2 rounded-xl text-white bg-[#ff434e]">Mua ngay</button>
            <button onClick={handleAddToCart} className="w-full mt-2 py-2 rounded-xl text-blue-600 border border-blue-600">Thêm vào giỏ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
