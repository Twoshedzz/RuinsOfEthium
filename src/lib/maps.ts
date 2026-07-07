export type SiteMap = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
};

export const siteMaps: SiteMap[] = [
  {
    slug: 'axirian-peninsula',
    title: 'The Axirian Peninsula',
    summary:
      'Almenor and the lands around it — from the Storm Coast and Forests of Thanion in the north to the Twin Moon Sea in the south.',
    image: '/illustrations/maps/axirian-peninsula-illustrated.png',
    alt: 'Ink illustration map of the Axirian peninsula showing Almenor, Sunfall, Fallcrest, and neighbouring regions',
  },
];
