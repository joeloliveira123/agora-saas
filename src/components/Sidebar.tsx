import Link from 'next/link';
import SignOutButton from './SignOutButton';
const items = [
  ['▦','Visão geral','/app'],
  ['▤','Orçamentos','/app/orcamentos'],
  ['↘','Solicitações','/app/solicitacoes'],
  ['♙','Clientes','/app/clientes'],
  ['▧','Serviços','/app/servicos'],
  ['⚙','Configurações','/app/configuracoes']
];
export default function Sidebar() {
  return <aside className="sidebar">
    <Link href="/" className="brand">◈ Ágora<span>.</span></Link>
    <div className="workspace"><small>ESPAÇO DE TRABALHO</small><strong>Ágora</strong><span>Minha empresa</span></div>
    <nav aria-label="Navegação do painel">{items.map(([icon,label,href])=><Link href={href} key={href}><span aria-hidden="true">{icon}</span>{label}</Link>)}</nav>
    <div className="sidebar-bottom"><span className="avatar">AG</span><div><strong>Minha conta</strong><SignOutButton/></div></div>
  </aside>;
}
