'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from './AuthProvider';
import { getMyOrganization } from '../lib/organization';
export default function ProtectedApp({children}:{children:React.ReactNode}) {
  const {user,loading} = useAuth();
  const [state,setState] = useState<'loading'|'ready'|'error'>('loading');
  const [error,setError] = useState('');
  const router = useRouter(), path = usePathname();
  useEffect(() => {
    if (loading) return;
    if (!user) { router.replace('/entrar'); return; }
    let active = true;
    getMyOrganization(user.uid).then(org => {
      if (!active) return;
      if (!org && path !== '/app/configurar') router.replace('/app/configurar');
      else if (org && path === '/app/configurar') router.replace('/app');
      else setState('ready');
    }).catch(e => {if(active){setError(e instanceof Error?e.message:'Erro ao carregar empresa');setState('error');}});
    return () => {active=false;};
  },[user,loading,router,path]);
  if (state === 'error') return <div className="notice" role="alert">Não foi possível carregar seu espaço: {error}</div>;
  if (loading || !user || state !== 'ready') return <div className="notice">Carregando sua conta...</div>;
  return <>{children}</>;
}
