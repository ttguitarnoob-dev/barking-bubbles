"use client";

import { useMemo, useState } from "react";
import {
    Button,
    Calendar,
    Modal,
} from "@heroui/react";
import type { DateValue } from "@internationalized/date";

type OpenSlotsByDate = Record<string, string[]>;

export type SelectedAppointment = {
    date: string;
    time: string;
} | null;

type AvailabilityPickerProps = {
    openSlots: OpenSlotsByDate;
    value: SelectedAppointment;
    onChange: (value: SelectedAppointment) => void;
};

function dateKey(date: DateValue) {
    return date.toString();
}

export default function AvailabilityPicker({
    openSlots,
    value,
    onChange,
}: AvailabilityPickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<DateValue | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const selectedDateKey = selectedDate ? dateKey(selectedDate) : null;

    const selectedSlots = useMemo(() => {
        if (!selectedDateKey) return [];
        return openSlots[selectedDateKey] ?? [];
    }, [selectedDateKey, openSlots]);

    function handleDateChange(date: DateValue) {
        setSelectedDate(date);
        setSelectedTime(null);
    }

    function handleConfirm() {
        if (!selectedDateKey || !selectedTime) return;

        onChange({
            date: selectedDateKey,
            time: selectedTime,
        });

        setIsOpen(false);
    }

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <>
            <Button onPress={() => setIsOpen(true)} variant="ghost">
                Select Time
            </Button>

            <Modal>
                <Button variant="secondary">Open Modal</Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    {/* <Rocket className="size-5" /> */}
                                </Modal.Icon>
                                <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                            <div className="flex flex-col gap-5">
                                <Calendar
                                    aria-label="Appointment date"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    isDateUnavailable={(date) => !openSlots[dateKey(date)]?.length}
                                >
                                    <Calendar.Header>
                                        <Calendar.Heading />
                                        <Calendar.NavButton slot="previous" />
                                        <Calendar.NavButton slot="next" />
                                    </Calendar.Header>

                                    <Calendar.Grid>
                                        <Calendar.GridHeader>
                                            {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                        </Calendar.GridHeader>

                                        <Calendar.GridBody>
                                            {(date) => {
                                                const hasSlots = !!openSlots[dateKey(date)]?.length;

                                                return (
                                                    <Calendar.Cell date={date}>
                                                        {({ formattedDate }) => (
                                                            <>
                                                                {formattedDate}
                                                                {hasSlots && <Calendar.CellIndicator />}
                                                            </>
                                                        )}
                                                    </Calendar.Cell>
                                                );
                                            }}
                                        </Calendar.GridBody>
                                    </Calendar.Grid>
                                </Calendar>

                                {selectedDate && (
                                    <div className="rounded-xl border border-default-200 p-4">
                                        <div className="mb-3 text-sm font-medium">
                                            Available times for {selectedDate.toString()}
                                        </div>

                                        {selectedSlots.length > 0 ? (
                                            <div className="flex flex-wrap gap-2">
                                                {selectedSlots.map((slot) => {
                                                    const isSelected = selectedTime === slot;

                                                    return (
                                                        <Button
                                                            key={slot}
                                                            size="sm"
                                                            variant={isSelected ? "primary" : "outline"}
                                                            onPress={() => setSelectedTime(slot)}
                                                        >
                                                            {slot}
                                                        </Button>
                                                    );
                                                })}
                                            </div>
                                        ) : (
                                            <div className="text-sm text-default-500">
                                                No available times for this date.
                                            </div>
                                        )}
                                    </div>
                                )}

                                {value && (
                                    <div className="text-sm text-default-500">
                                        Current selection: {value.date} at {value.time}
                                    </div>
                                )}
                            </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="w-full" slot="close">
                                    Continue
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>

            
        </>
    );
}