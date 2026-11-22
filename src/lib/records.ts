import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
export type Client = { id:string; name:string; email:string; phone:string };
export type Service = { id:string; name:string; description:string; price:number };
export type QuoteItem = { description:string; quantity:number; unitPrice:number };
export type Quote = { id:string; template?:'moderno'|'minimalista'|'corporativo'; clientId:string; clientName:string; items:QuoteItem[]; discount:number; total:number; status:'rascunho'|'enviado'|'aprovado'|'recusado'; notes:string; validUntil:string };
type Kind = 'clients'|'services'|'quotes';
const ref = (uid:string,kind:Kind) => { if(!db) throw new Error('Firebase não configurado'); if(!uid) throw new Error('Entre na sua conta'); return collection(db,'organizations',uid,kind); };
export async function listRecords<T>(uid:string,kind:Kind):Promise<T[]> {
 const snap=await getDocs(query(ref(uid,kind),orderBy('createdAt','desc')));
 return snap.docs.map(d=>({id:d.id,...d.data()} as T));
}
export async function addRecord(uid:string,kind:Kind,data:Record<string,unknown>) {
 return addDoc(ref(uid,kind),{...data,createdAt:serverTimestamp(),updatedAt:serverTimestamp()});
}
export async function editRecord(uid:string,kind:Kind,id:string,data:Record<string,unknown>) {
 await updateDoc(doc(ref(uid,kind),id),{...data,updatedAt:serverTimestamp()});
}
export async function removeRecord(uid:string,kind:Kind,id:string) { await deleteDoc(doc(ref(uid,kind),id)); }
export const money=(n:number)=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(n);
