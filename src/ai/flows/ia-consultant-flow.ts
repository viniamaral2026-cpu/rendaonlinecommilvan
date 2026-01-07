'use server';

/**
 * @fileOverview Um fluxo de IA para o consultor "Renda Online Fácil".
 *
 * - askConsultant - A função que lida com as perguntas do usuário.
 * - IaConsultantInput - O tipo de entrada para a função askConsultant.
 * - IaConsultantOutput - O tipo de retorno para a função askConsultant.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { KNOWLEDGE_BASE } from '../data/knowledge-base';

// Simple text similarity search (you could replace this with a vector DB for more complex apps)
function findRelevantKnowledge(query: string): string {
    const queryLower = query.toLowerCase();
    let bestMatch = { content: "Não encontrei uma resposta direta para sua pergunta, mas aqui estão algumas informações gerais sobre o Renda Online Fácil...", score: 0 };
    
    KNOWLEDGE_BASE.forEach(item => {
        const keywords = item.keywords.map(k => k.toLowerCase());
        let currentScore = 0;

        keywords.forEach(keyword => {
            if (queryLower.includes(keyword)) {
                currentScore++;
            }
        });
        
        // Boost score for full phrase match
        if (queryLower.includes(item.question.toLowerCase())) {
            currentScore += 2;
        }

        if (currentScore > bestMatch.score) {
            bestMatch = { content: item.answer, score: currentScore };
        }
    });

    if (bestMatch.score > 0) {
        return bestMatch.content;
    }

    // Return a generic answer if no good match is found
    return "Desculpe, não tenho uma resposta para essa pergunta no momento. O Renda Online Fácil foca em Marketing de Afiliados, Importação da China, Vendas Online e Investimentos Digitais. Você poderia reformular sua pergunta sobre um desses tópicos?";
}


const IaConsultantInputSchema = z.object({
  question: z.string().describe('A pergunta do usuário para o consultor de IA.'),
});
export type IaConsultantInput = z.infer<typeof IaConsultantInputSchema>;

const IaConsultantOutputSchema = z.object({
  answer: z.string().describe('A resposta gerada pela IA para a pergunta do usuário.'),
});
export type IaConsultantOutput = z.infer<typeof IaConsultantOutputSchema>;

export async function askConsultant(input: IaConsultantInput): Promise<IaConsultantOutput> {
  return iaConsultantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'iaConsultantPrompt',
  input: { schema: z.object({ question: z.string(), context: z.string() }) },
  output: { schema: IaConsultantOutputSchema },
  prompt: `Você é Milvan, o especialista por trás do "Renda Online Fácil". Sua personalidade é amigável, direta e motivadora.
  
  Sua tarefa é responder à pergunta do usuário usando APENAS as informações fornecidas no CONTEXTO abaixo. Não invente nada.
  Seja breve e vá direto ao ponto. Use um tom encorajador e prático.

  CONTEXTO:
  {{{context}}}

  PERGUNTA DO USUÁRIO:
  "{{{question}}}"

  Sua Resposta:`,
});

const iaConsultantFlow = ai.defineFlow(
  {
    name: 'iaConsultantFlow',
    inputSchema: IaConsultantInputSchema,
    outputSchema: IaConsultantOutputSchema,
  },
  async (input) => {
    const context = findRelevantKnowledge(input.question);
    
    const { output } = await prompt({
      question: input.question,
      context: context,
    });
    
    return output!;
  }
);
