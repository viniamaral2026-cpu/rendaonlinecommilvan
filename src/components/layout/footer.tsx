import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Coluna Renda Online Fácil */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Renda Online Fácil</h3>
            <p className="text-sm">
              Sua plataforma definitiva para aprender sobre marketing digital e importação em Moçambique.
            </p>
          </div>

          {/* Coluna Links Rápidos */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/#affiliates" className="hover:text-white transition-colors">Afiliados</Link></li>
              <li><Link href="/#products" className="hover:text-white transition-colors">Produtos</Link></li>
              <li><Link href="/#tutorials" className="hover:text-white transition-colors">Tutoriais</Link></li>
            </ul>
          </div>

          {/* Coluna Legal */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>

        {/* Seção de Copyright e Logo */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center text-center text-sm space-y-4">
          <div>
            <p>&copy; {currentYear} Renda Online Fácil - Humorista Milvan. Todos os direitos reservados.</p>
            <p>Desenvolvido por Tech Ops (Dresbach Hosting do Brasil Ltda)</p>
          </div>
          <div className="flex items-center mt-4">
            <Image
              src="/LOGO_DRESBACH_500-removebg-preview.png"
              alt="Logo Dresbach Hosting"
              width={150}
              height={38} 
            />
          </div>
        </div>
      </div>
    </footer>
  );
}