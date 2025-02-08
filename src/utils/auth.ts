"use client";

import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  const logout = () => {
    deleteCookie("auth_token"); // Remove authentication token
    router.push("/signin"); // Redirect to login page
  };

  return logout;
}
