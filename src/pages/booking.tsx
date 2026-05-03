"use client";

import AvailabilityPicker, { SelectedAppointment } from "@/components/availability-picker";
import { BubblesIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Button, Card, Checkbox, Description, Form, Input, Label, Radio, RadioGroup, Surface, Tabs, TextArea, TextField } from "@heroui/react";
import { useState } from "react";

export default function BookingPage() {

    const openSlots: Record<string, string[]> = {
        "2026-04-04": ["2:00 PM", "4:00 PM"],
        "2026-04-05": ["9:30 AM", "11:00 AM"],
        "2026-04-07": ["1:00 PM", "3:30 PM", "5:00 PM"],
        "2026-04-10": ["10:00 AM"],
        "2026-04-12": ["8:30 AM", "2:00 PM"],
        "2026-04-15": ["9:00 AM", "12:30 PM", "4:00 PM"],
        "2026-04-18": ["11:00 AM", "1:30 PM"],
        "2026-04-21": ["10:30 AM", "3:00 PM"],
        "2026-04-24": ["9:00 AM", "11:30 AM", "2:30 PM"],
        "2026-04-28": ["1:00 PM", "4:30 PM"],
      };

    const [selectedTime, setSelectedTime] = useState<SelectedAppointment>(null);

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

                <Card className="bg-primary/30 backdrop-blur-sm w-full max-w-xl">
                    <Card.Header>
                        <Card.Title className="text-xl">Scheduling</Card.Title>
                        <Card.Description>Enter your doggy details and choose a time!</Card.Description>
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
                                    <Input placeholder="email@clean.dog" variant="primary" />
                                </TextField>
                                <TextField name="dogName" type="text">
                                    <Label>Dog Name</Label>
                                    <Input placeholder="The pup to be scrubbed" variant="primary" />
                                </TextField>
                                <div className="flex flex-col gap-4">
                                    <Label>Fur Length</Label>
                                    <RadioGroup defaultValue="pro" name="plan-orientation" orientation="horizontal">
                                        <Radio value="short">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Short</Label>
                                                {/* <Description>For side projects</Description> */}
                                            </Radio.Content>
                                        </Radio>
                                        <Radio value="medium">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Medium</Label>
                                                {/* <Description>Advanced reporting</Description> */}
                                            </Radio.Content>
                                        </Radio>
                                        <Radio value="long">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Long</Label>
                                                {/* <Description>Up to 10 teammates</Description> */}
                                            </Radio.Content>
                                        </Radio>
                                    </RadioGroup>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Label>Doggy Size</Label>
                                    <RadioGroup defaultValue="small" name="plan-orientation" orientation="horizontal">
                                        <Radio value="small">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Small</Label>
                                                <Description>Tiny but fierce</Description>
                                            </Radio.Content>
                                        </Radio>
                                        <Radio value="medium-size">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Medium</Label>
                                                <Description>Finely tuned agility</Description>
                                            </Radio.Content>
                                        </Radio>
                                        <Radio value="large">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Large</Label>
                                                <Description>Just a huge teddy bear</Description>
                                            </Radio.Content>
                                        </Radio>
                                    </RadioGroup>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Label>Food Allergies</Label>
                                    <Description>We like to give treats during the cleaning, so let us know if there's something your dog doesn't take kindly to</Description>

                                    <RadioGroup defaultValue="no-allergy" name="plan-orientation" orientation="horizontal">
                                        <Radio value="yes-allergy">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Yes</Label>
                                                {/* <Description>For side projects</Description> */}
                                            </Radio.Content>
                                        </Radio>
                                        <Radio value="no-allergy">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>No</Label>
                                                {/* <Description>Advanced reporting</Description> */}
                                            </Radio.Content>
                                        </Radio>

                                    </RadioGroup>
                                </div>
                                <div className="flex flex-col gap-4 w-full">

                                    <Label>Meet Location</Label>
                                    <Tabs className="w-full max-w-md" variant="secondary">
                                        <Tabs.ListContainer>
                                            <Tabs.List aria-label="Options">
                                                <Tabs.Tab id="tractor-supply">
                                                    Tractor Supply
                                                    <Tabs.Indicator />
                                                </Tabs.Tab>
                                                <Tabs.Tab id="yours">
                                                    Your Place
                                                    <Tabs.Indicator />
                                                </Tabs.Tab>
                                                <Tabs.Tab id="ours">
                                                    Our Place
                                                    <Tabs.Indicator />
                                                </Tabs.Tab>
                                            </Tabs.List>
                                        </Tabs.ListContainer>
                                        <Tabs.Panel className="pt-4" id="tractor-supply">
                                            <Label>Which Tractor Supply Location?</Label>
                                            <RadioGroup name="plan-orientation" orientation="horizontal">
                                                <Radio value="bastrop">
                                                    <Radio.Control>
                                                        <Radio.Indicator />
                                                    </Radio.Control>
                                                    <Radio.Content>
                                                        <Label>Bastrop</Label>
                                                        <Description>437 W SH 71 Service Rd</Description>
                                                    </Radio.Content>
                                                </Radio>
                                                <Radio value="Elgin">
                                                    <Radio.Control>
                                                        <Radio.Indicator />
                                                    </Radio.Control>
                                                    <Radio.Content>
                                                        <Label>Elgin</Label>
                                                        <Description>18517 E US Highway 290</Description>
                                                    </Radio.Content>
                                                </Radio>
                                                <Radio value="Giddings">
                                                    <Radio.Control>
                                                        <Radio.Indicator />
                                                    </Radio.Control>
                                                    <Radio.Content>
                                                        <Label>Giddings</Label>
                                                        <Description>2911 E Austin St</Description>
                                                    </Radio.Content>
                                                </Radio>
                                            </RadioGroup>
                                        </Tabs.Panel>
                                        <Tabs.Panel className="pt-4" id="yours">
                                            <TextField name="ownerAddress" type="text">
                                                <Label>Provide Your Address</Label>
                                                <Input placeholder="Owner's Address" variant="primary" />
                                            </TextField>
                                        </Tabs.Panel>
                                        <Tabs.Panel className="pt-4" id="ours">
                                            <Checkbox id="basic-terms">
                                                <Checkbox.Control>
                                                    <Checkbox.Indicator />
                                                </Checkbox.Control>
                                                <Checkbox.Content>
                                                    <Label htmlFor="basic-terms">I agree, address will be provided after booking is confirmed.</Label>
                                                </Checkbox.Content>
                                            </Checkbox>
                                        </Tabs.Panel>
                                    </Tabs>
                                </div>
                                <TextField name="details">
                                    <Label>Additional Details</Label>
                                    <TextArea
                                        name="details"
                                        placeholder="Is there anything specific we should know about this dog?"
                                        rows={4}
                                    />
                                </TextField>
                            </div>
                            <AvailabilityPicker openSlots={openSlots} value={selectedTime} onChange={setSelectedTime} />
                        </Card.Content>
                        <Card.Footer className="mt-4 flex flex-col gap-2">
                            <Button className="w-full" type="submit">
                                <BubblesIcon />
                                Submit
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>

                <Surface className="flex min-w-[320px] max-w-md bg-secondary/10 backdrop-blur-sm flex-col gap-3 rounded-3xl p-6" variant="default">
                    <h3 className="text-base font-semibold text-foreground">Privacy</h3>
                    <p className="text-sm text-muted">
                        We keep this information in our system solely for the purpose of scheduling, contacting, and keeping track of your punch cards. It will only be seen by us, and we will never share it with anyone.
                    </p>
                </Surface>
            </section>
        </DefaultLayout>
    );
}