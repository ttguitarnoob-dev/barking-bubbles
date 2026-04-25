import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button, Card } from "@heroui/react";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About Me</h1>
          <Card className="bg-primary/30 backdrop-blur-md mt-10">
            <img
              src="/Images/bath-dog.webp"
              className="rounded-2xl"
            />
            <Card.Content>
              <h3 className="text-xl font-bold text-accent">Hi I'm Hazel!</h3>
              <p>I am 11 years old and I started this business because I love animals. I have one bunny, three gerbils, three cats, and five chickens. I enjoy hanging out with dogs (Even if it means getting soaked!) I am currently being trained by another fellow groomer, so my skills are always improving. Whether a tiny chihuahua or a Great Pyrenees, your dog will be showered in affection and comfort! I hope you will consider me as your dog groomer. If you want to schedule a booking, take a look at my schedule and figure out the time that works best for you. Feel free to contact me if you have any questions!
              Thank you! </p>
            </Card.Content>
            <Card.Footer className="flex justify-center">
              <Button>Contact</Button>
            </Card.Footer>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
