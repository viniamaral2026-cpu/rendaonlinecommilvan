"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
    { href: "/#", label: "Início" },
    { href: "/#afiliados", label: "Afiliados" },
    { href: "/#produtos", label: "Produtos" },
    { href: "/#dicas", label: "Dicas Premium" },
    { href: "/investimentos", label: "IA Consultant" },
    { href: "/#contato", label: "Contato" },
];

const Logo = () => (
  <Link href="/" className="group flex items-center space-x-2">
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 bg-green-500/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
      <div className="bg-primary/10 p-2 rounded-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-5 h-5 transition-transform duration-500 group-hover:rotate-[360deg]"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
      </div>
    </div>
    <span className="font-bold text-lg text-foreground">Renda Online Fácil</span>
  </Link>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center mx-auto px-4">
        <div className="flex-1 flex justify-start">
            <Logo />
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center text-gray-700 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-green-600 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center justify-end space-x-4 flex-1">
           <Button asChild className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-semibold shadow-lg hover:shadow-green-500/50 transform hover:scale-105">
            <Link href="#produtos">Começar Agora</Link>
           </Button>
        </div>
        <div className="md:hidden flex flex-1 justify-end">
            <Sheet>
            <SheetTrigger asChild>
                <Button
                variant="ghost"
                size="icon"
                >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="mb-6">
                  <Logo />
                </div>
                <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                    <Link
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                    {link.label}
                    </Link>
                ))}
                 <Button asChild className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-semibold shadow-lg hover:shadow-green-500/50 transform hover:scale-105">
                    <Link href="#produtos">Começar Agora</Link>
                 </Button>
                </div>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
