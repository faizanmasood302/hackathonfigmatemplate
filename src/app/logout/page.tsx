"use client";
import { useLogout } from "@/utils/auth";

export default function Logout() {
  const logout = useLogout();

  return (
    
      <button
        onClick={logout}
        className="bg-orange-500 px-4 py-2 rounded-md"
      >
        Logout
      </button>
  );
}
