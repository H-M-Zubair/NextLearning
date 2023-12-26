import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
export function middleware(request: NextRequest) {

  const cookiesStore = cookies();
  const token = cookiesStore.get("token");
  console.log(token)
  

  if (token) {
    if(request.nextUrl.pathname!="/productlist"){
    return NextResponse.redirect(new URL("/productlist", request.url));
    }
  } else if (!token)
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config={
  matcher:"/productlist"
}
