import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Coffee Time" },
      {
        name: "description",
        content:
          "Shop small-batch, freshly roasted whole-bean coffee from Coffee Time. Nationwide shipping.",
      },
      { property: "og:title", content: "Shop — Coffee Time" },
      {
        property: "og:description",
        content:
          "Shop small-batch, freshly roasted whole-bean coffee from Coffee Time. Nationwide shipping.",
      },
    ],
  }),
  component: ShopPage,
});

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link to="/" className="font-serif text-2xl font-semibold text-primary">
          Coffee <span className="text-accent">Time</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-primary/80 md:flex">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/shop" activeProps={{ className: "text-accent" }} className="hover:text-accent">Shop</Link>
          <Link to="/menu" className="hover:text-accent">Menu</Link>
          <a href="/#about" className="hover:text-accent">Our Story</a>
          <a href="/#contact" className="hover:text-accent">Contact</a>
        </nav>
        <CartDrawer />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_0.9fr]">
          <div>
            <Link to="/" className="font-serif text-3xl font-semibold">
              Coffee <span className="text-accent">Time</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
              Small-batch roasted coffee, delivered fresh from our roastery to your kitchen.
            </p>
            <div className="mt-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Send us a note</h4>
              <ContactForm />
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Visit Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> 42 Roastery Lane, Brooklyn, NY 11201</li>
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> (555) 010-2288</li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> hello@coffeetime.co</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Follow</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground transition hover:border-accent hover:bg-accent hover:text-accent-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-primary-foreground/60">Open daily · 7am – 6pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ShopPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <section className="relative pt-32 pb-12 lg:pt-40">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">Shop</p>
          <h1 className="text-5xl font-semibold text-primary sm:text-6xl lg:text-7xl">
            Freshly roasted, shipped fast
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            Every bag is roasted this week in our Brooklyn roastery and shipped within 48 hours.
          </p>
        </div>
      </section>
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}