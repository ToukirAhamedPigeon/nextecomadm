import { clerkMiddleware, createRouteMatcher, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAuthRoute = createRouteMatcher(['/stores(.*)']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);
export default clerkMiddleware(async (auth, req) => {
    const client = await clerkClient();
    const {isSignedIn} = await client.authenticateRequest(req);
   //protect url access pages for sellers and admins

   if(isAuthRoute(req) && !isSignedIn){
        auth.protect({
            unauthenticatedUrl: process.env.NEXT_PUBLIC_SERVER_URL + "/sign-in"
        })
   }

   if(isAdminRoute(req) && (await auth()).sessionClaims?.metadata.role === undefined){
    return NextResponse.redirect(new URL('/forbidden', req.url));
   }

//    else
    return NextResponse.next();
})