import ImageSlider from "./ImageSlider";
import Categories from "./categories";
import Brands from "./brands";

function Home() {
  return (
    <div className="pt-20 px-6 lg:px-16">
      <ImageSlider />
      <Categories />
      <Brands />
    </div>
  );
}

export default Home;