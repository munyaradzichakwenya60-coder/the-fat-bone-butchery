import React, { useState, useMemo } from "react";
import { X, Search, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import pRibeye from "@/assets/p-ribeye.jpg";
import pStrip from "@/assets/p-strip.jpg";
import pMince from "@/assets/p-mince.jpg";
import pFilet from "@/assets/p-filet.jpg";
import boxRegular from "@/assets/box-regular.jpg";
import boxLarge from "@/assets/box-large.jpg";
import boxPremium from "@/assets/box-premium.jpg";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: any) => void;
}

const CATALOG_ITEMS = [
  { id: "top-sirloin", name: "Grass-Fed Grass-Finished Top Sirloin (~8oz)", price: 26.0, category: "Beef", image: pRibeye },
  { id: "ny-strip", name: "Grass-Fed Grass-Finished New York Strip", price: 32.0, category: "Beef", image: pStrip },
  { id: "boneless-chuck", name: "Grass-Fed Grass-Finished Boneless Chuck (~1.5lb)", price: 18.0, category: "Beef", image: pMince },
  { id: "filet-mignon", name: "Grass-Fed Grass-Finished Filet Mignon (6oz)", price: 41.0, category: "Beef", image: pFilet },
  { id: "tbone", name: "Dry-Aged T-Bone Steak (~500g)", price: 24.5, category: "Beef", image: pRibeye },
  { id: "boerewors", name: "Artisanal Bulawayo Beef Boerewors (1kg)", price: 12.5, category: "Sausage", image: pMince },
  { id: "pork-chops", name: "Grain-Fed Tender Pork Chops (1kg)", price: 14.0, category: "Pork", image: pStrip },
  { id: "whole-chicken", name: "Free-Range Farm Chicken (~1.4kg)", price: 9.5, category: "Poultry", image: pFilet },
  { id: "box-regular", name: "Regular Butcher Box (6–8 lbs)", price: 45.0, category: "Box", image: boxRegular },
  { id: "box-large", name: "Large Family Butcher Box (12–16 lbs)", price: 85.0, category: "Box", image: boxLarge },
  { id: "box-premium", name: "Premium Connoisseur Box (22–28 lbs)", price: 140.0, category: "Box", image: boxPremium },
];

export function SearchModal({ isOpen, onClose, onSelectProduct }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const { formatPrice } = useCart();

  const results = useMemo(() => {
    if (!query.trim()) return CATALOG_ITEMS.slice(0, 6);
    const q = query.toLowerCase();
    return CATALOG_ITEMS.filter(
      (item) => item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity"
      />

      <div className="relative bg-paper border border-ink/20 shadow-2xl max-w-xl w-full rounded-sm overflow-hidden z-10 animate-in fade-in-50 zoom-in-95 duration-200">
        <div className="p-4 border-b border-ink/10 flex items-center gap-3 bg-cream/70">
          <Search className="h-5 w-5 text-brand" />
          <input
            type="text"
            placeholder="Search steaks, pork, chicken, boerewors, or boxes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent border-none text-ink placeholder:text-ink/40 text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-ink/50 hover:text-ink transition-colors rounded-full hover:bg-ink/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-ink/10">
          {results.length === 0 ? (
            <div className="py-12 text-center text-ink/60">
              <p className="text-sm">No butchery items match "{query}"</p>
              <p className="text-xs text-ink/40 mt-1">Try searching for "Steak", "Mince", "Box", or "Boerewors"</p>
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                className="py-3 flex items-center justify-between gap-4 cursor-pointer hover:bg-sand/40 p-2 rounded transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded border border-ink/10"
                  />
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-brand block">
                      {item.category}
                    </span>
                    <h5 className="font-display text-sm font-semibold text-ink group-hover:text-brand transition-colors">
                      {item.name}
                    </h5>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-ink">{formatPrice(item.price)}</span>
                  <div className="p-1.5 rounded-full bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-3 bg-sand/30 border-t border-ink/10 text-[11px] text-center text-ink/50">
          Tip: You can order any custom cut via our WhatsApp line at <span className="font-semibold text-brand">+263 712 851 525</span>
        </div>
      </div>
    </div>
  );
}
