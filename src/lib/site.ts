export const SITE_TITLE = 'The Ruins of Ethium';
export const SITE_SUBTITLE = 'The Adventures of Thorn Axehand and Friends';
export const SITE_TAGLINE = 'a tale from the table';
export const SITE_DESCRIPTION =
  'A novel retelling of a Dungeons & Dragons campaign, for readers aged twelve and up.';

/**
 * Google Analytics 4 measurement ID for this site's web data stream.
 *
 * Not a secret: GA serves it in every visitor's page source. It lives here rather
 * than in a Netlify variable so there is one less thing to set up and one less
 * thing to forget. PUBLIC_GA_ID in the environment overrides it, which is how to
 * point a preview build at a different property without touching the code.
 *
 * Analytics still does nothing until a reader allows it — see components/Analytics.astro.
 */
export const GA_MEASUREMENT_ID = 'G-3CQ0WK6GZQ';
