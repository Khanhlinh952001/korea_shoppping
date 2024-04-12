"use client"
import { FaSearch, FaHome, FaRegSmileWink } from 'react-icons/fa';
import { BsCart } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { useCart } from '../context/CartContext';
import Badge from '@mui/material/Badge';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const { cartItems } = useCart();

    const handleClick = () => {
        router.push("/pages/CartDetail");
    };

    return (
        <div className="h-auto md:h-24 sm:flex-row md:flex-row  bg-slate-50 flex flex-col  items-center justify-between pt-2">
            {/* Logo */}
            <div onClick={()=>(router.push("/"))} className="flex flex-col items-center justify-center w-full md:w-2/6">
                <h1 className='text-2xl font-semibold text-blue-600 cursor-pointer'>K-Shopping</h1>
                <p className="font-semibold text-blue-700 mt-1 cursor-pointer">An toàn & uy tín</p>
            </div>

            {/* Search */}
            <div className=" sm:hidden md:hidden mt-1  md:ml-0 md:mr-8">
                <div className="flex border rounded-lg bg-white">
                    <div className="flex items-center md:flex flex-1">
                        <FaSearch className="ml-2 text-gray-500" />
                        <input
                            className="px-4 py-2 text-gray-600 rounded-lg  lg:flex-1 focus:outline-none"
                            placeholder="Bạn muốn tìm gì hôm nay ?"
                        />
                    </div>
                    <div className="flex ">
                        <p className="px-2 pt-2 hover:bg-blue-100 rounded-lg text-blue-600 cursor-pointer">Tìm Kiếm</p>
                    </div>
                </div>
                
            </div>

            {/* Information */}
            <div className="flex flex-col  w-full md:w-1/6 ml-0 md:ml-8 md:text-sm">
                <div className='flex justify-center md:justify-between'>
                    <div className='text-blue-600 flex px-4 py-2 rounded-xl hover:bg-blue-200'>
                        <FaHome className='text-2xl' />
                        <h3 className=' ml-1 font-light cursor-pointer min-w-16 md:hidden sm:hidden lg:block'>Trang chủ</h3>
                    </div>
                    <div className='text-gray-600 flex px-4 py-2 rounded-xl hover:bg-gray-200'>
                        <FaRegSmileWink className='text-2xl' />
                        <h3 className=' ml-1 font-light cursor-pointer min-w-16 md:hidden sm:hidden lg:block'>Tài khoản</h3>
                    </div>
                    <div className='text-blue-600 flex px-4 mr-10 py-2 rounded-xl hover:bg-blue-100' onClick={handleClick}>
                        <Badge badgeContent={cartItems.length} color="primary">
                            <BsCart className='text-2xl' />
                        </Badge>
                    </div>
                </div>

                <div className='flex justify-center md:text-sm sm:hidden md:justify-start'>
                    <FiMapPin className='text-gray-400 mt-1 ' />
                    <p className='text-gray-400 ml-2 mb-4 cursor-pointer min-w-80'>Giao đến : <span className='text-gray-800 font-normal border-b-2 cursor-pointer border-gray-400'>
                        Bạn muốn giao hàng tới đâu?</span> </p>
                </div>
            </div>
        </div>

    );
}
