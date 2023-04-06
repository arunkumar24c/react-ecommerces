import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);

  return (
    <div className="w-full bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img
              src="https://penji.co/wp-content/uploads/2019/06/ebay-ecommerce-logo.jpg"
              className="w-28"
              alt="#"
            />
          </div>
        </Link>

        {/* list */}
        <div className="flex items-center justify-end gap-8 ">
          <ul className="flex items-center justify-end gap-8 ">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            {/* cart img */}
            <div className="relative">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/001/504/962/small/shopping-cart-icon-free-vector.jpg"
                className="w-10"
              />
              <span className="absolute w-6 top-2 left-3 text-sm flex-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          {/* profile img */}
          <Link to="/login">
            <img
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-semibold underline underline-offset-2 cursor-pointer hover:text-pink-900 hover:underline  decoration-[1px]  duration-300">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
