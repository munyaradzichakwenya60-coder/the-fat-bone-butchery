import React, { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/lib/cart-context";
import { ProductOptionsModal, SelectedProduct } from "@/components/ProductOptionsModal";

import pRibeye from "@/assets/p-ribeye.jpg";
import pStrip from "@/assets/p-strip.jpg";
import pMince from "@/assets/p-mince.jpg";
import pFilet from "@/assets/p-filet.jpg";
import boxRegular from "@/assets/box-regular.jpg";
import boxLarge from "@/assets/box-large.jpg";
import boxPremium from "@/assets/box-premium.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Cuts — The Copper Cleaver Butchery | Bulawayo" },
      {
        name: "description",
        content:
          "Explore fresh beef cuts, farm chicken, ground mince, traditional boerewors, and curated meat boxes at The Copper Cleaver Butchery, Bulawayo.",
      },
    ],
  }),
  component: ProductsPage,
});

const ALL_PRODUCTS = [
  {
    id: "t-bone",
    category: "Steaks",
    img: pRibeye,
    name: "Prime Aged T-Bone Steak (~500g)",
    price: 26.0,
    was: null,
    tag: "Butcher Choice",
    options: ["Thick Braai Cut (1.5 inch)", "Standard Cut (1 inch)", "2x 250g Portions"],
  },
  {
    id: "ny-strip",
    category: "Steaks",
    img: pStrip,
    name: "New York Strip / Sirloin Steak",
    price: 32.0,
    was: null,
    tag: null,
    options: ["Standard Cut", "Thick Braai Cut", "Minute Steaks (Thin)"],
  },
  {
    id: "beef-mince",
    category: "Mince & Stew",
    img: pMince,
    name: "Fresh Ground Beef Chuck Mince (~1.5lb)",
    price: 18.0,
    was: null,
    tag: null,
    options: ["Fine Mince (Lean)", "Coarse Grind Mince", "500g Separate Bags"],
  },
  {
    id: "filet-mignon",
    category: "Steaks",
    img: pFilet,
    name: "Selected Filet Mignon & Tenderloin",
    price: 41.0,
    was: "$52.00",
    tag: "Sale",
    options: ["Center-Cut Medallions", "Chateaubriand Roast", "Butterflied Steaks"],
  },
  {
    id: "boerewors",
    category: "Boerewors",
    img: pRibeye,
    name: "Traditional Bulawayo Beef Boerewors (1kg)",
    price: 14.0,
    was: null,
    tag: "Traditional",
    options: ["Classic Spiced Coil", "Thick Braai Wheels", "Mild Garlic & Coriander"],
  },
  {
    id: "box-regular",
    category: "Hampers",
    img: boxRegular,
    name: "Family Weekly Meat Hamper (6–8 lbs)",
    price: 45.0,
    was: null,
    tag: "Top Value",
    options: ["Mixed Selection (Beef + Chicken)", "All Beef Box", "Stew & Mince Box"],
  },
  {
    id: "box-large",
    category: "Hampers",
    img: boxLarge,
    name: "Ultimate Weekend Braai Hamper (12–16 lbs)",
    price: 68.0,
    was: null,
    tag: "Braai Pack",
    options: ["Braai Meat & Boerewors Pack", "Steaks & Ribs Hamper", "Custom Cutting"],
  },
  {
    id: "box-premium",
    category: "Hampers",
    img: boxPremium,
    name: "Diaspora Bulawayo Monthly Box (22–28 lbs)",
    price: 115.0,
    was: null,
    tag: "Diaspora Favorite",
    options: ["Delivered to Family in Bulawayo", "Vacuum Sealed 1kg Packs", "Assorted Prime Cuts"],
  },
];

const CATEGORIES = ["All Cuts", "Steaks", "Mince & Stew", "Boerewors", "Hampers"];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <span className="h-px w-6 bg-brand/40" />
      <span className="eyebrow">{children}</span>
      <span className="h-px w-6 bg-brand/40" />
    </div>
  );
}

function ProductsPage() {
  const { formatPrice } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All Cuts");
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All Cuts") return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Header Banner */}
      <section className="bg-cream py-16 sm:py-20 border-b border-border text-center">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow>OUR BUTCHER SELECTION</Eyebrow>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
            Fresh Meat Cuts & Boxes
          </h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            High grade meat with great taste for every meal. Hand-selected, aged, and prepared daily at 129 Fort Street, Bulawayo.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] transition-all cursor-pointer ${
                    isSelected
                      ? "bg-brand text-white shadow-sm border-2 border-brand font-extrabold"
                      : "bg-white text-slate-800 hover:bg-slate-100 border-2 border-slate-300 hover:border-slate-500"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((p) => (
            <article key={p.id} className="group flex flex-col justify-between bg-white border-2 border-slate-200 p-4 rounded-md shadow-xs hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden bg-slate-100 rounded-sm">
                {p.tag && (
                  <span className="absolute right-3 top-3 z-10 bg-brand px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-sm rounded-xs">
                    {p.tag}
                  </span>
                )}
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="pt-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-brand block mb-1">
                    {p.category}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">{p.name}</h3>
                  <p className="mt-2 text-sm sm:text-base">
                    {p.was && (
                      <span className="mr-2 text-slate-400 line-through font-medium">{p.was}</span>
                    )}
                    <span className="font-extrabold text-brand text-base sm:text-lg">{formatPrice(p.price)}</span>
                  </p>
                </div>

                <div className="mt-5">
                  <button
                    onClick={() =>
                      setSelectedProduct({
                        id: p.id,
                        name: p.name,
                        price: p.price,
                        image: p.img,
                        tag: p.tag,
                        options: p.options,
                      })
                    }
                    className="inline-flex w-full items-center justify-center bg-brand px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-white hover:bg-ink transition-colors cursor-pointer rounded-sm shadow-xs"
                  >
                    Select Options & Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />

      {/* Product Options Modal */}
      <ProductOptionsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
