import { Input } from "@/src/components/ui/Input";
import Switch from "@/src/components/ui/Switch";

interface DayRowProps {
  day: string;
  label: string;
  active: boolean;
  onToggle: () => void;
  open: string;
  closed: string;
  onChangeOpen: (value: string) => void;
  onChangeClosed: (value: string) => void;
}

export default function DayRow({
  day,
  label,
  open,
  active,
  onToggle,
  closed,
  onChangeOpen,
  onChangeClosed,
}: DayRowProps) {
  return (
    <div className="pt-3 border-b border-border w-full">
      <div className="flex justify-between items-center mb-2">
        <p className="text-h6 uppercase font-bold text-muted w-28">{label}</p>
        <Switch active={active} onToggle={onToggle} />
      </div>
      <div className="w-full min-h-15 flex items-center">
        {active ? (
          <div className="w-full flex items-center justify-center h-min gap-2">
            <Input
              id={`${day}-open`}
              type="time"
              value={open}
              className="w-min px-1 py-2"
              icon=""
              onChange={(e) => onChangeOpen(e.target.value)}
            />
            <span className="text-muted text-secondary mb-4.5">até</span>
            <Input
              id={`${day}-closed`}
              type="time"
              value={closed}
              className="w-min px-1 py-2"
              onChange={(e) => onChangeClosed(e.target.value)}
            />
          </div>
        ) : (
          <div className="mb-4.5  flex justify-center w-full">
            <span className="text-secondary uppercase text-ink font-bold">
              Fechado
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
