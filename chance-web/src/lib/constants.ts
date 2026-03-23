export const WHATSAPP_NUMBER = "250780000000";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const whatsappMsg = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const PICSUM = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;
