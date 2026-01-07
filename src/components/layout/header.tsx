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
  { href: "/", label: "Início" },
  { href: "/#afiliados", label: "Afiliados" },
  { href: "/#produtos", label: "Produtos" },
  { href: "/#dicas", label: "Dicas Premium" },
  { href: "/investimentos", label: "IA Consultant" },
  { href: "/#contato", label: "Contato" },
];

const Logo = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2"
    >
      <circle cx="20" cy="20" r="20" fill="#E9F7EC" />
      <path
        d="M23.6364 25.4545V27.2727H16.3636V25.4545H23.6364ZM20 12.7273C17.7636 12.7273 15.9182 14.5727 15.9182 16.8182H13.6364C13.6364 13.3455 16.4818 10.5 20 10.5C21.7 10.5 23.2364 11.2 24.3182 12.3364L25.4545 11.2L26.7273 12.4727L25.6 13.6C26.5545 14.5545 27.2727 15.8273 27.2727 17.2727C27.2727 20.1909 24.9364 22.5455 22 22.5455V24.5455H18V22.5455H20C21.2455 22.5455 22.3182 21.8273 22.8636 20.8727L23.0909 20.4545C23.5091 19.6636 23.6364 18.7091 23.6364 17.7273C23.6364 16.1455 22.2818 14.5455 20.1818 14.5455H17.2727C16.4818 14.5455 15.9182 15.1091 15.9182 15.9091C15.9182 16.7091 16.4818 17.2727 17.2727 17.2727H20.4545V19.0909H17.2727C15.3455 19.0909 13.6364 17.6545 13.6364 15.9091C13.6364 14.1636 15.3455 12.7273 17.2727 12.7273H20Z"
        fill="#28A745"
      />
    </svg>
  );

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center mx-auto px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
          <span className="font-bold text-lg text-primary">Renda Online Fácil</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center text-foreground/80 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center justify-end space-x-4">
           <Button>Começar Agora</Button>
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
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                    <Logo />
                    <span className="font-bold text-lg text-primary">Renda Online Fácil</span>
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
                 <Button className="mt-4">Começar Agora</Button>
                </div>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
