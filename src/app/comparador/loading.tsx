import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Comparador de Produtos</h1>
       <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
            <Skeleton className="h-10 w-1/2" />
            <Skeleton className="h-24 w-full" />
        </div>
         <div className="space-y-4">
            <Skeleton className="h-10 w-1/2" />
            <Skeleton className="h-24 w-full" />
        </div>
      </div>
      <Skeleton className="h-10 w-full md:w-1/4" />
    </div>
  );
}
