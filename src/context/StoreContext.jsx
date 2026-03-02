import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const clearCart = () => {
        setCart([]);
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const addToWishlist = (product) => {
  setWishlist((prev) => {
    const exists = prev.find((item) => item.id === product.id);
    if (exists) return prev;
    return [...prev, product];
  });
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
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                addToWishlist,
                removeFromWishlist,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}

export const useStore = () => useContext(StoreContext);