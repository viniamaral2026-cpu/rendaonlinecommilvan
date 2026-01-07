"use server";

import {
  compareProducts,
  type ProductReviewComparisonInput,
  type ProductReviewComparisonOutput,
} from "@/ai/flows/product-review-comparison";
import { z } from "zod";

const schema = z.object({
  product1Name: z.string().min(1, "O nome do Produto 1 é obrigatório."),
  product1Reviews: z.string().min(20, "As avaliações do Produto 1 devem ter pelo menos 20 caracteres."),
  product2Name: z.string().min(1, "O nome do Produto 2 é obrigatório."),
  product2Reviews: z.string().min(20, "As avaliações do Produto 2 devem ter pelo menos 20 caracteres."),
});

type State = {
  data: ProductReviewComparisonOutput | null;
  error: string | null;
  formErrors: Record<string, string[]> | null;
}

export async function generateProductComparison(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = schema.safeParse({
    product1Name: formData.get("product1Name"),
    product1Reviews: formData.get("product1Reviews"),
    product2Name: formData.get("product2Name"),
    product2Reviews: formData.get("product2Reviews"),
  });

  if (!validatedFields.success) {
    return {
      data: null,
      error: 'Erro de validação.',
      formErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await compareProducts(validatedFields.data as ProductReviewComparisonInput);
    return { data: result, error: null, formErrors: null };
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Ocorreu um erro inesperado.";
    return { data: null, error: errorMessage, formErrors: null };
  }
}
