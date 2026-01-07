export type ProductTag = {
  text: string;
  icon?: 'eye' | 'certificate' | 'star';
};

export type AffiliateProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: string;
  type: 'EBOOK' | 'COURSE';
  imageUrl: string;
  imageHint: string;
  tags: ProductTag[];
};

export type Tutorial = {
  id: string;
  title: string;
  category: 'Marketing Digital' | 'Vendas Online' | 'Investimentos';
  imageUrl: string;
  imageHint: string;
};

export type RecentSale = {
  id: string;
  name: string;
  email: string;
  amount: number;
  avatarUrl: string;
  avatarHint: string;
};
