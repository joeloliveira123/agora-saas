# Ágora — SaaS de Orçamentos

Projeto Next.js 15 + React 19 + TypeScript com site institucional e dashboard.

## Integração Firebase (etapa atual)

1. Crie um projeto no Firebase Console e registre um aplicativo **Web**.
2. Em **Authentication > Sign-in method**, habilite **E-mail/senha** e **Google**. Configure o e-mail de suporte do Google.
3. Em **Authentication > Settings > Authorized domains**, autorize os domínios onde o app será executado. Confira `localhost` para testes locais.
4. Crie o banco **Cloud Firestore** em modo de produção (não modo de teste).
5. Copie `.env.example` para `.env.local` e preencha os seis valores públicos da configuração do app Web. **Nunca** inclua chaves de contas de serviço ou segredos de backend no repositório.
6. Publique as regras do arquivo `firestore.rules` no painel Firestore > Regras (ou use `firebase deploy --only firestore:rules` depois de configurar o Firebase CLI).
7. Execute `npm install`, `npm run typecheck` e `npm run dev`.

**Importante:** a integração só funcionará após configurar o projeto Firebase e publicar as regras. O arquivo `.env.local` está no `.gitignore`.

## O que funciona após configurar

- Cadastro e login com e-mail/senha.
- Login com Google via popup.
- Sessão persistida pelo Firebase Auth e botão sair.
- Proteção de interface do dashboard e redirecionamento para login.
- Cadastro inicial da empresa com nome, segmento e contato em `organizations/{uid}`.
- Leitura da empresa vinculada ao usuário autenticado.
- Regras Firestore que impedem leitura entre empresas e negam escrita fora do cadastro inicial.

**Limitações atuais:** não há redefinição de senha, verificação de e-mail, vínculo entre provedores, gestão de múltiplos usuários por empresa, nem backend com cookies de sessão. A proteção de rotas é no cliente; dados privados precisam ser protegidos pelas regras Firestore e, em APIs futuras, por autenticação validada no servidor. O dashboard ainda mostra dados fictícios, não métricas reais. Orçamentos e solicitações ainda não estão implementados.

## Desenvolvimento

```bash
npm install
npm run dev
```

Rotas: `/`, `/entrar`, `/cadastro`, `/app`, `/app/configurar`, `/app/orcamentos`, `/app/solicitacoes`, `/app/clientes`, `/app/servicos`, `/app/configuracoes`.

## Próximas etapas

Implementar recuperação de senha e vínculo de provedores, configurar perfis e catálogo, criar CRUD de orçamentos e, depois, solicitações públicas. Testar regras de segurança com emulador antes do lançamento.
