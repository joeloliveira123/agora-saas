import { doc, getDoc, runTransaction, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export type Organization = { name: string; segment: string; contact: string; ownerUid: string };
export async function getMyOrganization(uid: string): Promise<Organization | null> {
  if (!db) throw new Error('Firebase não configurado');
  const snap = await getDoc(doc(db, 'organizations', uid));
  return snap.exists() ? snap.data() as Organization : null;
}
export async function createMyOrganization(uid: string, data: Pick<Organization,'name'|'segment'|'contact'>) {
  if (!db) throw new Error('Firebase não configurado');
  const name = data.name.trim(), segment = data.segment.trim(), contact = data.contact.trim();
  if (!name || !segment || !contact || name.length > 120 || segment.length > 80 || contact.length > 180) throw new Error('Preencha os campos corretamente.');
  const ref = doc(db, 'organizations', uid);
  await runTransaction(db, async tx => {
    const existing = await tx.get(ref);
    if (existing.exists()) throw new Error('Sua empresa já está cadastrada.');
    tx.set(ref, { name, segment, contact, ownerUid: uid, createdAt: serverTimestamp() });
  });
}
