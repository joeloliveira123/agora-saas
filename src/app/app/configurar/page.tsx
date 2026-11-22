'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../components/AuthProvider';
import { createMyOrganization } from '../../../lib/organization';
export default function Setup() {
 const {user}=useAuth(),router=useRouter();
 const [name,setName]=useState(''),[segment,setSegment]=useState(''),[contact,setContact]=useState('');
 const [busy,setBusy]=useState(false),[error,setError]=useState('');
 async function submit(e:FormEvent){e.preventDefault();if(!user)return;setBusy(true);setError('');
 try{await createMyOrganization(user.uid,{name,segment,contact});router.replace('/app');}
 catch(e){setError(e instanceof Error?e.message:'Não foi possível salvar');}finally{setBusy(false);}}
 return <><div className="page-head"><div><div className="eyebrow">PRIMEIRO ACESSO</div><h1>Configure sua empresa</h1><p>São apenas três informações para começar.</p></div></div>
 <div className="auth-card"><form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:16}}>
 <label>Nome da empresa<input value={name} onChange={e=>setName(e.target.value)} maxLength={120} required/></label>
 <label>Segmento<input value={segment} onChange={e=>setSegment(e.target.value)} maxLength={80} placeholder="Ex.: Reformas" required/></label>
 <label>Contato<input value={contact} onChange={e=>setContact(e.target.value)} maxLength={180} placeholder="WhatsApp ou e-mail" required/></label>
 {error&&<div className="notice" role="alert">{error}</div>}
 <button className="btn" disabled={busy}>{busy?'Salvando...':'Criar meu espaço →'}</button></form></div></>;
}
