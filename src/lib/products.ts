import cappuccinoImg from "@/assets/product-cappuccino.jpg";
import espressoImg from "@/assets/product-espresso.jpg";
import latteImg from "@/assets/product-latte.jpg";
import spotlightImg from "@/assets/spotlight-espresso.jpg";

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  longDescription?: string;
  price: number;
  image: string;
  tag?: string;
}

export const CURRENCY = "USD";

export const products: Product[] = [
  {
    id: "espresso-blend",
    handle: "the-espresso-blend",
    title: "The Espresso Blend",
    description: "Cocoa, molasses and candied orange. Balanced for milk drinks and sipping straight.",
    longDescription:
      "Our flagship blend layers washed Colombian sweetness with a natural Ethiopian lift and a slow-developed Brazilian base. Medium-dark roast, 250g whole bean, roasted to order and shipped within 48 hours.",
    price: 22,
    image: spotlightImg,
    tag: "Best Seller",
  },
  {
    id: "ethiopia-yirgacheffe",
    handle: "ethiopia-yirgacheffe",
    title: "Ethiopia Yirgacheffe",
    description: "Washed, floral and citric. Bright and tea-like with a clean finish.",
    longDescription:
      "Grown at 1,900m and washed at a single station outside Yirgacheffe. Expect jasmine, bergamot and lemon zest. A brilliant single origin for pour-over.",
    price: 24,
    image: espressoImg,
  },
  {
    id: "colombia-huila",
    handle: "colombia-huila",
    title: "Colombia Huila",
    description: "Milk chocolate, red apple and a syrupy body. Everyday deliciousness.",
    longDescription:
      "Sourced from a co-op of smallholder farms in the Huila department. Fully washed, sun-dried and roasted medium for a rounded, chocolatey cup.",
    price: 21,
    image: cappuccinoImg,
  },
  {
    id: "decaf-brazil",
    handle: "decaf-brazil",
    title: "Decaf Brazil",
    description: "Sugar-cane decaf process. Hazelnut, cocoa and brown sugar.",
    longDescription:
      "Naturally processed and decaffeinated with sugar-cane ethyl acetate — no chemical residue, all the sweetness. Delicious late-night espresso.",
    price: 20,
    image: latteImg,
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function formatMoney(amount: number, currency: string = CURRENCY): string {
  try {
    return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}