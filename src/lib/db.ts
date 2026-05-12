import postgres from 'postgres';

// process.env is always read at runtime in Node.js — safer than import.meta.env
// which Vite may bake in as undefined at build time if the var wasn't set then.
const connectionString = process.env.DATABASE_URL;

/**
 * True when DATABASE_URL is present. When false the site serves static
 * fallback data and the admin panel is disabled.
 */
export const DB_CONNECTED = !!connectionString;

const _pool = DB_CONNECTED
  ? postgres(connectionString!, { max: 10, idle_timeout: 30, connect_timeout: 10 })
  : null;

// When no database is configured every sql query resolves to an empty array,
// allowing public pages to fall through to their static fallback content.
export const sql: ReturnType<typeof postgres> =
  (_pool as ReturnType<typeof postgres>) ??
  ((_strings: TemplateStringsArray, ..._values: unknown[]) =>
    Promise.resolve([]) as never);
