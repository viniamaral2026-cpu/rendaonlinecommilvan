'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Share2, Package, Globe, BarChart, Rocket, Eye, Award, Download, Dot, Lock, PlayCircle } from "lucide-react";
import { TUTORIALS, AFFILIATE_PRODUCTS as DIGITAL_PRODUCTS } from "@/lib/data";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    icon: Share2,
    title: "Marketing de Afiliados",
    description: "Ganhe comissões indicando produtos de terceiros. Sem estoque, sem burocracia.",
    link: "/#",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-500",
    footerText: "Comissões Altas",
  },
  {
    icon: Package,
    title: "Importação da China",
    description: "Aprenda a trazer produtos baratos para revender em Moçambique com alta margem.",
    link: "/#",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-500",
    footerText: "Margens de Lucro",
  },
  {
    icon: Globe,
    title: "Vendas Online",
    description: "Como usar o WhatsApp e Facebook Ads para escalar suas vendas rapidamente.",
    link: "/#",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-500",
    footerText: "Alta Conversão",
  },
  {
    icon: BarChart,
    title: "Investimentos Digitais",
    description: "Aplicativos que pagam de verdade e plataformas de investimento seguras.",
    link: "/investimentos",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-500",
    footerText: "Apps Confiáveis",
  },
];


const tagIcons = {
  eye: Eye,
  certificate: Award,
  star: Star
}


export default function HomePage() {
  return (
    <div className="animate-in fade-in-50">
      {/* Hero Section */}
      <section className="bg-muted/50 py-20 lg:py-32">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary font-medium">
              <Rocket className="w-4 h-4 mr-2" />
              Aprenda com Milvan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Transforme seu tempo em <span className="text-primary">Renda Extra</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Bem-vindo ao Renda Online Fácil. A plataforma completa para você dominar o Marketing de Afiliados, Importação e Vendas Online. O método prático para quem quer resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/#">Ver Aulas Premium <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button size="lg" variant="outline">
                Fale Comigo
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="https://picsum.photos/seed/mobile-app-screenshot/600/500"
              alt="App Screenshot"
              width={600}
              height={500}
              className="rounded-xl shadow-2xl"
              data-ai-hint="mobile app interface finance"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ganhe Dinheiro Online</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra as principais formas de renda extra que ensinamos em nossa plataforma.
          </p>
          <div className="inline-block w-20 h-1 bg-primary mt-2 mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((category) => (
              <Card key={category.title} className={cn("text-left hover:shadow-lg transition-shadow border-none", category.bgColor)}>
                <CardHeader>
                   <div className="rounded-lg w-fit p-3 flex items-center justify-start bg-background/60 mb-4">
                    <category.icon className={cn("w-6 h-6", category.iconColor)} />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
                <CardFooter>
                   <div className="flex items-center text-sm font-semibold text-primary">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      <span>{category.footerText}</span>
                   </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Affiliate CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-3xl mx-auto p-8 bg-muted/50">
             <h2 className="text-3xl font-bold mb-4">Torne-se um Afiliado de Sucesso</h2>
             <p className="text-muted-foreground mb-8">
               Nós fornecemos os links, os criativos e as estratégias. Você só precisa divulgar e ganhar.
             </p>
             <Button size="lg">Quero Meus Links de Afiliado</Button>
          </Card>
        </div>
      </section>


      {/* Digital Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Produtos Digitais</h2>
            <p className="text-muted-foreground mt-2">eBooks e Cursos selecionados para acelerar seus resultados.</p>
             <div className="inline-block w-20 h-1 bg-primary mt-4 rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIGITAL_PRODUCTS.map((product) => (
              <Card key={product.id} className="overflow-hidden group flex flex-col">
                <div className="relative">
                  <Image src={product.imageUrl} alt={product.name} width={600} height={400} className="object-cover w-full h-48 group-hover:scale-105 transition-transform" data-ai-hint={product.imageHint} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800 hover:bg-white">
                    {product.type}
                  </Badge>
                  <div className="absolute bottom-2 left-4 flex flex-col gap-2">
                    {product.tags.map((tag) => {
                      const TagIcon = tag.icon ? tagIcons[tag.icon] : null;
                      const isSpyButton = tag.text === "Espiar";
                      return (
                        <div key={tag.text} className={cn("flex items-center", {
                          "bg-white/90 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold hover:bg-white cursor-pointer": isSpyButton,
                          "text-white text-xs font-medium": !isSpyButton
                        })}>
                          {!isSpyButton && <Dot className="text-red-500 w-6 h-6 -ml-2" />}
                          {TagIcon && isSpyButton && <TagIcon className="w-4 h-4 mr-2" />}
                          <span>{tag.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="mt-2 mb-2 text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">{product.description}</CardDescription>
                </CardContent>
                <CardFooter className="px-6 pb-6 mt-auto">
                  <div className="w-full">
                    <div className="flex items-center mt-4 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">{product.reviewCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-2xl font-bold text-destructive">{product.price} MT</span>
                      <Button variant="secondary" className="bg-gray-800 text-white hover:bg-gray-900">
                        <Download className="w-4 h-4 mr-2" />
                        Comprar
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Conteúdos e Tutoriais</h2>
            <p className="text-gray-400 mt-2">Acesse nossa biblioteca de conhecimento. Vídeos exclusivos para mudar sua vida financeira.</p>
            <div className="inline-block w-20 h-1 bg-primary mt-4 rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TUTORIALS.slice(0, 4).map((tutorial) => (
              <Card key={tutorial.id} className="bg-gray-800 border-gray-700 text-white overflow-hidden group flex flex-col">
                 <CardHeader className="p-0 relative">
                  <Image src={tutorial.imageUrl} alt={tutorial.title} width={600} height={400} className="object-cover w-full h-40 group-hover:scale-105 transition-transform" data-ai-hint={tutorial.imageHint} />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    {tutorial.locked && <Lock className="w-10 h-10 text-yellow-400" />}
                    <span className="bg-black/50 text-white text-xs px-2 py-1 rounded absolute bottom-2 right-2">{tutorial.duration}</span>
                  </div>
                 </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <h3 className="font-semibold mb-2 line-clamp-2 h-12">{tutorial.title}</h3>
                </CardContent>
                 <CardFooter className="p-4 mt-auto">
                    {tutorial.locked ? (
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold">
                        <Lock className="w-4 h-4 mr-2"/>
                        Desbloquear ({tutorial.price} MT)
                      </Button>
                    ) : (
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <PlayCircle className="w-4 h-4 mr-2"/>
                        Assistir Agora
                      </Button>
                    )}
                 </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
