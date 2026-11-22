# Ágora — SaaS de Orçamentos

Starter visual da plataforma Ágora, com **landing page + dashboard** no mesmo projeto Next.js.

> **Atenção:** versão demonstrativa. Autenticação, persistência, edição e envio de orçamentos ainda não estão implementados. Os dados do dashboard são fictícios; não usar em produção.

## Rodar localmente

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Rotas

- `/`: site institucional
- `/entrar` e `/cadastro`: telas visuais de autenticação (desabilitadas)
- `/app`: dashboard demonstrativo
- `/app/orcamentos`: orçamentos (estrutura visual)
- `/app/solicitacoes`: solicitações (estrutura visual)
- `/app/clientes`: clientes (estrutura visual)
- `/app/servicos`: catálogo de serviços (estrutura visual)
- `/app/configuracoes`: configurações (estrutura visual)

## Produto e próximas entregas

O Ágora é um SaaS gratuito inicialmente, para autônomos, MEIs e pequenas empresas. Autenticação prevista por Google e e-mail/senha, onboarding simples, personalização profissional e dois fluxos de orçamento: manual e solicitação pública.

1. Firebase Authentication (Google + e-mail/senha), login e proteção de rotas.
2. Onboarding de empresa e segurança multi-tenant.
3. Persistência de clientes, serviços e orçamentos.
4. Editor de orçamento com cálculo, modelos profissionais e compartilhamento.
5. Formulário público para receber solicitações.
6. Testes de permissões, validações, responsividade e publicação.

Não configurar serviços pagos sem avaliar custos e limites.
