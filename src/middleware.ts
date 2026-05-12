import { defineMiddleware } from 'astro:middleware';
import { verifyToken } from './lib/auth';
import { DB_CONNECTED } from './lib/db';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Admin requires a live database. Redirect all /admin/* to home when no DB.
  if (pathname.startsWith('/admin')) {
    if (!DB_CONNECTED) {
      return context.redirect('/');
    }

    // Protect all /admin/* routes except the login page itself
    if (pathname !== '/admin/login') {
      const token = context.cookies.get('brisa_auth')?.value;

      if (!token) {
        return context.redirect('/admin/login');
      }

      const payload = await verifyToken(token);
      if (!payload) {
        context.cookies.delete('brisa_auth', { path: '/' });
        return context.redirect('/admin/login');
      }

      context.locals.user = payload;
    }
  }

  return next();
});
