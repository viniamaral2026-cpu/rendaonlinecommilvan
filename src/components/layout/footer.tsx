import Link from "next/link";
import { Heart } from "lucide-react";

const QUICK_LINKS = [
  { href: "/", label: "Início" },
  { href: "/#affiliates", label: "Afiliados" },
  { href: "/#products", label: "Produtos" },
  { href: "/#tutorials", label: "Tutoriais" },
];

const LEGAL_LINKS = [
  { href: "#", label: "Termos de Uso" },
  { href: "#", label: "Política de Privacidade" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg text-white mb-4">Renda Online Fácil</h3>
            <p className="text-sm max-w-md">
              Sua plataforma definitiva para aprender sobre marketing digital e importação em Moçambique.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} Renda Online Fácil - Humorista Milvan. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Desenvolvido
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            por
            <Link href="#" className="font-semibold text-white hover:underline">
              Suprema Sites Express
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

    