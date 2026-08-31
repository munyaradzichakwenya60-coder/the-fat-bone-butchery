import { createFileRoute } from "@tanstack/react-router";
import { Search, ShoppingBag, Beef, Truck, Leaf, Instagram, Facebook, Twitter } from "lucide-react";

import heroMeat from "@/assets/hero-meat.jpg";
import cow from "@/assets/cow.jpg";
import pRibeye from "@/assets/p-ribeye.jpg";
import pStrip from "@/assets/p-strip.jpg";
import pMince from "@/assets/p-mince.jpg";
import pFilet from "@/assets/p-filet.jpg";
import butcherShop from "@/assets/butcher-shop.jpg";
import recipes from "@/assets/recipes.jpg";
import boxRegular from "@/assets/box-regular.jpg";
import boxLarge from "@/assets/box-large.jpg";
import boxPremium from "@/assets/box-premium.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meat House — Grass-Fed Meat Boxes From Our Farm To Your Fork" },
      {
        name: "description",
        content:
          "Pasture-raised, rare-breed meat butchered to order and delivered fresh. Build your box of grass-fed steaks, pork and poultry from small British farms.",
      },
      { property: "og:title", content: "Meat House — Grass-Fed Meat Boxes" },
      {
        property: "og:description",
        content:
          "Pasture-raised, rare-breed meat butchered to order and delivered fresh to your door.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Home", "About Us", "Products", "Blog", "Pages", "Contact"];

const CATEGORIES = [
  { title: "Pork Meat", copy: "Free-range heritage pork, dry-aged and hand-cut.", icon: Ham },
  { title: "Beef Steak", copy: "Grass-fed native breeds, aged a minimum of 28 days.", icon: Beef },
  { title: "Poultry", copy: "Slow-grown birds raised outdoors on open pasture.", icon: Drumstick },

];

const PRODUCTS = [
  { img: pRibeye, name: "Grass-Fed Grass-Finished Top Sirloin (~8oz)", price: "$26.00", was: null, tag: null },
  { img: pStrip, name: "Grass-Fed Grass-Finished New York Strip", price: "$32.00", was: null, tag: null },
  { img: pMince, name: "Grass-Fed Grass-Finished Boneless Chuck (~1.5lb)", price: "$18.00", was: null, tag: null },
  { img: pFilet, name: "Grass-Fed Grass-Finished Filet Mignon (6oz)", price: "$41.00", was: "$52.00", tag: "Sale" },
];

const STEPS = [
  { n: "1", title: "Cut to order", copy: "Your box is butchered the day it ships — never cut weeks ahead and frozen into anonymity." },
  { n: "2", title: "Packed with care", copy: "Vacuum-sealed in recyclable paper-lined boxes with wool insulation and plant-based ice." },
  { n: "3", title: "Delivered fresh", copy: "Next-day chilled delivery, tracked to the hour, with a window you actually choose." },
];

const FEATURES = [
  { icon: Beef, title: "Responsibly Raised Meat & Fish", copy: "100% pasture-raised and grass-fed. No antibiotics, no hormones, ever." },
  { icon: Leaf, title: "Sourced Locally", copy: "We partner with 34 small British family farms within a day's drive of the cutting room." },
  { icon: Truck, title: "Complete Flexibility", copy: "Free shipping over $99. Skip, pause or cancel your box at any time." },
];

const BOXES = [
  { img: boxRegular, name: "Regular Box", feeds: "Feeds 1–2 people", weight: "6–8 lbs of meat", price: "$6.25", featured: false },
  { img: boxLarge, name: "Large Box", feeds: "Feeds 3–5 people", weight: "12–16 lbs of meat", price: "$5.85", featured: true },
  { img: boxPremium, name: "Premium Box", feeds: "Feeds 6–8 people", weight: "22–28 lbs of meat", price: "$5.40", featured: false },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-6 bg-brand/40" />
      <span className="eyebrow">{children}</span>
      <span className="h-px w-6 bg-brand/40" />
    </div>
  );
}

