import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TUTORIALS } from "@/lib/data";
import { PlayCircle } from "lucide-react";

export default function TutoriaisPage() {
  return (
    <div className="space-y-6 animate-in fade-in-50">
      <h1 className="text-3xl font-bold tracking-tight">Tutoriais e Guias</h1>
      <p className="text-muted-foreground">
        Aprenda com nossa biblioteca de vídeos e guias para gerar renda online.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TUTORIALS.map((tutorial) => (
          <Card
            key={tutorial.id}
            className="group overflow-hidden cursor-pointer"
          >
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={tutorial.imageUrl}
                  alt={tutorial.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  data-ai-hint={tutorial.imageHint}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="h-12 w-12 text-white/80 transform transition-transform group-hover:scale-110" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <Badge
                variant={
                  tutorial.category === "Marketing Digital"
                    ? "default"
                    : tutorial.category === "Vendas Online"
                    ? "secondary"
                    : "outline"
                }
                className="mb-2"
              >
                {tutorial.category}
              </Badge>
              <h3 className="font-semibold">{tutorial.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
