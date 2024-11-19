import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Erik Grinn | Blog',
    description: 'My journey learning Astro',
    // site: context.site,
    site: 'https://erikgrinn.github.io/astro/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}