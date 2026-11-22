import Link from 'next/link';
export default function Login() {
  return <div className="auth"><Link className="brand" href="/">◈ Ágora<span>.</span></Link>
    <div className="auth-card"><div className="eyebrow">BEM-VINDO DE VOLTA</div><h1>Entre na sua conta</h1><p>O login com Google ou e-mail e senha será ativado na integração com Firebase Authentication.</p>
      <label>E-mail<input type="email" placeholder="voce@empresa.com" disabled /></label>
      <label>Senha<input type="password" placeholder="••••••••" disabled /></label>
      <button className="btn" disabled>Entrar (em breve)</button><p>Não tem conta? <Link href="/cadastro">Criar conta</Link></p><Link href="/app">Ver dashboard demonstrativo →</Link>
    </div>
  </div>;
}
