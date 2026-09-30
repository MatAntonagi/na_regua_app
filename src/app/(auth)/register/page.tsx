"use client";
import { Button } from "@/src/components/ui/Button";
import Link from "next/link";
import ProgressBar from "../components/register/ProgressBar";
import StepBarberShop from "../components/register/StepBarberShop";
import StepContact from "../components/register/StepContact";
import { StepHours } from "../components/register/StepHours";
import { useStep } from "@/src/hooks/useStepReturn";
import { IconChevronLeft } from "@tabler/icons-react";

export default function RegisterPage() {
  const { step, nextStep, prevStep, setStep } = useStep();
  function handleSubmit() {
    console.log("cadastro finalizado");
  }

  return (
    <div className="w-full h-full flex flex-col justify-start">
      <h1 className="text-h1 font-bold mb-1.5">Criar Conta</h1>
      <p className="text-secondary text-muted mb-7 font-light">
        Configure sua barbearia em poucos passos
      </p>
      <ProgressBar currentStep={step} />

      {step === 1 && <StepBarberShop onNext={nextStep} />}
      {step === 2 && <StepContact onNext={nextStep} onBack={prevStep} />}
      {step === 3 && <StepHours onBack={prevStep} />}

      <div className="flex gap-4 mb-4">
        {step > 1 && (
          <Button
            className="text-ink rounded-lg w-14 flex items-center justify-center p-0"
            variant="outline"
            onClick={prevStep}
          >
            <IconChevronLeft size={20} />
          </Button>
        )}
        <Button
          onClick={step === 3 ? handleSubmit : nextStep}
          className="flex-1 text-paper"
        >
          {step === 3 ? "Criar Conta" : "Continuar"}
        </Button>
      </div>
      <div className="w-full flex justify-center text-secondary text-muted">
        <p>
          Já tem conta?{" "}
          <Link href="/login" className="text-ink font-bold">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
