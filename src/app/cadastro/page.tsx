import Link from 'next/link';
export default function Signup() {
  return <div className="auth"><Link className="brand" href="/">◈ Ágora<span>.</span></Link>
    <div className="auth-card"><div className="eyebrow">COMECE GRATUITAMENTE</div><h1>Crie sua conta</h1><p>Cadastro com Google ou e-mail e senha será habilitado na próxima etapa.</p>
      <label>Nome<input placeholder="Seu nome" disabled /></label>
      <label>E-mail<input type="email" placeholder="voce@empresa.com" disabled /></label>
      <label>Senha<input type="password" placeholder="Crie uma senha" disabled /></label>
      <button className="btn" disabled>Criar conta (em breve)</button><p>Já possui conta? <Link href="/entrar">Entrar</Link></p><Link href="/app">Ver dashboard demonstrativo →</Link>
    </div>
  </div>;
}
