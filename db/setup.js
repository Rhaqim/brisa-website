// db/setup.js — Run once to create tables and seed data
// Usage: node db/setup.js
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import postgres from 'postgres';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sql = postgres(process.env.DATABASE_URL);

const schema = readFileSync(join(__dirname, 'schema.sql'), 'utf8');

try {
  await sql.unsafe(schema);
  console.log('✅ Database schema created and seeded successfully.');
} catch (err) {
  console.error('❌ Error setting up database:', err.message);
  process.exit(1);
} finally {
  await sql.end();
}
