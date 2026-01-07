'use server';

/**
 * @fileOverview Product review comparison AI agent.
 *
 * - compareProducts - A function that compares products based on customer reviews.
 * - ProductReviewComparisonInput - The input type for the compareProducts function.
 * - ProductReviewComparisonOutput - The return type for the compareProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductReviewComparisonInputSchema = z.object({
  product1Name: z.string().describe('The name of the first product.'),
  product1Reviews: z.string().describe('Customer reviews for the first product.'),
  product2Name: z.string().describe('The name of the second product.'),
  product2Reviews: z.string().describe('Customer reviews for the second product.'),
});
export type ProductReviewComparisonInput = z.infer<
  typeof ProductReviewComparisonInputSchema
>;

const ProductReviewComparisonOutputSchema = z.object({
  product1Summary: z.string().describe('AI-generated summary of reviews for product 1.'),
  product2Summary: z.string().describe('AI-generated summary of reviews for product 2.'),
  comparison: z.string().describe('Comparison of the two products based on the summaries.'),
  recommendation: z
    .string()
    .describe('Recommendation of which product to purchase, based on the comparison.'),
});
export type ProductReviewComparisonOutput = z.infer<
  typeof ProductReviewComparisonOutputSchema
>;

export async function compareProducts(
  input: ProductReviewComparisonInput
): Promise<ProductReviewComparisonOutput> {
  return compareProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productReviewComparisonPrompt',
  input: {schema: ProductReviewComparisonInputSchema},
  output: {schema: ProductReviewComparisonOutputSchema},
  prompt: `You are an AI assistant helping users compare products based on customer reviews.

  Summarize the reviews for each product and then compare them, providing a recommendation on which product to purchase.

  Product 1: {{product1Name}}
  Reviews: {{product1Reviews}}

  Product 2: {{product2Name}}
  Reviews: {{product2Reviews}}`,
});

const compareProductsFlow = ai.defineFlow(
  {
    name: 'compareProductsFlow',
    inputSchema: ProductReviewComparisonInputSchema,
    outputSchema: ProductReviewComparisonOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
