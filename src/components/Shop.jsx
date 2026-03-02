import { useState } from "react";
import { useStore } from "../context/StoreContext";
import p1 from "../assets/shop images/Men Jacket.jpg";
import p2 from "../assets/shop images/Women dress.jpg";
import p3 from "../assets/shop images/Men shirt.jpg";
import p4 from "../assets/shop images/Women top.jpg";
import p5 from "../assets/shop images/Men Hoodie.jpg";
import p6 from "../assets/shop images/Women Skirt.jpg";
import p7 from "../assets/shop images/Men tshirt.jpg";
import p8 from "../assets/shop images/Women Jeans.jpg";
import p9 from "../assets/shop images/Men Blazer.jpg";
import p10 from "../assets/shop images/Women kurti.jpg";
import p11 from "../assets/shop images/Men sweater.jpg";
import p12 from "../assets/shop images/Women jumpsuit.jpg";
import p13 from "../assets/shop images/Women watch.jpg";

function Shop() {
    const { addToCart, addToWishlist } = useStore();
    const [filter, setFilter] = useState("All");
    const [message, setMessage] = useState("");

    const products = [
        { id: 1, name: "Men Jacket", price: 1999, category: "Men", img: p1 },
        { id: 2, name: "Women Dress", price: 2499, category: "Women", img: p2 },
        { id: 3, name: "Men Shirt", price: 1499, category: "Men", img: p3 },
        { id: 4, name: "Women Top", price: 1299, category: "Women", img: p4 },
        { id: 5, name: "Men Hoodie", price: 1799, category: "Men", img: p5 },
        { id: 6, name: "Women Skirt", price: 1599, category: "Women", img: p6 },
        { id: 7, name: "Men T-Shirt", price: 999, category: "Men", img: p7 },
        { id: 8, name: "Women Jeans", price: 1899, category: "Women", img: p8 },
        { id: 9, name: "Men Blazer", price: 2999, category: "Men", img: p9 },
        { id: 10, name: "Women Kurti", price: 1399, category: "Women", img: p10 },
        { id: 11, name: "Men Sweater", price: 1599, category: "Men", img: p11 },
        { id: 12, name: "Women Jumpsuit", price: 2199, category: "Women", img: p12 },
        { id: 13, name: "Women Watch", price: 199, category: "Women", img: p13 },
    ];

    const filtered =
        filter === "All"
            ? products
            : products.filter((p) => p.category === filter);

    return (
        <div className="pt-24 px-6 lg:px-16">
            {message && (
                <div className="fixed top-24 right-6 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
                    {message}
                </div>
            )}
            <h1 className="text-3xl font-bold mb-6">Shop</h1>

            {/* Filter */}
            <div className="mb-6 space-x-4">
                {["All", "Men", "Women"].map((item) => (
                    <button
                        key={item}
                        onClick={() => setFilter(item)}
                        className="px-4 py-2 border border-black hover:bg-black hover:text-white transition"
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filtered.map((product) => (
                    <div key={product.id} className="border p-4">
                        <div className="overflow-hidden">
                            <img
                                src={product.img}
                                className="h-56 w-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                        <h2 className="font-semibold mt-2">{product.name}</h2>
                        <p>₹{product.price}</p>

                        <div className="flex justify-between mt-3">
                            <button
                                onClick={() => {
                                    addToCart(product);
                                    setMessage(`${product.name} added to cart!`);

                                    setTimeout(() => {
                                        setMessage("");
                                    }, 2000);
                                }}
                                className="bg-black text-white px-3 py-1"
                            >
                                Add to Cart
                            </button>

                            <button
                                onClick={() => {
                                    addToWishlist(product);
                                    setMessage(`${product.name} added to wishlist ❤️`);

                                    setTimeout(() => {
                                        setMessage("");
                                    }, 2000);
                                }}
                                className="text-red-500 text-xl hover:scale-125 transition"
                            >
                                ❤️
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;