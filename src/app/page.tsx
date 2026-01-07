'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Share2, Package, Globe, BarChart, Rocket, Eye, Award, Download, Lock, LockOpen, PlayCircle, Sparkles, Send, Phone, MessageCircle, DollarSign, TrendingUp, Smartphone, Bell, ShieldCheck, ShoppingBag } from "lucide-react";
import { TUTORIALS, AFFILIATE_PRODUCTS as DIGITAL_PRODUCTS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { TypingAnimation } from "@/components/typing-animation";


const CATEGORIES = [
  {
    icon: Share2,
    title: "Marketing de Afiliados",
    description: "Ganhe comissões indicando produtos de terceiros. Sem estoque, sem burocracia.",
    link: "/#",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-500",
    phrases: ["Comissões Altas", "Zero Estoque", "Venda no Automático"],
  },
  {
    icon: ShoppingBag,
    title: "Importação da China",
    description: "Aprenda a trazer produtos baratos para revender em Moçambique com alta margem.",
    link: "/#",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-500",
    phrases: ["Lucro de 300%", "Produtos Baratos", "Chega Rápido"],
  },
  {
    icon: Globe,
    title: "Vendas Online",
    description: "Como usar o WhatsApp e Facebook Ads para escalar suas vendas rapidamente.",
    link: "/#",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-500",
    phrases: ["Venda Todo Dia", "WhatsApp Milionário", "Ads que Convertem"],
  },
  {
    icon: TrendingUp,
    title: "Investimentos Digitais",
    description: "Aplicativos que pagam de verdade e plataformas de investimento seguras.",
    link: "/ia-consultant",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-500",
    phrases: ["Renda Passiva", "Apps Confiáveis", "Saque via M-Pesa"],
  },
];


const tagIcons = {
  eye: Eye,
  certificate: Award,
  star: Star
}


export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="mb-12 lg:mb-0 relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6 shadow-sm border border-green-200">🚀 Aprenda com Milvan</span>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 h-32 md:h-auto">Transforme seu tempo em <br className="md:hidden" /><span className="text-green-600 drop-shadow-sm">Sucesso Digital<span className="animate-pulse ml-1 text-green-500">|</span></span></h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">Bem-vindo ao <strong>Renda Online Fácil</strong>. A plataforma completa para você dominar o Marketing de Afiliados, Importação e Vendas Online. O método prático para quem quer resultados.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#tutorials" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 shadow-lg shadow-green-300 transition-all hover:-translate-y-1 active:scale-95">Ver Aulas Premium<ArrowRight className="ml-2 h-5 w-5" /></a>
                        <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 border-2 border-green-600 text-base font-medium rounded-full text-green-700 bg-transparent hover:bg-green-50 transition-colors">Fale Comigo</a>
                    </div>
                </div>
                <div className="relative flex justify-center items-center h-[400px] w-full">
                    <div className="absolute inset-0 bg-green-400 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                    <div className="relative z-20 bg-white p-6 rounded-[2.5rem] shadow-2xl border-8 border-gray-100 w-64 md:w-72 animate-float">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-100 rounded-b-xl"></div>
                        <div className="flex justify-between items-center mb-6 mt-4">
                            <div className="h-2 w-8 bg-gray-200 rounded-full"></div>
                            <div className="h-2 w-4 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white shadow-lg mb-6 transform transition-transform hover:scale-105 cursor-default">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs opacity-80">Saldo Disponível</span>
                                <DollarSign className="h-4 w-4 opacity-80" />
                            </div>
                            <div className="text-2xl font-bold">50.000 MT</div>
                            <div className="mt-2 text-xs bg-white/20 inline-block px-2 py-0.5 rounded flex items-center w-fit">
                                <TrendingUp className="h-3 w-3 mr-1" /> +12% hoje
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100 shadow-sm animate-pulse">
                                <div className="bg-green-100 p-2 rounded-full mr-3">
                                    <DollarSign className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-800">Venda Realizada</div>
                                    <div className="text-[10px] text-gray-500">Há 2 minutos</div>
                                </div>
                                <div className="ml-auto text-xs font-bold text-green-600">+850 MT</div>
                            </div>
                            <div className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100 shadow-sm opacity-70">
                                <div className="bg-blue-100 p-2 rounded-full mr-3">
                                    <Smartphone className="h-4 w-4 text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-800">Novo Afiliado</div>
                                    <div className="text-[10px] text-gray-500">Há 15 minutos</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 bg-gray-900 text-white py-3 rounded-xl text-center text-sm font-bold shadow-lg">Sacar Agora</div>
                    </div>
                    <div className="absolute top-0 right-0 md:right-10 bg-white p-3 rounded-2xl shadow-xl border border-green-50 animate-float-delayed z-30">
                        <div className="flex items-center gap-2">
                            <div className="bg-red-100 p-1.5 rounded-full relative">
                                <Bell className="h-5 w-5 text-red-500" />
                                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-800">Pagamento</p>
                                <p className="text-[10px] text-gray-500">M-Pesa Recebido</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-0 md:left-10 bg-white p-3 rounded-2xl shadow-xl border border-blue-50 animate-float-slow z-30">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-100 p-1.5 rounded-full">
                                <ShieldCheck className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-800">100% Seguro</p>
                                <p className="text-[10px] text-gray-500">Método Comprovado</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-10 left-10 h-16 w-16 bg-yellow-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 h-24 w-24 bg-green-500 rounded-full blur-2xl opacity-20"></div>
                </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((category, index) => (
              <div key={index} className={cn("p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full", category.bgColor)}>
                <div className="mb-4 bg-white p-3 inline-block rounded-lg shadow-sm">
                  <category.icon className={cn("h-10 w-10", category.iconColor)} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{category.description}</p>
                <div className="text-xs font-bold text-gray-500 mt-auto pt-4 border-t border-gray-200/50">
                  <span className="text-green-600">★ </span>
                  <TypingAnimation phrases={category.phrases} typingSpeed={80} delay={1800} className="italic" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Affiliate CTA */}
       <section className="py-16">
        <div className="container mx-auto px-4 text-center">
            <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Torne-se um Afiliado de Sucesso</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">Nós fornecemos os links, os criativos e as estratégias. Você só precisa divulgar e ganhar.</p>
                <a href="#contact" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">Quero Meus Links de Afiliado</a>
            </div>
        </div>
      </section>


      {/* Digital Products Section */}
       <section id="products" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Produtos Digitais</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">eBooks e Cursos selecionados para acelerar seus resultados.</p>
            <div className="h-1 w-24 mx-auto mt-6 rounded-full bg-green-600"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <Image alt="Guia Definitivo do Marketing Digital" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://picsum.photos/seed/book1/600/400" width={600} height={400} />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm uppercase tracking-wider z-10">ebook</div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-green-50 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <Eye className="h-4 w-4" />Espiar
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 pointer-events-none">
                  <div className="text-white text-xs font-bold flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></span>
                    <span className="text-shadow">Mais Vendido<span className="animate-pulse ml-1 text-green-500">|</span></span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2" title="Guia Definitivo do Marketing Digital">Guia Definitivo do Marketing Digital</h3>
                <p className="text-gray-600 text-sm mb-4 h-10 line-clamp-2">Aprenda do zero como montar sua estrutura de vendas online. Estratégias de tráfego pago e orgânico.</p>
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                  <span className="text-xs text-gray-400 ml-2">(4.9)</span>
                </div>
                <div className="flex items-center justify-between mt-auto gap-3">
                  <span className="text-2xl font-bold text-green-700">250 MT</span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors md:hidden" aria-label="Ver detalhes">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
                      <Download className="h-4 w-4" />Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <Image alt="Mestre da Importação China-Moçambique" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://picsum.photos/seed/course1/600/400" width={600} height={400} />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm uppercase tracking-wider z-10">course</div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-green-50 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <Eye className="h-4 w-4" />Espiar
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 pointer-events-none">
                  <div className="text-white text-xs font-bold flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></span>
                    <span className="text-shadow">Certificado Incluso<span className="animate-pulse ml-1 text-green-500">|</span></span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2" title="Mestre da Importação China-Moçambique">Mestre da Importação China-Moçambique</h3>
                <p className="text-gray-600 text-sm mb-4 h-10 line-clamp-2">Lista de fornecedores confiáveis, logística e métodos de envio seguros para maximizar seus lucros.</p>
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                  <span className="text-xs text-gray-400 ml-2">(4.9)</span>
                </div>
                <div className="flex items-center justify-between mt-auto gap-3">
                  <span className="text-2xl font-bold text-green-700">500 MT</span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors md:hidden" aria-label="Ver detalhes">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
                      <Download className="h-4 w-4" />Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <Image alt="Copywriting para WhatsApp" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://picsum.photos/seed/book2/600/400" width={600} height={400}/>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm uppercase tracking-wider z-10">ebook</div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-green-50 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <Eye className="h-4 w-4" />Espiar
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 pointer-events-none">
                  <div className="text-white text-xs font-bold flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></span>
                    <span className="text-shadow">Scripts Prontos<span className="animate-pulse ml-1 text-green-500">|</span></span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2" title="Copywriting para WhatsApp">Copywriting para WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-4 h-10 line-clamp-2">Textos que vendem: scripts prontos para fechar vendas no x1. Gatilhos mentais e quebra de objeções.</p>
                <div className="flex items-center mb-6">
                   {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                  <span className="text-xs text-gray-400 ml-2">(4.9)</span>
                </div>
                <div className="flex items-center justify-between mt-auto gap-3">
                  <span className="text-2xl font-bold text-green-700">150 MT</span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors md:hidden" aria-label="Ver detalhes">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
                      <Download className="h-4 w-4" />Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Conteúdos e Tutoriais</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">Acesse nossa biblioteca de conhecimento. Vídeos exclusivos para mudar sua vida financeira.</p>
            <div className="h-1 w-24 mx-auto mt-6 rounded-full bg-green-400"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TUTORIALS.slice(0, 4).map((tutorial) => (
              <div key={tutorial.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 group relative">
                <div className="relative">
                  <Image 
                    alt={tutorial.title} 
                    className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    src={tutorial.imageUrl}
                    width={400}
                    height={250}
                    data-ai-hint={tutorial.imageHint}
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs">{tutorial.duration}</div>
                  {tutorial.locked && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                      <Lock className="h-12 w-12 text-yellow-500" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 line-clamp-2 h-14 text-white">{tutorial.title}</h4>
                  <div className="flex justify-between items-center mt-4">
                    {tutorial.locked ? (
                       <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors hover:scale-105 transform">
                        <Lock className="h-4 w-4" />
                        Desbloquear ({tutorial.price?.toFixed(2)} MT)
                      </Button>
                    ) : (
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors">
                        <LockOpen className="h-4 w-4" />
                        Assistir Agora
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA Consultant Section */}
      <section id="ai-tips" className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
            <Sparkles className="h-6 w-6 text-yellow-300 mr-2" />
            <span className="font-semibold text-yellow-300">Consultor IA - Renda Extra</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Tem dúvida sobre como começar?</h2>
          <p className="text-gray-300 mb-8">
            Pergunte à nossa Inteligência Artificial. Digite um tema (ex: "como vender no Instagram", "investir em ações", "criar um negócio de importação" ou "marketing de afiliados").
          </p>
          <div className="max-w-lg mx-auto">
             <Link href="/ia-consultant">
                <Button variant="secondary" size="lg" className="w-full bg-white/90 text-indigo-700 hover:bg-white">
                    Fazer uma pergunta
                    <Send className="ml-2 h-5 w-5" />
                </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Fale Comigo</h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-600">Tem dúvidas? Quer entrar no grupo VIP? Entre em contato agora mesmo.</p>
              <div className="h-1 w-24 mx-auto mt-6 rounded-full bg-green-600"></div>
          </div>
          <div className="bg-green-50 rounded-3xl p-8 lg:p-12 shadow-sm border border-green-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-left space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900">Suporte Direto</h3>
                      <p className="text-gray-600">Meu nome é <strong>Milvan</strong>. Estou disponível para ajudar você a configurar sua conta, importar seus primeiros produtos ou desbloquear o conteúdo premium.</p>
                      <div className="flex items-center space-x-3 text-gray-700">
                          <div className="bg-white p-2 rounded-full shadow-sm">
                              <Phone className="h-5 w-5 text-green-600" />
                          </div>
                          <span className="font-mono text-lg font-semibold">857658841</span>
                      </div>
                  </div>
                  <div className="flex flex-col gap-4">
                      <a href="https://wa.me/258857658841?text=Olá Milvan, gostaria de saber mais sobre o Renda Online Fácil." target="_blank" rel="noreferrer" className="group relative flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 active:scale-95 overflow-hidden">
                          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <MessageCircle className="h-6 w-6 group-hover:-rotate-12 transition-transform duration-300" />
                          <span className="font-bold text-lg relative z-10">Chamar no WhatsApp</span>
                          <DollarSign className="h-5 w-5 text-yellow-300 absolute right-4 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 animate-bounce" />
                      </a>
                      <p className="text-xs text-gray-500 mt-2">Atendimento de Segunda a Sexta, das 8h às 18h.</p>
                  </div>
              </div>
          </div>
        </div>
      </section>

    </div>
  );
}
