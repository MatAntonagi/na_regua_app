"use client";

import { useState, Dispatch, SetStateAction } from "react";

interface UseStepReturn {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  nextStep: () => void;
  prevStep: () => void;
}

export function useStep(): UseStepReturn {
  const [step, setStep] = useState(1);

  function nextStep() {
    setStep((prev) => prev + 1);
  }

  function prevStep() {
    setStep((prev) => prev - 1);
  }

  return { step, setStep, nextStep, prevStep };
}
