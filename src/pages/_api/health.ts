import type { APIRoute } from 'astro';
import { DB_CONNECTED } from '../../lib/db';

export const GET: APIRoute = () => {
  const info = {
    status: 'ok',
    node: process.version,
    port: process.env.PORT ?? '(not set)',
    host: process.env.HOST ?? '(not set)',
    db: DB_CONNECTED ? 'connected' : 'not configured (fallback mode)',
    jwt_secret: process.env.JWT_SECRET ? 'set' : 'MISSING',
    cloudinary_name: process.env.CLOUDINARY_CLOUD_NAME ? 'set' : 'not set',
  };
  return new Response(JSON.stringify(info, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
