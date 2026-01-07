import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Insights de Investimento Digital</h1>
      <div className="grid gap-8 md:grid-cols-1">
        <div className="space-y-4">
            <Skeleton className="h-10 w-1/4" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-1/4" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-full md:w-1/4" />
        </div>
      </div>
    </div>
  );
}
