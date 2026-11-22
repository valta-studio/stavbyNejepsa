// Čtení publikovaného obsahu ze Sanity při buildu. Dataset je veřejný, token není potřeba.
// Projekt a dataset musí odpovídat studio/sanity.config.ts.
const projectId = 'xpi92g7z';
const dataset = 'production';

export async function sanityFetch<T>(query: string): Promise<T> {
  const url = `https://${projectId}.api.sanity.io/v2025-02-19/data/query/${dataset}?query=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity: ${res.status} ${await res.text()}`);
  return (await res.json()).result;
}
