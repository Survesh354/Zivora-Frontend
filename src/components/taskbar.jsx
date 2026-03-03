import logo from "../assets/ZIVORA1.png";
import { Link } from "react-router-dom";
import { auth } from "../config";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Taskbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-100 shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <img className="h-10 cursor-pointer" src={logo} alt="Zivora Logo" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/about" className="hover:text-black transition">About</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
          <Link to="/cart" className="hover:text-black transition">Cart</Link>
          <Link to="/wishlist" className="hover:text-black transition">Wishlist</Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="px-4 py-1 bg-black text-white rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="px-4 py-1 border border-black rounded">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-1 bg-black text-white rounded">
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
          <Link to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</Link>

          <div className="border-t pt-4">
            {user ? (
              <button
                onClick={() => {
                  signOut(auth);
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-black text-white rounded"
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link
                  to="/login"
                  className="px-4 py-2 border border-black rounded text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-black text-white rounded text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Taskbar;