import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config";

function Checkout() {

    const { cart, clearCart } = useStore();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log("API URL:", import.meta.env.VITE_API_URL);

    const handlePayment = async () => {
  try {
    console.log("API URL:", import.meta.env.VITE_API_URL);

    const response = await axios.post(
      "https://zivora-backend.onrender.com/create-order",
      { amount: total }
    );

    const order = response.data;   // 🔥 THIS LINE IS IMPORTANT

    console.log("Order:", order);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Zivora",
      description: "Order Payment",
      order_id: order.id,

      handler: async function (response) {
        const orderData = {
          items: cart,
          total: total,
          paymentId: response.razorpay_payment_id,
          date: new Date(),
        };

        await addDoc(collection(db, "orders"), orderData);

        clearCart();
        navigate("/success");
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (error) {
    console.error("Payment error:", error);
  }
};
            
    return (
        <div className="pt-24 px-6 lg:px-16">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <h2 className="mb-4 font-semibold">Total: ₹{total}</h2>

            <button
                onClick={handlePayment}
                className="bg-black text-white px-6 py-2"
            >
                Pay with Razorpay
            </button>
        </div>
    );
}

export default Checkout;