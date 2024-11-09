import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      <Image 
      src="/logo.vsg" 
      width={173} 
      height={39} 
      alt="Finance AI" 
      className="mb-8"
      />
      <div className="flex flex-col h-full justify-center mx-auto max-w-[550px] p-8">
      <h1 className="text-4xl font-bold mb-3">Bem-vindo</h1>
      <p className="text-muted-foreground">
        A Fincance AI é uma platarma de gestão finaceira que utiliza IA para
        monitorar suas movimentações, e oferecer insights personalizados,
        facilitando o controle do seu orçamento.
      </p>
      <Button variant="outline">
        <LogInIcon className="mr-2">
            Fazer login ou criar conta
        </LogInIcon>
      </Button>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
