import { Input } from "@/src/components/ui/Input";

interface BarberShopProps {
  onNext: () => void;
}

export default function StepBarberShop({onNext}: BarberShopProps) {
  return (
    <>
      <Input
        label="NOME DA BARBEARIA"
        placeholder="Nome da barbearia"
        type="text"
      />
      <Input label="RUA" placeholder="Rua da barbearia" type="text" />
      <Input label="NÚMERO" placeholder="Número da barbearia" type="number" />
      <Input label="BAIRRO" placeholder="Bairro da barbearia" type="text" />
      <Input label="CIDADE" placeholder="Cidade da barbearia" type="text" />
    </>
  );
}
