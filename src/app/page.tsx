'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Share2, Package, Globe, BarChart, Rocket, Eye, Award, Download, Lock, PlayCircle, Sparkles, Send, Phone, MessageCircle } from "lucide-react";
import { TUTORIALS, AFFILIATE_PRODUCTS as DIGITAL_PRODUCTS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

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
             <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6 shadow-sm border border-green-200">🚀 Aprenda com Milvan</span>
             <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 h-32 md:h-auto">Transforme seu tempo em <br className="md:hidden" /><span className="text-green-600 drop-shadow-sm"><span className="">Sucesso Dig<span className="animate-pulse ml-1 text-green-500">|</span></span></span></h1>
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
               <Card key={category.title} className={cn("text-left hover:shadow-lg transition-shadow border-0", category.bgColor)}>
               <CardHeader>
                  <div className={cn("rounded-lg w-fit p-2.5 flex items-center justify-start bg-white dark:bg-gray-950 mb-4")}>
                   <category.icon className={cn("w-6 h-6", category.iconColor)} />
                 </div>
                 <CardTitle>{category.title}</CardTitle>
               </CardHeader>
               <CardContent className="pt-0 pb-4">
                 <p className="text-muted-foreground text-sm">{category.description}</p>
               </CardContent>
               <CardFooter>
                  <div className={cn("flex items-center text-xs font-semibold", category.iconColor)}>
                     <Star className="w-4 h-4 mr-1.5 fill-current" />
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
          <Card className="max-w-3xl mx-auto p-8 bg-muted/50 border-0">
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
                   <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {product.type}
                  </Badge>
                </div>
                <CardHeader className="p-6 pb-2">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  <CardDescription className="text-sm line-clamp-2">{product.description}</CardDescription>
                  <div className="flex items-center mt-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">{product.reviewCount} reviews</span>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 mt-auto bg-slate-50 dark:bg-slate-800/50">
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                       <span className="text-2xl font-bold text-destructive">{product.price.toFixed(2)} MT</span>
                      <Button>
                        <Download className="w-4 h-4 mr-2" />
                        Comprar Agora
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
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-colors">
                    <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform" />
                    {tutorial.locked && <div className="absolute top-2 right-2 p-1.5 bg-yellow-500/80 rounded-full"><Lock className="w-4 h-4 text-gray-900" /></div>}
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
                        Desbloquear ({tutorial.price?.toFixed(2)} MT)
                      </Button>
                    ) : (
                      <Button variant="secondary" className="w-full">
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

      {/* IA Consultant Section */}
      <section className="py-20 lg:py-24 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-purple-800/80 text-yellow-400 border-purple-700 mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
            Consultor IA - Renda Extra
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tem dúvida sobre como começar?</h2>
          <p className="text-purple-200 max-w-2xl mx-auto mb-8">
            Pergunte à nossa Inteligência Artificial. Digite um tema (ex: "como vender no Instagram", "investir em ações", "criar um negócio de importação" ou "marketing de afiliados").
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Ex: Como vender mais no Instagram?"
                className="w-full rounded-full p-6 text-base bg-white/10 border-purple-700 focus:ring-yellow-400 placeholder:text-purple-300"
              />
              <Button type="submit" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-gray-200 hover:bg-white">
                <Send className="w-5 h-5 text-purple-800" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Fale Comigo</h2>
            <p className="text-muted-foreground mt-2">
              Tem dúvidas? Quer entrar no grupo VIP? Entre em contato agora mesmo.
            </p>
            <div className="inline-block w-20 h-1 bg-primary mt-4 rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto bg-green-50 dark:bg-green-900/20 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Suporte Direto</h3>
                <p className="text-muted-foreground">
                  Meu nome é <span className="font-bold">Milvan</span>. Estou disponível para ajudar você a configurar sua conta, importar seus primeiros produtos ou desbloquear o conteúdo premium.
                </p>
                <div className="flex items-center gap-3 text-muted-foreground font-semibold">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>857658841</span>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="w-full md:w-auto bg-[#25D366] hover:bg-[#20b857] text-white">
                   <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground mt-2">Atendimento de Segunda a Sexta, das 8h às 18h.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
