import Image from "next/image";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import MainCategory from "./components/MainCategory/MainCategory";

export default function Home() {
  return (
    <main>
      <HeroSlider/>
      <MainCategory/>
      
    </main>
  );
}
