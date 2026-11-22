import Sidebar from '../../components/Sidebar';
import ProtectedApp from '../../components/ProtectedApp';
export default function AppLayout({children}:{children:React.ReactNode}) {
  return <ProtectedApp><div className="app-shell"><Sidebar /><main className="app-main">{children}</main></div></ProtectedApp>;
}
