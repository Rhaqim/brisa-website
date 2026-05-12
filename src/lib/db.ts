import postgres from 'postgres';

const connectionString = import.meta.env.DATABASE_URL as string | undefined;

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
