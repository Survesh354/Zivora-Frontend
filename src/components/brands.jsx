import adidas from "../assets/images/adidas.png";
import armani from "../assets/images/Armani-Logo.wine.png";
import hm from "../assets/images/H&M-Logo.wine.png";
import boss from "../assets/images/Hugo_Boss.png";
import nike from "../assets/images/nike.png";
import puma from "../assets/images/puma.png";

function Brands() {
  const brandData = [
    { img: adidas, name: "Adidas" },
    { img: armani, name: "Armani" },
    { img: hm, name: "H&M" },
    { img: boss, name: "Hugo Boss" },
    { img: nike, name: "Nike" },
    { img: puma, name: "Puma" },
  ];

  return (
    <div className="mt-24 px-6 lg:px-16 text-center">
      <h1 className="text-4xl font-bold mb-12">Brands</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
        {brandData.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer 
                       transition duration-300 transform 
                       hover:scale-110 hover:-translate-y-2"
          >
            <div className="w-32 h-20 flex items-center justify-center">
              <img
                src={brand.img}
                alt={brand.name}
                className="max-h-14 max-w-full object-contain"
              />
            </div>

            <p className="text-gray-700 font-medium mt-3">
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;