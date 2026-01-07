import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Construction } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center flex-1">
      <Card className="max-w-md w-full animate-fade-in shadow-lg">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-full">
              <Construction className="h-10 w-10 text-yellow-500" />
            </div>
          </div>
          <CardTitle className="text-3xl">Página em Construção</CardTitle>
          <CardDescription>
            Estamos preparando uma área de membros exclusiva para você.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Em breve, você poderá acessar conteúdos e ferramentas premium para acelerar ainda mais seus resultados.
          </p>
          <p className="font-semibold text-foreground">
            Enquanto isso, fale diretamente comigo no WhatsApp para começar sua jornada!
          </p>
          <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 active:scale-95">
            <Link href="https://wa.me/258857658841?text=Ol%C3%A1%20Milvan,%20gostaria%20de%20saber%20mais%20sobre%20o%20Renda%20Online%20F%C3%A1cil.">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chamar no WhatsApp
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
