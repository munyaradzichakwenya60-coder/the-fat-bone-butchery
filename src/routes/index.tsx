import { createFileRoute } from "@tanstack/react-router";
import { Search, ShoppingBag, Instagram, Facebook, Twitter } from "lucide-react";

import heroBanner from "@/assets/hero-banner.jpg";
import illusPork from "@/assets/illus-pork.png";
import illusBeef from "@/assets/illus-beef.png";
import illusPoultry from "@/assets/illus-poultry.png";
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
import methodCowRear from "@/assets/method-cow-rear.jpg";
import methodCowsBanner from "@/assets/method-cows-banner.jpg";
import stepCut from "@/assets/step-cut.png";
import stepPack from "@/assets/step-pack.png";
import stepFresh from "@/assets/step-fresh.png";
import featLambChop from "@/assets/feat-lamb-chop.png";
import featLegShank from "@/assets/feat-leg-shank.png";
import featRoundSteak from "@/assets/feat-round-steak.png";
import { BrushImage } from "@/components/BrushImage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Fat Bone Butchery — Honest Cuts. Deep Flavor." },
      {
        name: "description",
        content:
          "Pasture-raised, high-grade meat butchered to order and delivered fresh. Build your box of grass-fed steaks, pork and poultry from The Fat Bone Butchery, Bulawayo.",
      },
      { property: "og:title", content: "The Fat Bone Butchery — Honest Cuts. Deep Flavor." },
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
  { title: "Pork Meat", copy: "100% natural meat and grass fed. GMO free.", img: illusPork },
  { title: "Beef Steak", copy: "100% natural meat and grass fed. GMO free.", img: illusBeef },
  { title: "Poultry", copy: "100% natural meat and grass fed. GMO free.", img: illusPoultry },
];

const PRODUCTS = [
  { img: pRibeye, name: "Grass-Fed Grass-Finished Top Sirloin (~8oz)", price: "$26.00", was: null, tag: null },
  { img: pStrip, name: "Grass-Fed Grass-Finished New York Strip", price: "$32.00", was: null, tag: null },
  { img: pMince, name: "Grass-Fed Grass-Finished Boneless Chuck (~1.5lb)", price: "$18.00", was: null, tag: null },
  { img: pFilet, name: "Grass-Fed Grass-Finished Filet Mignon (6oz)", price: "$41.00", was: "$52.00", tag: "Sale" },
];

const STEPS = [
  {
    n: "1",
    img: stepCut,
    alt: "Raw prime tomahawk steak cut with wooden handle butcher knife",
    title: "Cut to order",
    isScript: true,
    copy: "Our master butcher expertly cuts to your requirements for our skilled and experienced butcher.",
  },
  {
    n: "2",
    img: stepPack,
    alt: "Insulated cardboard delivery box with gel packs and vacuum packed meat cuts",
    title: "Packaged with care",
    isScript: false,
    copy: "The cuts are packaged into specially designed insulated boxes, with high-tech gel packs that keep the products cool for up to 48 hours on the road.",
  },
  {
    n: "3",
    img: stepFresh,
    alt: "Fresh cut raw steaks arranged on a wooden cutting board with rosemary herbs",
    title: "Delivered Fresh",
    isScript: false,
    copy: "Your order arrives with you perfectly chilled, always fresh. Unlike most other online butchers, we never freeze our meat.",
  },
];

const FEATURES = [
  {
    img: featLambChop,
    alt: "Responsibly raised meat and fish illustration",
    title: "Responsibly Raised Meat & Fish",
    copy: "100% pasture-raised and grass-fed. No added antibiotics or hormones, ever. GMO-free.",
  },
  {
    img: featLegShank,
    alt: "Sourced locally illustration",
    title: "Sourced Locally",
    copy: "We partner with local farms who commit to quality and ethical treatment of animals.",
  },
  {
    img: featRoundSteak,
    alt: "Complete flexibility illustration",
    title: "Complete Flexibility",
    copy: "FREE SHIPPING on every order. Pause, skip, or cancel anytime.",
  },
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
      <span className="text-[8px] uppercase tracking-[0.3em] opacity-70">129 Fort St · Bulawayo</span>
      <span className="font-display text-lg sm:text-xl font-bold tracking-wide">THE FAT BONE</span>
      <span className="mt-0.5 text-[8.5px] uppercase tracking-[0.3em] text-brand font-semibold">✕ Butchery ✕</span>
    </div>
  );
}

