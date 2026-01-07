"use server";

import {
  getInvestmentInsights,
  type InvestmentInsightsInput,
  type InvestmentInsightsOutput,
} from "@/ai/flows/investment-opportunity-insights";
import { z } from "zod";

const schema = z.object({
  investmentPreferences: z.string().min(10, "Por favor, descreva suas preferências com mais detalhes."),
  marketTrends: z.string().min(10, "Por favor, descreva as tendências de mercado com mais detalhes."),
});

type State = {
  data: InvestmentInsightsOutput | null;
  error: string | null;
  formErrors: Record<string, string[]> | null;
}

export async function generateInvestmentInsights(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = schema.safeParse({
    investmentPreferences: formData.get("investmentPreferences"),
    marketTrends: formData.get("marketTrends"),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: 'Erro de validação.',
      formErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await getInvestmentInsights(validatedFields.data as InvestmentInsightsInput);
    return { data: result, error: null, formErrors: null };
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Ocorreu um erro inesperado.";
    return { data: null, error: errorMessage, formErrors: null };
  }
}
