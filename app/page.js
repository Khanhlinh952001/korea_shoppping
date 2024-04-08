"use client"
import { database } from "./data/firebaseConfig";
import { ref, child, get } from "firebase/database";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useCart } from "./context/CartContext";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [data, setData] = useState([]);
  const {cart,addToCart}= useCart();
  const router = useRouter();
  console.log(cart);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Corrected import for the 'get' function
        const snapshot = await get(child(ref(database), "Products"));

        if (snapshot.exists()) {
          const result = snapshot.val();
          const filteredData = Object.values(result).filter(
            (value) => value.status === "true"
          );
          setData(filteredData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const handleClick = (product) => {
    // Wrap router.push inside a function
    router.push(`/pages/Detail/${product.code}`);
  };

  console.log(data)
  return (

    <div className="mt-6 bg-slate-50 ml-6 rounded-xl h-full"> 
    <h1 className="ml-10 pt-4 text-2xl text-gray-600 font-semibold">Tất cả sản phẩm </h1>
    <div className=" flex flex-wrap   ">
          {data.map((product, index) => (
        <div onClick={() => handleClick(product)}  key={index} className=" hover:shadow-lg p-2 pb-0 m-2">
          <div className="  mb-4 w-60">
            <img src={product.img[0].url} alt={product.name} className=" rounded-lg w-60 h-auto" />
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-gray-600 ">{product.name}</h3>

              <div className="text-yellow-500 flex text-sm mt-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <p className="text-[14px] text-gray-400">(2323)</p>
              </div>

              <div className="flex"> 
                <div> <p className="text-gray-400 text-[12px] line-through mt-2">
                {(product.price * 18.000).toLocaleString('en')} VND
              </p>
              <p className="text-red-600 font-semibold">
                {(product.sales * 18.000).toLocaleString('en')} VND
              </p>
                  </div>
                  

               
                </div>
             

              <p className="text-[12px] text-gray-600 mt-2">Made in Korea</p>
               
               
                <div className="mt-2 flex">
                  <img  className="w-7 h-5" src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" alt="shipper" />
                  <p className="text-gray-400 text-[12px] ml-2">Giao siêu tốc </p>
                  </div>
                 



             
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
}
