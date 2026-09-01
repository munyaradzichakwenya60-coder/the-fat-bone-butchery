import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Location — The Fat Bone Butchery | Bulawayo" },
      {
        name: "description",
        content:
          "Visit The Fat Bone Butchery at 129 Fort Street (btwn 13th & 14th Ave), Bulawayo. Call / WhatsApp +263 712 851 525.",
      },
    ],
  }),
  component: ContactPage,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <span className="h-px w-6 bg-brand/40" />
      <span className="eyebrow">{children}</span>
      <span className="h-px w-6 bg-brand/40" />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="bg-cream py-16 border-b border-border text-center">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow>GET IN TOUCH · VISIT THE SHOP</Eyebrow>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
            Contact & Location
          </h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            We are opening soon in the heart of Bulawayo. Visit our counter on Fort Street or place your order via phone or WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                The Fat Bone Butchery
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                High grade meat with great taste for every meal. Born from the bone, cut with care.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-xs">Our Address</h3>
                  <p className="mt-1 text-muted-foreground">
                    129 Fort Street (between 13th & 14th Avenue)
                    <br />
                    Bulawayo, Zimbabwe
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-xs">Local Calls & Orders</h3>
                  <p className="mt-1 font-semibold text-brand">
                    <a href="tel:+263712851525" className="hover:underline">
                      +263 712 851 525
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-xs">WhatsApp Ordering</h3>
                  <p className="mt-1 text-muted-foreground">
                    Local:{" "}
                    <a
                      href="https://wa.me/263712851525?text=Hello%20The%20Fat%20Bone%20Butchery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand hover:underline"
                    >
                      +263 712 851 525
                    </a>
                  </p>
                  <p className="mt-0.5 text-muted-foreground">
                    UK & Diaspora:{" "}
                    <a
                      href="https://wa.me/447762068799?text=Hello%20The%20Fat%20Bone%20Butchery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand hover:underline"
                    >
                      +44 7762 068799
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-xs">Operating Hours</h3>
                  <p className="mt-1 text-muted-foreground">
                    Monday – Friday: 7:30 AM – 6:00 PM
                    <br />
                    Saturday: 7:30 AM – 6:30 PM
                    <br />
                    Sunday & Holidays: 8:00 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-sand p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold">Send an Inquiry</h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Have a question about a custom cut, bulk catering, or diaspora delivery? Leave us a message.
            </p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+263 7... or +44 7..."
                  className="w-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-brand"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need..."
                  className="w-full border border-border bg-background p-3 text-sm outline-none focus:border-brand"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-foreground hover:bg-ink transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
