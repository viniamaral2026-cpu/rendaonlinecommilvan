export type AffiliateProduct = {
  id: string;
  name: string;
  vendor: string;
  commission: number;
  imageUrl: string;
  imageHint: string;
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
