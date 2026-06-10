// =====================================================================
//  CONFIGURAÇÃO CENTRAL DO SITE
//  Ajuste os dados abaixo (principalmente o número de WhatsApp).
// =====================================================================

export const site = {
  name: "Residencial Centro Itajubá",
  shortName: "Centro Itajubá",
  tagline: "More no centro. Invista no futuro.",
  description:
    "Pré-lançamento de apartamentos compactos e inteligentes no centro de Itajubá/MG. Excelente potencial de valorização e locação.",
  city: "Itajubá",
  state: "MG",
  location: "Centro • Itajubá/MG",

  // 👉 SUBSTITUA pelo número real no formato internacional: DDI + DDD + número
  //    Ex.: 55 (Brasil) + 35 (DDD) + 9 9999-9999  ->  "5535999999999"
  whatsapp: {
    number: "5535999999999",
    message:
      "Olá! Tenho interesse no Residencial Centro Itajubá (pré-lançamento). Gostaria de receber as condições e a tabela de valores.",
  },

  // (Opcional) redes / contato — deixe vazio para ocultar
  instagram: "",
  email: "",

  // Endereço usado no mapa (Google Maps embed)
  mapQuery: "Centro, Itajubá - MG, Brasil",

  // Números do empreendimento
  facts: {
    units: 20,
    perFloor: 5,
    areaInternal: "32,01",
    areaVaranda: "6,15",
    areaTotal: "38,16",
  },
} as const;

export function whatsappUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage ?? site.whatsapp.message);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
}
