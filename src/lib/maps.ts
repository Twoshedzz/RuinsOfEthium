/**
 * Regional maps for the public /maps/ page.
 *
 * These are the novel's own copies under publish/illustrations/maps/. Tactical and
 * DM-facing cartography lives in the private EthiumSource repo.
 */
export type SiteMap = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  category?: 'regional' | 'dungeon';
};

export const regionalMaps: SiteMap[] = [
  {
    slug: 'axirian-peninsula',
    title: 'The Axirian Peninsula',
    summary:
      'Almenor and the lands around it — from the Storm Coast and Forests of Thanion in the north to the Twin Moon Sea in the south.',
    image: '/illustrations/maps/axirian-peninsula-illustrated.png',
    alt: 'Map of the Axirian peninsula showing Almenor, Sunfall, Fallcrest, and neighbouring regions',
    category: 'regional',
  },
  {
    slug: 'fallcrest-town',
    title: 'Fallcrest Town',
    summary:
      'The bustling frontier town built upon two stone terraces along the Nentir River, featuring Hightown, Lowtown, and Knight’s Gate.',
    image: '/illustrations/maps/fallcrest-town.png',
    alt: 'Map of Fallcrest town showing Hightown, Lowtown, Knight’s Gate, and the Nentir River',
    category: 'regional',
  },
  {
    slug: 'fallcrest-to-ethium',
    title: 'Fallcrest to Ethium Trail',
    summary:
      'The two-day wilderness overland route from Fallcrest along the river valley, passing ancient barrows to the Great Waterfall.',
    image: '/illustrations/maps/fallcrest-to-ethium.png',
    alt: 'Overland travel map showing the trail from Fallcrest to the Ethium Plateau',
    category: 'regional',
  },
  {
    slug: 'ethium-plateau',
    title: 'The Ethium Plateau',
    summary:
      'The high granite plateau of ancient Ethium, featuring ruined towers, healing shrines, and subterranean vaults.',
    image: '/illustrations/maps/ethium-plateau.jpg',
    alt: 'Overview map of the Ethium Plateau showing landmark ruins and the ruined tower',
    category: 'regional',
  },
  {
    slug: 'continents-world',
    title: 'The Known World',
    summary:
      'Grand cartographic overview of the continents, ocean currents, and major realms of the world.',
    image: '/illustrations/maps/continents-world.png',
    alt: 'World map showing continents and ocean realms',
    category: 'regional',
  },
];
