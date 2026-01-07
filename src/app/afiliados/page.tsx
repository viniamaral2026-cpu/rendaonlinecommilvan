import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AFFILIATE_PRODUCTS } from "@/lib/data";

export default function AfiliadosPage() {
  return (
    <div className="space-y-6 animate-in fade-in-50">
      <h1 className="text-3xl font-bold tracking-tight">Marketing de Afiliados</h1>
      <p className="text-muted-foreground">
        Navegue e selecione produtos de afiliados para promover.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {AFFILIATE_PRODUCTS.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg"
                  data-ai-hint={product.imageHint}
                />
              </div>
            </CardHeader>
            <div className="flex flex-col flex-grow p-6">
              <CardTitle className="mb-2">{product.name}</CardTitle>
              <CardDescription>{product.vendor}</CardDescription>
              <div className="flex-grow" />
              <div className="mt-4">
                <Badge variant="secondary">Comissão: {product.commission}%</Badge>
              </div>
            </div>
            <CardFooter>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Promover Produto
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
