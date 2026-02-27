import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isPublicRoute = createRouteMatcher(["/iniciar-sesion(.*)", "/registrarse(.*)"]);

export const onRequest = clerkMiddleware((auth, context, next) => {
  const { userId, protect } = auth();
  
  const isAuthRoute = isPublicRoute(context.request);
  
  if (isAuthRoute && userId) {
    return context.redirect("/");
  }
  
  if (!isAuthRoute) {
    protect();
  }
  
  return next();
});
