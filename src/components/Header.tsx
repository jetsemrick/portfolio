"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Writing", path: "/writing" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        </nav>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-transparent text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800 cursor-pointer"
          aria-label="Toggle theme"
        >
          {mounted && (
            theme === "dark" ? (
              <Moon size={16} />
            ) : (
              <Sun size={16} />
            )
          )}
        </button>
      </div>
    </header>
  );
}