function BotanicalSprig({ className = "h-4 w-9 text-[#122b3e]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 52 20" fill="none" className={className}>
      <path
        d="M2 14.5 C16 13.5 32 9 49 5.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M10 13.8 C9 9 14 7 17.5 10.5 C15.5 12.8 12.5 13.8 10 13.8 Z"
        fill="currentColor"
      />
      <path
        d="M12 14.2 C13 18.5 18 18.5 18.5 15 C16.5 13.8 14 13.8 12 14.2 Z"
        fill="currentColor"
      />
      <path
        d="M21 11.5 C20 6.5 25 4.5 28.5 8 C26.5 10.3 23.5 11.5 21 11.5 Z"
        fill="currentColor"
      />
      <path
        d="M23 12 C24 16.2 29 16 29.5 12.5 C27.5 11.5 25 11.5 23 12 Z"
        fill="currentColor"
      />
      <path
        d="M32 9 C31 4 36 2 39.5 5.5 C37.5 7.8 34.5 9 32 9 Z"
        fill="currentColor"
      />
      <path
        d="M35 9.5 C36 13.5 40 13 41 10 C39 9 37 9 35 9.5 Z"
        fill="currentColor"
      />
      <path
        d="M43 6.8 C44 3.5 48 3.5 49.5 5 C47.5 6.5 45.5 6.8 43 6.8 Z"
        fill="currentColor"
      />
    </svg>
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
      <section className="relative w-full overflow-hidden bg-white">
        <div className="relative mx-auto aspect-[1024/569] min-h-[460px] w-full max-w-[1600px]">
          <img
            src={heroBanner}
            alt="Fresh butcher meat selection from farm to table"
            className="absolute inset-0 h-full w-full object-contain object-center"
          />
          {/* Card positioned right on the cutting board near tractor wheel */}
          <div className="absolute bottom-[4%] left-[14%] z-10 w-[85%] max-w-[340px] overflow-hidden bg-brand px-6 py-5 text-brand-foreground shadow-2xl sm:left-[16%] sm:max-w-[380px] sm:px-8 sm:py-6 md:left-[17%] md:max-w-[440px] md:px-9 md:py-7 lg:max-w-[470px]">
            {/* Geometric cube pattern on left side */}
            <svg
              className="pointer-events-none absolute left-0 top-0 h-full w-14 text-white/[0.12]"
              viewBox="0 0 56 240"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <pattern id="cube-pattern" width="28" height="32" patternUnits="userSpaceOnUse">
                <path d="M14 0 L28 8 L28 24 L14 32 L0 24 L0 8 Z" fill="none" stroke="currentColor" />
                <path d="M14 0 L14 16 L28 24" stroke="currentColor" />
                <path d="M14 16 L0 24" stroke="currentColor" />
              </pattern>
              <rect width="56" height="240" fill="url(#cube-pattern)" />
            </svg>

            {/* Top-right organic steak contour lines */}
            <svg
              className="pointer-events-none absolute right-0 top-0 h-36 w-36 text-white/[0.15] sm:h-44 sm:w-44"
              viewBox="0 0 160 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <ellipse cx="120" cy="40" rx="45" ry="32" transform="rotate(-15 120 40)" />
              <ellipse cx="120" cy="40" rx="32" ry="22" transform="rotate(-15 120 40)" />
              <ellipse cx="120" cy="40" rx="20" ry="12" transform="rotate(-15 120 40)" />
              <ellipse cx="120" cy="40" rx="10" ry="6" transform="rotate(-15 120 40)" />
              <path d="M40,110 Q90,70 160,120" strokeWidth="1.2" />
            </svg>

            <div className="relative pl-2 sm:pl-3">
              <h1 className="font-display text-2xl font-semibold leading-[1.12] text-white sm:text-3xl md:text-[36px]">
                From our farm to
                <br />
                your fork
              </h1>
              <p className="mt-2.5 text-[11px] text-white/90 sm:mt-3 sm:text-xs">
                High grade meat with great taste for every meal.
              </p>
              <div className="mt-4 sm:mt-6">
                <button className="relative overflow-hidden bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink shadow-sm transition-all hover:bg-cream hover:text-brand sm:px-7 sm:py-2.5 sm:text-[11px]">
                  <span className="absolute bottom-0 left-0 h-0 w-0 border-b-[8px] border-l-[8px] border-b-[#1e293b] border-l-transparent" />
                  Place Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((c) => (
            <div
              key={c.title}
              className="group relative flex min-h-[175px] items-center justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md cursor-pointer"
            >
              <div className="flex h-full w-[44%] items-center justify-start">
                <img
                  src={c.img}
                  alt={c.title}
                  className="max-h-[125px] w-full object-contain object-left transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="w-[56%] pl-3">
                <h3 className="text-xl font-bold tracking-tight text-[#0f2942] sm:text-2xl">
                  {c.title}
                </h3>
                <div className="my-2.5 h-[2px] w-6 bg-slate-300" />
                <p className="text-xs font-normal leading-relaxed text-slate-500">
                  {c.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Methods - Pasture-Raised Promise */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
        <div className="mx-auto flex max-w-[1560px] flex-col items-center justify-between gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8 xl:gap-12">
          {/* Left Flank Image with Distressed Torn/Brush Borders */}
          <div className="w-full sm:w-[220px] lg:w-[240px] xl:w-[270px] shrink-0 h-[280px] sm:h-[360px] lg:h-[400px] xl:h-[430px]">
            <BrushImage
              src={methodCowRear}
              alt="Pasture-raised cattle hindquarters and natural coat"
              className="h-full w-full"
              imgClassName="object-cover object-center"
            />
          </div>

          {/* Center Text Column */}
          <div className="flex max-w-[420px] shrink-0 flex-col items-start px-2 sm:px-4 lg:px-2 xl:px-4">
            <BotanicalSprig className="h-4 w-9 text-[#122b3e] mb-1.5" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c67c52]">
              OUR METHODS
            </span>
            <h2 className="mt-2.5 font-display text-3xl sm:text-[38px] lg:text-[42px] font-bold leading-[1.08] tracking-tight text-[#0e2638]">
              Pasture-Raised
              <br />
              Promise
            </h2>
            <p className="mt-3 font-display italic text-[13.5px] sm:text-[14.5px] text-[#1c364c] tracking-wide">
              Animal welfare is of the utmost importance to us.
            </p>
            <p className="mt-4.5 text-[11.5px] sm:text-[12px] leading-[1.75] text-[#555e6d]">
              That's why we only work with farms and processors that share in our
              passion for good animal husbandry. We promise every animal that comes
              in our shop has been raised on lush pastures, given a diverse natural diet,
              and raised without the use of hormones or antibiotics.
            </p>
            <div className="mt-7">
              <button className="group relative inline-flex items-center justify-center border border-[#0e2638] bg-transparent px-7 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#0e2638] transition-all duration-200 hover:bg-[#0e2638] hover:text-white cursor-pointer">
                <span className="absolute bottom-0 left-0 h-0 w-0 border-b-[8px] border-l-[8px] border-b-[#0e2638] border-l-transparent transition-colors group-hover:border-b-white" />
                MEET OUR FARMERS
              </button>
            </div>
          </div>

          {/* Right Wide Banner Image with Distressed Torn/Brush Borders */}
          <div className="w-full flex-1 min-w-0 h-[280px] sm:h-[360px] lg:h-[400px] xl:h-[430px]">
            <BrushImage
              src={methodCowsBanner}
              alt="Hereford and Black Angus cattle grazing in pasture"
              className="h-full w-full"
              imgClassName="object-cover object-[center_35%]"
            />
          </div>
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

      {/* Steps - From block to box to you */}
      <section className="relative overflow-hidden bg-white">
        {/* Top light area / Bottom ecru area split */}
        <div className="relative pt-6 pb-16 sm:pb-20 lg:pb-24">
          {/* Ecru textured background filling the bottom part */}
          <div className="absolute inset-x-0 bottom-0 top-[100px] sm:top-[120px] lg:top-[135px] bg-[#ede7dc]">
            {/* Subtle organic speckle/paper grain texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: `radial-gradient(#4d5d6c 0.85px, transparent 0.85px), radial-gradient(#2c3740 0.5px, #ede7dc 0.5px)`,
                backgroundSize: "36px 36px, 84px 84px",
                backgroundPosition: "0 0, 28px 42px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
            <div className="grid items-start gap-8 lg:grid-cols-[270px_1fr] xl:grid-cols-[300px_1fr]">
              {/* Left title column */}
              <div className="pt-28 sm:pt-32 lg:pt-36">
                <h2 className="font-sans text-3xl font-bold leading-[1.12] tracking-tight text-[#4e5e6e] sm:text-4xl lg:text-[40px]">
                  From block to
                  <br />
                  box to you
                </h2>
              </div>

              {/* 3 Steps columns */}
              <div className="grid gap-8 sm:grid-cols-3 lg:gap-10 xl:gap-14">
                {STEPS.map((s) => (
                  <div key={s.n} className="flex flex-col">
                    {/* Step product image spanning across the background boundary */}
                    <div className="flex h-[150px] sm:h-[170px] lg:h-[185px] w-full items-end justify-start overflow-visible">
                      <img
                        src={s.img}
                        alt={s.alt}
                        className="max-h-full max-w-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    {/* Number & Title & Copy */}
                    <div className="mt-4 flex items-start gap-3 sm:gap-4">
                      <span className="font-sans text-[62px] font-extrabold leading-[0.82] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)] sm:text-[70px] lg:text-[78px] select-none">
                        {s.n}
                      </span>
                      <div className="flex-1 pt-0.5">
                        {s.isScript ? (
                          <h3 className="font-script text-[26px] italic leading-tight text-[#4e5e6e] sm:text-[29px] lg:text-[32px]">
                            {s.title}
                          </h3>
                        ) : (
                          <h3 className="font-sans text-[14px] font-bold leading-snug text-[#4e5e6e] sm:text-[15px]">
                            {s.title}
                          </h3>
                        )}
                        <p className="mt-2 text-[11px] sm:text-[11.5px] leading-[1.65] text-[#637282] font-normal">
                          {s.copy}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              are breeds are slower to fatten and smaller in frame than commodity animals. Longhorn,
              Tamworth, Dexter and native cattle carry fat differently, marble more finely, and reward
              a butcher willing to work with the whole carcass with honest care.
            </p>
            <p className="mt-4">
              We select the best livestock from farms committed to quality and animal welfare. That means
              our range delivers exceptional freshness and flavor in every cut.
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3 items-center">
          <div className="overflow-hidden bg-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <img
              src={g1}
              alt="Artisanal beef ribs hanging in a rustic butcher shop"
              width={800}
              height={600}
              loading="lazy"
              className="h-72 lg:h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden bg-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:-mt-6 sm:-mb-6">
            <img
              src={g2}
              alt="Beef carcasses dry-aging on overhead rails in cold locker"
              width={600}
              height={800}
              loading="lazy"
              className="h-80 lg:h-96 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden bg-slate-100 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <img
              src={g3}
              alt="Master butcher wrapping seasoned beef roast in wax butcher paper"
              width={800}
              height={600}
              loading="lazy"
              className="h-72 lg:h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Features - Value Pillars */}
      <section className="border-t border-slate-200/80 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:grid-cols-3 lg:gap-16">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <div className="flex h-20 w-24 items-center justify-center">
                <img
                  src={f.img}
                  alt={f.alt}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="mt-5 font-display text-xl sm:text-[22px] font-bold text-[#143048] tracking-tight">
                {f.title}
              </h3>
              <p className="mt-3 max-w-[300px] text-[12px] sm:text-[13px] leading-[1.65] text-slate-500 font-normal">
                {f.copy}
              </p>
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
            Reverse-seared rib of beef, slow-braised shin, Sunday roast — written by our head
            butcher for real kitchens, with timings that actually work.
          </p>
          <div className="mt-8 self-start">
            <Btn variant="light">Read All</Btn>
          </div>
        </div>
        <img
          src={recipes}
          alt="Master butcher slicing fresh beef tenderloin on cutting board"
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
              <h2 className="font-display text-2xl">Share your #FatBone experience!</h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                We are all about lifelong tastes, honest cuts, and deep flavor. Tag us and we might just
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
                alt="Customer cooking with The Fat Bone Butchery cuts"
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
            { title: "Our Company", links: ["About Us", "Our Farmers", "Careers", "Our Butchers", "The Fat Bone"] },
            { title: "Customer Service", links: ["How to Order", "Delivery Info", "FAQ", "Returns", "Privacy Policy"] },
            { title: "Need Assistance?", links: ["hello@fatbonebutchery.com", "129 Fort Street, Bulawayo", "+263 712 851 525"] },
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
          <p className="text-xs text-muted-foreground">© 2026 The Fat Bone Butchery. All rights reserved.</p>
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
