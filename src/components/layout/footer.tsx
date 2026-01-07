import Link from "next/link";

const NAV_LINKS = [
  { href: "#", label: "Início" },
  { href: "#", label: "Sobre Nós" },
  { href: "#", label: "Produtos" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contato" },
  { href: "#", label: "Termos de Serviço" },
  { href: "#", label: "Política de Privacidade" },
];

const SOCIAL_LINKS = [
    // Add social links here if needed
];


export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-lg text-white mb-4">Renda Online Fácil</h3>
                        <p className="text-sm">Sua plataforma para maximizar a renda online através de métodos comprovados e suporte de IA.</p>
                    </div>
                     <div>
                        <h3 className="font-semibold text-white mb-4">Navegação</h3>
                        <ul className="space-y-2">
                           {NAV_LINKS.slice(0, 5).map(link => (
                             <li key={link.label}>
                                <Link href={link.href} className="hover:text-white transition-colors text-sm">{link.label}</Link>
                             </li>
                           ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                         <ul className="space-y-2">
                           {NAV_LINKS.slice(5).map(link => (
                             <li key={link.label}>
                                <Link href={link.href} className="hover:text-white transition-colors text-sm">{link.label}</Link>
                             </li>
                           ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold text-white mb-4">Inscreva-se na nossa newsletter</h3>
                        <p className="text-sm mb-4">Receba dicas e novidades diretamente no seu e-mail.</p>
                        {/* Newsletter form can be added here */}
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Renda Online Fácil. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
