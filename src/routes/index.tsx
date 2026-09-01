import React, { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search, ShoppingBag, Instagram, Facebook, Twitter, Check, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BrushImage } from "@/components/BrushImage";
import { useCart } from "@/lib/cart-context";
import { ProductOptionsModal, SelectedProduct } from "@/components/ProductOptionsModal";
import { ReferralModal } from "@/components/ReferralModal";

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

const CATEGORIES = [
  { id: "pork", title: "Pork Meat", copy: "100% natural meat and grass fed. GMO free.", img: illusPork, price: 14.0 },
  { id: "beef", title: "Beef Steak", copy: "100% natural meat and grass fed. GMO free.", img: illusBeef, price: 26.0 },
  { id: "poultry", title: "Poultry", copy: "100% natural meat and grass fed. GMO free.", img: illusPoultry, price: 9.5 },
];

const PRODUCTS = [
  {
    id: "top-sirloin",
    img: pRibeye,
    name: "Grass-Fed Grass-Finished Top Sirloin (~8oz)",
    priceNum: 26.0,
    price: "$26.00",
    was: null,
    tag: null,
    options: ["Standard Cut (~1 inch)", "Thick Braai Cut (1.5 inch)", "Stewing Cubes", "Whole Loin Piece"],
  },
  {
    id: "ny-strip",
    img: pStrip,
    name: "Grass-Fed Grass-Finished New York Strip",
    priceNum: 32.0,
    price: "$32.00",
    was: null,
    tag: null,
    options: ["Standard Cut (~1 inch)", "Thick Braai Cut (1.5 inch)", "Bone-In Strip", "Thin Minute Steaks"],
  },
  {
    id: "boneless-chuck",
    img: pMince,
    name: "Grass-Fed Grass-Finished Boneless Chuck (~1.5lb)",
    priceNum: 18.0,
    price: "$18.00",
    was: null,
    tag: null,
    options: ["Potjie Stew Cubes", "Coarse Grind Mince", "Fine Grind Mince", "Whole Pot Roast"],
  },
  {
    id: "filet-mignon",
    img: pFilet,
    name: "Grass-Fed Grass-Finished Filet Mignon (6oz)",
    priceNum: 41.0,
    price: "$41.00",
    was: "$52.00",
    tag: "Sale",
    options: ["Tournedos Cut", "Whole Chateaubriand Tenderloin", "Butterflied Medallions", "Carpaccio Thin Slices"],
  },
];

const STEPS = [
  {
    n: "1",
    img: stepCut,
    alt: "Raw prime tomahawk steak cut with wooden handle butcher knife",
    title: "Cut to order",
    isScript: true,
    copy: "Our master butcher expertly cuts to your requirements with skilled knife craftsmanship.",
  },
  {
    n: "2",
    img: stepPack,
    alt: "Insulated cardboard delivery box with gel packs and vacuum packed meat cuts",
    title: "Packaged with care",
    isScript: false,
    copy: "The cuts are packaged into specially designed insulated boxes, with cooling packs that keep products chilled.",
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
    title: "Responsibly Raised Meat & Poultry",
    copy: "100% pasture-raised and grass-fed. No added antibiotics or hormones, ever. GMO-free.",
  },
  {
    img: featLegShank,
    alt: "Sourced locally illustration",
    title: "Sourced Locally in Bulawayo",
    copy: "We partner with local farms who commit to quality and ethical treatment of animals.",
  },
  {
    img: featRoundSteak,
    alt: "Complete flexibility illustration",
    title: "Complete Flexibility",
    copy: "FREE SHIPPING on every order over $50. Express store pickup available anytime.",
  },
];

