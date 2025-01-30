"use client";

import React, { useState } from "react";
import { DateRange } from "react-day-picker";
import { Calendar } from "../ui/calendar";

export function BookingCalendar() {
  const today = new Date();
  let defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <Calendar
      mode="range"
      defaultMonth={today}
      onSelect={setRange}
      selected={range}
    />
  );
}