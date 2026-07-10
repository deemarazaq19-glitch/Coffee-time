import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatMoney, type Product } from "@/lib/products";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.title} added to cart`);
    openCart();
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[0_10px_40px_-20px_rgba(59,42,30,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(181,84,28,0.35)]">
      <Link
        to="/product/$handle"
        params={{ handle: product.handle }}
        className="block overflow-hidden bg-cream-deep"
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <Link
          to="/product/$handle"
          params={{ handle: product.handle }}
          className="block"
        >
          <h3 className="text-2xl font-semibold text-primary hover:text-accent">
            {product.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="font-serif text-2xl text-accent">{formatMoney(product.price)}</span>
          <button
            type="button"
            aria-label={`Add ${product.title} to cart`}
            onClick={handleAdd}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:bg-accent"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}