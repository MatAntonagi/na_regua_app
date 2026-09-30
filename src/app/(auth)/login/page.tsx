"use client";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/src/components/ui/Input";
import { Button } from "@/src/components/ui/Button";
import { IconEye } from "@tabler/icons-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-full h-full flex flex-col justify-start">
      <div className="flex flex-col justify-center items-center w-11 h-11 rounded-xl bg-ink mb-6">
        <Image
          src="/images/logo_naregua.png"
          alt="Logo"
          width={44}
          height={44}
          className="dark:hidden"
        />
        <Image
          src="/images/logo_naregua_dark.png"
          alt="Logo"
          width={44}
          height={44}
          className="hidden dark:block"
        />
      </div>
      <h1 className="text-h1 font-bold mb-1.5">Entrar</h1>
      <p className="text-secondary text-muted mb-7 font-light">
        Acesse sua agenda e seu financeiro
      </p>
      <Input label="E-MAIL" placeholder="seuemail@barber.com" type="email" />
      <Input
        label="SENHA"
        placeholder="********"
        type="password"
        icon={<IconEye />}
      />
      <div className="w-full flex justify-end mb-6 text-accent text-secondary">
        <Link href="/forgot-password">Esqueceu sua senha?</Link>
      </div>
      <Button className="mb-4" size="md">
        Entrar
      </Button>
      <div className="w-full flex justify-center text-secondary text-muted">
        <p>
          Ainda não tem conta?{" "}
          <Link href="/register" className="text-ink font-bold">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
