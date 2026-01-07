import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {currentYear} Renda Online Fácil - Humorista Milvan. Todos os direitos reservados.</p>
            <p>Desenvolvido por Tech Ops (Dresbach Hosting do Brasil Ltda)</p>
          </div>
          <div className="flex items-center">
            <Link href="/" passHref>
              <div className="relative h-12 w-48 cursor-pointer">
                <Image 
                  src="/LOGO_DRESBACH_500-removebg-preview.png" 
                  alt="Logo Dresbach Hosting"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
