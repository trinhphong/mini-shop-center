"use client";

import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../interfaces";

export default function ProductList({ storeId }: { storeId: string }): JSX.Element {
  const { data: products } = useProducts(storeId);

  if (!products) {
    return <div>Not found Product</div>
  }

  return (
    <div>
      {products?.map((product: Product) => (
        <li key={product.id}>{ product.name }</li>
      ))}
    </div>
  );
}
