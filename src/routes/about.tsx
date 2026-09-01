import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BrushImage } from "@/components/BrushImage";

import methodCowRear from "@/assets/method-cow-rear.jpg";
import methodCowsBanner from "@/assets/method-cows-banner.jpg";
import butcherShop from "@/assets/butcher-shop.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Fat Bone Butchery | Bulawayo" },
      {
        name: "description",
        content:
          "Learn about The Fat Bone Butchery at 129 Fort Street, Bulawayo. Born from the bone, cut with care.",
      },
    ],
  }),
  component: AboutPage,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-6 bg-brand/40" />
      <span className="eyebrow">{children}</span>
      <span className="h-px w-6 bg-brand/40" />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Banner */}
      <section className="bg-cream py-16 lg:py-24 border-b border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Eyebrow>OUR STORY</Eyebrow>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Born From The Bone,
            <br />
            Cut With Care
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Located at 129 Fort Street (between 13th & 14th Avenue) in Bulawayo, The Fat Bone Butchery was founded on an uncompromising commitment to honest cuts, deep flavor, and high-grade quality meats.
          </p>
        </div>
      </section>

      {/* Methods Section with BrushImage */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="mx-auto flex max-w-[1560px] flex-col items-center justify-between gap-10 px-6 lg:flex-row lg:items-center lg:gap-8">
          <div className="w-full sm:w-[260px] lg:w-[300px] shrink-0 h-[320px] lg:h-[420px]">
            <BrushImage
              src={methodCowRear}
              alt="Pasture-raised cattle"
              className="h-full w-full"
              imgClassName="object-cover object-center"
            />
          </div>

          <div className="flex max-w-[480px] shrink-0 flex-col items-start px-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c67c52]">
              OUR PHILOSOPHY
            </span>
            <h2 className="mt-2.5 font-display text-3xl sm:text-4xl font-bold leading-tight text-[#0e2638]">
              Pasture-Raised
              <br />
              Promise
            </h2>
            <p className="mt-3 font-display italic text-sm text-[#1c364c]">
              Animal welfare and traditional butchery craftsmanship.
            </p>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#555e6d]">
              We partner directly with local Matabeleland farms committed to natural grazing and ethical husbandry. Every carcass is chilled in strict cold-chain conditions, aged properly, and cut to order with master knife work.
            </p>
          </div>

          <div className="w-full flex-1 min-w-0 h-[320px] lg:h-[420px]">
            <BrushImage
              src={methodCowsBanner}
              alt="Cattle in open pasture"
              className="h-full w-full"
              imgClassName="object-cover object-[center_35%]"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Eyebrow>BEHIND THE BLOCK</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold">Artisan Butchery in Bulawayo</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 items-center">
            <img src={g1} alt="Beef ribs hanging in butchery" className="h-72 w-full object-cover shadow-sm" />
            <img src={g2} alt="Cold locker dry aging" className="h-84 w-full object-cover shadow-sm sm:-mt-4 sm:-mb-4" />
            <img src={g3} alt="Master butcher wrapping cuts" className="h-72 w-full object-cover shadow-sm" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
