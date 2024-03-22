import Link from "next/link"

export default function NavBar() {
    return (
        <div className="bg-slate-50 h-full px-8 rounded-xl">
            <h2 className="pt-4 font-semibold text-slate-900 pb-2">Danh mục</h2>
            <Link href={"#"} className="flex hover:bg-slate-200 px-2 rounded-xl">
                <p className=" my-3 ml-6 font-semibold text-blue-600 text-md ">Tất cả</p>
                </Link>
            <Link href={"#"} className="flex hover:bg-slate-200 px-2 rounded-xl">
                <img className="w-10 h-10 my-2" alt="doi_song" src="https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp" />
                <p className="text-gray-600 mt-3 ml-2 text-md"> Đời Sống</p>
            </Link>

            <Link href={"#"} className="flex hover:bg-slate-200 px-2 rounded-xl">
                <img className="w-10 h-10 mt-3 my-2" alt="doi_song" src="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp" />
                <p className="text-gray-600 mt-2 ml-2 text-md">Điện Thoại - Máy Tính Bảng</p>
            </Link>

            <Link href={"#"} className="flex hover:bg-slate-200 px-2 rounded-xl">
                <img className="w-10 h-10 mt-3 my-2" alt="doi_song" src="https://salt.tikicdn.com/cache/100x100/ts/category/75/34/29/d900f845e51e95a2c41b5b035468f959.png.webp" />
                <p className="text-gray-600 mt-2 ml-2 text-md">Thiết Bị Số - Phụ Kiện Số</p>
            </Link>

            <Link href={"#"} className="flex hover:bg-slate-200 px-2 rounded-xl">
                <img className="w-10 h-10 my-2" alt="doi_song" src="https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp" />
                <p className="text-gray-600 mt-4 ml-2 text-md">Điện Gia Dụng</p>
            </Link>

            <Link href={"#"} className="flex hover:bg-slate-200 px-2 rounded-xl">
                <img className="w-10 h-10 my-2" alt="doi_song" src="https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png.webp" />
                <p className="text-gray-600 mt-4 ml-2 text-md">Làm Đẹp - Sức Khỏe</p>
            </Link>

            <Link href={"#"} className="flex hover:bg-slate-200 px-2 rounded-xl">
                <img className="w-10 h-10 my-2" alt="doi_song" src="https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp" />
                <p className="text-gray-600 mt-4 ml-2 text-md">Thời trang nữ</p>
            </Link>

            <Link href={"#"} className="flex hover:bg-slate-200 px-2 rounded-xl">
                <img className="w-10 h-10 my-2" alt="doi_song" src="https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp" />
                <p className="text-gray-600 mt-4 ml-2 text-md">Thời trang nam</p>
            </Link>

            <Link href={"#"} className="flex hover:bg-slate-200 px-2 rounded-xl">
                <img className="w-10 h-10 my-2" alt="doi_song" src="https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp" />
                <p className="text-gray-600 mt-4 ml-2 text-md">Giày - Dép nam</p>
            </Link>

            <Link href={"#"} className="flex hover:bg-slate-200 px-2 rounded-xl">
                <img className="w-10 h-10 my-2" alt="doi_song" src="https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png.webp" />
                <p className="text-gray-600 mt-4 ml-2 text-md">Giày - Dép nữ</p>
            </Link>

            <Link href={"#"} className="flex hover:bg-slate-200 px-2 rounded-xl">
                <img className="w-10 h-10 my-2" alt="doi_song" src="https://salt.tikicdn.com/cache/100x100/ts/category/8b/d4/a8/5924758b5c36f3b1c43b6843f52d6dd2.png.webp" />
                <p className="text-gray-600 mt-4 ml-2 text-md">Đồng hồ và Trang sức</p>
            </Link>

        </div>
    )
}
