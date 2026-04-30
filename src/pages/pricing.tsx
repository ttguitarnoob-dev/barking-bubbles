import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card } from "@heroui/react";

export default function PricingPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-10 py-8 md:py-10">
        
        <h1 className={title()}>Pricing</h1>

        <div className="max-w-2xl text-center">
          <p>
            Here are our prices! If you choose to meet us at Tractor Supply
            to use their facilities, an extra $10 will be added to cover the
            Tractor Supply fee.
          </p>
        </div>

        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6">

          {/* Short Hair */}
          <Card className="bg-primary/10 backdrop-blur-sm border shadow">
            <Card.Header className=" text-primary text-center py-3 text-lg font-semibold justify-center">
              Short Hair
            </Card.Header>

            <Card.Content className="p-5 space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Small</span>
                <span className="font-semibold">$15</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Medium</span>
                <span className="font-semibold">$20</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Large</span>
                <span className="font-semibold">$25</span>
              </div>
            </Card.Content>
          </Card>

          {/* Long Hair */}
          <Card className="bg-secondary/10 backdrop-blur-sm border shadow">
            <Card.Header className=" text-secondary text-center py-3 text-lg font-semibold justify-center">
              Double Coat / Long Hair
            </Card.Header>

            <Card.Content className="p-5 space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Small</span>
                <span className="font-semibold">$20</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Medium</span>
                <span className="font-semibold">$25</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Large</span>
                <span className="font-semibold">$30</span>
              </div>
            </Card.Content>
          </Card>

        </div>

        <p>
          Includes washing, towel/blow drying, brushing, ear cleaning,
          finishing cologne, treats.
        </p>

      </section>
    </DefaultLayout>
  );
}