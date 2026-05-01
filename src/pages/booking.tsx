"use client";

import { BubblesIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Button, Card, Form, Input, Label, Link, TextField } from "@heroui/react";

export default function BookingPage() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};

        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        alert("Form submitted successfully!");
    };

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

                <Card className="bg-primary/30 backdrop-blur-sm w-full max-w-md">
                    <Card.Header>
                        <Card.Title>Scheduling</Card.Title>
                        <Card.Description>Enter your details and choose a time!</Card.Description>
                    </Card.Header>
                    <Form onSubmit={onSubmit}>
                        <Card.Content>
                            <div className="flex flex-col gap-4">
                                <TextField name="ownerName" type="text">
                                    <Label>Name</Label>
                                    <Input placeholder="Owner's Name" variant="primary" />
                                </TextField>
                                <TextField name="email" type="email">
                                    <Label>Email</Label>
                                    <Input placeholder="email@example.com" variant="primary" />
                                </TextField>
                                <TextField name="password" type="password">
                                    <Label>Password</Label>
                                    <Input placeholder="••••••••" variant="primary" />
                                </TextField>
                            </div>
                        </Card.Content>
                        <Card.Footer className="mt-4 flex flex-col gap-2">
                            <Button className="w-full" type="submit">
                                <BubblesIcon />
                                Submit
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </section>
        </DefaultLayout>
    );
}