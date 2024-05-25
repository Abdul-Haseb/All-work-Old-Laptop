import FeaturedProd from "./components/FeaturedProd";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowToOrder from "./components/HowToOrder";
import ImageSlider from "./components/ImageSlider";
import Stores from "./components/Stores";
import ChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="max-w-[2000px] mx-auto">
      <ImageSlider />
      <HowToOrder />
      <ChooseUs />
      <FeaturedProd />
      <Stores />
      <Footer />
    </div>
  );
}
