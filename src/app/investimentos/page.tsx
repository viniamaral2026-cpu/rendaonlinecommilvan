
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { generateInvestmentInsights } from './actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Terminal } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Gerando Insights...' : 'Obter Insights de Investimento'}
    </Button>
  );
}

export default function InvestimentosPage() {
  const initialState = { data: null, error: null, formErrors: null };
  const [state, dispatch] = useFormState(generateInvestmentInsights, initialState);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Consultor de Investimentos IA</h1>
        <p className="text-muted-foreground text-center mb-8">
          Receba insights personalizados sobre oportunidades de investimento digital com base em suas preferências e nas tendências de mercado.
        </p>
        <form action={dispatch}>
          <Card>
            <CardHeader>
              <CardTitle>Análise de Perfil</CardTitle>
              <CardDescription>Forneça seus dados para a IA gerar as recomendações.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="investmentPreferences">Suas Preferências de Investimento</Label>
                <Textarea
                  id="investmentPreferences"
                  name="investmentPreferences"
                  placeholder="Ex: Busco crescimento a longo prazo, tenho alta tolerância a risco e me interesso por tecnologia e energias renováveis."
                  className="min-h-[120px]"
                />
                {state.formErrors?.investmentPreferences && (
                  <p className="text-sm font-medium text-destructive">
                    {state.formErrors.investmentPreferences.join(', ')}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="marketTrends">Tendências de Mercado que Você Observa</Label>
                <Textarea
                  id="marketTrends"
                  name="marketTrends"
                  placeholder="Ex: Notei um aumento na popularidade de NFTs e um crescimento no setor de inteligência artificial."
                  className="min-h-[120px]"
                />
                 {state.formErrors?.marketTrends && (
                  <p className="text-sm font-medium text-destructive">
                    {state.formErrors.marketTrends.join(', ')}
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <SubmitButton />
            </CardFooter>
          </Card>
        </form>

        {state.error && (
            <Alert variant="destructive" className="mt-8">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Erro na Análise</AlertTitle>
                <AlertDescription>
                {state.error}
                </AlertDescription>
            </Alert>
        )}

        {state.data && (
            <div className="mt-12 space-y-6">
                <h2 className="text-3xl font-bold text-center">Sua Análise de Investimentos</h2>
                <Card>
                    <CardHeader className='flex-row items-center gap-4 space-y-0'>
                        <Lightbulb className="w-8 h-8 text-primary" />
                        <CardTitle>Insights Gerados por IA</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{state.data.insights}</p>
                    </CardContent>
                </Card>
                 <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Aviso Legal Importante</AlertTitle>
                    <AlertDescription>
                        {state.data.disclaimer}
                    </AlertDescription>
                </Alert>
            </div>
        )}
      </div>
    </div>
  );
}
