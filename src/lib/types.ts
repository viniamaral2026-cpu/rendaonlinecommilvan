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

export type DashboardStats = {
  totalSales: {
    value: number;
    change: number;
  };
  totalRevenue: {
    value: number;
    change: number;
  };
  averageTicket: {
    value: number;
    change: number;
  };
  conversionRate: {
    value: number;
    change: number;
  };
};

export type SalesData = {
  name: string;
  total: number;
};
