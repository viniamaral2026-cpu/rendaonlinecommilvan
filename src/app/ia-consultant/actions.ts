'use server';

import {
  askConsultant,
  type IaConsultantInput,
  type IaConsultantOutput,
} from '@/ai/flows/ia-consultant-flow';
import { z } from 'zod';

const schema = z.object({
  question: z.string().min(5, 'Por favor, faça uma pergunta mais detalhada.'),
});

type State = {
  data: IaConsultantOutput | null;
  error: string | null;
};

export async function askConsultant(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
    question: formData.get('question'),
  });

  if (!validatedFields.success) {
    const errorMessage = validatedFields.error.flatten().fieldErrors.question?.join(', ') || 'Erro de validação.';
    return {
      data: null,
      error: errorMessage,
    };
  }

  try {
    const result = await askConsultant(validatedFields.data as IaConsultantInput);
    return { data: result, error: null };
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : 'Ocorreu um erro inesperado.';
    return { data: null, error: errorMessage };
  }
}
