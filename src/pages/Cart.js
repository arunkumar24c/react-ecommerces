import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import CartItem from "../components/CartItem";
import StripeCheckout from "react-stripe-checkout";
import { resetCart } from "../redux/bazarSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);
  console.log(productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Sign-in to Checkout");
    }
  };

  return (
    <div className="">
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compres"
        alt="cartImg"
      />
      <div className="flex flex-col mx-auto py-20 ">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Total</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotals <span className="font-bold text-lg">$ {totalAmt}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span>
                In this video, I will walk you through the process of building a
              </span>
            </p>
          </div>
          <p className="flex justify-between font-semibold mt-6">
            Total:<span className="text-xl font-bold">$ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            Proceed To CheckOut
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51Mpz11SFZB4SSi7b19ZMexM7ENmpjY4XSfm095pyEzu8pX3hjn5fu7Iv9IW29QriaqkmWWMEwlcjiP2nAQ6f2MpH00XmL1QgGG"
                name="Bazar Online Shopping"
                amount={totalAmt * 100}
                label="Pay to bazar"
                description={`Your Payment amount is $${totalAmt}`}
                // token={payment}
                email={userInfo.email}
              />
            </div>
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

export default Cart;
