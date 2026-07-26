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
    image: '/dm/maps/axirian-peninsula.png',
    alt: 'Map of the Axirian peninsula showing Almenor, Sunfall, Fallcrest, and neighbouring regions',
  },
  {
    slug: 'fallcrest-town',
    title: 'Fallcrest Town',
    summary:
      'The bustling frontier town built upon two stone terraces along the Nentir River, featuring Hightown, Lowtown, and Knight’s Gate.',
    image: '/dm/maps/fallcrest-town.png',
    alt: 'Map of Fallcrest town showing Hightown, Lowtown, Knight’s Gate, and the Nentir River',
  },
  {
    slug: 'fallcrest-to-ethium',
    title: 'Fallcrest to Ethium Trail',
    summary:
      'The two-day wilderness overland route from Fallcrest along the river valley, passing ancient barrows to the Great Waterfall.',
    image: '/dm/maps/fallcrest-to-ethium.png',
    alt: 'Overland travel map showing the trail from Fallcrest to the Ethium Plateau',
  },
  {
    slug: 'ethium-plateau',
    title: 'The Ethium Plateau',
    summary:
      'The high granite plateau of ancient Ethium, featuring ruined towers, healing shrines, and subterranean vaults.',
    image: '/dm/maps/ethium-plateau.jpg',
    alt: 'Overview map of the Ethium Plateau showing landmark ruins and the ruined tower',
  },
];
