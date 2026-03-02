import { useStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function Cart() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        addToWishlist
    } = useStore();

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

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
                            <div className="flex items-center gap-4">

                                {/* PRODUCT IMAGE */}
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded"
                                />

                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p>₹{item.price}</p>

                                    {/* QUANTITY CONTROLS */}
                                    <div className="flex items-center gap-3 mt-2">
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="bg-gray-200 px-3 py-1"
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="bg-gray-200 px-3 py-1"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-3">

                                {/* MOVE TO WISHLIST */}
                                <button
                                    onClick={() => {
                                        addToWishlist(item);
                                        removeFromCart(item.id);
                                    }}
                                    className="text-pink-500 hover:underline text-sm"
                                >
                                    ❤️ Move to Wishlist
                                </button>

                                {/* REMOVE BUTTON */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 text-xl font-bold hover:scale-125 transition"
                                >
                                    ❌
                                </button>

                            </div>
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