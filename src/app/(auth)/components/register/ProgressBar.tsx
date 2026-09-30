interface ProgressBarProps {
  currentStep: number;
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  const totalStep = 3;

  return (
    <div className="w-full flex gap-1.5 mb-7">
      {Array.from({ length: totalStep }).map((_, index) => {
        const stepNumber = index + 1;
        const isCompleteOrCurrent = stepNumber <= currentStep;
        return (
          <div
            key={stepNumber}
            className={`flex-1 h-0.75 rounded-full ${isCompleteOrCurrent ? "bg-ink" : "bg-border"}`}
          ></div>
        );
      })}
    </div>
  );
}
