import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config";

function Checkout() {

    const { cart, clearCart } = useStore();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = async () => {
        try {
            const { data: order } = await axios.post(
                `${import.meta.env.VITE_API_URL}/create-order`,
                { amount: total }
            );

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: "INR",
                name: "Zivora",
                description: "Order Payment",
                order_id: order.id,

                handler: async function (response) {
                    console.log("Payment successful!");
                    console.log(response);

                    try {
                        const orderData = {
                            items: cart,
                            total: total,
                            paymentId: response.razorpay_payment_id,
                            date: new Date(),
                        };

                        await addDoc(collection(db, "orders"), orderData);

                        console.log("Order saved to Firestore");

                        clearCart();
                        navigate("/success");

                    } catch (error) {
                        console.error("Firestore error:", error);
                    }
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (err) {
            console.log(err);
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