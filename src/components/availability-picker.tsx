"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button, Calendar, Label, Modal } from "@heroui/react";
import type { DateValue } from "@internationalized/date";

type Slot = {
  id: string;
  time: string;
};

type OpenSlotsByDate = Record<string, Slot[]>;

export type SelectedAppointment = {
  date: string;
  slotId: string;
  time: string;
} | null;

type AvailabilityPickerProps = {
  value: SelectedAppointment;
  onChange: (value: SelectedAppointment) => void;
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function dateKey(date: DateValue) {
  return date.toString();
}

export default function AvailabilityPicker({
  value,
  onChange,
}: AvailabilityPickerProps) {
  const now = new Date();
  const baseURL = "web-dev2.c-syncapp.com"
  console.log("HITTING OMPONENT")

  const [openSlots, setOpenSlots] = useState<OpenSlotsByDate>({});
  const loadedYears = useRef(new Set<number>());

  const [selectedDate, setSelectedDate] = useState<DateValue | null>(null);
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  const [visibleYear, setVisibleYear] = useState(now.getFullYear());

  async function loadYear(year: number) {
    console.log("GITIN loadyear loadin")
    if (loadedYears.current.has(year)) return;

    const res = await fetch(`https://web-dev2.c-syncapp.com/api/bubbles/availability?year=${year}`);
    console.log("GOTRES", res)
    if (!res.ok) {
      console.log("GOTSTUFFBAD")
    };

    const data: OpenSlotsByDate = await res.json();
    console.log("SLOTS", data)

    setOpenSlots((prev) => ({
      ...prev,
      ...data,
    }));

    loadedYears.current.add(year);
  }

  useEffect(() => {
    loadYear(visibleYear);
  }, [visibleYear]);

  const selectedDateKey = selectedDate ? dateKey(selectedDate) : null;

  const selectedSlots = useMemo(() => {
    if (!selectedDateKey) return [];
    return openSlots[selectedDateKey] ?? [];
  }, [selectedDateKey, openSlots]);

  function handleDateChange(date: DateValue) {
    setSelectedDate(date);
    setSelectedSlotId(null);
  }

  function handleConfirm() {
    if (!selectedDateKey || !selectedSlotId) return;

    const slot = selectedSlots.find((s) => s.id === selectedSlotId);
    if (!slot) return;

    onChange({
      date: selectedDateKey,
      slotId: slot.id,
      time: slot.time,
    });
  }

  return (
    <>
      <Label>Appointment Timez</Label>

      {value && (
        <p className="mt-2 text-sm text-default-500">
          {formatDate(value.date)} at {value.time}
        </p>
      )}

      <Modal>
        <Button variant="primary">Select Time Slot</Button>

        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading>Select appointment</Modal.Heading>
              </Modal.Header>

              <Modal.Body>
                <div className="flex flex-col gap-5">
                  <Calendar
                    aria-label="Appointment date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    onFocusChange={(date) => {
                      if (!date) return;

                      if (date.year !== visibleYear) {
                        setVisibleYear(date.year);
                      }
                    }}
                    isDateUnavailable={(date) =>
                      !openSlots[dateKey(date)]?.length
                    }
                  >
                    <Calendar.Header>
                      <Calendar.Heading />
                      <Calendar.NavButton slot="previous" />
                      <Calendar.NavButton slot="next" />
                    </Calendar.Header>

                    <Calendar.Grid>
                      <Calendar.GridHeader>
                        {(day) => (
                          <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                        )}
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
                            const isSelected = selectedSlotId === slot.id;

                            return (
                              <Button
                                key={slot.id}
                                size="sm"
                                variant={isSelected ? "primary" : "outline"}
                                onPress={() => setSelectedSlotId(slot.id)}
                              >
                                {slot.time}
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
                <Button
                  className="w-full"
                  slot="close"
                  onPress={handleConfirm}
                >
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