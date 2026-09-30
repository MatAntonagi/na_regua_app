"use client";

import { dayList } from "@/src/constants/dayList";
import useSchedules from "@/src/hooks/useSchedules";
import DayRow from "./DayRow";

interface HoursProps {
  onBack: () => void;
}

export default function StepHours({ onBack }: HoursProps) {
  const { schedules, updatedDay } = useSchedules();
  return (
    <div className="flex flex-col items-center justify-between py-3">
      {dayList.map((day) => (
        <DayRow
          key={day.key}
          day={day.key}
          label={day.label}
          active={schedules[day.key].active}
          open={schedules[day.key].open}
          closed={schedules[day.key].closed}
          onToggle={() =>
            updatedDay(day.key, "active", !schedules[day.key].active)
          }
          onChangeOpen={(value) => updatedDay(day.key, "open", value)}
          onChangeClosed={(value) => updatedDay(day.key, "closed", value)}
        />
      ))}
    </div>
  );
}
