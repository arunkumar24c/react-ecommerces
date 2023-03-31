import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch;
  const navigator = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const handleDetails = () => {
    navigator(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="group relative">
      {/* img container */}
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          src={product.image}
          alt="productImg"
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>
      {/* title and price container */}
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          {/* title */}
          <div>
            <h2 className="text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          {/* price */}
          <div className="flex justify-end  gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} is added `)
              }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              Add to cart{" "}
              <span>
                <BsArrowRightShort />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold px-6 py-1">Sale</p>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductsCard;
