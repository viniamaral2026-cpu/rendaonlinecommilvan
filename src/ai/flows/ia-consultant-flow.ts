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
    
    const fallbackAnswer = `Não encontrei uma resposta exata para sua pergunta. O Renda Online Fácil é uma plataforma educacional focada em ensinar como gerar renda em Moçambique através de:
- **Marketing de Afiliados:** Ganhe comissões divulgando produtos.
- **Importação da China:** Compre produtos baratos para revender com lucro.
- **Vendas Online:** Use WhatsApp e Facebook para vender mais.
- **Investimentos Digitais:** Conheça oportunidades seguras.
Você pode perguntar sobre qualquer um desses tópicos!`;

    if (!queryLower) {
        const greeting = KNOWLEDGE_BASE.find(item => item.keywords.includes("oi"));
        return greeting ? greeting.answer : fallbackAnswer;
    }
    
    KNOWLEDGE_BASE.forEach(item => {
        const keywords = item.keywords.map(k => k.toLowerCase());
        let currentScore = 0;

        // Score based on keyword matches
        keywords.forEach(keyword => {
            if (queryLower.includes(keyword)) {
                // More points for longer keyword matches
                currentScore += keyword.length;
            }
        });
        
        // Higher score for more specific matches
        const queryWords = new Set(queryLower.split(/\s+/));
        const matchingKeywords = keywords.filter(kw => {
            const kwWords = kw.split(/\s+/);
            return kwWords.every(word => queryWords.has(word));
        });
        currentScore += matchingKeywords.length * 5; // Give a significant boost for exact keyword phrase matches


        if (currentScore > bestMatch.score) {
            bestMatch = { content: item.answer, score: currentScore };
        }
    });

    // A low score might mean a very weak match, so we fallback.
    // Adjust this threshold as needed.
    if (bestMatch.score > 2) { 
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
