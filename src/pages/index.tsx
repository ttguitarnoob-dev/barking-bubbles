import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DogScribbleIcon1, GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { DogScribbleBackground } from "@/components/DogScribbleBackground";
import HeroSection from "@/components/hero-section";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
    </DefaultLayout>
  );
}
