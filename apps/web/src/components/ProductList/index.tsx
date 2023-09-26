import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../interfaces";

export default function ProductList({ storeId }: { storeId: string }): JSX.Element {
  const { isLoading, data: products } = useProducts(storeId);

  if (isLoading) {
    return <div>Loading...</div>
  }

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
