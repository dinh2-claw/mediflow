/** Base path the site is served under (e.g. "/mediflow" on a GitHub Pages
 *  project site). Empty at root. Set via NEXT_PUBLIC_BASE_PATH at build time. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix a root-absolute public asset path with the base path. Next auto-prefixes
 * `next/image` and `<Link>`, but NOT raw `<img src>` / `fetch` — use this for those.
 */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
