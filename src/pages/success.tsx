
import DefaultLayout from "@/layouts/default";
import { Card } from "@heroui/react";

export default function SuccessPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Card className="bg-primary/30 backdrop-blur-sm max-w-xl flex flex-col justify-center items-center">
            <Card.Header>
                <img src="/Images/barking-bubbles-logo.webp" width={100}/>
                <h2 className="text-2xl font-bold">Success!</h2>
            </Card.Header>
            <Card.Content>
                <p className="text-center">Your request has been accepted and is being processed by our army of courier dogs. We'll get back to you soon!</p>
            </Card.Content>
        </Card>
      </section>
    </DefaultLayout>
  );
}
