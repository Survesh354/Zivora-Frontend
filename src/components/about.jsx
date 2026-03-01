import { useNavigate } from "react-router-dom";



function About() {
    const navigate = useNavigate();

    return (
        <div className="pt-24">

            {/* Hero Section */}
            <div className="bg-gray-100 py-20 text-center">
                <h1 className="text-5xl font-bold mb-4">About Zivora</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Redefining modern fashion with elegance, confidence, and timeless style.
                </p>
            </div>


            {/* Our Story */}
            <div className="py-20 px-6 lg:px-16 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 leading-8">
                    Zivora was founded with a vision to create fashion that blends modern trends
                    with timeless elegance. We believe that style is more than clothing —
                    it is confidence, identity, and self-expression.
                </p>

                <p className="text-gray-700 leading-8 mt-6">
                    From everyday essentials to premium collections, our goal is to offer
                    high-quality fashion at accessible prices while maintaining superior design standards.
                </p>
            </div>


            {/* Mission & Vision */}
            <div className="bg-black text-white py-20 px-6 lg:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-300 leading-8">
                            To empower individuals through fashion that enhances confidence,
                            comfort, and personal style.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-gray-300 leading-8">
                            To become a globally recognized fashion brand known for
                            innovation, quality, and sustainable practices.
                        </p>
                    </div>

                </div>
            </div>


            {/* Why Choose Us */}
            <div className="py-20 px-6 lg:px-16 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Zivora?</h2>

                <div className="grid md:grid-cols-3 gap-10 text-center">

                    <div>
                        <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                        <p className="text-gray-600">
                            Carefully curated fabrics and designs that last.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3">Affordable Luxury</h3>
                        <p className="text-gray-600">
                            Modern fashion without compromising your budget.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                        <p className="text-gray-600">
                            Quick and secure shipping across India.
                        </p>
                    </div>

                </div>
            </div>


            {/* Call To Action */}
            <div className="bg-gray-100 py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Discover Your Style with Zivora
                </h2>
                <button
                    onClick={() => navigate("/shop")}
                    className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition"
                >
                    Shop Now →
                </button>
            </div>

        </div>
    );
}

export default About;