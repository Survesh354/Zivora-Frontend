import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function Cart() {
    const { cart, removeFromCart } = useStore();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="pt-24 px-6 lg:px-16">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

            {/* IF CART IS EMPTY */}
            {cart.length === 0 ? (
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg mb-4">
                        Your cart is empty. Shop to add items to cart.
                    </p>

                    <button
                        onClick={() => navigate("/shop")}
                        className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition"
                    >
                        Go to Shop
                    </button>
                </div>
            ) : (
                <>
                    {/* CART ITEMS */}
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="border p-4 mb-4 flex justify-between items-center"
                        >
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p>₹{item.price}</p>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 text-xl font-bold hover:scale-125 transition"
                            >
                                ❌
                            </button>
                        </div>
                    ))}

                    <h2 className="text-xl font-semibold">Total: ₹{total}</h2>

                    <button
                        onClick={() => {
                            if (user) {
                                navigate("/checkout");
                            } else {
                                navigate("/login");
                            }
                        }}
                        className="mt-4 bg-black text-white px-6 py-2"
                    >
                        Checkout
                    </button>
                </>
            )}
        </div>
    );
}
export default Cart;