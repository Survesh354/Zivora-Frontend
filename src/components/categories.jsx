import casual from "../assets/images/Casual Wear.jpg";
import formal from "../assets/images/Formal Wear.jpg";
import sports from "../assets/images/Sports Wear.jpg";
import ethnic from "../assets/images/Ethnic Wear.jpg";
import lounge from "../assets/images/Lounge Wear.jpg";
import inner from "../assets/images/Inner Wear.jpg";
import kids from "../assets/images/Kids Wear.jpg";
import mens from "../assets/images/Men's Active Wear.jpg";
import womens from "../assets/images/Women's Active Wear.jpg";
import western from "../assets/images/Western Wear.jpg";
import grooming from "../assets/images/Grooming.jpg";
import watches from "../assets/images/Watches.jpg";


function Categories() {
    const categoryData = [
        { img: ethnic, title: "Ethnic Wear", offer: "50-80% OFF" },
        { img: casual, title: "Casual Wear", offer: "40-70% OFF" },
        { img: sports, title: "Sportswear", offer: "30-60% OFF" },
        { img: formal, title: "Formal Wear", offer: "30-70% OFF" },
        { img: lounge, title: "Loungewear", offer: "30-60% OFF" },
        { img: inner, title: "Innerwear", offer: "UP TO 70% OFF" },
        { img: kids, title: "Kids Wear", offer: "40-80% OFF" },
        { img: mens, title: "Men's Active Wear", offer: "30-60% OFF" },
        { img: womens, title: "Women's Active Wear", offer: "30-60% OFF" },
        { img: western, title: "Western Wear", offer: "40-70% OFF" },
        { img: grooming, title: "Grooming", offer: "20-50% OFF" },
        { img: watches, title: "Watches", offer: "25-75% OFF" },
    ];

    return (
        <div className="mt-24 px-6 lg:px-16">
            <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">
                Shop by Categories
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {categoryData.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-56 object-cover"
                        />

                        {/* Bottom Gradient Section */}
                        <div className="bg-white text-gray-900 text-center py-4">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-xl font-bold">{item.offer}</p>
                            <p className="text-sm mt-1 text-gray-500 hover:text-black transition">
                                Shop Now
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;