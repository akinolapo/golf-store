import Image from "next/image";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import MainCategory from "../components/MainCategory/MainCategory";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import Promotion from "../components/Promotion/Promotion";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import BlogSlider from "../components/BlogSlider/BlogSlider";


export default function Home() {
  return (
    <main>
      <HeroSlider/>
      <MainCategory/>
      <NewArrivals/>
      <Promotion/>
      <FeaturedProducts/>
      <BlogSlider/>     
    </main>
  );
}
