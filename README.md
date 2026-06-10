# Residencial Centro Itajubá — Landing de pré-lançamento

Site institucional/lead de pré-lançamento do **Residencial Centro Itajubá** (Itajubá/MG),
construído em **Next.js (App Router)** + **Tailwind CSS**, com **export estático** para
**GitHub Pages**. Mobile-first, responsivo, com vídeos do interior e exterior, galeria,
planta interativa, mapa e botão flutuante de WhatsApp.

## ✨ Principais recursos

- Hero em tela cheia com **vídeo da fachada** (loop, mudo, autoplay).
- Seção de ambientes com **vídeo do interior decorado**.
- **Planta interativa** (apartamento tipo 102) com zoom/lightbox e planta cotada.
- **Galeria** em mosaico com lightbox e navegação por teclado.
- **Mapa** do centro de Itajubá (Google Maps embed, sem chave de API).
- **Botão flutuante de WhatsApp** (canto inferior direito) + CTAs em todo o site.
- Animações de scroll, tipografia premium (Playfair Display + Montserrat) e
  identidade visual (verde-petróleo + creme + dourado).

## 🛠️ Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de produção (gera a pasta `out/`):

```bash
npm run build
```

## ⚙️ Configuração rápida

Quase tudo que você precisa ajustar está em **`src/lib/site.ts`**:

| Campo | Descrição |
| --- | --- |
| `whatsapp.number` | **⚠️ Obrigatório.** Número no formato `DDI+DDD+numero`, ex.: `5535999999999`. |
| `whatsapp.message` | Mensagem pré-preenchida ao abrir o WhatsApp. |
| `mapQuery` | Endereço exibido no mapa. |
| `facts` | Números do empreendimento (unidades, áreas etc.). |
| `instagram` / `email` | Opcionais — se vazios, os ícones somem. |

### Trocar mídias

- Vídeos: `public/media/exterior.mp4` e `public/media/interior.mp4` (+ posters `.jpg`).
- Galeria: `public/images/gallery/*.jpg`.
- Planta: `public/images/planta.jpg` (humanizada) e `planta-cotas.jpg` (cotada).

## 🚀 Deploy no GitHub Pages

1. Crie um repositório no GitHub e suba este projeto (`git push`) na branch **main**.
2. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) faz o build e publica
   automaticamente. O site fica em:
   `https://<seu-usuario>.github.io/<nome-do-repo>/`

> O `NEXT_PUBLIC_BASE_PATH` é definido automaticamente a partir do `base_path` do
> GitHub Pages (`/<repo>` em project pages; vazio em user page / domínio próprio), então
> os caminhos de imagens, vídeos e assets funcionam corretamente em qualquer caso.

### ⚠️ Erro `Resource not accessible by integration` / `Create Pages site failed`

Esse erro acontece quando o **GitHub Pages ainda não foi habilitado** no repositório — o
workflow não consegue *criar* o site (o `GITHUB_TOKEN` não tem essa permissão). Resolva
fazendo **uma vez** (sem alterar código):

1. **Settings → Pages → Build and deployment → Source: `GitHub Actions`.**
2. (Se ainda falhar) **Settings → Actions → General → Workflow permissions:**
   selecione **Read and write permissions** e salve.
3. Reexecute o workflow em **Actions → Deploy to GitHub Pages → Re-run jobs**.

## 🧱 Stack

- Next.js 14 (App Router, `output: "export"`)
- React 18 + TypeScript
- Tailwind CSS 3
- lucide-react (ícones)

---

> Imagens meramente ilustrativas. Projeto em aprovação.
