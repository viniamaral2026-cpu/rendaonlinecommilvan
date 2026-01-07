'use server';

/**
 * @fileOverview Um fluxo de IA para o consultor "Renda Online Fácil".
 *
 * - askConsultant - A função que lida com as perguntas do usuário.
 * - IaConsultantInput - O tipo de entrada para a função askConsultant.
 * - IaConsultantOutput - O tipo de retorno para a função askConsultant.
 */

import { z } from 'genkit';
import { KNOWLEDGE_BASE } from '../data/knowledge-base';

// Simple text similarity search (you could replace this with a vector DB for more complex apps)
function findRelevantKnowledge(query: string): string {
    const queryLower = query.toLowerCase().trim();
    let bestMatch = { content: "", score: 0 };
    
    // Fallback answer with general information
    const fallbackAnswer = `Não encontrei uma resposta exata para sua pergunta. O Renda Online Fácil é uma plataforma educacional focada em ensinar como gerar renda em Moçambique através de:
- **Marketing de Afiliados:** Ganhe comissões divulgando produtos.
- **Importação da China:** Compre produtos baratos para revender com lucro.
- **Vendas Online:** Use WhatsApp e Facebook para vender mais.
- **Investimentos Digitais:** Conheça oportunidades seguras.
Você pode perguntar sobre qualquer um desses tópicos!`;

    if (!queryLower) {
        // Find greeting if query is empty or just a greeting
        const greeting = KNOWLEDGE_BASE.find(item => item.keywords.includes("oi"));
        return greeting ? greeting.answer : fallbackAnswer;
    }
    
    KNOWLEDGE_BASE.forEach(item => {
        const keywords = item.keywords.map(k => k.toLowerCase());
        let currentScore = 0;

        // Score based on keyword matches
        keywords.forEach(keyword => {
            if (queryLower.includes(keyword)) {
                currentScore++;
            }
        });
        
        // Higher score for more specific matches
        const queryWords = new Set(queryLower.split(/\s+/));
        const matchingKeywords = keywords.filter(kw => queryWords.has(kw));
        currentScore += matchingKeywords.length * 2;


        if (currentScore > bestMatch.score) {
            bestMatch = { content: item.answer, score: currentScore };
        }
    });

    if (bestMatch.score > 0) { // Require a minimum score to be considered relevant
        return bestMatch.content;
    }

    return fallbackAnswer;
}


const IaConsultantInputSchema = z.object({
  question: z.string().describe('A pergunta do usuário para o consultor de IA.'),
});
export type IaConsultantInput = z.infer<typeof IaConsultantInputSchema>;

const IaConsultantOutputSchema = z.object({
  answer: z.string().describe('A resposta gerada para a pergunta do usuário a partir da base de conhecimento.'),
});
export type IaConsultantOutput = z.infer<typeof IaConsultantOutputSchema>;

// This function now directly uses the local knowledge base without calling an external AI model.
export async function askConsultant(input: IaConsultantInput): Promise<IaConsultantOutput> {
  const answer = findRelevantKnowledge(input.question);
  return { answer };
}

// NOTE: The Genkit flow and prompt definitions below are no longer used in the askConsultant function.
// They are kept here for potential future use if you decide to re-enable the external AI model.
// To re-enable, you would need to restore the `iaConsultantFlow` call inside `askConsultant`.

import { ai } from '@/ai/genkit';

const iaConsultantFlow = ai.defineFlow(
  {
    name: 'iaConsultantFlow',
    inputSchema: IaConsultantInputSchema,
    outputSchema: IaConsultantOutputSchema,
  },
  async (input) => {
    const answer = findRelevantKnowledge(input.question);
    return { answer };
  }
);
