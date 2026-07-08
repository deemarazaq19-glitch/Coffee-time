import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, Leaf, Flame, Hand, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import cappuccinoImg from "@/assets/product-cappuccino.jpg";
import espressoImg from "@/assets/product-espresso.jpg";
import latteImg from "@/assets/product-latte.jpg";
import bannerImg from "@/assets/banner-delivery.jpg";
import spotlightImg from "@/assets/spotlight-espresso.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const products = [
  {
    name: "House Cappuccino",
    description: "Velvety milk over a bold double shot, finished with a heart.",
    price: "$5.50",
    image: cappuccinoImg,
  },
  {
    name: "Single Origin Espresso",
    description: "Bright, syrupy Ethiopian beans pulled fresh to order.",
    price: "$4.25",
    image: espressoImg,
  },
  {
    name: "Iced Vanilla Latte",
    description: "Cold-brewed espresso, oat milk and house vanilla syrup.",
    price: "$6.00",
    image: latteImg,
  },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "Direct-trade beans from farms we know by name.",
  },
  {
    icon: Flame,
    title: "Freshly Roasted",
    description: "Small-batch roasted weekly in our neighborhood roastery.",
  },
  {
    icon: Hand,
    title: "Expertly Crafted",
    description: "Cupped and dialed by baristas obsessed with the details.",
  },
];

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="font-serif text-2xl font-semibold text-primary">
          Coffee <span className="text-accent">Time</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-primary/80 md:flex">
          <a href="#shop" className="hover:text-accent">Shop</a>
          <a href="#about" className="hover:text-accent">Our Story</a>
          <a href="#values" className="hover:text-accent">Why Us</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-accent">
          <ShoppingBag className="h-4 w-4" /> Cart
        </button>
      </div>
    </header>
  );
}

function BestSellers() {
  return (
    <section id="shop" className="relative pt-32 pb-24 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">Handpicked for you</p>
          <h1 className="text-5xl font-semibold text-primary sm:text-6xl lg:text-7xl">
            Best Sellers
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            The cups our regulars keep coming back for — brewed the way we love them.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[0_10px_40px_-20px_rgba(59,42,30,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(181,84,28,0.35)]"
            >
              <div className="overflow-hidden bg-cream-deep">
                <img
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold text-primary">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-serif text-2xl text-accent">{p.price}</span>
                  <button
                    aria-label={`Add ${p.name} to cart`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={bannerImg}
        alt="Coffee beans pouring onto a rustic wooden surface"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/30" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-6 py-24 lg:px-10">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Nationwide Shipping</p>
        <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          Coffee Delivered to Your Door
        </h2>
        <p className="mt-5 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
          Subscribe once and wake up to freshly roasted beans on your doorstep — as often as you like.
        </p>
        <a
          href="#shop"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition hover:bg-cream hover:text-primary"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-cream-deep py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">Our Story</p>
        <h2 className="text-4xl font-semibold text-primary sm:text-5xl">
          Rooted in the ritual of a better cup
        </h2>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Coffee Time began in a tiny corner roastery with a single drum roaster and a
            stubborn belief that great coffee starts long before the beans reach the grinder.
            We travel to origin, taste hundreds of lots, and build lasting relationships with
            the growers whose care makes every cup possible.
          </p>
          <p>
            Back home, we roast in small batches, dial in each blend on the espresso bar, and
            ship within days of roasting. No shortcuts, no stale shelves — just honest coffee,
            crafted the way we would want to drink it ourselves.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="values" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">Why Choose Us</p>
          <h2 className="text-4xl font-semibold text-primary sm:text-5xl">
            Small details, better mornings
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-6 grid h-16 w-16 place-items-center rounded-full border border-accent/40 text-accent">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spotlight() {
  return (
    <section className="bg-cream-deep py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-cream shadow-[0_20px_50px_-20px_rgba(59,42,30,0.35)]">
          <img
            src={spotlightImg}
            alt="Espresso Blend coffee bag with beans"
            width={1200}
            height={1200}
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">Featured Roast</p>
          <h2 className="text-4xl font-semibold text-primary sm:text-5xl">
            The Espresso Blend
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Our flagship blend layers washed Colombian sweetness with a natural Ethiopian lift and
            a slow-developed Brazilian base. Expect notes of dark chocolate, brown sugar, and
            candied orange — balanced enough for milk drinks, sweet enough to sip straight.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-primary">
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Medium-dark roast · 250g / 1kg</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Roasted to order, shipped within 48 hours</li>
            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Tasting notes: cocoa, molasses, orange peel</li>
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <span className="font-serif text-3xl text-primary">$22.00</span>
            <button className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition hover:bg-primary hover:text-primary-foreground">
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#" className="font-serif text-3xl font-semibold">
              Coffee <span className="text-accent">Time</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
              Small-batch roasted coffee, delivered fresh from our roastery to your kitchen.
            </p>
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
            <p className="mt-6 text-xs text-primary-foreground/60">
              Open daily · 7am – 6pm
            </p>
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

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <BestSellers />
      <DeliveryBanner />
      <About />
      <WhyChooseUs />
      <Spotlight />
      <Footer />
    </main>
  );
}
