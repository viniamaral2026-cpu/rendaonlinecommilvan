"use client";

import { useFormState, useFormStatus } from "react-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { generateProductComparison } from "./actions";
import { LoaderCircle, ShieldAlert, GitCompare, Sparkles, Star } from "lucide-react";

const initialState = {
  data: null,
  error: null,
  formErrors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <LoaderCircle className="animate-spin" /> : "Comparar Produtos"}
    </Button>
  );
}

export default function ComparadorPage() {
  const [state, formAction] = useFormState(generateProductComparison, initialState);

  return (
    <div className="space-y-6 animate-in fade-in-50">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Comparador de Produtos</h1>
        <p className="text-muted-foreground">
          Compare produtos com base em avaliações de clientes e obtenha uma recomendação da nossa IA.
        </p>
      </div>

      <form action={formAction} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Produto 1</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product1Name">Nome do Produto</Label>
                <Input id="product1Name" name="product1Name" placeholder="Ex: Fone de Ouvido SuperBass" />
                 {state.formErrors?.product1Name && (
                  <p className="text-sm font-medium text-destructive">{state.formErrors.product1Name[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="product1Reviews">Avaliações do Produto</Label>
                <Textarea
                  id="product1Reviews"
                  name="product1Reviews"
                  placeholder="Cole aqui as avaliações dos clientes sobre o produto 1..."
                  className="min-h-[150px]"
                />
                 {state.formErrors?.product1Reviews && (
                  <p className="text-sm font-medium text-destructive">{state.formErrors.product1Reviews[0]}</p>
                )}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Produto 2</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product2Name">Nome do Produto</Label>
                <Input id="product2Name" name="product2Name" placeholder="Ex: Headset Gamer Pro" />
                 {state.formErrors?.product2Name && (
                  <p className="text-sm font-medium text-destructive">{state.formErrors.product2Name[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="product2Reviews">Avaliações do Produto</Label>
                <Textarea
                  id="product2Reviews"
                  name="product2Reviews"
                  placeholder="Cole aqui as avaliações dos clientes sobre o produto 2..."
                  className="min-h-[150px]"
                />
                 {state.formErrors?.product2Reviews && (
                  <p className="text-sm font-medium text-destructive">{state.formErrors.product2Reviews[0]}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <SubmitButton />
      </form>
      
      {state.error && !state.formErrors && (
         <Alert variant="destructive">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Erro ao Comparar</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.data && (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Resultados da Comparação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>{state.data.product1Summary.split(':')[0]}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/90">{state.data.product1Summary.substring(state.data.product1Summary.indexOf(':') + 1).trim()}</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>{state.data.product2Summary.split(':')[0]}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/90">{state.data.product2Summary.substring(state.data.product2Summary.indexOf(':') + 1).trim()}</p>
                    </CardContent>
                </Card>
            </div>
             <Card>
                <CardHeader className="flex-row gap-4 items-center">
                    <GitCompare className="w-8 h-8 text-primary" />
                    <CardTitle>Comparativo Detalhado</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/90 whitespace-pre-wrap">{state.data.comparison}</p>
                </CardContent>
            </Card>
             <Card className="bg-primary/10 border-primary/50">
                <CardHeader className="flex-row gap-4 items-center">
                    <Star className="w-8 h-8 text-primary" />
                    <CardTitle>Recomendação da IA</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/90 font-medium">{state.data.recommendation}</p>
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
