import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatMoney, type Product } from "@/lib/products";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.title} added to cart`);
  };

  return (
    <Link
      to="/product/$handle"
      params={{ handle: product.handle }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[0_10px_40px_-20px_rgba(59,42,30,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(181,84,28,0.35)]"
    >
      <div className="overflow-hidden bg-cream-deep">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold text-primary">{product.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="font-serif text-2xl text-accent">{formatMoney(product.price)}</span>
          <button
            aria-label={`Add ${product.title} to cart`}
            onClick={handleAdd}
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}