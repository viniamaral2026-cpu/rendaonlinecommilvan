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
    const queryLower = query.toLowerCase().trim();
    let bestMatch = { content: "", score: 0 };
    
    // Fallback answer with general information
    const fallbackAnswer = `Não encontrei uma resposta exata para sua pergunta. O Renda Online Fácil é uma plataforma educacional focada em ensinar como gerar renda em Moçambique através de:
- **Marketing de Afiliados:** Ganhe comissões divulgando produtos.
- **Importação da China:** Compre produtos baratos para revender com lucro.
- **Vendas Online:** Use WhatsApp e Facebook para vender mais.
- **Investimentos Digitais:** Conheça oportunidades seguras.
Você pode perguntar sobre qualquer um desses tópicos!`;

    if (!query) {
        return fallbackAnswer;
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

    if (bestMatch.score > 1) { // Require a minimum score to be considered relevant
        return bestMatch.content;
    }

    return fallbackAnswer;
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
  Se o contexto já for uma resposta completa, use-a diretamente. Se for uma explicação geral, use-a para contextualizar a resposta à pergunta específica.
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
