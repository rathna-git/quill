import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// here we arementioning which routes are public. 
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)'
])

// here we are protecting the routes that are not public. 
export default clerkMiddleware(async (auth, req) => {
   if (!isPublicRoute(req)) {
     await auth.protect()
   }
})

// here we are configuring the middleware to run on all routes. 
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}