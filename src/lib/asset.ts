// Prefixa caminhos de arquivos da pasta /public com o basePath do GitHub Pages.
// next/image e next/link já tratam o basePath automaticamente; <video>, <source>,
// posters e meta tags precisam deste helper.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}