const BOXES = [
  {
    id: "box-regular",
    img: boxRegular,
    name: "Regular Box",
    feeds: "Feeds 1–2 people",
    weight: "6–8 lbs of meat",
    pricePerMeal: "$6.25",
    totalPrice: 45.0,
    featured: false,
    options: ["Classic Mixed Box (Beef, Pork & Poultry)", "All Beef Box", "Braai Master Selection"],
  },
  {
    id: "box-large",
    img: boxLarge,
    name: "Large Box",
    feeds: "Feeds 3–5 people",
    weight: "12–16 lbs of meat",
    pricePerMeal: "$5.85",
    totalPrice: 85.0,
    featured: true,
    options: ["Family Feast Mixed Box", "Braai & Steaks Ultimate", "High Protein Lean Selection"],
  },
  {
    id: "box-premium",
    img: boxPremium,
    name: "Premium Box",
    feeds: "Feeds 6–8 people",
    weight: "22–28 lbs of meat",
    pricePerMeal: "$5.40",
    totalPrice: 140.0,
    featured: false,
    options: ["Connoisseur Dry-Aged Box", "Diaspora Family Monthly Box", "Executive Braai Hamper"],
  },
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
  onClick,
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors cursor-pointer";
  const styles = {
    solid: "bg-brand text-brand-foreground hover:bg-ink",
    outline: "border border-ink/25 text-ink hover:border-brand hover:text-brand",
    light: "bg-cream text-brand hover:bg-brand hover:text-brand-foreground",
  } as const;
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
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
  const navigate = useNavigate();
  const { addItem, formatPrice } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterName, setNewsletterName] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setNewsletterName("");
      }, 3500);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Clean Sticky Header Navigation */}
      <Header />

      {/* Hero Section — Clean, Sharp, Un-zoomed */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="relative mx-auto w-full max-w-[1600px]">
          {/* Hero Banner Image — Natural aspect ratio and crisp rendering */}
          <div className="relative w-full">
            <img
              src={heroBanner}
              alt="The Fat Bone Butchery — Fresh cuts from farm to table"
              className="w-full h-auto object-cover sm:object-contain object-center block"
              loading="eager"
            />

            {/* Desktop / Tablet Brand Card positioned on cutting board */}
            <div className="hidden md:block absolute bottom-[4%] left-[12%] lg:left-[15%] z-10 w-[80%] max-w-[360px] lg:max-w-[440px] overflow-hidden bg-brand px-6 py-5 lg:px-8 lg:py-6 text-brand-foreground shadow-2xl">
              {/* Geometric pattern */}
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

              {/* Top-right steak contour lines */}
              <svg
                className="pointer-events-none absolute right-0 top-0 h-32 w-32 text-white/[0.15]"
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
                <h1 className="font-display text-2xl lg:text-[34px] font-semibold leading-[1.12] text-white">
                  From our farm to
                  <br />
                  your fork
                </h1>
                <p className="mt-2.5 text-[11px] lg:text-xs text-white/90">
                  High grade meat with great taste for every meal.
                </p>
                <div className="mt-4 lg:mt-5">
                  <button
                    onClick={() => navigate({ to: "/products" })}
                    className="relative overflow-hidden bg-white px-6 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-ink shadow-sm transition-all hover:bg-cream hover:text-brand cursor-pointer"
                  >
                    <span className="absolute bottom-0 left-0 h-0 w-0 border-b-[8px] border-l-[8px] border-b-[#1e293b] border-l-transparent" />
                    Place Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-Friendly Callout Banner (visible only on small mobile screens below md) */}
          <div className="block md:hidden bg-brand px-6 py-6 text-brand-foreground text-center">
            <h1 className="font-display text-2xl font-bold leading-tight text-white">
              From our farm to your fork
            </h1>
            <p className="mt-2 text-xs text-white/90">
              High grade meat with great taste for every meal.
            </p>
            <div className="mt-4">
              <button
                onClick={() => navigate({ to: "/products" })}
                className="w-full bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ink shadow-sm hover:bg-cream hover:text-brand transition-colors rounded-xs cursor-pointer"
              >
                Place Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {CATEGORIES.map((c) => (
            <div
              key={c.title}
              onClick={() => {
                setSelectedProduct({
                  id: c.id,
                  name: c.title,
                  price: c.price,
                  image: c.img,
                  options: ["1kg Family Pack", "2kg Value Pack", "Custom Trim Cut"],
                });
              }}
              className="group relative flex min-h-[150px] sm:min-h-[175px] items-center justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md cursor-pointer"
            >
              <div className="flex h-full w-[40%] sm:w-[44%] items-center justify-start">
                <img
                  src={c.img}
                  alt={c.title}
                  className="max-h-[100px] sm:max-h-[125px] w-full object-contain object-left transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="w-[60%] sm:w-[56%] pl-3">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0f2942]">
                  {c.title}
                </h3>
                <div className="my-2 h-[2px] w-6 bg-slate-300" />
                <p className="text-xs font-normal leading-relaxed text-slate-500 line-clamp-2 sm:line-clamp-none">
                  {c.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Methods - Pasture-Raised Promise */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-24 border-t border-ink/5">
        <div className="mx-auto flex max-w-[1560px] flex-col items-center justify-between gap-8 sm:gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8 xl:gap-12">
          {/* Left Flank Image with Distressed Torn/Brush Borders */}
          <div className="w-full sm:w-[260px] lg:w-[240px] xl:w-[270px] shrink-0 h-[260px] sm:h-[340px] lg:h-[400px]">
            <BrushImage
              src={methodCowRear}
              alt="Pasture-raised cattle hindquarters and natural coat"
              className="h-full w-full"
              imgClassName="object-cover object-center"
            />
          </div>

          {/* Center Text Column */}
          <div className="flex max-w-[420px] shrink-0 flex-col items-start px-2 sm:px-4 lg:px-2">
            <BotanicalSprig className="h-4 w-9 text-[#122b3e] mb-1.5" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c67c52]">
              OUR METHODS
            </span>
            <h2 className="mt-2.5 font-display text-2xl sm:text-[36px] lg:text-[40px] font-bold leading-[1.08] tracking-tight text-[#0e2638]">
              Pasture-Raised
              <br />
              Promise
            </h2>
            <p className="mt-3 font-display italic text-xs sm:text-[14px] text-[#1c364c] tracking-wide">
              Animal welfare is of the utmost importance to us.
            </p>
            <p className="mt-4 text-[11.5px] sm:text-[12px] leading-[1.75] text-[#555e6d]">
              That's why we only work with farms and processors that share in our
              passion for good animal husbandry. We promise every animal that comes
              in our shop has been raised on lush pastures, given a diverse natural diet,
              and raised without the use of hormones or antibiotics.
            </p>
            <div className="mt-6 sm:mt-7">
              <Link
                to="/about"
                className="group relative inline-flex items-center justify-center border border-[#0e2638] bg-transparent px-6 sm:px-7 py-2.5 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#0e2638] transition-all duration-200 hover:bg-[#0e2638] hover:text-white cursor-pointer"
              >
                <span className="absolute bottom-0 left-0 h-0 w-0 border-b-[8px] border-l-[8px] border-b-[#0e2638] border-l-transparent transition-colors group-hover:border-b-white" />
                MEET OUR FARMERS
              </Link>
            </div>
          </div>

          {/* Right Wide Banner Image with Distressed Torn/Brush Borders */}
          <div className="w-full flex-1 min-w-0 h-[240px] sm:h-[320px] lg:h-[400px]">
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
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Shop the Cuts</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Recommended For You</h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Fresh Meat Products</p>
        </div>
        <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="group flex flex-col justify-between bg-white border border-ink/10 p-4 rounded-sm shadow-xs hover:shadow-md transition-shadow">
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
              <h3 className="mt-4 font-display text-base font-semibold leading-snug">{p.name}</h3>
              <p className="mt-2 text-sm">
                {p.was && (
                  <span className="mr-2 text-muted-foreground line-through">{p.was}</span>
                )}
                <span className="font-bold text-brand">{formatPrice(p.priceNum)}</span>
              </p>
              <div className="mt-4">
                <button
                  onClick={() =>
                    setSelectedProduct({
                      id: p.id,
                      name: p.name,
                      price: p.priceNum,
                      image: p.img,
                      tag: p.tag,
                      options: p.options,
                    })
                  }
                  className="w-full inline-flex items-center justify-center px-6 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] bg-brand text-brand-foreground hover:bg-ink transition-colors cursor-pointer"
                >
                  Select Options
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Steps - From block to box to you */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative pt-6 pb-16 sm:pb-20 lg:pb-24">
          <div className="absolute inset-x-0 bottom-0 top-[100px] sm:top-[120px] lg:top-[135px] bg-[#ede7dc]">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: `radial-gradient(#4d5d6c 0.85px, transparent 0.85px), radial-gradient(#2c3740 0.5px, #ede7dc 0.5px)`,
                backgroundSize: "36px 36px, 84px 84px",
                backgroundPosition: "0 0, 28px 42px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-10 lg:px-14">
            <div className="grid items-start gap-8 lg:grid-cols-[270px_1fr] xl:grid-cols-[300px_1fr]">
              <div className="pt-8 sm:pt-28 lg:pt-36 text-center lg:text-left">
                <h2 className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#4e5e6e]">
                  From block to
                  <br />
                  box to you
                </h2>
              </div>

              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-3 lg:gap-10 xl:gap-14">
                {STEPS.map((s) => (
                  <div key={s.n} className="flex flex-col bg-white/40 lg:bg-transparent p-4 sm:p-0 rounded-lg lg:rounded-none">
                    <div className="flex h-[130px] sm:h-[160px] lg:h-[185px] w-full items-end justify-center sm:justify-start overflow-visible">
                      <img
                        src={s.img}
                        alt={s.alt}
                        className="max-h-full max-w-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-start gap-3 sm:gap-4">
                      <span className="font-sans text-[50px] sm:text-[62px] lg:text-[78px] font-extrabold leading-[0.82] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)] select-none">
                        {s.n}
                      </span>
                      <div className="flex-1 pt-0.5">
                        {s.isScript ? (
                          <h3 className="font-script text-[24px] sm:text-[28px] lg:text-[32px] italic leading-tight text-[#4e5e6e]">
                            {s.title}
                          </h3>
                        ) : (
                          <h3 className="font-sans text-[13px] sm:text-[15px] font-bold leading-snug text-[#4e5e6e]">
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
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-2">
          <div>
            <Eyebrow>Provenance</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
              Rare-breeds Sourced
              <br />
              from Small Farms
            </h2>
            <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.14em] text-muted-foreground">
              Where meat comes from
            </p>
            <div className="mt-6 sm:mt-7">
              <Link to="/about">
                <Btn variant="outline">Learn More</Btn>
              </Link>
            </div>
          </div>
          <div className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            <p>
              <span className="float-left mr-3 font-display text-5xl sm:text-6xl leading-none text-ink">R</span>
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
        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3 items-center">
          <div className="overflow-hidden bg-slate-100 shadow-sm rounded-sm">
            <img
              src={g1}
              alt="Artisanal beef ribs hanging in a rustic butcher shop"
              width={800}
              height={600}
              loading="lazy"
              className="h-64 sm:h-72 lg:h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden bg-slate-100 shadow-sm rounded-sm sm:-mt-6 sm:-mb-6">
            <img
              src={g2}
              alt="Beef carcasses dry-aging on overhead rails in cold locker"
              width={600}
              height={800}
              loading="lazy"
              className="h-72 sm:h-80 lg:h-96 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden bg-slate-100 shadow-sm rounded-sm">
            <img
              src={g3}
              alt="Master butcher wrapping seasoned beef roast in wax butcher paper"
              width={800}
              height={600}
              loading="lazy"
              className="h-64 sm:h-72 lg:h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Features - Value Pillars */}
      <section className="border-t border-slate-200/80 bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 sm:gap-12 px-4 sm:px-6 grid-cols-1 sm:grid-cols-3 lg:gap-16">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <div className="flex h-16 sm:h-20 w-20 sm:w-24 items-center justify-center">
                <img
                  src={f.img}
                  alt={f.alt}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="mt-4 sm:mt-5 font-display text-lg sm:text-[22px] font-bold text-[#143048] tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 sm:mt-3 max-w-[300px] text-xs sm:text-[13px] leading-[1.65] text-slate-500 font-normal">
                {f.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Refer a friend */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <img
          src={butcherShop}
          alt="Butcher serving a customer at the shop counter"
          width={1200}
          height={900}
          loading="lazy"
          className="h-64 sm:h-80 w-full object-cover lg:h-full"
        />
        <div className="flex flex-col items-center justify-center bg-sand px-6 sm:px-8 py-14 sm:py-20 text-center">
          <Eyebrow>Give $20, Get $20</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Refer a Friend</h2>
          <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Give a friend $20 off their first order and we'll drop $20 into your account the moment
            they check out. No limit on how many you send.
          </p>
          <div className="mt-6 sm:mt-7">
            <Btn onClick={() => setIsReferralOpen(true)}>Get My Link</Btn>
          </div>
        </div>
      </section>

      {/* Boxes */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Our Boxes</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">Choose size of box</h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">We only offer the best</p>
        </div>
        <div className="mt-10 sm:mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
          {BOXES.map((b) => (
            <div
              key={b.name}
              className={`flex flex-col items-center p-6 sm:p-8 text-center rounded-sm border border-ink/10 ${
                b.featured ? "bg-sand shadow-sm" : "bg-cream"
              }`}
            >
              <img
                src={b.img}
                alt={`${b.name} selection of meat cuts`}
                width={700}
                height={560}
                loading="lazy"
                className="h-40 sm:h-44 w-full object-contain mix-blend-multiply"
              />
              <h3 className="mt-5 sm:mt-6 font-display text-2xl font-bold">{b.name}</h3>
              <p className="mt-2 sm:mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground font-semibold">
                {b.feeds}
              </p>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {b.weight}
              </p>
              <p className="mt-4 text-sm font-bold text-brand">
                Total {formatPrice(b.totalPrice)} ({b.pricePerMeal} / meal)
              </p>
              <div className="mt-6 w-full">
                <button
                  onClick={() => {
                    setSelectedProduct({
                      id: b.id,
                      name: b.name,
                      price: b.totalPrice,
                      image: b.img,
                      options: b.options,
                    });
                  }}
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] bg-brand text-brand-foreground hover:bg-ink transition-colors cursor-pointer"
                >
                  Build Your Box
                </button>
              </div>
              <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground">
                Every box is butchered to order and shipped chilled the same week.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recipes */}
      <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center bg-brand px-6 sm:px-10 lg:px-16 py-14 sm:py-20 text-brand-foreground">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            Recipes that'll make
            <br />
            your mouth water
          </h2>
          <p className="mt-4 sm:mt-5 max-w-md text-xs sm:text-sm leading-relaxed text-brand-foreground/85">
            Reverse-seared rib of beef, slow-braised shin, Sunday roast — written by our head
            butcher for real kitchens, with timings that actually work.
          </p>
          <div className="mt-6 sm:mt-8 self-start">
            <Link to="/blog">
              <Btn variant="light">Read All</Btn>
            </Link>
          </div>
        </div>
        <img
          src={recipes}
          alt="Master butcher slicing fresh beef tenderloin on cutting board"
          width={1400}
          height={900}
          loading="lazy"
          className="h-64 sm:h-80 w-full object-cover lg:h-full"
        />
      </section>

      {/* Social */}
      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold">Share your #FatBone experience!</h2>
              <p className="mt-1 sm:mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
                We are all about lifelong tastes, honest cuts, and deep flavor. Tag us and we might just
                feature your cook.
              </p>
            </div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] border border-ink/25 text-ink hover:border-brand hover:text-brand transition-colors"
            >
              Follow Us
            </a>
          </div>
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[g3, g1, recipes, butcherShop].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Customer cooking with The Fat Bone Butchery cuts"
                width={700}
                height={700}
                loading="lazy"
                className="aspect-square w-full object-cover rounded-sm shadow-xs"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-sand py-14 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Subscribe to our newsletter</h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Sign up to get $10 off your first order
          </p>

          {newsletterSuccess ? (
            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-300 rounded text-emerald-800 flex items-center justify-center gap-2 animate-in zoom-in-95">
              <Check className="h-5 w-5 text-emerald-600" />
              <span className="text-xs sm:text-sm font-semibold">
                Thank you! Check your inbox for your $10 voucher code.
              </span>
            </div>
          ) : (
            <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleNewsletterSubmit}>
              <input
                type="text"
                placeholder="First name"
                value={newsletterName}
                onChange={(e) => setNewsletterName(e.target.value)}
                required
                className="flex-1 border border-border bg-background px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none focus:border-brand rounded-xs"
              />
              <input
                type="email"
                placeholder="Email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 border border-border bg-background px-4 py-2.5 sm:py-3 text-xs sm:text-sm outline-none focus:border-brand rounded-xs"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 text-[11px] font-semibold uppercase tracking-[0.18em] bg-brand text-brand-foreground hover:bg-ink transition-colors cursor-pointer rounded-xs"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Shared Footer */}
      <Footer />

      {/* Product Options Modal */}
      <ProductOptionsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Referral Link Modal */}
      <ReferralModal
        isOpen={isReferralOpen}
        onClose={() => setIsReferralOpen(false)}
      />
    </div>
  );
}
