interface SwitchProps {
  active: boolean;
  onToggle: () => void;
}

export default function Switch({ active, onToggle }: SwitchProps) {
  return (
    <button
      role="switch"
      aria-checked={active}
      onClick={onToggle}
      className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${active ? "bg-active" : "bg-apple-gray "}`}
    >
      <div
        className={` absolute w-5 h-5 bg-white shadow-md top-0.5 rounded-full transition-all duration-200 ease-out ${active ? "left-5.5" : "left-0.5"} `}
      />
    </button>
  );
}
