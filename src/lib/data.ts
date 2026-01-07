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
    price: 250.00,
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
    price: 500.00,
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
    price: 150.00,
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
    title: 'Como criar conta no M-Pesa para Negócios',
    category: 'Vendas Online',
    imageUrl: 'https://picsum.photos/seed/surfer-sunset/600/400',
    imageHint: 'surfer sunset',
    duration: '10:00',
    locked: false,
  },
  {
    id: '2',
    title: 'Estratégia Secreta de Vendas no WhatsApp',
    category: 'Vendas Online',
    imageUrl: 'https://picsum.photos/seed/park-bench-autumn/600/400',
    imageHint: 'park bench',
    duration: '15:30',
    locked: true,
    price: 150,
  },
  {
    id: '3',
    title: 'Importando da China: Passo a Passo',
    category: 'Importação',
    imageUrl: 'https://picsum.photos/seed/deer-forest/600/400',
    imageHint: 'deer forest',
    duration: '22:15',
    locked: true,
    price: 150,
  },
  {
    id: '4',
    title: 'Criando sua Loja Virtual Grátis',
    category: 'Vendas Online',
    imageUrl: 'https://picsum.photos/seed/city-street-rain/600/400',
    imageHint: 'city street',
    duration: '18:45',
    locked: true,
    price: 150,
  },
];
