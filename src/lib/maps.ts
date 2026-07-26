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
    image: '/dm/maps/axirian-peninsula.png',
    alt: 'Map of the Axirian peninsula showing Almenor, Sunfall, Fallcrest, and neighbouring regions',
    category: 'regional',
  },
  {
    slug: 'fallcrest-town',
    title: 'Fallcrest Town',
    summary:
      'The bustling frontier town built upon two stone terraces along the Nentir River, featuring Hightown, Lowtown, and Knight’s Gate.',
    image: '/dm/maps/fallcrest-town.png',
    alt: 'Map of Fallcrest town showing Hightown, Lowtown, Knight’s Gate, and the Nentir River',
    category: 'regional',
  },
  {
    slug: 'fallcrest-to-ethium',
    title: 'Fallcrest to Ethium Trail',
    summary:
      'The two-day wilderness overland route from Fallcrest along the river valley, passing ancient barrows to the Great Waterfall.',
    image: '/dm/maps/fallcrest-to-ethium.png',
    alt: 'Overland travel map showing the trail from Fallcrest to the Ethium Plateau',
    category: 'regional',
  },
  {
    slug: 'ethium-plateau',
    title: 'The Ethium Plateau',
    summary:
      'The high granite plateau of ancient Ethium, featuring ruined towers, healing shrines, and subterranean vaults.',
    image: '/dm/maps/ethium-plateau.jpg',
    alt: 'Overview map of the Ethium Plateau showing landmark ruins and the ruined tower',
    category: 'regional',
  },
  {
    slug: 'continents-world',
    title: 'The Known World',
    summary:
      'Grand cartographic overview of the continents, ocean currents, and major realms of the world.',
    image: '/dm/maps/continents-world.png',
    alt: 'World map showing continents and ocean realms',
    category: 'regional',
  },
];

export const dungeonMaps: SiteMap[] = [
  {
    slug: 'goblin-cave',
    title: 'Goblin Cave Lair',
    summary:
      'Hillside goblin lair featuring lookout platform, narrow tunnels, gambling nook, and boss cavern.',
    image: '/dm/maps/goblin-cave.png',
    alt: 'Tactical battle map of the goblin cave lair',
    category: 'dungeon',
  },
  {
    slug: 'inn-tavern-interior',
    title: 'The Blue Moon Alehouse',
    summary:
      'Interior map of the Blue Moon Alehouse in Lowtown — featuring central hearth, dining tables, and bar.',
    image: '/dm/maps/inn-tavern-interior.png',
    alt: 'Floor plan of the Blue Moon Alehouse interior',
    category: 'dungeon',
  },
  {
    slug: 'waterfall-climb',
    title: 'The Great Waterfall Climb',
    summary:
      'Vertical encounter map showing the slippery stone ledges winding behind the roaring 150-foot waterfall.',
    image: '/dm/maps/waterfall-climb.jpg',
    alt: 'Encounter map of the waterfall climb behind the falls',
    category: 'dungeon',
  },
  {
    slug: 'ruined-tower',
    title: 'Ruined Tower Surface Camp',
    summary:
      'Surface ruins of Tower C on the Ethium plateau — overgrown courtyard, bandit tents, and spiral staircase descent.',
    image: '/dm/maps/ruined-tower.jpg',
    alt: 'Battle map of the ruined tower surface camp',
    category: 'dungeon',
  },
  {
    slug: 'ethium-pool-dungeon',
    title: 'Ethium Pool Subterranean Dungeon',
    summary:
      'Subterranean pale stone complex beneath Tower C — featuring alcoves, captivity chamber, maul trap, and Healing Pool vault.',
    image: '/dm/maps/ethium-pool-dungeon.png',
    alt: 'Tactical map of the Ethium Pool subterranean complex',
    category: 'dungeon',
  },
  {
    slug: 'tower-c-krutick-lair',
    title: 'Kruthik Lair & Brood Nest',
    summary:
      'Subterranean brood nest beneath Tower C — 2.5-foot crawlspaces, translucent egg clusters, crypt alcove, and Queen’s vault.',
    image: '/dm/maps/tower-c-krutick-lair.jpg',
    alt: 'Tactical map of the Kruthik brood nest and queen vault',
    category: 'dungeon',
  },
  {
    slug: 'beyond-the-pool',
    title: 'Beyond the Pool & Abyssal Cavern',
    summary:
      'Enormous subterranean lake cavern and 50-foot cliff precipice bridging the pool vault to the duergar district.',
    image: '/dm/maps/beyond-the-pool.png',
    alt: 'Tactical map of the abyssal lake cavern beyond the pool',
    category: 'dungeon',
  },
  {
    slug: 'duergar-route-sm',
    title: 'Duergar Outpost & Assembly Hall',
    summary:
      'Ancient dwarven district occupied by duergar — featuring outpost crossroads, Ethium Viewing Table chamber, Assembly Hall, and massive dwarven gates.',
    image: '/dm/maps/duergar-route-sm.png',
    alt: 'Battle map of the Duergar outpost, Viewing Table, and Assembly Hall',
    category: 'dungeon',
  },
  {
    slug: 'troglodyte-route',
    title: 'Troglodyte Caves Warren',
    summary:
      'Foul natural tunnels branching east of the lake — stench threshold, chameleon ambush galleries, carrion choke, and Chief Grash’s den.',
    image: '/dm/maps/troglodyte-route.png',
    alt: 'Tactical map of the troglodyte cave warren',
    category: 'dungeon',
  },
];

export const siteMaps: SiteMap[] = [...regionalMaps, ...dungeonMaps];
