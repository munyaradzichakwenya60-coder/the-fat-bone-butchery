import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
      { title: "Products & Cuts — The Fat Bone Butchery | Bulawayo" },
      {
        name: "description",
        content:
          "Explore fresh beef cuts, farm chicken, ground mince, traditional boerewors, and curated meat boxes at The Fat Bone Butchery.",
      },
    ],
  }),
  component: ProductsPage,
});

const PRODUCTS = [
  { img: pRibeye, name: "Prime Aged T-Bone Steak (~8oz)", price: "$26.00", was: null, tag: "Butcher Choice" },
  { img: pStrip, name: "New York Strip / Sirloin Cut", price: "$32.00", was: null, tag: null },
  { img: pMince, name: "Fresh Ground Beef Chuck Mince (~1.5lb)", price: "$18.00", was: null, tag: null },
  { img: pFilet, name: "Selected Filet Mignon & Tenderloin", price: "$41.00", was: "$52.00", tag: "Sale" },
  { img: boxRegular, name: "Family Weekly Meat Hamper", price: "$45.00", was: null, tag: "Top Value" },
  { img: boxLarge, name: "Ultimate Weekend Braai Hamper", price: "$68.00", was: null, tag: "Braai Pack" },
  { img: boxPremium, name: "Diaspora Bulawayo Monthly Box", price: "$115.00", was: null, tag: "Diaspora" },
  { img: pRibeye, name: "Traditional Champion Boerewors (1kg)", price: "$14.00", was: null, tag: "Traditional" },
];

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Header Banner */}
      <section className="bg-cream py-16 border-b border-border text-center">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow>OUR BUTCHER SELECTION</Eyebrow>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
            Fresh Meat Cuts & Boxes
          </h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            High grade meat with great taste for every meal. Hand-selected and prepared daily at 129 Fort Street, Bulawayo.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="group flex flex-col justify-between">
              <div className="relative overflow-hidden bg-secondary">
                {p.tag && (
                  <span className="absolute right-3 top-3 z-10 bg-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-foreground">
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
                  <h3 className="font-display text-base leading-snug">{p.name}</h3>
                  <p className="mt-2 text-sm">
                    {p.was && (
                      <span className="mr-2 text-muted-foreground line-through">{p.was}</span>
                    )}
                    <span className="font-semibold text-brand">{p.price}</span>
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://wa.me/263712851525?text=Hello%20The%20Fat%20Bone%20Butchery,%20I%20would%20like%20to%20order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center bg-brand px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-foreground hover:bg-ink transition-colors"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
