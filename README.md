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

> O workflow define `NEXT_PUBLIC_BASE_PATH=/<nome-do-repo>` automaticamente, então os
> caminhos de imagens, vídeos e assets funcionam no subdiretório do GitHub Pages.
>
> **Domínio próprio / User Page (`usuario.github.io`)?** Nesse caso o site roda na raiz:
> defina `NEXT_PUBLIC_BASE_PATH` como vazio (remova o `env` do workflow ou ajuste para `""`).

## 🧱 Stack

- Next.js 14 (App Router, `output: "export"`)
- React 18 + TypeScript
- Tailwind CSS 3
- lucide-react (ícones)

---

> Imagens meramente ilustrativas. Projeto em aprovação.
