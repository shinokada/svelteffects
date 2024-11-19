import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID_SVELTE_LIB } from '$env/static/private';

const title = 'Svelteffects';
const description = 'Text effects for Svelte';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelteffects';
const keywords = 'svelte, sveltekit, runes, text effects, ui';

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords,
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image: imgUrl,
      imageAlt: title
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image: imgUrl,
      imageAlt: title,
      siteName: title,
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID_SVELTE_LIB
  };
};