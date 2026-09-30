"use client";

import { useState } from "react";

type DayHours = {
  active: boolean;
  open: string;
  closed: string;
};

export type SchedulesType = {
  segunda: DayHours;
  terca: DayHours;
  quarta: DayHours;
  quinta: DayHours;
  sexta: DayHours;
  sabado: DayHours;
  domingo: DayHours;
};

export function useSchedules() {
  const defaultHours: DayHours = {
    active: true,
    open: "09:00",
    closed: "19:00",
  };
  const [schedules, setSchedules] = useState<SchedulesType>({
    segunda: defaultHours,
    terca: defaultHours,
    quarta: defaultHours,
    quinta: defaultHours,
    sexta: defaultHours,
    sabado: { ...defaultHours, active: false },
    domingo: { ...defaultHours, active: false },
  });

  function updatedDay(
    day: keyof SchedulesType,
    field: keyof DayHours,
    value: boolean | string,
  ) {
    return setSchedules((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  }

  return { schedules, updatedDay };
}
