import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import cappuccinoImg from "@/assets/product-cappuccino.jpg";
import espressoImg from "@/assets/product-espresso.jpg";
import latteImg from "@/assets/product-latte.jpg";
import spotlightImg from "@/assets/spotlight-espresso.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Coffee Time" },
      {
        name: "description",
        content:
          "Browse the full Coffee Time menu — espresso, milk drinks, cold brews and whole-bean roasts, all freshly roasted in Brooklyn.",
      },
      { property: "og:title", content: "Menu — Coffee Time" },
      {
        property: "og:description",
        content:
          "Espresso, milk drinks, cold brews and whole-bean roasts, all freshly roasted in Brooklyn.",
      },
    ],
  }),
  component: MenuPage,
});

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  tag?: string;
};

type MenuSection = {
  title: string;
  blurb: string;
  items: MenuItem[];
};

const sections: MenuSection[] = [
  {
    title: "Espresso Bar",
    blurb: "Pulled to order on our La Marzocco, dialed in daily.",
    items: [
      {
        name: "Single Origin Espresso",
        description: "Bright, syrupy Ethiopian beans pulled fresh to order.",
        price: "$4.25",
        image: espressoImg,
        tag: "Best Seller",
      },
      {
        name: "Doppio",
        description: "A generous double shot of our house espresso blend.",
        price: "$4.75",
      },
      {
        name: "Macchiato",
        description: "Double shot marked with a spoon of textured milk foam.",
        price: "$4.50",
      },
      {
        name: "Cortado",
        description: "Equal parts espresso and warm steamed milk. Balanced.",
        price: "$4.75",
      },
    ],
  },
  {
    title: "Milk & Mochas",
    blurb: "Silky, textured milk over freshly pulled shots.",
    items: [
      {
        name: "House Cappuccino",
        description: "Velvety milk over a bold double shot, finished with a heart.",
        price: "$5.50",
        image: cappuccinoImg,
        tag: "Best Seller",
      },
      {
        name: "Flat White",
        description: "Ristretto double with micro-foamed whole milk.",
        price: "$5.25",
      },
      {
        name: "Vanilla Latte",
        description: "Espresso, steamed milk and our house vanilla syrup.",
        price: "$5.75",
      },
      {
        name: "Dark Chocolate Mocha",
        description: "Single-origin cocoa, espresso, steamed milk, whipped cream.",
        price: "$6.25",
      },
    ],
  },
  {
    title: "Cold Brews & Iced",
    blurb: "Slow-steeped 18 hours for a naturally sweet finish.",
    items: [
      {
        name: "Iced Vanilla Latte",
        description: "Cold-brewed espresso, oat milk and house vanilla syrup.",
        price: "$6.00",
        image: latteImg,
        tag: "Best Seller",
      },
      {
        name: "Classic Cold Brew",
        description: "Steeped overnight for a smooth, low-acid pour.",
        price: "$5.25",
      },
      {
        name: "Nitro Cold Brew",
        description: "Nitrogen-charged for a stout-like, creamy head.",
        price: "$5.75",
      },
      {
        name: "Iced Americano",
        description: "Double shot over ice and filtered water.",
        price: "$4.50",
      },
    ],
  },
  {
    title: "Whole Bean Roasts",
    blurb: "Roasted this week. Ships within 48 hours.",
    items: [
      {
        name: "The Espresso Blend",
        description: "Colombia, Ethiopia and Brazil — cocoa, molasses, orange peel.",
        price: "$22.00",
        image: spotlightImg,
        tag: "Featured",
      },
      {
        name: "Ethiopia Yirgacheffe",
        description: "Washed, floral and citric. Bright and tea-like.",
        price: "$24.00",
      },
      {
        name: "Colombia Huila",
        description: "Milk chocolate, red apple and a syrupy body.",
        price: "$21.00",
      },
      {
        name: "Decaf Brazil",
        description: "Sugar-cane process. Hazelnut, cocoa, brown sugar.",
        price: "$20.00",
      },
    ],
  },
];

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link to="/" className="font-serif text-2xl font-semibold text-primary">
          Coffee <span className="text-accent">Time</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-primary/80 md:flex">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/menu" activeProps={{ className: "text-accent" }} className="hover:text-accent">
            Menu
          </Link>
          <a href="/#about" className="hover:text-accent">Our Story</a>
          <a href="/#contact" className="hover:text-accent">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-accent">
          <ShoppingBag className="h-4 w-4" /> Cart
        </button>
      </div>
    </header>
  );
}

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <article className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 rounded-2xl bg-card p-5 shadow-[0_8px_30px_-24px_rgba(59,42,30,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-20px_rgba(181,84,28,0.35)] sm:p-6">
      <div className="flex min-w-0 items-center gap-5">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            width={160}
            height={160}
            loading="lazy"
            className="hidden h-20 w-20 shrink-0 rounded-xl object-cover sm:block"
          />
        ) : (
          <div
            aria-hidden
            className="hidden h-20 w-20 shrink-0 rounded-xl bg-cream-deep sm:grid sm:place-items-center"
          >
            <span className="font-serif text-2xl text-accent">
              {item.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate text-lg font-semibold text-primary sm:text-xl">
              {item.name}
            </h3>
            {item.tag ? (
              <span className="rounded-full border border-accent/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                {item.tag}
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
        </div>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-3 sm:flex-row sm:items-center sm:gap-5">
        <span className="font-serif text-xl text-primary sm:text-2xl">{item.price}</span>
        <button
          aria-label={`Add ${item.name} to cart`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground transition hover:bg-primary hover:text-primary-foreground sm:text-sm"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden sm:inline">Add</span>
        </button>
      </div>
    </article>
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
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                Send us a note
              </h4>
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
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-primary-foreground/60">Open daily · 7am – 6pm</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Coffee Time. All rights reserved.</p>
          <p>Roasted with care in Brooklyn, NY.</p>
        </div>
      </div>
    </footer>
  );
}

function MenuPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">Full Menu</p>
          <h1 className="text-5xl font-semibold text-primary sm:text-6xl lg:text-7xl">
            What's on the bar today
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            Espresso, milk drinks, cold brews and whole-bean roasts — all made
            with beans roasted in our Brooklyn roastery this week.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl space-y-16 px-6 lg:px-10">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
                <div>
                  <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{section.blurb}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-accent">
                  {section.items.length} items
                </span>
              </div>
              <div className="grid gap-4">
                {section.items.map((item) => (
                  <ItemRow key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
