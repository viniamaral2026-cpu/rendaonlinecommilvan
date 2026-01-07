export default function TermosDeUsoPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold mb-8 text-card-foreground">Termos de Uso</h1>
        <div className="space-y-6 text-muted-foreground prose dark:prose-invert">
          <p>
            Bem-vindo ao <strong>Renda Online Fácil</strong>. Ao acessar e usar nosso site, você concorda em cumprir e
            ficar vinculado aos seguintes termos e condições de uso, que, juntamente com nossa
            política de privacidade, governam o relacionamento do Renda Online Fácil com você em
            relação a este site. Se você não concordar com qualquer parte destes termos e
            condições, por favor, não use nosso site.
          </p>

          <h2 className="text-2xl font-semibold text-card-foreground">1. Uso do Site</h2>
          <p>
            O conteúdo das páginas deste site é para sua informação geral e uso apenas. Ele está sujeito a
            alterações sem aviso prévio. Este site usa cookies para monitorar as preferências de navegação.
          </p>

          <h2 className="text-2xl font-semibold text-card-foreground">2. Propriedade Intelectual</h2>
          <p>
            Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas
            não se limita a, design, layout, aparência e gráficos. A reprodução é proibida, exceto em
            conformidade com o aviso de direitos autorais, que faz parte destes termos e condições.
          </p>

          <h2 className="text-2xl font-semibold text-card-foreground">3. Isenção de Responsabilidade</h2>
          <p>
            As informações contidas neste site são apenas para fins educacionais. Não garantimos resultados financeiros. Os ganhos variam de acordo com o esforço, dedicação e estratégia de cada indivíduo.
          </p>
          
          <h2 className="text-2xl font-semibold text-card-foreground">4. Links para Outros Sites</h2>
          <p>
            Nosso site pode conter links para outros sites de interesse. No entanto, uma vez que você usou esses links para sair do nosso site, você deve notar que não temos qualquer controle sobre esse outro site. Portanto, não podemos ser responsáveis pela proteção e privacidade de qualquer informação que você fornecer enquanto visita tais sites.
          </p>
        </div>
      </div>
    </div>
  );
}
