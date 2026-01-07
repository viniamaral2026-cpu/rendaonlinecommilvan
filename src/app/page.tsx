import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ArrowRight, Share2, Package, ShoppingBag, BarChart } from "lucide-react";
import { TUTORIALS, AFFILIATE_PRODUCTS as DIGITAL_PRODUCTS } from "@/lib/data";

const CATEGORIES = [
  {
    icon: Share2,
    title: "Marketing de Afiliados",
    description: "Ganhe comissões indicando produtos de terceiros. Sem estoque, sem burocracia.",
    link: "/#",
  },
  {
    icon: Package,
    title: "Importação da China",
    description: "Aprenda a buscar produtos inovadores e com margens de lucro surpreendentes.",
    link: "/#",
  },
  {
    icon: ShoppingBag,
    title: "Vendas Online",
    description: "Crie sua loja ou WhatsApp/Facebook para vender para todo o país, 24h por dia.",
    link: "/#",
  },
  {
    icon: BarChart,
    title: "Investimentos Digitais",
    description: "Explore o mundo das criptomoedas, ações e outras formas de fazer seu dinheiro render.",
    link: "/investimentos",
  },
];


export default function HomePage() {
  return (
    <div className="animate-in fade-in-50">
      {/* Hero Section */}
      <section className="bg-[#F8F9FA] py-20 lg:py-32">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="bg-white border-primary text-primary">Aprenda com Liber</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Transforme seu tempo em <span className="text-primary">Renda</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Bem-vindo ao Renda Online Fácil! A plataforma completa para você dominar o Marketing de Afiliados, Importação e Vendas Online. O método prático para quem quer resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/#">Ver todos os Produtos <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button size="lg" variant="secondary">
                Fale Comigo
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="https://picsum.photos/seed/mobile-app/600/500"
              alt="App Screenshot"
              width={600}
              height={500}
              className="rounded-xl shadow-2xl"
              data-ai-hint="mobile app interface"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ganhe Dinheiro Online</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Descubra as principais formas de renda extra que ensinamos em nossa plataforma.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((category) => (
              <Card key={category.title} className="text-left hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-yellow-400/10 text-yellow-500 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={category.link} className="text-sm font-semibold text-primary hover:underline flex items-center">
                    Ver mais <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Affiliate CTA */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold mb-4">Torne-se um Afiliado de Sucesso</h2>
             <p className="text-muted-foreground mb-8">
               Nós fornecemos os links, os criativos e as estratégias. Você só precisa divulgar e ganhar.
             </p>
             <Button size="lg">Quero Meus Links de Afiliado</Button>
           </div>
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
            {DIGITAL_PRODUCTS.slice(0, 3).map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <CardHeader className="p-0">
                  <Image src={product.imageUrl} alt={product.name} width={600} height={400} className="object-cover w-full h-48 group-hover:scale-105 transition-transform" data-ai-hint={product.imageHint} />
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="secondary">eBook</Badge>
                  <CardTitle className="mt-2 mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{product.vendor}</CardDescription>
                  <div className="flex items-center mt-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">(4.5)</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center bg-muted/50 px-6 py-4">
                  <span className="text-lg font-bold text-destructive">{product.commission * 10} MT</span>
                  <Button>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar
                  </Button>
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
              <Card key={tutorial.id} className="bg-gray-800 border-gray-700 text-white overflow-hidden group">
                 <CardHeader className="p-0 relative">
                  <Image src={tutorial.imageUrl} alt={tutorial.title} width={600} height={400} className="object-cover w-full h-40 group-hover:scale-105 transition-transform" data-ai-hint={tutorial.imageHint} />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-black/50 text-white text-xs px-2 py-1 rounded absolute bottom-2 right-2">10:30</span>
                  </div>
                 </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{tutorial.title}</h3>
                </CardContent>
                 <CardFooter className="p-4">
                    <Button className="w-full">
                      Desbloquear ({Math.floor(Math.random() * 100 + 50)} MT)
                    </Button>
                 </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
