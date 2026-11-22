'use client';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../lib/firebase';
export default function SignOutButton(){const router=useRouter();return <button type="button" onClick={async()=>{if(auth)await signOut(auth);router.replace('/entrar');}} style={{background:'transparent',border:0,color:'#53647a',cursor:'pointer',padding:12,textAlign:'left'}}>Sair da conta</button>;}
