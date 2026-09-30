import { Input } from "@/src/components/ui/Input";
import { IconEye } from "@tabler/icons-react";

interface ContactProps {
  onNext: () => void;
  onBack: () => void;
}

export default function StepContact({ onNext, onBack }: ContactProps) {
  return (
    <>
      <Input label="nome" placeholder="Nome do responsável" type="text" />
      <Input label="telefone" placeholder="(xx) xxxxx-xxxx" type="tel" />
      <Input label="e-mail" placeholder="seuemail@barber.com" type="email" />
      <Input
        label="senha"
        placeholder="********"
        type="password"
        icon={<IconEye />}
      />
      <Input
        label="Confirmar senha"
        placeholder="********"
        type="password"
        icon={<IconEye />}
      />
    </>
  );
}
