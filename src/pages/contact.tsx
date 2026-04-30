import DefaultLayout from "@/layouts/default";
import {
  Card,
  TextField,
  Label,
  Input,
  Button,
  Form,
  TextArea,
} from "@heroui/react";
import { useNavigate } from "react-router-dom";



export default function ContactPage() {

  const navigate = useNavigate()
  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(
        "https://kitty-cottage.c-syncapp.com/api/bubbles/contact",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();
      console.log("Response:", result);
      navigate('/success')
    } catch (err) {
      console.error("Submit failed:", err);
    }
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h2 className="text-3xl font-bold">Contact</h2>

        <Card className="w-full max-w-md bg-primary/30 backdrop-blur-sm">
          <Card.Header>
            <Card.Title>Contact Form</Card.Title>
            <Card.Description>
              If you have any questions or want anymore information, just fill out this form and we'll get back to you asap!
            </Card.Description>
          </Card.Header>

          <Form onSubmit={handleSubmit}>
            <Card.Content>
              <div className="flex flex-col gap-4">
                <TextField name="ownerName" type="text">
                  <Label>Name</Label>
                  <Input
                    className="border border-border/60"
                    placeholder="What is your name?"
                    variant="primary"
                  />
                </TextField>

                <TextField name="dogName" type="text">
                  <Label>Dog Name</Label>
                  <Input
                    className="border border-border/60"
                    placeholder="What is your dog's name(s)?"
                    variant="primary"
                  />
                </TextField>

                <TextField name="email" type="email">
                  <Label>Email</Label>
                  <Input
                    className="border border-border/60"
                    placeholder="email@example.com"
                    variant="primary"
                  />
                </TextField>

                <TextField name="inquiry">
                  <Label>Inquiry</Label>
                  <TextArea
                    name="inquiry"
                    placeholder="What can we do for you?"
                    rows={4}
                  />
                </TextField>
              </div>
            </Card.Content>

            <Card.Footer className="mt-4 flex flex-col gap-2">
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </section>
    </DefaultLayout>
  );
}