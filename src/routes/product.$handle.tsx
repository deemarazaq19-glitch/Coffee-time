import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { getProductByHandle, formatMoney } from "@/lib/products";
import { CartDrawer } from "@/components/CartDrawer";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

export const Route = createFileRoute("/product/$handle")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.handle.replace(/-/g, " ")} — Coffee Time` },
      { name: "description", content: `Buy ${params.handle.replace(/-/g, " ")} — small-batch roasted coffee from Coffee Time.` },
    ],
  }),
  component: ProductPage,
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-2xl font-semibold text-primary">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <Link to="/shop" className="mt-6 inline-block text-accent underline">Back to shop</Link>
      </div>
    </div>
  ),
  loader: ({ params }) => {
    const product = getProductByHandle(params.handle);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-2xl font-semibold text-primary">Product not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-accent underline">Back to shop</Link>
      </div>
    </div>
  ),
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
          <Link to="/shop" className="hover:text-accent">Shop</Link>
          <Link to="/menu" className="hover:text-accent">Menu</Link>
        </nav>
        <CartDrawer />
      </div>
    </header>
  );
}

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const handleAdd = () => {
    addItem(
      { id: p.id, title: p.title, price: p.price, image: p.image },
      qty,
    );
    toast.success(`${p.title} added to cart`);
    openCart();
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <section className="pt-32 pb-24 lg:pt-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> Back to shop
          </Link>
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="overflow-hidden rounded-3xl bg-cream-deep">
              <img src={p.image} alt={p.title} className="aspect-square w-full object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-primary sm:text-5xl">{p.title}</h1>
              <p className="mt-4 font-serif text-3xl text-accent">{formatMoney(p.price)}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {p.longDescription ?? p.description}
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex items-center gap-3 rounded-full border border-border px-4 py-2">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-primary" aria-label="Decrease">−</button>
                  <span className="w-6 text-center">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="text-primary" aria-label="Increase">+</button>
                </div>
                <button
                  onClick={handleAdd}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition hover:bg-primary hover:text-primary-foreground"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}