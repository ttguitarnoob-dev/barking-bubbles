
import DefaultLayout from "@/layouts/default";
import HeroSection from "@/components/hero-section";
import { ImageTextSection } from "@/components/image-text-section";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <div className="mt-30">
      <ImageTextSection imageSrc="/Images/bath-dog.webp" isFlipped titleText="Childlike Enthusiasm" subText="Dog grooming services in Bastrop County, child-run with all the fun that goes with it" />
      </div>

      <div className="mt-30">
      <ImageTextSection imageSrc="/Images/mybubbles.webp"  titleText="Childlike Enthusiasm" subText="Dog grooming services in Bastrop County, child-run with all the fun that goes with it" />
      </div>
      
    </DefaultLayout>
  );
}
