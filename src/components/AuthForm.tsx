'use client';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { auth, firebaseConfigured } from '../lib/firebase';
export default function AuthForm({mode}:{mode:'login'|'signup'}) {
  const [name,setName] = useState(''), [email,setEmail] = useState(''), [password,setPassword] = useState('');
  const [busy,setBusy] = useState(false), [error,setError] = useState('');
  const router = useRouter();
  const signup = mode==='signup';
  const submit = async (event:FormEvent) => {
    event.preventDefault(); if(!auth) return;
    setBusy(true);setError('');
    try {
      if(signup) {
        const result=await createUserWithEmailAndPassword(auth,email,password);
        if(name.trim()) await updateProfile(result.user,{displayName:name.trim()});
      } else await signInWithEmailAndPassword(auth,email,password);
      router.replace('/app');
    } catch(e) {setError(e instanceof Error?e.message:'Falha na autenticação');}
    finally {setBusy(false);}
  };
  const google = async () => {
    if(!auth) return;
    setBusy(true);setError('');
    try { await signInWithPopup(auth,new GoogleAuthProvider());router.replace('/app');}
    catch(e){setError(e instanceof Error?e.message:'Falha ao entrar com Google');}
    finally {setBusy(false);}
  };
  return <div className="auth"><Link className="brand" href="/">◈ Ágora<span>.</span></Link>
    <div className="auth-card"><div className="eyebrow">{signup?'COMECE GRATUITAMENTE':'BEM-VINDO DE VOLTA'}</div>
      <h1>{signup?'Crie sua conta':'Entre na sua conta'}</h1>
      {!firebaseConfigured && <div className="notice" role="alert">Configure as variáveis do Firebase para habilitar o acesso.</div>}
      <button type="button" className="btn ghost" onClick={google} disabled={busy||!firebaseConfigured}>Continuar com Google</button>
      <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:15}}>
        {signup&&<label>Seu nome<input value={name} onChange={e=>setName(e.target.value)} required maxLength={100}/></label>}
        <label>E-mail<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="email"/></label>
        <label>Senha<input type="password" value={password} onChange={e=>setPassword(e.target.value)} minLength={6} required autoComplete={signup?'new-password':'current-password'}/></label>
        {error&&<div className="notice" role="alert">{error}</div>}
        <button className="btn" disabled={busy||!firebaseConfigured}>{busy?'Aguarde...':signup?'Criar conta':'Entrar'}</button>
      </form>
      <p>{signup?'Já possui conta?':'Não tem conta?'} <Link href={signup?'/entrar':'/cadastro'}>{signup?'Entrar':'Criar conta'}</Link></p>
    </div></div>;
}
