"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { database } from "@/app/data/firebaseConfig";
import { ref, child, get } from "firebase/database";
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import { useCart } from "@/app/context/CartContext";
export default function ProductDetail({ params }) {
  const {cart,addToCart}= useCart();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const router = useRouter();
  const productId = params.productId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(ref(database), "Products"));
        if (snapshot.exists()) {
          const result = snapshot.val();
          const filteredData = Object.values(result).find(
            (value) => value.code === productId
          );
          setProduct(filteredData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [productId]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="mt-6 bg-slate-50 ml-6 rounded-xl h-screen">
      <h1 className="text-2xl pt-4 ml-4 text-gray-700">Chi tiết sản phẩm</h1>
      <div className="flex justify-between">
        <div className="px-8 py-4 ml-4 border mt-5 w-7/12 bg-white rounded-xl">

          <div className="rounded-xl border border-[#2663eb]">
            <img src={product.img[0].url} alt={product.name} className="mt-4 mb-4 px-4 w-full" />
          </div>
          <div className="flex">
            <div className="rounded-xl border m-2 ">
              <img src={product.img[0].url} alt={product.name} className="p-2 w-full" />
            </div>
            <div className="rounded-xl border m-2">
              <img src={product.img[0].url} alt={product.name} className="p-2 w-full" />
            </div>
            <div className="rounded-xl border m-2">
              <img src={product.img[0].url} alt={product.name} className="p-2 w-full" />
            </div>
          </div>
          
          {/* 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Add to Cart
                </button> */}
        </div>

        <div className="w-6/12 pt-5 px-4">

          <div className="bg-white border rounded-xl mb-4 py-2">
          <h1 className="text-lg text-black font-bold px-4">{product.name}</h1>
          <p className="text-gray-700 px-4">dffsdfdsf{product.description}</p>
          <div className="flex">
          <p className="pl-4 text-gray-600">4.0</p>
          <Rating name="read-only" value={4} readOnly />
          <p className="pl-1 pt-1 text-gray-600 text-sm">(1005) | Đã bán 4059</p>
          </div>
         <div className="flex">
         <p className="font-bold text-xl text-red-600 pl-4 mt-3">{(product.sales * 18.000 ).toLocaleString('en')} VND </p>
         <span className="mt-3 text-gray-700 ml-4 bg-slate-200 rounded-xl p-1">-12%</span>
         </div>
          
         
          </div>
          <div className="h-32 bg-white border rounded-xl">
            <h4 className="text-gray-800 ml-4 mt-2 font-semibold">Thông tin vận chuyển</h4>
            <div className="flex">
              <img className="w-16 h-16 mt-1" src="https://salt.tikicdn.com/ts/upload/f6/67/ae/4075f9d8b4b2dbc5df204abaf97e3132.png" />
              <div className="px-4">
                <p className="text-sm mt-1 text-gray-700">Bạn hãy nhập địa chỉ nhận hàng để được dự báo thời gian & chi phí giao hàng chính xác nhất.</p>
                <button className="mt-1 text-sm text-[#2663eb] border px-3 py-1 rounded-lg border-[#2663eb]">
                  Nhập địa chỉ
                </button>
              </div>
            </div>
          </div>

          <div className="border bg-white mt-4 rounded-lg px-4 pb-10">
            <h6 className="text-lg font-semibold text-gray-700 mt-4">Số Lượng</h6>
            <div className="flex mt-2">
              <button onClick={() => count > 1 && setCount(count - 1)} className="text-2xl text-gray-400 border-gray-400 border px-2 rounded-lg">
                -
              </button>

              <div>
                <h2 className="text-xl py-1  text-gray-800 border-gray-400  border px-4 mx-2 rounded-lg">{count}</h2>
              </div>
              <button onClick={() => setCount(count + 1)} className="text-2xl  text-gray-600 border-gray-400  border px-2 rounded-lg">
                +
              </button>
            </div>
            <h6 className="text-lg font-semibold text-gray-700 mt-4">Tạm tính</h6>
            <p className="font-bold text-xl text-red-600">{(product.sales * 18.000 * count).toLocaleString('en')} VND</p>
          <button className="bg-[#ff434e] w-full text-xl py-1 rounded-xl mt-6">
               Mua ngay
          </button>

          <button onClick={()=>addToCart({productId,count})} className="w-full text-xl py-1 rounded-xl  text-blue-600 border border-blue-600 mt-4">
             Thêm vào giỏ
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
