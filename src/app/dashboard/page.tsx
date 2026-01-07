"use client";
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";

import { DASHBOARD_STATS, RECENT_SALES, SALES_DATA } from "@/lib/data";
import type { ReactNode } from "react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const StatCard = ({
  title,
  icon,
  value,
  change,
  description,
}: {
  title: string;
  icon: ReactNode;
  value: string;
  change: number;
  description: string;
}) => {
  const ChangeIcon = change >= 0 ? ArrowUp : ArrowDown;
  const changeColor = change >= 0 ? "text-green-500" : "text-red-500";
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center">
          <span className={`flex items-center ${changeColor}`}>
            <ChangeIcon className="h-4 w-4 mr-1" />
            {change.toFixed(1)}%
          </span>
          &nbsp;{description}
        </p>
      </CardContent>
    </Card>
  );
};

const chartData = SALES_DATA;
const chartConfig = {
  total: {
    label: "Total",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

function SalesChart() {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Visão Geral das Vendas</CardTitle>
        <CardDescription>
          Um resumo das vendas nos últimos 12 meses.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
             <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="total" fill="hsl(var(--chart-1))" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vendas Recentes</CardTitle>
        <CardDescription>
          Você fez {RECENT_SALES.length} vendas este mês.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {RECENT_SALES.map((sale) => (
            <div key={sale.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={sale.avatarUrl} alt="Avatar" data-ai-hint={sale.avatarHint} />
                <AvatarFallback>{sale.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{sale.name}</p>
                <p className="text-sm text-muted-foreground">{sale.email}</p>
              </div>
              <div className="ml-auto font-medium">
                +{formatCurrency(sale.amount)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8 animate-in fade-in-50">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <StatCard
          title="Receita Total"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          value={formatCurrency(DASHBOARD_STATS.totalRevenue.value)}
          change={DASHBOARD_STATS.totalRevenue.change}
          description="do último mês"
        />
        <StatCard
          title="Total de Vendas"
          icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
          value={`+${DASHBOARD_STATS.totalSales.value}`}
          change={DASHBOARD_STATS.totalSales.change}
          description="do último mês"
        />
        <StatCard
          title="Ticket Médio"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          value={formatCurrency(DASHBOARD_STATS.averageTicket.value)}
          change={DASHBOARD_STATS.averageTicket.change}
          description="do último mês"
        />
        <StatCard
          title="Taxa de Conversão"
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
          value={`${DASHBOARD_STATS.conversionRate.value}%`}
          change={DASHBOARD_STATS.conversionRate.change}
          description="do último mês"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <SalesChart />
        <RecentSales />
      </div>
    </div>
  );
}
