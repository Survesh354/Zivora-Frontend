import { useStore } from "../context/StoreContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Wishlist() {
    const { wishlist, addToCart, removeFromWishlist } = useStore();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

 return (
    <div className="pt-24 px-6 lg:px-16">
        {message && (
            <div className="fixed top-24 right-6 bg-red-600 text-white px-6 py-3 rounded shadow-lg z-50">
                {message}
            </div>
        )}

        <h1 className="text-3xl font-bold mb-6">Wishlist</h1>

        {wishlist.length === 0 ? (
            <div className="mt-16 text-center">
                <p className="text-gray-600 text-lg mb-4">
                    Your wishlist is empty. Shop to add items to wishlist.
                </p>

                <button
                    onClick={() => navigate("/shop")}
                    className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition"
                >
                    Go to Shop
                </button>
            </div>
        ) : (
            wishlist.map((item) => (
                <div
                    key={item.id}
                    className="border p-4 mb-4 flex justify-between items-center"
                >
                    <p className="font-medium">{item.name}</p>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => {
                                addToCart(item);
                                removeFromWishlist(item.id);
                                setMessage(`${item.name} added to cart!`);

                                setTimeout(() => {
                                    setMessage("");
                                }, 2000);
                            }}
                            className="bg-black text-white px-3 py-1"
                        >
                            Add to Cart
                        </button>

                        <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="text-red-500 text-xl font-bold hover:scale-125 transition"
                        >
                            ❌
                        </button>
                    </div>
                </div>
            ))
        )}
    </div>
);
}

export default Wishlist;