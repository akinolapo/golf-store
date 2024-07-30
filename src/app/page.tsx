import Image from "next/image";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import MainCategory from "./components/MainCategory/MainCategory";
import NewArrivals from "./components/NewArrivals/NewArrivals";

export default function Home() {
  return (
    <main>
      <HeroSlider/>
      <MainCategory/>
      <NewArrivals/>      
    </main>
  );
}
