
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { generateProductComparison } from './actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Comparando...' : 'Comparar Produtos'}
    </Button>
  );
}

export default function ComparadorPage() {
  const initialState = { data: null, error: null, formErrors: null };
  const [state, dispatch] = useFormState(generateProductComparison, initialState);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Comparador de Produtos com IA</h1>
      <form action={dispatch}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Produto 1</CardTitle>
              <CardDescription>Insira as informações do primeiro produto.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product1Name">Nome do Produto</Label>
                <Input
                  id="product1Name"
                  name="product1Name"
                  placeholder="Ex: Smartphone Modelo X"
                />
                {state.formErrors?.product1Name && (
                  <p className="text-sm font-medium text-destructive">
                    {state.formErrors.product1Name.join(', ')}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="product1Reviews">Avaliações dos Clientes</Label>
                <Textarea
                  id="product1Reviews"
                  name="product1Reviews"
                  placeholder="Cole aqui as avaliações do produto 1..."
                  className="min-h-[200px]"
                />
                 {state.formErrors?.product1Reviews && (
                  <p className="text-sm font-medium text-destructive">
                    {state.formErrors.product1Reviews.join(', ')}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Produto 2</CardTitle>
              <CardDescription>Insira as informações do segundo produto.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product2Name">Nome do Produto</Label>
                <Input
                  id="product2Name"
                  name="product2Name"
                  placeholder="Ex: Smartphone Modelo Y"
                />
                 {state.formErrors?.product2Name && (
                  <p className="text-sm font-medium text-destructive">
                    {state.formErrors.product2Name.join(', ')}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="product2Reviews">Avaliações dos Clientes</Label>
                <Textarea
                  id="product2Reviews"
                  name="product2Reviews"
                  placeholder="Cole aqui as avaliações do produto 2..."
                  className="min-h-[200px]"
                />
                {state.formErrors?.product2Reviews && (
                  <p className="text-sm font-medium text-destructive">
                    {state.formErrors.product2Reviews.join(', ')}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <CardFooter className="mt-8 justify-center">
          <SubmitButton />
        </CardFooter>
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
        <div className="mt-12 space-y-8">
            <h2 className="text-3xl font-bold text-center">Resultados da Análise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>{state.data.product1Summary.split(':')[0]}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{state.data.product1Summary.split(':').slice(1).join(':').trim()}</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>{state.data.product2Summary.split(':')[0]}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{state.data.product2Summary.split(':').slice(1).join(':').trim()}</p>
                    </CardContent>
                </Card>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle>Comparação</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{state.data.comparison}</p>
                </CardContent>
            </Card>
             <Card className="bg-primary/10 border-primary">
                <CardHeader>
                    <CardTitle>Recomendação</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="font-semibold">{state.data.recommendation}</p>
                </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
}
