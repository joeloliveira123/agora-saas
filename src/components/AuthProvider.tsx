'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '../lib/firebase';
type AuthState = { user: User | null; loading: boolean };
const Context = createContext<AuthState>({ user: null, loading: true });
export function AuthProvider({children}:{children:React.ReactNode}) {
  const [state,setState] = useState<AuthState>({user:null,loading:true});
  useEffect(() => {
    if (!auth) { setState({user:null,loading:false}); return; }
    return onAuthStateChanged(auth, user => setState({user,loading:false}), () => setState({user:null,loading:false}));
  },[]);
  return <Context.Provider value={state}>{children}</Context.Provider>;
}
export const useAuth = () => useContext(Context);
