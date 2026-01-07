/**
 * @fileOverview Base de conhecimento para o IA Consultant.
 * Este arquivo carrega os dados de um JSON.
 */
import knowledgeData from './knowledge-base.json';

type KnowledgeItem = {
    question: string;
    answer: string;
    keywords: string[];
};

export const KNOWLEDGE_BASE: KnowledgeItem[] = knowledgeData.knowledge;