function Btn({
  children,
  variant = "solid",
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors";
  const styles = {
    solid: "bg-brand text-brand-foreground hover:bg-ink",
    outline: "border border-ink/25 text-ink hover:border-brand hover:text-brand",
    light: "bg-cream text-brand hover:bg-brand hover:text-brand-foreground",
  } as const;
  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}

function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div
      className={`flex flex-col items-center leading-none ${tone === "light" ? "text-cream" : "text-ink"}`}
    >
      <span className="text-[9px] uppercase tracking-[0.3em] opacity-70">Est. 1974</span>
      <span className="font-display text-xl tracking-wide">MEAT HOUSE</span>
      <span className="mt-0.5 text-[9px] uppercase tracking-[0.3em] text-brand">✕ Butchery ✕</span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo />
          <nav className="hidden items-center gap-8 rounded-full bg-background/80 px-8 py-3 backdrop-blur lg:flex">
            {NAV.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-brand"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5 text-ink">
            <Search className="h-4 w-4" />
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span className="text-[11px] font-semibold tracking-wide">$0.00</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="relative mx-auto grid max-w-[1600px] items-center gap-8 pt-32 lg:grid-cols-[1fr_1.15fr]">
          <div className="px-6 pb-20 lg:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
            <div className="max-w-md bg-brand p-10 text-brand-foreground">
              <h1 className="font-display text-4xl leading-tight md:text-5xl">
                From our farm
                <br />
                to your fork
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-brand-foreground/80">
                Special holiday products now available for pick up. Rare-breed meat, cut to order
                by our butchers and delivered chilled.
              </p>
              <div className="mt-7">
                <Btn variant="light">Place Order Now</Btn>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroMeat}
              alt="Raw grass-fed beef cubes on a plate with peppercorns, garlic and thyme"
              width={1600}
              height={1008}
              className="h-[420px] w-full object-cover lg:h-[640px]"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 border border-dashed border-border p-6 md:grid-cols-3">
          {CATEGORIES.map((c) => (
            <div
              key={c.title}
              className="flex items-center gap-5 border border-border bg-background p-6 transition-colors hover:border-brand"
            >
              <span className="text-4xl grayscale">{c.icon}</span>
              <div>
                <h3 className="font-display text-lg">{c.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pasture-raised promise */}
      <section className="relative bg-cream">
        <div className="mx-auto grid max-w-[1500px] items-center lg:grid-cols-2">
          <div className="relative">
            <img
              src={cow}
              alt="Hereford cow standing in a dark pasture"
              width={1400}
              height={900}
              loading="lazy"
              className="h-[380px] w-full object-cover lg:h-[520px]"
            />
            <div className="mx-6 -mt-24 max-w-md bg-background p-10 lg:absolute lg:right-[-18%] lg:top-1/2 lg:m-0 lg:-translate-y-1/2">
              <Eyebrow>Our Method</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                Pasture-Raised
                <br />
                Promise
              </h2>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Animal welfare is the utmost important to us
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Every animal we sell has spent its whole life outdoors on grass, moved between
                paddocks by farmers we know by name. No feedlots. No routine antibiotics. Slower
                growing, better living — and a depth of flavour you can taste in the pan.
              </p>
              <div className="mt-7">
                <Btn variant="outline">Meet Our Farmers</Btn>
              </div>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* Recommended */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Shop the Cuts</Eyebrow>
          <h2 className="mt-4 font-display text-4xl">Recommended For You</h2>
          <p className="mt-2 text-sm text-muted-foreground">Fresh Meat Products</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="group">
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
              <h3 className="mt-5 font-display text-base leading-snug">{p.name}</h3>
              <p className="mt-2 text-sm">
                {p.was && (
                  <span className="mr-2 text-muted-foreground line-through">{p.was}</span>
                )}
                <span className="font-semibold text-brand">{p.price}</span>
              </p>
              <div className="mt-4">
                <Btn>Select Options</Btn>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-sand py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.7fr_2fr]">
          <h2 className="font-display text-3xl leading-tight md:text-4xl">
            From block
            <br />
            to box to you
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n}>
                <span className="font-display text-5xl text-brand/30">{s.n}</span>
                <h3 className="mt-3 font-display text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rare breeds */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Provenance</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              Rare-breeds Sourced
              <br />
              from Small Farms
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.14em] text-muted-foreground">
              Where meat comes from
            </p>
            <div className="mt-7">
              <Btn variant="outline">Learn More</Btn>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground">
            <p>
              <span className="float-left mr-3 font-display text-6xl leading-none text-ink">R</span>
              are breeds are slower to fatten and smaller in frame than the commodity animals that
              fill most supermarket shelves — which is exactly why almost nobody farms them any
              more. Longhorn, Tamworth, Dexter and Hebridean carry fat differently, marble more
              finely, and reward a butcher willing to work with the whole carcass rather than four
              fashionable cuts.
            </p>
            <p className="mt-4">
              We buy whole animals from farms that keep herds in the dozens, not the thousands. That
              means our range shifts with the seasons, and occasionally a cut sells out entirely. We
              think that's a feature. It keeps our farmers viable and our standards honest.
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <img src={g1} alt="Beef ribs hanging in a rustic butchery" width={700} height={700} loading="lazy" className="h-64 w-full object-cover sm:mt-10" />
          <img src={g2} alt="Beef carcasses dry-aging in a cold locker" width={700} height={700} loading="lazy" className="h-72 w-full object-cover" />
          <img src={g3} alt="Butcher wrapping a beef roast in butcher paper" width={700} height={700} loading="lazy" className="h-64 w-full object-cover sm:mt-10" />
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="text-center">
              <f.icon className="mx-auto h-8 w-8 text-brand" strokeWidth={1.25} />
              <h3 className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em]">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Refer a friend */}
      <section className="grid lg:grid-cols-2">
        <img
          src={butcherShop}
          alt="Butcher serving a customer at the shop counter"
          width={1200}
          height={900}
          loading="lazy"
          className="h-80 w-full object-cover lg:h-full"
        />
        <div className="flex flex-col items-center justify-center bg-sand px-8 py-20 text-center">
          <Eyebrow>Give $20, Get $20</Eyebrow>
          <h2 className="mt-4 font-display text-4xl">Refer a Friend</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Give a friend $20 off their first order and we'll drop $20 into your account the moment
            they check out. No limit on how many you send.
          </p>
          <div className="mt-7">
            <Btn>Get My Link</Btn>
          </div>
        </div>
      </section>

      {/* Boxes */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Our Boxes</Eyebrow>
          <h2 className="mt-4 font-display text-4xl">Choose size of box</h2>
          <p className="mt-2 text-sm text-muted-foreground">We only offer the best</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BOXES.map((b) => (
            <div
              key={b.name}
              className={`flex flex-col items-center p-8 text-center ${b.featured ? "bg-sand" : "bg-cream"}`}
            >
              <img
                src={b.img}
                alt={`${b.name} selection of meat cuts`}
                width={700}
                height={560}
                loading="lazy"
                className="h-44 w-full object-contain mix-blend-multiply"
              />
              <h3 className="mt-6 font-display text-2xl">{b.name}</h3>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {b.feeds}
              </p>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {b.weight}
              </p>
              <p className="mt-4 text-sm font-semibold text-brand">Only {b.price} / meal</p>
              <div className="mt-6">
                <Btn>Build Your Box</Btn>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Every box is butchered to order and shipped chilled the same week. Skip a delivery,
                swap cuts, or cancel any time without a phone call.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recipes */}
      <section className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center bg-brand px-10 py-20 text-brand-foreground lg:px-16">
          <h2 className="font-display text-4xl leading-tight">
            Recipes that'll make
            <br />
            your mouth water
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-foreground/80">
            Reverse-seared rib of beef, slow-braised shin, Sunday porchetta — written by our head
            butcher for real kitchens, with timings that actually work.
          </p>
          <div className="mt-8 self-start">
            <Btn variant="light">Read All</Btn>
          </div>
        </div>
        <img
          src={recipes}
          alt="Sliced roast beef on a plate with red wine on a rustic table"
          width={1400}
          height={900}
          loading="lazy"
          className="h-80 w-full object-cover lg:h-full"
        />
      </section>

      {/* Social */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl">Share your #MeatHouse experience!</h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                We are all about lifelong tastes, honest and better. Tag us and we might just
                feature your cook.
              </p>
            </div>
            <Btn variant="outline">Follow Us</Btn>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[g3, g1, recipes, butcherShop].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Customer cooking with Meat House cuts"
                width={700}
                height={700}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="font-display text-3xl">Subscribe to our newsletter</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign up to get $10 off your first order
          </p>
          <form className="mt-7 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="First name"
              className="flex-1 border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
            />
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
            />
            <Btn>Subscribe</Btn>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <Logo />
          {[
            { title: "Our Company", links: ["About Us", "Our Farmers", "Careers", "Our Butchers", "Meat House"] },
            { title: "Customer Service", links: ["How to Order", "Delivery Info", "FAQ", "Returns", "Privacy Policy"] },
            { title: "Need Assistance?", links: ["hello@meathouse.com", "184 Water Road, St Marys Park", "+1 (415) 555-0142"] },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em]">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-brand">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-border px-6 py-6">
          <p className="text-xs text-muted-foreground">© 2026 Meat House. All rights reserved.</p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Instagram className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
            <Twitter className="h-4 w-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
