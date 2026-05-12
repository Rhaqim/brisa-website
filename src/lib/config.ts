/**
 * Site-wide constants — single source of truth.
 * To change the domain: update `site` in astro.config.mjs (which sets import.meta.env.SITE)
 * and update CONTACT_EMAIL below.
 */

export const SITE_URL =
  ((import.meta.env.SITE as string | undefined) ?? 'https://brisafoundation.com.ng')
    .replace(/\/$/, '');

export const CONTACT_EMAIL = 'info@brisafoundation.com.ng';
