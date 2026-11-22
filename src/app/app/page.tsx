import Link from 'next/link';
const quotes=[['AG-001','Mariana Costa','Reforma de cozinha','R$ 8.450,00','Enviado'],['AG-002','Carlos Almeida','Pintura residencial','R$ 2.180,00','Rascunho'],['AG-003','Fernanda Souza','Instalação elétrica','R$ 3.700,00','Aprovado']];
export default function Dashboard() {
  return <>
    <div className="page-head"><div><div className="eyebrow">PAINEL DE CONTROLE</div><h1>Visão geral</h1><p>Acompanhe os orçamentos e as oportunidades da sua empresa.</p></div><Link className="btn" href="/app/orcamentos">+ Novo orçamento</Link></div>
    <div className="notice">Dados ilustrativos para apresentação visual. Cadastro, autenticação e banco de dados ainda não estão conectados.</div>
    <div className="metrics">
      <div className="metric"><span>Orçamentos criados</span><strong>24</strong><small>Exemplo demonstrativo</small></div>
      <div className="metric"><span>Propostas enviadas</span><strong>18</strong><small>Últimos 30 dias (exemplo)</small></div>
      <div className="metric"><span>Propostas aprovadas</span><strong>09</strong><small>Exemplo demonstrativo</small></div>
      <div className="metric"><span>Valor em propostas</span><strong>R$ 32,4 mil</strong><small>Exemplo demonstrativo</small></div>
    </div>
    <div className="table-card"><div className="table-title"><h2>Orçamentos recentes</h2><Link href="/app/orcamentos">Ver todos →</Link></div><div className="table-wrap"><table><thead><tr><th>Número</th><th>Cliente</th><th>Serviço</th><th>Valor</th><th>Status</th></tr></thead><tbody>{quotes.map(q=><tr key={q[0]}>{q.map((v,i)=><td key={i}>{i===4?<span className="pill">{v}</span>:v}</td>)}</tr>)}</tbody></table></div></div>
  </>;
}
