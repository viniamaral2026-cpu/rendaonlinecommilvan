import type { AffiliateProduct, RecentSale, Tutorial } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id) || { imageUrl: '', imageHint: '' };

export const RECENT_SALES: RecentSale[] = [
  {
    id: '1',
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: 1999.00,
    avatarUrl: getImage('user-avatar-1').imageUrl,
    avatarHint: getImage('user-avatar-1').imageHint,
  },
  {
    id: '2',
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: 39.00,
    avatarUrl: getImage('user-avatar-2').imageUrl,
    avatarHint: getImage('user-avatar-2').imageHint,
  },
  {
    id: '3',
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: 299.00,
    avatarUrl: getImage('user-avatar-3').imageUrl,
    avatarHint: getImage('user-avatar-3').imageHint,
  },
  {
    id: '4',
    name: 'William Kim',
    email: 'will@email.com',
    amount: 99.00,
    avatarUrl: getImage('user-avatar-4').imageUrl,
    avatarHint: getImage('user-avatar-4').imageHint,
  },
  {
    id: '5',
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: 39.00,
    avatarUrl: getImage('user-avatar-5').imageUrl,
    avatarHint: getImage('user-avatar-5').imageHint,
  },
];

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  {
    id: '1',
    name: 'Guia Definitivo do Marketing Digital',
    description: 'Aprenda do zero como montar sua estrutura de vendas online. Estratégias de tráfego pago e...',
    price: 250,
    rating: 4.9,
    reviewCount: '(4.9)',
    type: 'EBOOK',
    imageUrl: "https://picsum.photos/seed/coffee-book/600/400",
    imageHint: "coffee book",
    tags: [
      { text: 'Leitura Obri', icon: 'star' },
      { text: 'Espiar', icon: 'eye' },
    ],
  },
  {
    id: '2',
    name: 'Mestre da Importação China-Moçambique',
    description: 'Lista de fornecedores confiáveis, logística e métodos de envio seguros para maximizar seus lucros.',
    price: 500,
    rating: 4.9,
    reviewCount: '(4.9)',
    type: 'COURSE',
    imageUrl: "https://picsum.photos/seed/vintage-cameras/600/400",
    imageHint: "vintage cameras",
    tags: [
      { text: 'Certificado Inclus', icon: 'certificate' },
    ],
  },
  {
    id: '3',
    name: 'Copywriting para WhatsApp',
    description: 'Textos que vendem: scripts prontos para fechar vendas no x1. Gatilhos mentais e quebra de objeções.',
    price: 150,
    rating: 4.9,
    reviewCount: '(4.9)',
    type: 'EBOOK',
    imageUrl: "https://picsum.photos/seed/shipping-crane/600/400",
    imageHint: "shipping crane",
    tags: [
      { text: 'Essencial', icon: 'star' },
    ],
  },
];


export const TUTORIALS: Tutorial[] = [
  {
    id: '1',
    title: 'Introdução ao Marketing Digital',
    category: 'Marketing Digital',
    imageUrl: getImage('tutorial-video-1').imageUrl,
    imageHint: getImage('tutorial-video-1').imageHint,
  },
  {
    id: '2',
    title: 'Como Vender Online: Guia para Iniciantes',
    category: 'Vendas Online',
    imageUrl: getImage('tutorial-video-2').imageUrl,
    imageHint: getImage('tutorial-video-2').imageHint,
  },
  {
    id: '3',
    title: 'Dominando as Redes Sociais para Negócios',
    category: 'Marketing Digital',
    imageUrl: getImage('tutorial-video-3').imageUrl,
    imageHint: getImage('tutorial-video-3').imageHint,
  },
  {
    id: '4',
    title: 'Criptomoedas: Um Guia de Investimento',
    category: 'Investimentos',
    imageUrl: getImage('tutorial-video-4').imageUrl,
    imageHint: getImage('tutorial-video-4').imageHint,
  },
  {
    id: '5',
    title: 'Funil de Vendas: Convertendo Leads em Clientes',
    category: 'Vendas Online',
    imageUrl: getImage('tutorial-video-5').imageUrl,
    imageHint: getImage('tutorial-video-5').imageHint,
  },
  {
    id: '6',
    title: 'Marketing de Afiliados: Passo a Passo',
    category: 'Marketing Digital',
    imageUrl: getImage('tutorial-video-6').imageUrl,
    imageHint: getImage('tutorial-video-6').imageHint,
  },
];
