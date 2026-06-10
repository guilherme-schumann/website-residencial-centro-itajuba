# Residencial Centro Itajubá — guia do projeto

Landing page de pré-lançamento imobiliário em **Next.js 14 (App Router, `output: "export"`)**
+ **Tailwind CSS** + **lucide-react**, mobile-first, com deploy estático no **GitHub Pages**.

Configuração editável centralizada em [`src/lib/site.ts`](src/lib/site.ts) (nº de WhatsApp,
mensagem, mapa, números do empreendimento). Assets de `/public` são prefixados pelo helper
[`src/lib/asset.ts`](src/lib/asset.ts) para funcionar no subdiretório do GitHub Pages.

## Convenção de commits (padrão do projeto)

- Os commits devem ser atribuídos **somente ao autor humano** (perfil GitHub do dono do repositório).
- **Não** adicionar o trailer `Co-Authored-By: Claude ...` nem qualquer menção/atribuição ao
  Claude, Anthropic ou ferramentas de IA nas mensagens de commit.
- **Não** adicionar a linha "🤖 Generated with Claude Code" em descrições de Pull Requests.
- Mensagens de commit em português, claras e descritivas.

## Comandos

```bash
npm install
npm run dev      # desenvolvimento — http://localhost:3000
npm run build    # build/export estático -> pasta out/
```
