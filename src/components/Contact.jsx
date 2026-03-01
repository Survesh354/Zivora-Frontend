import { useState } from "react";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);

    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <div className="pt-24 px-6 lg:px-16 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-10 text-center">Contact Us</h1>

      {messageSent && (
        <div className="fixed top-24 right-6 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
          Thank you! We will get back to you soon.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about products, orders, or collaborations?
            We'd love to hear from you.
          </p>

          <div className="space-y-4 text-gray-700">
            <p><strong>📍 Address:</strong> 123 Fashion Street, Chennai, 600073</p>
            <p><strong>📧 Email:</strong> support@zivora.com</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;