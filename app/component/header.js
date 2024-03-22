import { FaSearch } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import { FaRegFaceLaughWink } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

export default function Header() {
    return (
        <div className="h-24 bg-slate-50 flex justify-around pt-2">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center w-2/6">
            <h1 className='text-2xl font-semibold text-blue-600'>K-Shopping</h1>
            <p className="font-semibold text-blue-700 mt-1 cursor-pointer">An toàn & uy tín</p>
        </div>
    
        {/* Search */}
        <div className="w-2/3">
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
            <div className="mt-2 flex">
                <button className="text-md text-gray-500 mx-2 cursor-pointer">Điện gia dụng</button>
                <button className="text-md text-gray-500 mx-2 cursor-pointer">Mẹ & bé</button>
                <button className="text-md text-gray-500 mx-2 cursor-pointer">Khỏe đẹp</button>
                <button className="text-md text-gray-500 mx-2 cursor-pointer">Sách</button>
                <button className="text-md text-gray-500 mx-2 cursor-pointer">Thể thao</button>
            </div>
        </div>
    
        {/* Information */}
        <div className="flex flex-col justify-between w-2/6 ml-8">
            <div className='flex'>
                <div className='text-blue-600 flex px-4 py-2 rounded-xl hover:bg-blue-200'>
                    <FaHome className='text-2xl' />
                    <h3 className=' ml-1 font-light cursor-pointer'>Trang chủ</h3>
                </div>
                <div className='text-gray-600 flex px-4 py-2 rounded-xl hover:bg-gray-200'>
                    <FaRegFaceLaughWink className='text-2xl' />
                    <h3 className=' ml-1 font-light cursor-pointer'>Trang chủ</h3>
                </div>
                <div className='text-blue-600 flex px-4 py-2 rounded-xl hover:bg-blue-100'>
                    <BsCart className='text-2xl' />
                </div>
            </div>
    
            <div className='flex '>
                <FiMapPin className='text-gray-400 mt-1 ' />
                <p className='text-gray-400 ml-2 mb-4 cursor-pointer'>Giao đến : <span className='text-gray-800 font-normal border-b-2 cursor-pointer border-gray-400'>
                        Bạn muốn giao hàng tới đâu?</span> </p>
            </div>
        </div>
    </div>
    
    );
}
