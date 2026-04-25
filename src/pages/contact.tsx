
import DefaultLayout from "@/layouts/default";
import { Card, TextField, Label, Input, Button } from "@heroui/react";
import { Form, Link } from "react-router-dom";

export default function ContactPage() {

    async function onSubmit() {
        console.log("SMELLL")
    }
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Card className="w-full max-w-md">
      <Card.Header>
        <Card.Title>Login</Card.Title>
        <Card.Description>Enter your credentials to access your account</Card.Description>
      </Card.Header>
      <Form onSubmit={onSubmit}>
        <Card.Content>
          <div className="flex flex-col gap-4">
            <TextField name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="email@example.com" variant="secondary" />
            </TextField>
            <TextField name="password" type="password">
              <Label>Password</Label>
              <Input placeholder="••••••••" variant="secondary" />
            </TextField>
          </div>
        </Card.Content>
        <Card.Footer className="mt-4 flex flex-col gap-2">
          <Button className="w-full" type="submit">
            Sign In
          </Button>
          <Link className="text-center text-sm" to={"/"}>
            Forgot password?
          </Link>
        </Card.Footer>
      </Form>
    </Card>
      </section>
    </DefaultLayout>
  );
}
