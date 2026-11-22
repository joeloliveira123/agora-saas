'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SignOutButton from './SignOutButton';

const items = [
  ['▦','Visão geral','/app'],
  ['▤','Orçamentos','/app/orcamentos'],
  ['↗','Solicitações','/app/solicitacoes'],
  ['♙','Clientes','/app/clientes'],
  ['▧','Serviços','/app/servicos'],
  ['⚙','Configurações','/app/configuracoes']
];
export default function Sidebar() {
  const pathname = usePathname();
  return <aside className="sidebar">
    <Link href="/" className="brand" aria-label="Ágora, página inicial"><span className="brand-symbol" aria-hidden="true">A</span><span className="brand-word">ágora</span></Link>
    <div className="workspace"><small>SEU ESPAÇO</small><strong>Painel de gestão</strong><span>Organize. Proponha. Cresça.</span></div>
    <div className="nav-caption">MENU PRINCIPAL</div>
    <nav aria-label="Navegação do painel">{items.map(([icon,label,href])=><Link href={href} key={href} className={pathname === href || (href !== '/app' && pathname.startsWith(href+'/')) ? 'active' : ''} aria-current={pathname === href ? 'page' : undefined}><span className="nav-icon" aria-hidden="true">{icon}</span><span className="nav-label">{label}</span></Link>)}</nav>
    <div className="sidebar-bottom"><span className="avatar">A</span><div><strong>Minha conta</strong><SignOutButton/></div></div>
  </aside>;
}
