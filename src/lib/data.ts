import type { AffiliateProduct, DashboardStats, RecentSale, SalesData, Tutorial } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id) || { imageUrl: '', imageHint: '' };

export const DASHBOARD_STATS: DashboardStats = {
  totalSales: { value: 4523, change: 12.5 },
  totalRevenue: { value: 345231.89, change: 8.2 },
  averageTicket: { value: 76.32, change: -2.1 },
  conversionRate: { value: 2.34, change: 5.7 },
};

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

export const SALES_DATA: SalesData[] = [
  { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Aug', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Sep', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Oct', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Nov', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Dec', total: Math.floor(Math.random() * 5000) + 1000 },
];

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  {
    id: '1',
    name: 'Smartphone Pro X',
    vendor: 'TechGiant',
    commission: 15,
    imageUrl: getImage('affiliate-product-1').imageUrl,
    imageHint: getImage('affiliate-product-1').imageHint,
  },
  {
    id: '2',
    name: 'Laptop UltraSlim',
    vendor: 'InnovatePC',
    commission: 12,
    imageUrl: getImage('affiliate-product-2').imageUrl,
    imageHint: getImage('affiliate-product-2').imageHint,
  },
  {
    id: '3',
    name: 'Headphones SoundMax',
    vendor: 'AudioPhile',
    commission: 20,
    imageUrl: getImage('affiliate-product-3').imageUrl,
    imageHint: getImage('affiliate-product-3').imageHint,
  },
  {
    id: '4',
    name: 'Câmera 4K Vision',
    vendor: 'PhotoPro',
    commission: 18,
    imageUrl: getImage('affiliate-product-4').imageUrl,
    imageHint: getImage('affiliate-product-4').imageHint,
  },
  {
    id: '5',
    name: 'Smartwatch Connect',
    vendor: 'Wearables Inc.',
    commission: 22,
    imageUrl: getImage('affiliate-product-5').imageUrl,
    imageHint: getImage('affiliate-product-5').imageHint,
  },
  {
    id: '6',
    name: 'Cadeira Ergonômica',
    vendor: 'ComfortZone',
    commission: 10,
    imageUrl: getImage('affiliate-product-6').imageUrl,
    imageHint: getImage('affiliate-product-6').imageHint,
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
