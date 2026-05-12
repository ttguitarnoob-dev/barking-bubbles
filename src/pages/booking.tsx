"use client";

import AvailabilityPicker, { SelectedAppointment } from "@/components/availability-picker";
import { BubblesIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Button, Card, Checkbox, Description, Form, Input, Label, Radio, RadioGroup, Surface, Tabs, TextArea, TextField } from "@heroui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {

    const [selectedTime, setSelectedTime] = useState<SelectedAppointment>(null);
    const [location, setLocation] = useState("")
    const [isOurPlace, setisOurPlace] = useState(true);
    const [allergy, setAllergy] = useState("no-allergy")
    const navigate = useNavigate()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        const submitURL = "https://kitty-cottage.c-syncapp.com/api/bubbles/booking"
        // const submitURL = "https://web-dev2.c-syncapp.com/api/bubbles/booking"

        e.preventDefault();
      
        if (!selectedTime) {
          console.error("No appointment time selected");
          return;
        }
      
        const formData = new FormData(e.currentTarget);
      
        const appointment = {
          ownerName: formData.get("ownerName")?.toString() ?? "",
          email: formData.get("email")?.toString() ?? "",
          phoneNumber: formData.get("phoneNumber")?.toString() || undefined,
      
          dogName: formData.get("dogName")?.toString() ?? "",
      
          furLength: (formData.get("furLength")?.toString() ?? "SHORT").toUpperCase(),
          dogSize:
            (formData.get("dogSize")?.toString() ?? "SMALL")
              .replace("-size", "")
              .toUpperCase(),
      
          allergy: allergy === "yes-allergy",
          allergyDescription:
            allergy === "yes-allergy"
              ? formData.get("allergyDescription")?.toString() || undefined
              : undefined,
      
          location,
          additionalDetails: formData.get("details")?.toString() ?? "",
      
          slotId: selectedTime.slotId,
        };
      
        const res = await fetch(submitURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointment),
        });
      
        if (!res.ok) {
          const error = await res.text();
          console.error(error);
          return;
        }
      
        const created = await res.json();
        console.log("Created appointment:", created);
        navigate('/success')
      };

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
<h1 className="text-4xl"><span className="font-bold text-red-600">** Important **</span> This booking form is still under development. You can play with it but it doesn't do anything when you click submit! For now, please visit our <a className="font-bold underline text-secondary" href="/contact">Contact Page</a> if you would like to book.</h1>
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
                                    <Input placeholder="Human's Name" variant="primary" />
                                </TextField>
                                <TextField name="email" type="email">
                                    <Label>Email</Label>
                                    <Input placeholder="email@clean.dog" variant="primary" />
                                </TextField>
                                <TextField name="phoneNumber" type="phone">
                                    <Label>Phone Number</Label>
                                    <Input placeholder="Optional" variant="primary" />
                                </TextField>
                                <TextField name="dogName" type="text">
                                    <Label>Dog Name</Label>
                                    <Input placeholder="The pup to be scrubbed" variant="primary" />
                                </TextField>
                                {/* sets selectedTime  */}
                                <AvailabilityPicker value={selectedTime} onChange={setSelectedTime} />
                                <div className="flex flex-col gap-4">
                                    <Label>Fur Length</Label>
                                    <RadioGroup defaultValue="pro" name="furLength" orientation="horizontal">
                                        <Radio value="SHORT">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Short</Label>
                                                {/* <Description>For side projects</Description> */}
                                            </Radio.Content>
                                        </Radio>
                                        <Radio value="MEDIUM">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Medium</Label>
                                                {/* <Description>Advanced reporting</Description> */}
                                            </Radio.Content>
                                        </Radio>
                                        <Radio value="LONG">
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
                                    <RadioGroup defaultValue="small" name="dogSize" orientation="horizontal">
                                        <Radio value="SMALL">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Small</Label>
                                                <Description>Tiny but fierce</Description>
                                            </Radio.Content>
                                        </Radio>
                                        <Radio value="MEDIUM">
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <Radio.Content>
                                                <Label>Medium</Label>
                                                <Description>Finely tuned agility</Description>
                                            </Radio.Content>
                                        </Radio>
                                        <Radio value="LARGE">
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

                                    <RadioGroup value={allergy} onChange={setAllergy} defaultValue="no-allergy" name="allergy" orientation="horizontal">
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
                                    {allergy === "yes-allergy" && (
                                        <TextField name="allergyDescription" type="text">
                                            <Input placeholder="Brief allergy description" variant="primary" />
                                        </TextField>
                                    )}
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
                                            <RadioGroup value={location} onChange={setLocation} name="plan-orientation" orientation="horizontal">
                                                <Radio value="bastrop">
                                                    <Radio.Control>
                                                        <Radio.Indicator />
                                                    </Radio.Control>
                                                    <Radio.Content>
                                                        <Label>Bastrop</Label>
                                                        <Description>437 W SH 71 Service Rd</Description>
                                                    </Radio.Content>
                                                </Radio>
                                                <Radio value="elgin">
                                                    <Radio.Control>
                                                        <Radio.Indicator />
                                                    </Radio.Control>
                                                    <Radio.Content>
                                                        <Label>Elgin</Label>
                                                        <Description>18517 E US Highway 290</Description>
                                                    </Radio.Content>
                                                </Radio>
                                                <Radio value="giddings">
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
                                                <Input placeholder="Owner's Address" variant="primary" onChange={(event) => setLocation(event.target.value)} />
                                            </TextField>
                                        </Tabs.Panel>
                                        <Tabs.Panel className="pt-4" id="ours">
                                            <Checkbox id="basic-terms" isSelected={isOurPlace} onChange={setisOurPlace}>
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