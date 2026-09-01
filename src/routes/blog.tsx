import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import recipes from "@/assets/recipes.jpg";
import butcherShop from "@/assets/butcher-shop.jpg";
import g1 from "@/assets/g1.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Butcher Recipes — The Fat Bone Butchery" },
      {
        name: "description",
        content:
          "Cooking guides, braai techniques, and recipes from the master butchers at The Fat Bone Butchery, Bulawayo.",
      },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  {
    img: recipes,
    title: "Mastering the Authentic Bulawayo Boerewors Braai",
    date: "May 2026",
    excerpt:
      "Why medium-hot coals and zero piercing are the golden rules for juicy, flavor-bursting traditional boerewors.",
  },
  {
    img: g1,
    title: "The Art of Slow-Braised Oxtail in a Potjie",
    date: "April 2026",
    excerpt:
      "Layering root vegetables, rich red wine reduction, and thick marrow cuts for melt-in-the-mouth winter stews.",
  },
  {
    img: butcherShop,
    title: "Understanding Beef Cuts: From T-Bone to Chuck",
    date: "March 2026",
    excerpt:
      "A butcher's breakdown of which cuts belong over open high heat and which reward patient slow cooking.",
  },
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

function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="bg-cream py-16 border-b border-border text-center">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow>BUTCHER'S KITCHEN & JOURNAL</Eyebrow>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
            Recipes & Cooking Tips
          </h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            Practical advice from our blockmen on how to get the deepest flavor out of every cut.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="group flex flex-col justify-between">
              <div>
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  {post.date}
                </span>
                <h2 className="mt-2 font-display text-xl font-bold leading-snug group-hover:text-brand transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-6">
                <button className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink hover:text-brand transition-colors">
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
