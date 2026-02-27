/// <reference types="astro/client" />
/// <reference types="@clerk/astro/env" />

import type { Auth, CurrentUser } from "@clerk/astro/server";

declare namespace AstroLocals {
  interface Locals {
    auth: Auth;
    currentUser: CurrentUser;
  }
}
