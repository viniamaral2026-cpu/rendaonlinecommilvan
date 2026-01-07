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
  category: string;
  imageUrl: string;
  imageHint: string;
  duration: string;
  locked: boolean;
  price?: number;
};

export type RecentSale = {
  id: string;
  name: string;
  email: string;
  amount: number;
  avatarUrl: string;
  avatarHint: string;
};
