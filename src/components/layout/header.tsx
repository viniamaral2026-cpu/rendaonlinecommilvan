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
  { href: "#", label: "Início" },
  { href: "#", label: "Afiliados" },
  { href: "#", label: "Produtos" },
  { href: "#", label: "Dicas Premium" },
  { href: "#", label: "IA Consultant" },
  { href: "#", label: "Contato" },
];


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto px-4">
        <Link href="#" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">Renda Online Fácil</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <Button>Comece Agora</Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden ml-4"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
             <Link href="#" className="mr-6 flex items-center space-x-2 mb-6">
                <span className="font-bold text-lg">Renda Online Fácil</span>
            </Link>
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
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
