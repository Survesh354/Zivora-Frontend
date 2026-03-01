function Newsletter() {
  return (
    <div className="bg-gray-100 py-20 text-center mt-24 w-full">

      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Join the Zivora Community
        </h2>

        <p className="text-gray-600 mb-8">
          Subscribe to get exclusive offers, fashion updates, and early access to new arrivals.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="w-full sm:w-96 px-6 py-3 border border-gray-400 focus:outline-none focus:border-black transition"
          />

          <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition">
            Subscribe →
          </button>
        </div>
      </div>

    </div>
  );
}
export default Newsletter;