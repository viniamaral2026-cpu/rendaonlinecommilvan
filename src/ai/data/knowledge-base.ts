/**
 * @fileOverview Base de conhecimento para o IA Consultant.
 * Este arquivo contém os dados "de treinamento" para a IA.
 */

type KnowledgeItem = {
    question: string;
    answer: string;
    keywords: string[];
};

export const KNOWLEDGE_BASE: KnowledgeItem[] = [
    {
        question: "O que é o Renda Online Fácil?",
        answer: "O Renda Online Fácil é uma plataforma educacional completa criada pelo Milvan. Nosso foco é ensinar de forma prática e direta como gerar renda online em Moçambique, através de Marketing de Afiliados, Importação da China, Vendas Online e Investimentos Digitais seguros.",
        keywords: ["o que é", "renda online fácil", "plataforma", "milvan"],
    },
    {
        question: "Como funciona o marketing de afiliados?",
        answer: "Marketing de Afiliados é um modelo de negócio onde você divulga produtos (físicos ou digitais) de outras pessoas ou empresas. Quando alguém compra através do seu link exclusivo, você ganha uma comissão. É ótimo porque você não precisa criar um produto, nem ter estoque.",
        keywords: ["marketing de afiliados", "afiliados", "comissão", "link"],
    },
    {
        question: "É seguro importar da China?",
        answer: "Sim, é seguro se você seguir o método certo! No Renda Online Fácil, ensinamos a encontrar fornecedores confiáveis, os melhores métodos de pagamento e como lidar com a logística e alfândega em Moçambique para que seus produtos cheguem sem problemas e com bom lucro.",
        keywords: ["importar", "importação", "china", "seguro", "fornecedores"],
    },
    {
        question: "Como posso vender usando o WhatsApp?",
        answer: "O WhatsApp é uma ferramenta poderosa para vendas! Nós ensinamos estratégias de 'copywriting' (textos que vendem), como criar um catálogo, usar o status para gerar desejo e fechar vendas no 'x1' (conversa privada). Combinado com anúncios no Facebook, o potencial é enorme.",
        keywords: ["vender", "vendas", "whatsapp", "facebook ads", "anúncios"],
    },
    {
        question: "Quais investimentos digitais vocês recomendam?",
        answer: "Focamos em oportunidades seguras e testadas. Isso inclui aplicativos que oferecem renda passiva e plataformas de investimento com boa reputação. O mais importante é começar com pouco e entender os riscos. Na nossa plataforma, damos o caminho das pedras.",
        keywords: ["investimentos digitais", "investir", "aplicativos", "plataformas", "seguros"],
    },
    {
        question: "Quem é Milvan?",
        answer: "Milvan é o criador e especialista do Renda Online Fácil. Ele é um empreendedor digital com experiência prática em todas as áreas ensinadas na plataforma e está aqui para guiar você em sua jornada para gerar renda online.",
        keywords: ["quem é milvan", "milvan", "criador", "especialista"],
    },
     {
        question: "Preciso pagar para começar?",
        answer: "Você pode começar com nosso conteúdo gratuito! Temos tutoriais e dicas que já vão te ajudar a dar os primeiros passos. Para um conhecimento mais aprofundado, estratégias secretas e listas de fornecedores, temos os produtos premium (eBooks e cursos) que são pagos.",
        keywords: ["pagar", "grátis", "custo", "preço", "começar"],
    },
];
