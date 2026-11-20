// Fotky generované přes Higgsfield (dočasné vizuály — nahradí je skutečné fotky klienta).
// Po napojení Sanity se tento modul nahradí Sanity CDN transformacemi.
import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.png', {
  eager: true,
});

export function getPhoto(name: string): ImageMetadata | undefined {
  const entry = Object.entries(modules).find(([path]) => path.endsWith(`/${name}.png`));
  return entry?.[1].default;
}
