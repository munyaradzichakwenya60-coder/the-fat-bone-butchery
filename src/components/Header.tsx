import React from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Search, ShoppingBag } from "lucide-react";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      to="/"
      className={`flex flex-col items-center leading-none ${tone === "light" ? "text-cream" : "text-ink"}`}
    >
      <span className="text-[8px] uppercase tracking-[0.3em] opacity-70">129 Fort St · Bulawayo</span>
      <span className="font-display text-lg sm:text-xl font-bold tracking-wide">THE FAT BONE</span>
      <span className="mt-0.5 text-[8.5px] uppercase tracking-[0.3em] text-brand font-semibold">✕ Butchery ✕</span>
    </Link>
  );
}

const NAV = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Products", to: "/products" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 rounded-full bg-cream/80 px-8 py-2.5 backdrop-blur lg:flex">
          {NAV.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.name}
                to={item.to}
                className={`text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  isActive ? "text-brand font-bold" : "text-ink/70 hover:text-brand"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-5 text-ink">
          <Search className="h-4 w-4 cursor-pointer hover:text-brand transition-colors" />
          <div className="flex items-center gap-2 cursor-pointer hover:text-brand transition-colors">
            <ShoppingBag className="h-4 w-4" />
            <span className="text-[11px] font-semibold tracking-wide">$0.00</span>
          </div>
        </div>
      </div>
    </header>
  );
}
