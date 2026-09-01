import React, { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Search, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { SearchModal } from "@/components/SearchModal";
import { ProductOptionsModal, SelectedProduct } from "@/components/ProductOptionsModal";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      to="/"
      className={`flex flex-col items-center leading-none transition-transform hover:scale-[1.02] ${
        tone === "light" ? "text-cream" : "text-ink"
      }`}
    >
      <span className="text-[8px] uppercase tracking-[0.3em] opacity-70">129 Fort St · Bulawayo</span>
      <span className="font-display text-lg sm:text-xl font-bold tracking-wide">THE COPPER CLEAVER</span>
      <span className="mt-0.5 text-[8.5px] uppercase tracking-[0.3em] text-brand font-semibold">✕ Butchery ✕</span>
    </Link>
  );
}

export const NAV_LINKS = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Products", to: "/products" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

export function Header() {
  const location = useLocation();
  const { openCart, subtotal, totalCount, formatPrice, currency, toggleCurrency } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/40 transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 rounded-full bg-cream/80 px-8 py-2.5 backdrop-blur border border-ink/10 lg:flex shadow-xs">
            {NAV_LINKS.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isActive ? "text-brand font-bold" : "text-ink/75 hover:text-brand"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4 text-ink">
            {/* Currency switcher */}
            <button
              onClick={toggleCurrency}
              className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-sand/60 hover:bg-sand border border-ink/10 transition-colors"
              title="Toggle USD / ZiG currency"
            >
              <span>{currency}</span>
            </button>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-ink/75 hover:text-brand transition-colors rounded-full hover:bg-ink/5 cursor-pointer"
              aria-label="Search butcher items"
            >
              <Search className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={openCart}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand/70 hover:bg-sand border border-ink/10 transition-colors group cursor-pointer"
              aria-label="Open meat cart"
            >
              <div className="relative">
                <ShoppingBag className="h-4 w-4 group-hover:text-brand transition-colors" />
                {totalCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 h-4 w-4 rounded-full bg-brand text-brand-foreground text-[9px] font-bold flex items-center justify-center animate-in zoom-in-50">
                    {totalCount}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-bold tracking-wide text-ink group-hover:text-brand transition-colors">
                {formatPrice(subtotal)}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-ink/80 hover:text-brand transition-colors lg:hidden rounded-md hover:bg-ink/5 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[60px] z-50 lg:hidden flex flex-col">
            {/* Backdrop */}
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
              aria-hidden="true"
            />

            {/* Drawer Content */}
            <div className="relative bg-white border-b-2 border-slate-300 shadow-2xl p-6 space-y-6 animate-in slide-in-from-top-4 duration-200">
              <div className="space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand block mb-3">
                  Navigation
                </span>
                {NAV_LINKS.map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-4 rounded-md text-sm font-bold uppercase tracking-[0.16em] transition-colors ${
                        isActive
                          ? "bg-red-50 text-brand border-2 border-brand"
                          : "text-slate-900 hover:bg-slate-100 hover:text-brand"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-70" />
                    </Link>
                  );
                })}
              </div>

              {/* Quick Details & Currency in Mobile Menu */}
              <div className="pt-4 border-t-2 border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-700 font-bold">Currency:</span>
                  <button
                    onClick={toggleCurrency}
                    className="font-extrabold text-brand uppercase tracking-wider px-3 py-1.5 rounded-md bg-[#f7f4ee] border-2 border-slate-300 cursor-pointer"
                  >
                    {currency} (Tap to Switch)
                  </button>
                </div>
                <a
                  href="tel:+263712851525"
                  className="font-extrabold text-brand text-xs hover:underline flex items-center gap-1.5"
                >
                  <span>📞</span> +263 712 851 525
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => {
          setSelectedProduct({
            id: prod.id,
            name: prod.name,
            price: prod.price,
            image: prod.image,
            options: [
              "Standard Cut",
              "Thick Braai Cut",
              "Stewing Cubes",
              "Fine Mince",
            ],
          });
        }}
      />

      {/* Product Options Modal from search selection */}
      <ProductOptionsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
