import { sql, DB_CONNECTED } from './db';
import { FALLBACK_SETTINGS } from './fallback';

export type Settings = Record<string, string>;

export async function getSettings(): Promise<Settings> {
  if (!DB_CONNECTED) return FALLBACK_SETTINGS;
  try {
    const rows = await sql<{ key: string; value: string }[]>`
      SELECT key, value FROM site_settings ORDER BY key
    `;
    return Object.fromEntries(rows.map((r) => [r.key, r.value ?? '']));
  } catch {
    return FALLBACK_SETTINGS;
  }
}

export async function getSetting(key: string): Promise<string> {
  const [row] = await sql<{ value: string }[]>`
    SELECT value FROM site_settings WHERE key = ${key}
  `;
  return row?.value ?? '';
}

export async function setSetting(key: string, value: string): Promise<void> {
  await sql`
    INSERT INTO site_settings (key, value, updated_at)
    VALUES (${key}, ${value}, NOW())
    ON CONFLICT (key) DO UPDATE
      SET value = EXCLUDED.value,
          updated_at = NOW()
  `;
}

export async function setSettings(entries: Record<string, string>): Promise<void> {
  for (const [key, value] of Object.entries(entries)) {
    await setSetting(key, value);
  }
}
