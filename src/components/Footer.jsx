import logo from "../assets/ZIVORA1.png";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 w-full">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Info */}
          <div>
            <img src={logo} alt="Zivora Logo" className="h-10 mb-4" />
            <p className="text-sm leading-6">
              123 Fashion Street,<br />
              Chennai, 600073<br /><br />
              Email: support@zivora.com<br />
              Phone: +91 98765-43210
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">New Arrivals</li>
              <li className="hover:text-white cursor-pointer">Categories</li>
              <li className="hover:text-white cursor-pointer">Collections</li>
              <li className="hover:text-white cursor-pointer">Sale</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {["F", "I", "T", "Y"].map((item, index) => (
                <div
                  key={index}
                  className="w-10 h-10 flex items-center justify-center 
                             border border-gray-500 rounded-full 
                             hover:bg-white hover:text-black transition cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
          © 2026 Zivora. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;