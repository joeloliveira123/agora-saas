import './globals.css';
import { AuthProvider } from '../components/AuthProvider';
export const metadata = { title: 'Ágora — Orçamentos profissionais', description: 'Crie e gerencie orçamentos profissionais para sua empresa.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body><AuthProvider>{children}</AuthProvider></body></html>;
}
