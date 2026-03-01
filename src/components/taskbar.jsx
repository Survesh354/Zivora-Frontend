import logo from "../assets/ZIVORA1.png";
import { Link } from "react-router-dom";
import { auth } from "../config";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";


function Taskbar() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);


    return (
        <div className="fixed top-0 left-0 right-0 bg-gray-100 shadow-md z-10">
            <div className="flex items-center justify-between px-6 py-3 w-full">

                {/* Logo */}
                <img className="h-10 cursor-pointer" src={logo} alt="Zivora Logo" />

                {/* Navigation */}
                <div className="flex items-center space-x-8 text-gray-600 font-medium">
                    <Link to="/" className="hover:text-black transition">Home</Link>
                    <Link to="/about" className="hover:text-black transition">About</Link>
                    <Link to="/contact" className="hover:text-black transition">Contact</Link>
                    <Link to="/cart" className="hover:text-black transition">Cart</Link>
                    <Link to="/wishlist" className="hover:text-black transition">Wishlist</Link>
                </div>

                {/* Auth Buttons */}
                <div className="flex space-x-4">
                    {user ? (
                        <button
                            onClick={() => signOut(auth)}
                            className="px-4 py-1 bg-black text-white rounded"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="px-4 py-1 border border-black rounded"
                            >
                                Login
                            </Link>

                            <Link
                                to="/signup"
                                className="px-4 py-1 bg-black text-white rounded"
                            >
                                Signup
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Taskbar;