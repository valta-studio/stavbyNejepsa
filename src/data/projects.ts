// Realizace se spravují v Sanity Studiu (studio/, dokument `project`) a načítají se při buildu.
import { sanityFetch } from '../lib/sanity';

export type RichTextBlock =
  | { _type: 'block'; style: 'h2' | 'h3' | 'normal' | 'blockquote'; text: string }
  | { _type: 'bulletList'; items: string[] }
  | { _type: 'imageWithMeta'; src?: string | null; name?: string; alt: string; caption?: string };

export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  categories: string[];
  scope: string[];
  technologies: string[]; // slugy z technologies.ts
  featured: boolean;
  description: string;
  /** URL fotky ze Sanity; bez ní se použije `project-<slug>` ze src/assets/photos */
  image: string | null;
  /** Fáze výstavby; bez fotky se použije `gallery-<slug>-<pořadí>` ze src/assets/photos */
  stages: { title: string; image: string | null }[];
  body: RichTextBlock[];
}

interface PortableBlock {
  _type: 'block' | 'image';
  style?: string;
  listItem?: string;
  children?: { text: string }[];
  src?: string | null;
  placeholder?: string;
  alt?: string;
  caption?: string;
}

// Portable Text ze Sanity → bloky, které vykresluje RichText.astro.
function toRichText(body: PortableBlock[]): RichTextBlock[] {
  const out: RichTextBlock[] = [];
  for (const b of body) {
    if (b._type === 'image') {
      out.push({ _type: 'imageWithMeta', src: b.src, name: b.placeholder, alt: b.alt ?? '', caption: b.caption });
      continue;
    }
    const text = (b.children ?? []).map((c) => c.text).join('');
    const last = out.at(-1);
    if (b.listItem && last?._type === 'bulletList') last.items.push(text);
    else if (b.listItem) out.push({ _type: 'bulletList', items: [text] });
    else out.push({ _type: 'block', style: (b.style ?? 'normal') as 'normal', text });
  }
  return out;
}

const query = `*[_type == "project" && defined(slug.current)] | order(year desc, title asc) {
  "slug": slug.current,
  title,
  location,
  year,
  description,
  "featured": coalesce(featured, false),
  "categories": coalesce(categories, []),
  "scope": coalesce(scope, []),
  "technologies": coalesce(technologies, []),
  "image": image.asset->url,
  "stages": coalesce(stages[]{title, "image": image.asset->url}, []),
  "body": coalesce(body[]{..., "src": asset->url}, [])
}`;

type RawProject = Omit<Project, 'body'> & { body: PortableBlock[] };

export const projects: Project[] = (await sanityFetch<RawProject[]>(query)).map((p) => ({
  ...p,
  body: toRichText(p.body),
}));

export const featuredProjects = projects.filter((p) => p.featured);

export function projectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.categories.includes(category));
}
