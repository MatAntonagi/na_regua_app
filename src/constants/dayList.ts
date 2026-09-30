import { SchedulesType } from "../hooks/useSchedules";

export const dayList: { key: keyof SchedulesType; label: string }[] = [
  { key: "segunda", label: "Segunda-Feira" },
  { key: "terca", label: "Terça-Feira" },
  { key: "quarta", label: "Quarta-Feira" },
  { key: "quinta", label: "Quinta-Feira" },
  { key: "sexta", label: "Sexta-Feira" },
  { key: "sabado", label: "Sábado" },
  { key: "domingo", label: "Domingo" },
];
