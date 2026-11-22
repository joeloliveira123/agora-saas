import {doc,getDoc,setDoc,serverTimestamp,updateDoc} from 'firebase/firestore';
import {db} from './firebase';
import {type Quote} from './records';
import {type Branding,type Template} from './templates';
export type SharedProposal={ownerUid:string;quoteId:string;company:string;clientName:string;items:Quote['items'];discount:number;total:number;notes:string;validUntil:string;template:Template;branding:Branding;response:'pendente'|'aprovado'|'recusado'|'alteracoes';message:string;createdAt?:unknown;respondedAt?:unknown};
export async function publishProposal(uid:string,quote:Quote,company:string,branding:Branding){
 if(!db)throw new Error('Firebase não configurado');
 const token=quote.shareToken||Array.from(crypto.getRandomValues(new Uint8Array(24)),b=>b.toString(16).padStart(2,'0')).join('');
 const ref=doc(db,'publicProposals',token);
 if(!quote.shareToken){
  await setDoc(ref,{ownerUid:uid,quoteId:quote.id,company,clientName:quote.clientName,items:quote.items,discount:quote.discount,total:quote.total,notes:quote.notes,validUntil:quote.validUntil,template:quote.template||branding.template,branding,response:'pendente',message:'',createdAt:serverTimestamp()});
  await updateDoc(doc(db,'organizations',uid,'quotes',quote.id),{shareToken:token,updatedAt:serverTimestamp()});
 }
 return token;
}
export async function loadProposal(token:string):Promise<SharedProposal|null>{
 if(!db||!/^[a-f0-9]{48}$/.test(token))return null;
 const snapshot=await getDoc(doc(db,'publicProposals',token));
 return snapshot.exists()?snapshot.data() as SharedProposal:null;
}
export async function respondProposal(token:string,response:'aprovado'|'recusado'|'alteracoes',message:string){
 if(!db)throw new Error('Firebase não configurado');
 await updateDoc(doc(db,'publicProposals',token),{response,message,respondedAt:serverTimestamp()});
}
