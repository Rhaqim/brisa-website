import { defineMiddleware } from 'astro:middleware';
import { verifyToken } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Protect all /admin/* routes except the login page itself
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
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

  return next();
});
