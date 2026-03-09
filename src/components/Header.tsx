"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Writing", path: "/writing" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, profile, loading, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.path
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
          {profile?.role === "Admin" && (
            <Link
              href="/admin"
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname.startsWith("/admin")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Admin
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {!loading && (
            <>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/login"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    pathname === "/login"
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  Sign In
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

