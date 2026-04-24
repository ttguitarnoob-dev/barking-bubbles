import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DogScribbleIcon1, GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { DogScribbleBackground } from "@/components/DogScribbleBackground";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div>
          <DogScribbleBackground />
        </div>
      </section>
    </DefaultLayout>
  );
}
