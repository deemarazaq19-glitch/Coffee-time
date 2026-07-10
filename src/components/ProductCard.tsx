import { Link } from "@tanstack/react-router";
import { ShoppingBag, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatMoney, type ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const p = product.node;
  const selectedVariant = p.variants.edges[0]?.node;
  const image = p.images.edges[0]?.node;
  const price = p.priceRange.minVariantPrice;

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selectedVariant) return;
    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions ?? [],
    });
    toast.success(`${p.title} added to cart`);
  };

  return (
    <Link
      to="/product/$handle"
      params={{ handle: p.handle }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[0_10px_40px_-20px_rgba(59,42,30,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(181,84,28,0.35)]"
    >
      <div className="overflow-hidden bg-cream-deep">
        {image ? (
          <img
            src={image.url}
            alt={image.altText ?? p.title}
            loading="lazy"
            className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="aspect-square w-full bg-cream-deep" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold text-primary">{p.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="font-serif text-2xl text-accent">
            {formatMoney(price.amount, price.currencyCode)}
          </span>
          <button
            aria-label={`Add ${p.title} to cart`}
            onClick={handleAdd}
            disabled={isLoading || !selectedVariant}
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition hover:border-accent hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShoppingBag className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </Link>
  );
}