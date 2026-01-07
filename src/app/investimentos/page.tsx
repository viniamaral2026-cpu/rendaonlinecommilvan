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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { generateInvestmentInsights } from "./actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, ShieldAlert, LoaderCircle } from "lucide-react";

const initialState = {
  data: null,
  error: null,
  formErrors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90" disabled={pending}>
      {pending ? <LoaderCircle className="animate-spin" /> : "Gerar Insights"}
    </Button>
  );
}

export default function InvestimentosPage() {
  const [state, formAction] = useFormState(generateInvestmentInsights, initialState);

  return (
    <div className="space-y-6 animate-in fade-in-50">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Insights de Investimento Digital
        </h1>
        <p className="text-muted-foreground">
          Receba insights de IA sobre oportunidades de investimento digital com base em suas preferências.
        </p>
      </div>

      <Card>
        <form action={formAction}>
          <CardHeader>
            <CardTitle>Gerador de Insights</CardTitle>
            <CardDescription>
              Preencha os campos abaixo para que nossa IA gere insights personalizados.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="investmentPreferences">Preferências de Investimento</Label>
              <Textarea
                id="investmentPreferences"
                name="investmentPreferences"
                placeholder="Ex: Alta tolerância ao risco, foco em criptomoedas e startups de tecnologia, horizonte de longo prazo."
                className="min-h-[100px]"
              />
              {state.formErrors?.investmentPreferences && (
                <p className="text-sm font-medium text-destructive">{state.formErrors.investmentPreferences[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="marketTrends">Tendências de Mercado</Label>
              <Textarea
                id="marketTrends"
                name="marketTrends"
                placeholder="Ex: Crescimento do mercado de IA, volatilidade nas altcoins, regulamentação governamental crescente."
                className="min-h-[100px]"
              />
              {state.formErrors?.marketTrends && (
                <p className="text-sm font-medium text-destructive">{state.formErrors.marketTrends[0]}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      
      {state.error && !state.formErrors && (
         <Alert variant="destructive">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Erro ao Gerar Insights</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.data && (
        <div className="space-y-6">
          <Card className="bg-primary/10 border-primary/50">
            <CardHeader className="flex-row gap-4 items-center">
              <Lightbulb className="w-8 h-8 text-primary" />
              <CardTitle>Insights Gerados por IA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 whitespace-pre-wrap">{state.data.insights}</p>
            </CardContent>
          </Card>
          <Alert>
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Aviso Legal</AlertTitle>
            <AlertDescription>{state.data.disclaimer}</AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
