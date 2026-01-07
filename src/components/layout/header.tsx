"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, DollarSign } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
    { href: "/#", label: "Início" },
    { href: "/#affiliates", label: "Afiliados" },
    { href: "/#products", label: "Produtos" },
    { href: "/#tutorials", label: "Dicas Premium" },
    { href: "/investimentos", label: "IA Consultant" },
    { href: "/#contact", label: "Contato" },
];

const Logo = () => (
  <Link href="/" className="group flex items-center space-x-2">
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 bg-green-500/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
      <div className="bg-primary/10 p-2 rounded-full z-10">
        <DollarSign className="text-primary w-5 h-5 transition-transform duration-500 group-hover:rotate-[360deg]"/>
      </div>
    </div>
    <span className="font-bold text-lg text-foreground">Renda Online Fácil</span>
  </Link>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4">
        <div className="flex items-center">
            <Logo />
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center justify-end">
           <Button asChild>
            <Link href="#products">Começar Agora</Link>
           </Button>
        </div>
        <div className="md:hidden flex items-center">
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
                 <Button asChild className="mt-4">
                    <Link href="#products">Começar Agora</Link>
                 </Button>
                </div>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}

    