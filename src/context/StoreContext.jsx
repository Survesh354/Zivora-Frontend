import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const clearCart = () => {
        setCart([]);
    };

    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const addToWishlist = (product) => {
        if (!wishlist.find((item) => item.id === product.id)) {
            setWishlist((prev) => [...prev, product]);
        }
    };

    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <StoreContext.Provider
            value={{
                cart,
                wishlist,
                addToCart,
                addToWishlist,
                removeFromWishlist,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}

export const useStore = () => useContext(StoreContext);