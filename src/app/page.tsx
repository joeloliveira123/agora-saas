import Link from 'next/link';
export default function Home() {
  return <main>
    <header className="topbar"><Link href="/" className="brand">◈ Ágora<span>.</span></Link><nav aria-label="Navegação principal"><a href="#recursos">Recursos</a><a href="#como-funciona">Como funciona</a><Link href="/entrar">Entrar</Link><Link className="btn btn-small" href="/cadastro">Começar grátis ↗</Link></nav></header>
    <section className="hero"><div className="eyebrow">✦ SUA EMPRESA, MAIS PROFISSIONAL</div><h1>Orçamentos que <em>impressionam.</em><br/>Negócios que avançam.</h1><p>Crie propostas com a identidade da sua empresa, envie aos clientes e acompanhe tudo em um só lugar.</p><div className="actions"><Link href="/cadastro" className="btn">Criar minha conta grátis →</Link><Link href="/app" className="btn ghost">Explorar demonstração ↗</Link></div><div className="hero-note">MVP demonstrativo em desenvolvimento • Sem cobrança nesta versão</div></section>
    <section id="recursos" className="section"><div className="eyebrow">TUDO EM UM SÓ LUGAR</div><h2>Menos planilhas.<br/>Mais oportunidades.</h2><div className="grid"><article className="card"><span>01 /</span><h3>Orçamentos rápidos</h3><p>Monte propostas detalhadas com serviços, quantidades e valores.</p></article><article className="card"><span>02 /</span><h3>Sua identidade</h3><p>Personalize propostas com sua marca, cores e condições.</p></article><article className="card"><span>03 /</span><h3>Solicitações online</h3><p>Receba pedidos de orçamento por um link compartilhável.</p></article></div></section>
    <section id="como-funciona" className="banner"><h2>Profissionalismo em cada proposta.</h2><p>Uma forma simples de organizar orçamentos e conquistar clientes.</p><Link className="btn light" href="/app">Conhecer demonstração →</Link></section>
    <footer>© Ágora • MVP em desenvolvimento</footer>
  </main>;
}
