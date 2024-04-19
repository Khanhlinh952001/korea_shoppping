"use client"
import { FaSearch, FaHome, FaRegSmileWink } from 'react-icons/fa';
import { BsCart } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { useCart } from '../context/CartContext';
import Badge from '@mui/material/Badge';
import { useRouter } from 'next/navigation';
import {  useClient } from '../hooks/useClient';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { auth } from '../data/firebaseConfig';
export default function Header() {
    const router = useRouter();
    const { client } = useClient();
    const cartLength = client && client.cart ? Object.keys(client.cart).length : 0;

    console.log(client ? client.username : "No username available");
    const handleClick = () => {
        router.push("/pages/CartDetail");
    };
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    };

    return (
        <div className="h-auto md:h-24 bg-slate-50 flex flex-col md:flex-row items-center justify-between pt-2">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center w-full md:w-2/6" onClick={() => { router.push("/") }}>
                <h1 className='text-2xl font-semibold text-blue-600 cursor-pointer'>K-Shopping</h1>
                <p className="font-semibold text-blue-700 mt-1 cursor-pointer">An toàn & uy tín</p>
            </div>

            {/* Search */}
            <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-0 md:mr-8">
                <div className="flex border rounded-lg bg-white">
                    <div className="flex items-center flex-1">
                        <FaSearch className="ml-2 text-gray-500" />
                        <input
                            className="px-4 py-2 text-gray-600 rounded-lg flex-1 focus:outline-none"
                            placeholder="Bạn muốn tìm gì hôm nay ?"
                        />
                    </div>
                    <div className="flex ">
                        <p className="px-2 pt-2 hover:bg-blue-100 rounded-lg text-blue-600 cursor-pointer">Tìm Kiếm</p>
                    </div>
                </div>
                <div className="mt-2 flex flex-wrap sm:hidden lg:block justify-center md:justify-start">
                    <button className="text-md text-gray-500 mx-2 my-1 cursor-pointer">Điện gia dụng</button>
                    <button className="text-md text-gray-500 mx-2 my-1 cursor-pointer">Mẹ & bé</button>
                    <button className="text-md text-gray-500 mx-2 my-1 cursor-pointer">Khỏe đẹp</button>
                    <button className="text-md text-gray-500 mx-2 my-1 cursor-pointer">Sách</button>
                    <button className="text-md text-gray-500 mx-2 my-1 cursor-pointer">Thể thao</button>
                </div>
            </div>

            {/* Information */}
            <div className="w-full md:w-2/6 ml-0 md:ml-8">
                <div className='flex w-80 md:justify-between'>
                    <div onClick={() => { router.push("/") }} className='text-blue-600 flex px-4 py-2 rounded-xl hover:bg-blue-200'>
                        <FaHome className='text-2xl' />
                        <h3 className=' ml-1 font-light cursor-pointer'>Trang chủ</h3>
                    </div>

                    {
                        client?.username ?
                            <div className='flex  '>
                                <div onClick={() => { router.push("/pages/profile") }} className='text-gray-600 flex px-4 mr-1 py-2  hover:text-gray-800 rounded-xl bg-blue-300 hover:bg-blue-100 '>
                                    <FaRegSmileWink className='text-2xl text-black' />
                                    <p className=' ml-1  cursor-pointer font-semibold '>{client?.username}</p>

                                </div>
                                <RiLogoutCircleRLine onClick={handleLogout} className='text-xl text-gray-800 mt-2 cursor-pointer hover:text-red-500' />

                            </div>
                            :
                            <div onClick={() => { router.push("/pages/auth/login") }} className='text-gray-600 flex px-4 py-2 rounded-xl hover:bg-gray-200'>
                                <FaRegSmileWink className='text-2xl' />
                                <h3 className=' ml-1 font-light cursor-pointer'>Tai Khoan</h3>

                            </div>


                    }

                    <div className='text-blue-600 flex px-4 py-2 rounded-xl hover:bg-blue-100' onClick={handleClick}>
                        <Badge badgeContent={cartLength} color="primary">
                            <BsCart className='text-2xl' />
                        </Badge>
                    </div>
                </div>

                <div className='flex justify-center md:justify-start'>
                    <FiMapPin className='text-gray-400 mt-1 ' />
                    <p className='text-gray-400 ml-2 mb-4 cursor-pointer'>Giao đến :
                    
                    {client?.address ? <span className='text-gray-800 font-normal border-b-2 cursor-pointer border-gray-400'>{client?.address}</span>: <span className='text-gray-800 font-normal border-b-2 cursor-pointer border-gray-400'>
                        Bạn muốn giao hàng tới đâu?</span> }
                    
                        
                        </p>
                </div>
            </div>
        </div>

    );
}
