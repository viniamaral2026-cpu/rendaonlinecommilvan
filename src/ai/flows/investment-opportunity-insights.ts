'use server';

/**
 * @fileOverview An AI-driven investment opportunity insights flow.
 *
 * - getInvestmentInsights - A function that generates insights into potential digital investment opportunities.
 * - InvestmentInsightsInput - The input type for the getInvestmentInsights function.
 * - InvestmentInsightsOutput - The return type for the getInvestmentInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InvestmentInsightsInputSchema = z.object({
  investmentPreferences: z
    .string()
    .describe('The user preferences and risk tolerance for investments.'),
  marketTrends: z.string().describe('The current market trends and conditions.'),
});
export type InvestmentInsightsInput = z.infer<typeof InvestmentInsightsInputSchema>;

const InvestmentInsightsOutputSchema = z.object({
  insights: z
    .string()
    .describe('AI-generated insights into potential digital investment opportunities.'),
  disclaimer: z
    .string()
    .describe('A disclaimer to consult with a financial expert before making investment decisions.'),
});
export type InvestmentInsightsOutput = z.infer<typeof InvestmentInsightsOutputSchema>;

export async function getInvestmentInsights(input: InvestmentInsightsInput): Promise<InvestmentInsightsOutput> {
  return investmentInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'investmentInsightsPrompt',
  input: {schema: InvestmentInsightsInputSchema},
  output: {schema: InvestmentInsightsOutputSchema},
  prompt: `You are an expert financial advisor providing insights into digital investment opportunities.

  Based on the user's investment preferences and current market trends, provide potential digital investment opportunities.
  Also provide a disclaimer to consult with a financial expert before making any investment decisions.

  Investment Preferences: {{{investmentPreferences}}}
  Market Trends: {{{marketTrends}}}

  AI-Driven Investment Insights:`,
});

const investmentInsightsFlow = ai.defineFlow(
  {
    name: 'investmentInsightsFlow',
    inputSchema: InvestmentInsightsInputSchema,
    outputSchema: InvestmentInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
